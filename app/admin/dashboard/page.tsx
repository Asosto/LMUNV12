"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Download, CheckCircle, XCircle, Clock, LogOut, DollarSign, FileDown, Archive } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import JSZip from 'jszip';

type PaymentSubmission = {
  id: string
  created_at: string
  file_path: string
  status: 'pending' | 'approved' | 'rejected'
  amount: number
  delegate_name: string
  email: string
  school: string
  committee: string
  payment_method: string
  notes: string
}

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<PaymentSubmission[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [loading, setLoading] = useState(true)
  const [actionLoading, setActionLoading] = useState<Record<string, boolean>>({})
  const [isDownloadingProofs, setIsDownloadingProofs] = useState(false);
  const router = useRouter()
  const { toast } = useToast()

  console.log('[Render] Component rendering. Submissions count:', submissions.length);

  useEffect(() => {
    console.log('[State Change] The submissions state has been updated. New count:', submissions.length);
    if (submissions.length > 0) {
      console.log('[State Change] First submission in state:', submissions[0]);
    }
  }, [submissions]);

  useEffect(() => {
    checkUser()
    fetchSubmissions()

    const channel = supabase
      .channel('custom-payment_submissions-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'payment_submissions' },
        (payload) => {
          console.log('[Real-Time] Change detected in payment_submissions:', payload);
          fetchSubmissions();
        }
      )
      .subscribe((status, err) => {
        if (status === 'SUBSCRIBED') {
          console.log('[Real-Time] Successfully subscribed to payment_submissions changes!');
        } else if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') {
          console.error('[Real-Time] Subscription error:', err);
          toast({ title: 'Real-time Error', description: `Subscription failed: ${status}`, variant: 'destructive' });
        }
      });

    return () => {
      console.log('[Real-Time] Removing channel subscription.');
      supabase.removeChannel(channel)
    }
  }, [])

  const checkUser = async () => {
    try {
      const { data: { session }, error } = await supabase.auth.getSession()
      if (error) throw error
      
      if (!session) {
        // If no session, redirect to login
        window.location.href = '/admin/login'
        return
      }
      
      setLoading(false)
    } catch (error) {
      console.error('Error checking auth status:', error)
      window.location.href = '/admin/login'
    }
  }

  const fetchSubmissions = async () => {
    console.log('[Fetch] Starting fetchSubmissions...');
    setLoading(true);

    let query = supabase
      .from('payment_submissions')
      .select('*')
      .order('created_at', { ascending: false })

    if (statusFilter !== 'all') {
      query = query.eq('status', statusFilter)
    }

    if (searchTerm) {
      query = query.or(`delegate_name.ilike.%${searchTerm}%,committee.ilike.%${searchTerm}%`)
    }

    const { data, error, count, status } = await query

    console.log('[Fetch] Supabase response:', {
      status,
      count,
      data,
      error,
    });

    if (error) {
      console.error('[Fetch] Error fetching submissions:', error);
      toast({
        title: "Error",
        description: `Failed to fetch submissions: ${error.message}`,
        variant: "destructive",
      })
      setSubmissions([]);
    } else {
      console.log(`[Fetch] Successfully fetched ${data.length} submissions from Supabase.`);
      if (data.length > 0) {
        console.log('[Fetch] First row from Supabase:', data[0]);
      }
      setSubmissions(data as PaymentSubmission[]);
    }
    
    setLoading(false);
  }

  const handleStatusChange = async (submissionId: string, newStatus: 'pending' | 'approved' | 'rejected') => {
    setActionLoading(prev => ({ ...prev, [submissionId]: true }))
    console.log(`[Action] Attempting to update submission ${submissionId} to ${newStatus}`);
    
    const { data, error } = await supabase
      .from('payment_submissions')
      .update({ status: newStatus })
      .eq('id', submissionId)
      .select()

    console.log('[Action] Supabase update response:', { data, error });

    if (error) {
      console.error(`[Action] Failed to ${newStatus} submission ${submissionId}:`, error);
      toast({
        title: "Error",
        description: `Failed to ${newStatus} submission. ${error.message}`,
        variant: "destructive",
      });
    } else {
      console.log(`[Action] Successfully ${newStatus} submission ${submissionId}. Data:`, data);
      toast({
        title: "Success",
        description: `Submission ${newStatus} successfully.`,
      });
      fetchSubmissions();
    }
    setActionLoading(prev => ({ ...prev, [submissionId]: false }))
  }

  const handleDownload = async (filePath: string) => {
    const { data, error } = await supabase.storage
      .from('payment-proofs')
      .download(filePath)

    if (error) {
      toast({
        title: "Error",
        description: "Failed to download file",
        variant: "destructive",
      })
      return
    }

    // Create a download link
    const url = window.URL.createObjectURL(data)
    const link = document.createElement('a')
    link.href = url
    link.download = filePath.split('/').pop() || 'payment-proof'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

  const convertToCSV = (data: PaymentSubmission[]) => {
    const headers = [
      'ID', 'Submitted At', 'Delegate Name', 'Email', 'School', 'Committee', 
      'Amount', 'Payment Method', 'Status', 'Notes', 'File Path'
    ];
    
    const rows = data.map(sub => [
      sub.id,
      sub.created_at,
      `"${sub.delegate_name.replace(/"/g, '""')}"`,
      sub.email,
      `"${sub.school.replace(/"/g, '""')}"`,
      `"${sub.committee.replace(/"/g, '""')}"`,
      sub.amount,
      sub.payment_method,
      sub.status,
      `"${(sub.notes || '').replace(/"/g, '""')}"`,
      sub.file_path
    ].join(','));

    return [headers.join(','), ...rows].join('\n');
  }

  const handleDownloadAll = async () => {
    console.log('[Download All] Starting download...');
    toast({ title: 'Preparing Download', description: 'Fetching all submissions to generate CSV...' });

    const { data, error } = await supabase
      .from('payment_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error || !data) {
      console.error('[Download All] Error fetching submissions for CSV:', error);
      toast({ title: 'Error', description: 'Could not fetch submissions for download.', variant: 'destructive' });
      return;
    }

    console.log(`[Download All] Fetched ${data.length} submissions.`);
    const csvData = convertToCSV(data as PaymentSubmission[]);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `payment_submissions_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    toast({ title: 'Download Started', description: 'Your CSV file has been downloaded.' });
  }

  const handleDownloadAllProofs = async () => {
    setIsDownloadingProofs(true);
    toast({ title: 'Starting Proofs Download', description: 'Fetching all submission data...' });

    try {
      const { data: submissions, error } = await supabase
        .from('payment_submissions')
        .select('file_path,delegate_name,id');

      if (error || !submissions) {
        throw new Error(`Failed to fetch submissions: ${error?.message}`);
      }

      toast({ title: 'Downloading Files', description: `Found ${submissions.length} proofs. Starting download...` });
      
      const zip = new JSZip();
      let downloadedCount = 0;

      for (const submission of submissions) {
        if (submission.file_path) {
          const { data: fileBlob, error: downloadError } = await supabase.storage
            .from('payment-proofs')
            .download(submission.file_path);

          if (downloadError) {
            console.warn(`[Download Proofs] Skipping file due to download error: ${submission.file_path}`, downloadError);
            continue;
          }

          if (fileBlob) {
            const fileName = `${submission.delegate_name}_${submission.id}_${submission.file_path.split('/').pop()}`;
            zip.file(fileName, fileBlob);
            downloadedCount++;
          }
        }
      }

      if (downloadedCount === 0) {
        toast({ title: 'No Proofs Found', description: 'There were no valid proof files to download.', variant: 'default' });
        return;
      }
      
      toast({ title: 'Zipping Files', description: `Downloaded ${downloadedCount} files. Now creating the zip archive...` });

      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(zipBlob);
      link.download = `all_payment_proofs_${new Date().toISOString().split('T')[0]}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);

      toast({ title: 'Download Complete', description: `The zip file with ${downloadedCount} proofs has been downloaded.` });

    } catch (err) {
      const error = err as Error;
      console.error('[Download Proofs] Error:', error);
      toast({ title: 'Download Failed', description: error.message, variant: 'destructive' });
    } finally {
      setIsDownloadingProofs(false);
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      toast({
        title: "Error",
        description: "Failed to log out",
        variant: "destructive",
      })
      return
    }
    router.push('/admin/login')
  }

  const stats = {
    total: submissions.length,
    pending: submissions.filter(s => s.status === 'pending').length,
    approved: submissions.filter(s => s.status === 'approved').length,
    totalAmountEarned: submissions
      .filter(s => s.status === 'approved')
      .reduce((sum, s) => sum + (s.amount || 0), 0)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
            <div className="flex items-center space-x-2">
              <Button 
                onClick={handleDownloadAll} 
                variant="outline" 
                className="bg-white/10 hover:bg-white/20 text-white hover:text-white"
              >
                <FileDown className="mr-2 h-4 w-4" />
                Download All (CSV)
              </Button>
              <Button 
                onClick={handleDownloadAllProofs} 
                variant="outline" 
                className="bg-white/10 hover:bg-white/20 text-white hover:text-white"
                disabled={isDownloadingProofs}
              >
                {isDownloadingProofs ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                ) : (
                  <Archive className="mr-2 h-4 w-4" />
                )}
                {isDownloadingProofs ? 'Downloading...' : 'Download All Proofs'}
              </Button>
              <Button onClick={handleLogout} variant="destructive">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-10">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="bg-white/5 border-white/10 text-white font-bold">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Submissions</CardTitle>
              <Download className=" text-white h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10 text-white font-bold">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
              <Clock className=" text-white h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.pending}</div>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10 text-white font-bold">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Approved Payments</CardTitle>
              <CheckCircle className=" text-white h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.approved}</div>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10 text-white font-bold">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Amount Earned</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold"> ₡{stats.totalAmountEarned.toFixed(2)}</div>
            </CardContent>
          </Card>
        </div>

        <div className=" flex items-center justify-between mb-4 ">
          <div className="flex w-full max-w-sm items-center space-x-2 text-white">
            <Input 
            className="bg-white/5 border-white/10 text-white placeholder:text-white"
              placeholder="Search submissions..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyUp={(e) => e.key === 'Enter' && fetchSubmissions()}
            />
          </div>
          <Select value={statusFilter} onValueChange={(value) => {
            setStatusFilter(value)
            fetchSubmissions()
          }}>
            <SelectTrigger className="w-[180px] text-white bg-white/10 border-white/20">
              <SelectValue placeholder="All Statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Card className="bg-white/5 border-white/10 text-white font-bold">
          <CardContent className="pt-6">
            <Table>
              <TableHeader>
                <TableRow className="border-b-white/20">
                  <TableHead className="text-white">Delegate</TableHead>
                  <TableHead className="text-white">School</TableHead>
                  <TableHead className="text-white">Amount</TableHead>
                  <TableHead className="text-white">Status</TableHead>
                  <TableHead className="text-white">Proof</TableHead>
                  <TableHead className="text-white">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center text-gray-400 py-10">
                      Loading submissions...
                    </TableCell>
                  </TableRow>
                ) : submissions.length > 0 ? (
                  submissions.map((submission) => (
                    <TableRow key={submission.id} className="border-b-white/10 hover:bg-white/5">
                      <TableCell>{submission.delegate_name}</TableCell>
                      <TableCell>{submission.school}</TableCell>
                      <TableCell> ₡{submission.amount ? submission.amount.toFixed(2) : 'N/A'}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          submission.status === 'pending' ? 'bg-yellow-400 text-yellow-900' :
                          submission.status === 'approved' ? 'bg-green-400 text-green-900' :
                          'bg-red-400 text-red-900'
                        }`}>
                          {submission.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDownload(submission.file_path)}
                          className=" bg-blue-600 text-white border-white/30 hover:bg-blue-800 hover:text-white"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </TableCell>
                      <TableCell>
                        {submission.status === 'pending' && (
                          <div className="flex space-x-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-green-400 border-green-400/50 hover:bg-green-400/10 hover:text-green-300 disabled:opacity-50"
                              onClick={() => handleStatusChange(submission.id, 'approved')}
                              disabled={actionLoading[submission.id]}
                            >
                              <CheckCircle className="w-4 h-4 mr-1" /> {actionLoading[submission.id] ? 'Processing...' : 'Approve'}
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-400 border-red-400/50 hover:bg-red-400/10 hover:text-red-300 disabled:opacity-50"
                              onClick={() => handleStatusChange(submission.id, 'rejected')}
                              disabled={actionLoading[submission.id]}
                            >
                              <XCircle className="w-4 h-4 mr-1" /> {actionLoading[submission.id] ? 'Processing...' : 'Reject'}
                            </Button>
                          </div>
                        )}
                        {(submission.status === 'approved' || submission.status === 'rejected') && (
                          <div className="flex items-center space-x-2">
                            <span className={`flex items-center ${
                              submission.status === 'approved' ? 'text-green-400' : 'text-red-400'
                            }`}>
                              {submission.status === 'approved' ? <CheckCircle className="w-4 h-4 mr-1" /> : <XCircle className="w-4 h-4 mr-1" />}
                              {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-yellow-400 border-yellow-400/50 hover:bg-yellow-400/10 hover:text-yellow-300 disabled:opacity-50"
                              onClick={() => handleStatusChange(submission.id, 'pending')}
                              disabled={actionLoading[submission.id]}
                              title="Revert to Pending"
                            >
                              <Clock className="w-4 h-4 mr-1" /> {actionLoading[submission.id] ? 'Reverting...' : 'Revert'} 
                            </Button>
                          </div>
                        )}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center text-gray-400 py-10">
                      No submissions found matching your criteria.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 