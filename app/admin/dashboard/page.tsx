"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import { motion, AnimatePresence } from "framer-motion"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import {
  CheckCircle,
  XCircle,
  Clock,
  LogOut,
  Download,
  FileDown,
  Archive,
  Search,
  DollarSign,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  FileText,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import JSZip from "jszip"
import { format, parseISO, subDays } from "date-fns"

type PaymentSubmission = {
  id: string
  created_at: string
  file_path: string
  status: "pending" | "approved" | "rejected"
  amount: number
  delegate_name: string
  email: string
  school: string
  committee: string
  payment_method: string
  notes: string
}

const statusConfig = {
  pending: {
    color: "text-yellow-400",
    bg: "bg-yellow-400/10 border-yellow-400/30",
    Icon: Clock,
    label: "Pending",
  },
  approved: {
    color: "text-emerald-400",
    bg: "bg-emerald-400/10 border-emerald-400/30",
    Icon: CheckCircle,
    label: "Approved",
  },
  rejected: {
    color: "text-red-400",
    bg: "bg-red-400/10 border-red-400/30",
    Icon: XCircle,
    label: "Rejected",
  },
}

export default function AdminDashboard() {
  const [allSubmissions, setAllSubmissions] = useState<PaymentSubmission[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [loading, setLoading] = useState(true)
  const [actionLoading, setActionLoading] = useState<Record<string, boolean>>({})
  const [isDownloadingProofs, setIsDownloadingProofs] = useState(false)
  const [expandedRow, setExpandedRow] = useState<string | null>(null)
  const [isRealtime, setIsRealtime] = useState(false)
  const [adminEmail, setAdminEmail] = useState("Admin")
  const fetchRef = useRef<() => void>(() => { })
  const router = useRouter()
  const { toast } = useToast()

  // ── Client-side filtered submissions ──────────────────────────────────────
  const submissions = useMemo(() => {
    let filtered = allSubmissions
    if (statusFilter !== "all") {
      filtered = filtered.filter((s) => s.status === statusFilter)
    }
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (s) =>
          s.delegate_name?.toLowerCase().includes(term) ||
          s.email?.toLowerCase().includes(term) ||
          s.school?.toLowerCase().includes(term) ||
          s.committee?.toLowerCase().includes(term) ||
          s.payment_method?.toLowerCase().includes(term)
      )
    }
    return filtered
  }, [allSubmissions, statusFilter, searchTerm])

  // ── Stats ─────────────────────────────────────────────────────────────────
  const stats = useMemo(
    () => ({
      total: allSubmissions.length,
      pending: allSubmissions.filter((s) => s.status === "pending").length,
      approved: allSubmissions.filter((s) => s.status === "approved").length,
      rejected: allSubmissions.filter((s) => s.status === "rejected").length,
      totalAmount: allSubmissions
        .filter((s) => s.status === "approved")
        .reduce((sum, s) => sum + (s.amount || 0), 0),
    }),
    [allSubmissions]
  )

  // ── Chart data (last 7 days) ───────────────────────────────────────────────
  const chartData = useMemo(() => {
    const days = Array.from({ length: 7 }, (_, i) => {
      const d = subDays(new Date(), 6 - i)
      return {
        date: format(d, "MMM d"),
        dateStr: format(d, "yyyy-MM-dd"),
        total: 0,
        approved: 0,
        pending: 0,
        rejected: 0,
      }
    })
    allSubmissions.forEach((sub) => {
      const subDate = format(parseISO(sub.created_at), "yyyy-MM-dd")
      const day = days.find((d) => d.dateStr === subDate)
      if (day) {
        day.total++
        day[sub.status]++
      }
    })
    return days
  }, [allSubmissions])

  // ── Auth + realtime subscription ──────────────────────────────────────────
  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      if (!session) {
        window.location.href = "/admin/login"
        return
      }
      setAdminEmail(session.user?.email || "Admin")
    }
    checkUser()

    const channel = supabase
      .channel("payment_submissions_realtime")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "payment_submissions" },
        () => {
          fetchRef.current()
        }
      )
      .subscribe((status) => {
        setIsRealtime(status === "SUBSCRIBED")
        if (status === "CHANNEL_ERROR" || status === "TIMED_OUT") {
          toast({
            title: "Real-time Error",
            description: `Connection failed: ${status}`,
            variant: "destructive",
          })
        }
      })

    return () => {
      supabase.removeChannel(channel)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ── Fetch all submissions ─────────────────────────────────────────────────
  const fetchSubmissions = useCallback(async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from("payment_submissions")
      .select("*")
      .order("created_at", { ascending: false })
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" })
    } else {
      setAllSubmissions(data as PaymentSubmission[])
    }
    setLoading(false)
  }, [toast])

  useEffect(() => {
    fetchRef.current = fetchSubmissions
    fetchSubmissions()
  }, [fetchSubmissions])

  // ── Actions ───────────────────────────────────────────────────────────────
  const handleStatusChange = async (
    id: string,
    status: "pending" | "approved" | "rejected"
  ) => {
    setActionLoading((prev) => ({ ...prev, [id]: true }))
    const { error } = await supabase
      .from("payment_submissions")
      .update({ status })
      .eq("id", id)
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" })
    } else {
      toast({ title: "Updated", description: `Submission marked as ${status}.` })
      fetchSubmissions()
    }
    setActionLoading((prev) => ({ ...prev, [id]: false }))
  }

  const handleDownload = async (filePath: string, name: string) => {
    const { data, error } = await supabase.storage
      .from("payment-proofs")
      .download(filePath)
    if (error) {
      toast({ title: "Error", description: "Failed to download file", variant: "destructive" })
      return
    }
    const url = window.URL.createObjectURL(data)
    const a = document.createElement("a")
    a.href = url
    a.download = `${name}-proof.${filePath.split(".").pop()}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  const handleDownloadCSV = async () => {
    const headers = [
      "ID", "Date", "Full Name", "Email", "School", "Committee",
      "Payment Method", "Amount (CRC)", "Status", "Notes", "File Path",
    ]
    const rows = allSubmissions.map((s) =>
      [
        s.id,
        format(parseISO(s.created_at), "yyyy-MM-dd HH:mm"),
        `"${s.delegate_name}"`,
        s.email,
        `"${s.school}"`,
        `"${s.committee}"`,
        s.payment_method,
        s.amount,
        s.status,
        `"${(s.notes || "").replace(/"/g, '""')}"`,
        s.file_path,
      ].join(",")
    )
    const csv = [headers.join(","), ...rows].join("\n")
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `lmun_payments_${format(new Date(), "yyyy-MM-dd")}.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    toast({ title: "Exported!", description: "CSV downloaded successfully." })
  }

  const handleDownloadAllProofs = async () => {
    setIsDownloadingProofs(true)
    toast({ title: "Preparing ZIP...", description: "This may take a moment." })
    try {
      const zip = new JSZip()
      let count = 0
      for (const sub of allSubmissions) {
        if (sub.file_path) {
          const { data: blob, error } = await supabase.storage
            .from("payment-proofs")
            .download(sub.file_path)
          if (!error && blob) {
            zip.file(
              `${sub.delegate_name}_${sub.id}.${sub.file_path.split(".").pop()}`,
              blob
            )
            count++
          }
        }
      }
      if (count === 0) {
        toast({ title: "No files found" })
        return
      }
      const zipBlob = await zip.generateAsync({ type: "blob" })
      const a = document.createElement("a")
      a.href = URL.createObjectURL(zipBlob)
      a.download = `lmun_proofs_${format(new Date(), "yyyy-MM-dd")}.zip`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      toast({ title: "Done!", description: `${count} proof files downloaded.` })
    } catch (err: any) {
      toast({ title: "Failed", description: err.message, variant: "destructive" })
    } finally {
      setIsDownloadingProofs(false)
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/admin/login")
  }

  // ── Nav items ─────────────────────────────────────────────────────────────
  const navItems = [
    { label: "All Submissions", value: "all", count: stats.total },
    { label: "Pending", value: "pending", count: stats.pending },
    { label: "Approved", value: "approved", count: stats.approved },
    { label: "Rejected", value: "rejected", count: stats.rejected },
  ]

  const statCards = [
    { label: "Total Submissions", value: stats.total, iconBg: "bg-blue-500/20", iconColor: "text-blue-400", Icon: TrendingUp },
    { label: "Pending Review", value: stats.pending, iconBg: "bg-yellow-500/20", iconColor: "text-yellow-400", Icon: Clock },
    { label: "Approved", value: stats.approved, iconBg: "bg-emerald-500/20", iconColor: "text-emerald-400", Icon: CheckCircle },
    { label: "Rejected", value: stats.rejected, iconBg: "bg-red-500/20", iconColor: "text-red-400", Icon: XCircle },
    { label: "Total Collected (CRC)", value: `₡${stats.totalAmount.toLocaleString()}`, iconBg: "bg-purple-500/20", iconColor: "text-purple-400", Icon: DollarSign },
  ]

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{ background: "linear-gradient(135deg, #070b14 0%, #0c1a3d 60%, #070b14 100%)" }}
    >
      {/* ── SIDEBAR ─────────────────────────────────────────────────────── */}
      <aside
        className="w-64 flex-shrink-0 flex flex-col border-r border-white/10"
        style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)" }}
      >
        {/* Logo */}
        <div className="p-6 border-b border-white/10">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo.png" alt="LMUN" width={36} height={36} className="object-contain" />
            <div>
              <div className="text-white font-bold text-lg leading-tight">LMUN</div>
              <div className="text-blue-400 text-xs">Admin Portal</div>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3 px-2">
            Submissions
          </p>
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => setStatusFilter(item.value)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${statusFilter === item.value
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
            >
              <span>{item.label}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${statusFilter === item.value ? "bg-white/20" : "bg-white/10"
                  }`}
              >
                {item.count}
              </span>
            </button>
          ))}
        </nav>

        {/* Export */}
        <div className="px-4 pb-4 space-y-1 border-t border-white/10 pt-4">
          <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3 px-2">
            Export
          </p>
          <button
            onClick={handleDownloadCSV}
            className="w-full flex items-center space-x-2.5 px-3 py-2.5 rounded-xl text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all"
          >
            <FileDown className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
          <button
            onClick={handleDownloadAllProofs}
            disabled={isDownloadingProofs}
            className="w-full flex items-center space-x-2.5 px-3 py-2.5 rounded-xl text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all disabled:opacity-50"
          >
            {isDownloadingProofs ? (
              <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
            ) : (
              <Archive className="w-4 h-4" />
            )}
            <span>{isDownloadingProofs ? "Downloading..." : "Download All Proofs"}</span>
          </button>
        </div>

        {/* User + Logout */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center space-x-3 mb-3 px-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
              {adminEmail.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white text-xs font-medium truncate">{adminEmail}</div>
              <div className="text-gray-500 text-xs">Administrator</div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-2.5 px-3 py-2.5 rounded-xl text-sm text-red-400 hover:text-red-300 hover:bg-red-400/10 transition-all"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <main className="flex-1 overflow-auto">
        {/* Top Bar */}
        <div
          className="sticky top-0 z-10 px-8 py-4 border-b border-white/10 flex items-center justify-between"
          style={{ background: "rgba(7,11,20,0.85)", backdropFilter: "blur(20px)" }}
        >
          <div>
            <h1 className="text-white text-xl font-bold">Payment Dashboard</h1>
            <p className="text-gray-400 text-sm">LMUN 2026 — Conference Registrations</p>
          </div>
          <div className="flex items-center space-x-4">
            {/* Realtime indicator */}
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
              <div
                className={`w-2 h-2 rounded-full ${isRealtime ? "bg-emerald-400 animate-pulse" : "bg-gray-500"
                  }`}
              />
              <span className="text-xs text-gray-400">
                {isRealtime ? "Live Updates On" : "Connecting..."}
              </span>
            </div>
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search delegates..."
                className="w-60 pl-9 pr-4 py-2 rounded-xl text-sm text-white placeholder:text-gray-500 border border-white/15 focus:border-blue-400/50 focus:outline-none transition-all"
                style={{ background: "rgba(255,255,255,0.06)" }}
              />
            </div>
          </div>
        </div>

        <div className="p-8 space-y-6">
          {/* ── STAT CARDS ──────────────────────────────────────────────── */}
          <div className="grid grid-cols-5 gap-4">
            {statCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl p-5 border border-white/10"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${card.iconBg}`}>
                  <card.Icon className={`w-5 h-5 ${card.iconColor}`} />
                </div>
                <div className="text-2xl font-bold text-white">{card.value}</div>
                <div className="text-gray-400 text-sm mt-1">{card.label}</div>
              </motion.div>
            ))}
          </div>

          {/* ── CHART ────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="rounded-2xl p-6 border border-white/10"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-white font-semibold text-lg">Submissions Overview</h3>
                <p className="text-gray-400 text-sm">Last 7 days</p>
              </div>
              <div className="flex items-center space-x-5 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                  <span className="text-gray-400">Total</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-gray-400">Approved</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="text-gray-400">Pending</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorApproved" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis
                  dataKey="date"
                  stroke="#6b7280"
                  tick={{ fill: "#6b7280", fontSize: 12 }}
                />
                <YAxis
                  stroke="#6b7280"
                  tick={{ fill: "#6b7280", fontSize: 12 }}
                  allowDecimals={false}
                />
                <Tooltip
                  contentStyle={{
                    background: "rgba(7,11,20,0.95)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "12px",
                    color: "white",
                    fontSize: "13px",
                  }}
                  cursor={{ stroke: "rgba(255,255,255,0.1)" }}
                />
                <Area
                  type="monotone"
                  dataKey="total"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  fill="url(#colorTotal)"
                />
                <Area
                  type="monotone"
                  dataKey="approved"
                  stroke="#10b981"
                  strokeWidth={2}
                  fill="url(#colorApproved)"
                />
                <Area
                  type="monotone"
                  dataKey="pending"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  fill="none"
                  strokeDasharray="5 5"
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* ── SUBMISSIONS TABLE ────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="rounded-2xl border border-white/10 overflow-hidden"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-white font-semibold text-lg">
                {statusFilter === "all"
                  ? "All Submissions"
                  : `${statusFilter.charAt(0).toUpperCase() + statusFilter.slice(1)} Submissions`}
                <span className="ml-2 text-sm font-normal text-gray-400">
                  ({submissions.length})
                </span>
              </h3>
              <button
                onClick={() => fetchSubmissions()}
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors px-3 py-1.5 rounded-lg hover:bg-blue-400/10"
              >
                Refresh ↻
              </button>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-24">
                <div className="w-10 h-10 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
              </div>
            ) : submissions.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-gray-500">
                <FileText className="w-16 h-16 mb-4 opacity-20" />
                <p className="text-lg font-medium">No submissions found</p>
                <p className="text-sm mt-1">
                  {searchTerm ? "Try a different search term." : "Submissions will appear here in real-time."}
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      {[
                        "Delegate",
                        "School",
                        "Committee",
                        "Method",
                        "Amount",
                        "Status",
                        "Date",
                        "Actions",
                      ].map((h) => (
                        <th
                          key={h}
                          className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {submissions.map((sub, i) => {
                      const scfg = statusConfig[sub.status]
                      const isExpanded = expandedRow === sub.id
                      return (
                        <AnimatePresence key={sub.id}>
                          <motion.tr
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.02 }}
                            className="border-b border-white/5 hover:bg-white/5 cursor-pointer transition-colors"
                            onClick={() => setExpandedRow(isExpanded ? null : sub.id)}
                          >
                            <td className="px-5 py-4">
                              <div className="text-white font-medium text-sm">
                                {sub.delegate_name}
                              </div>
                              <div className="text-gray-500 text-xs mt-0.5">{sub.email}</div>
                            </td>
                            <td className="px-5 py-4 text-gray-300 text-sm max-w-[140px]">
                              <span className="block truncate">{sub.school}</span>
                            </td>
                            <td className="px-5 py-4 text-gray-300 text-sm max-w-[160px]">
                              <span className="block truncate text-xs leading-relaxed">
                                {sub.committee}
                              </span>
                            </td>
                            <td className="px-5 py-4 text-gray-300 text-sm">{sub.payment_method}</td>
                            <td className="px-5 py-4 text-white text-sm font-semibold">
                              ₡{sub.amount?.toLocaleString() || "N/A"}
                            </td>
                            <td className="px-5 py-4">
                              <span
                                className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${scfg.bg} ${scfg.color}`}
                              >
                                <scfg.Icon className="w-3 h-3 mr-1.5" />
                                {scfg.label}
                              </span>
                            </td>
                            <td className="px-5 py-4 text-gray-400 text-xs">
                              {format(parseISO(sub.created_at), "MMM d, yyyy")}
                            </td>
                            <td className="px-5 py-4">
                              <div
                                className="flex items-center space-x-1"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <button
                                  onClick={() => handleDownload(sub.file_path, sub.delegate_name)}
                                  className="p-1.5 text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 rounded-lg transition-all"
                                  title="Download proof"
                                >
                                  <Download className="w-4 h-4" />
                                </button>
                                {sub.status === "pending" && (
                                  <>
                                    <button
                                      onClick={() => handleStatusChange(sub.id, "approved")}
                                      disabled={actionLoading[sub.id]}
                                      className="p-1.5 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-400/10 rounded-lg transition-all disabled:opacity-50"
                                      title="Approve"
                                    >
                                      <CheckCircle className="w-4 h-4" />
                                    </button>
                                    <button
                                      onClick={() => handleStatusChange(sub.id, "rejected")}
                                      disabled={actionLoading[sub.id]}
                                      className="p-1.5 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-all disabled:opacity-50"
                                      title="Reject"
                                    >
                                      <XCircle className="w-4 h-4" />
                                    </button>
                                  </>
                                )}
                                {(sub.status === "approved" || sub.status === "rejected") && (
                                  <button
                                    onClick={() => handleStatusChange(sub.id, "pending")}
                                    disabled={actionLoading[sub.id]}
                                    className="p-1.5 text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10 rounded-lg transition-all disabled:opacity-50"
                                    title="Revert to pending"
                                  >
                                    <Clock className="w-4 h-4" />
                                  </button>
                                )}
                                <div className="p-1.5 text-gray-600 pointer-events-none">
                                  {isExpanded ? (
                                    <ChevronUp className="w-4 h-4" />
                                  ) : (
                                    <ChevronDown className="w-4 h-4" />
                                  )}
                                </div>
                              </div>
                            </td>
                          </motion.tr>

                          {/* ── Expanded detail row ───────────────────────── */}
                          {isExpanded && (
                            <tr
                              key={`${sub.id}-detail`}
                              className="border-b border-white/5"
                              style={{ background: "rgba(59,130,246,0.05)" }}
                            >
                              <td colSpan={8} className="px-5 py-5">
                                <div className="grid grid-cols-4 gap-6 text-sm">
                                  <div>
                                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                                      Email
                                    </p>
                                    <p className="text-white">{sub.email}</p>
                                  </div>
                                  <div>
                                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                                      Full Committee
                                    </p>
                                    <p className="text-white text-xs leading-relaxed">{sub.committee}</p>
                                  </div>
                                  <div>
                                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                                      Additional Notes
                                    </p>
                                    <p className="text-gray-300 italic text-xs">
                                      {sub.notes || "No notes provided"}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                                      Submitted At
                                    </p>
                                    <p className="text-white text-xs">
                                      {format(parseISO(sub.created_at), "MMM d, yyyy · HH:mm")}
                                    </p>
                                    <button
                                      onClick={() =>
                                        handleDownload(sub.file_path, sub.delegate_name)
                                      }
                                      className="mt-2 text-blue-400 hover:text-blue-300 text-xs transition-colors flex items-center space-x-1"
                                    >
                                      <Download className="w-3 h-3" />
                                      <span>Download Payment Proof</span>
                                    </button>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                        </AnimatePresence>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  )
}