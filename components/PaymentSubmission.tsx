import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { supabase } from '@/lib/supabase'
import { useToast } from "@/components/ui/use-toast"

export function PaymentSubmission() {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [delegateName, setDelegateName] = useState("")
  const [committee, setCommittee] = useState("")
  const [amount, setAmount] = useState("")
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) {
      toast({
        title: "Error",
        description: "Please select a file to upload",
        variant: "destructive",
      })
      return
    }

    if (!delegateName || !committee || !amount) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      })
      return
    }

    setLoading(true)
    try {
      // Upload file to Supabase Storage
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('payment-proofs')
        .upload(fileName, file)

      if (uploadError) throw uploadError

      // Create payment submission record
      const { data: submissionData, error: submissionError } = await supabase
        .from('payment_submissions')
        .insert([
          {
            file_path: uploadData.path,
            status: 'pending',
            amount: parseFloat(amount),
            delegate_name: delegateName,
            committee: committee,
          },
        ])
        .select()

      if (submissionError) throw submissionError

      toast({
        title: "Success",
        description: "Payment proof submitted successfully",
      })

      // Reset form
      setFile(null)
      setDelegateName("")
      setCommittee("")
      setAmount("")
      ;(e.target as HTMLFormElement).reset()
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Submit Payment Proof</CardTitle>
        <CardDescription>
          Upload your payment proof for verification
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="delegateName">Delegate Name</Label>
            <Input
              id="delegateName"
              value={delegateName}
              onChange={(e) => setDelegateName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="committee">Committee</Label>
            <Input
              id="committee"
              value={committee}
              onChange={(e) => setCommittee(e.target.value)}
              placeholder="Enter your committee"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Payment Amount</Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter payment amount"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="proof">Payment Proof</Label>
            <Input
              id="proof"
              type="file"
              accept="image/*,.pdf"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              required
            />
            <p className="text-sm text-muted-foreground">
              Accepted formats: Images (PNG, JPG) and PDF
            </p>
          </div>

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Uploading..." : "Submit Payment Proof"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
} 