"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { supabase } from "@/lib/supabase"
import { useToast } from "@/components/ui/use-toast"
import {
  Globe,
  Upload,
  FileText,
  CheckCircle,
  AlertCircle,
  User,
  Building,
  CreditCard,
  ArrowRight,
  Shield,
  DollarSign,
} from "lucide-react"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"
import { v4 as uuidv4 } from 'uuid';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Image from "next/image"
import { Footer } from "@/components/Footer"

export default function UploadPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    school: "",
    committee: "",
    paymentMethod: "",
    amount: "",
    notes: "",
  })
  const [file, setFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()
  const supabaseClient = createClientComponentClient();

  const committees = [
    "United Nations Security Council (UNSC)",
    "General Assembly First Committee (GA1)",
    "Economic and Social Council (ECOSOC)",
    "World Health Organization (WHO)",
    "International Court of Justice (ICJ)",
    "UN Environment Programme (UNEP)",
  ]

  const paymentMethods = ["Bank Transfer", "SINPE"]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]
      // Check file size (5MB limit)
      if (selectedFile.size > 5 * 1024 * 1024) {
        toast({
          title: "Error",
          description: "File size must be less than 5MB",
          variant: "destructive",
        })
        return
      }
      setFile(selectedFile)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      if (!file) {
        throw new Error("Please select a file")
      }

      if (!isFormValid) {
        throw new Error("Please fill in all required fields correctly")
      }

      // Create a more sanitized file path
      const fileExt = file.name.split('.').pop()
      const sanitizedName = formData.fullName
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '-') // Replace any non-alphanumeric characters with hyphens
        .replace(/-+/g, '-') // Replace multiple consecutive hyphens with a single one
        .replace(/^-|-$/g, '') // Remove hyphens from start and end
      const fileName = `${uuidv4()}-${sanitizedName}.${fileExt}`
      const filePath = fileName // Store files in the root of the bucket

      console.log('Attempting to upload file:', {
        originalName: file.name,
        fileName,
        filePath,
        fileSize: file.size,
        fileType: file.type,
        bucket: 'payment-proofs'
      })

      // First, try to upload the file
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('payment-proofs')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        })

      if (uploadError) {
        console.error('Storage upload error details:', {
          error: uploadError,
          message: uploadError.message,
          name: uploadError.name
        })
        throw new Error(`Failed to upload file: ${uploadError.message}`)
      }

      console.log('File uploaded successfully:', uploadData)

      // Create the submission record
      const submissionData = {
        delegate_name: formData.fullName,
        email: formData.email,
        school: formData.school,
        committee: formData.committee,
        payment_method: formData.paymentMethod,
        amount: parseFloat(formData.amount),
        notes: formData.notes,
        file_path: filePath,
        status: 'pending'
      }

      console.log('Creating submission record:', submissionData)

      // DEBUG: Check current session
      const { data: sessionData, error: sessionError } = await supabaseClient.auth.getSession();
      console.log('Current session before insert:', sessionData, 'Session error:', sessionError);

      const { data: submission, error: submissionError } = await supabase
        .from('payment_submissions')
        .insert([submissionData])
        .select()

      if (submissionError) {
        // If the submission fails, try to delete the uploaded file
        console.error('Submission error:', submissionError)
        await supabase.storage
          .from('payment-proofs')
          .remove([filePath])
          .then(() => console.log('Cleaned up file after failed submission'))
          .catch(err => console.error('Failed to clean up file:', err))
        
        throw new Error(`Failed to create submission: ${submissionError.message}`)
      }

      console.log('Submission created successfully:', submission)

      setIsSubmitted(true)
      toast({
        title: "Success",
        description: "Payment proof uploaded successfully",
      })

    } catch (error: any) {
      console.error('Upload process error:', error)
      toast({
        title: "Error",
        description: error.message || "Failed to upload payment proof. Please try again.",
        variant: "destructive",
      })
    } finally {
    setIsSubmitting(false)
    }
  }

  const isFormValid = Boolean(
    formData.fullName &&
    formData.email &&
    formData.school &&
    formData.committee &&
    formData.paymentMethod &&
    formData.amount &&
    parseFloat(formData.amount) > 0 &&
    file
  )

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto px-6"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
            <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-white mb-4">Payment Submitted Successfully!</h1>
            <p className="text-xl text-gray-300 mb-8">
              Thank you for submitting your payment proof. Our team will review your submission within 24-48 hours and
              send you a confirmation email.
            </p>
            <div className="bg-blue-900/30 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-blue-300 mb-2">What's Next?</h3>
              <ul className="text-left text-gray-300 space-y-2">
                <li>• You'll receive an email confirmation within 48 hours</li>
                <li>• Your conference materials will be sent 1 week before the event</li>
                <li>• Check your email for important updates and announcements</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Return to Home
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Download Receipt
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="LMUN Logo" width={60} height={20} />
              <span className="text-3xl font-bold text-white">LMUN</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link href="/committees" className="text-white hover:text-blue-400 transition-colors">
                Committees
              </Link>
              <Link href="/gallery" className="text-white hover:text-blue-400 transition-colors">
                Gallery
              </Link>
              <Link href="/conference-info" className="text-white hover:text-blue-400 transition-colors">
                Conference Information
              </Link>
              <Link href="/resources" className="text-white hover:text-blue-400 transition-colors">
                Resources
              </Link>
              <Link href="/upload" className="text-blue-400 font-medium">
                Upload Payment
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSedNwUoCCEAvbmzqY21JoNnDv9I5rdT0GOlxxfcjAFi-wv6DA/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                  Register Now
                </a>
              </Button>
            </div>
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-400/30">
              <CreditCard className="w-5 h-5 mr-2" />
              Payment Submission
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              UPLOAD YOUR
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                PAYMENT PROOF
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Secure your spot at LMUN 2026 by uploading your payment confirmation. Our team will verify your
              payment and send you a confirmation within 48 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Fees & Payment Information */}
      <section className="py-8 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 w-full">
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Registration Fees</h3>
                <Image
                  src="/Costs.png"
                  alt="Conference Costs"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 rounded-full p-4 shadow-lg">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 w-full">
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Payment Information</h3>
                <Image
                  src="/Payment Info.png"
                  alt="Payment information - Banco Davivienda account details and IBAN"
                  width={800}
                  height={200}
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-blue-600 rounded-full p-4 shadow-lg">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upload Form */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Information */}
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <User className="w-6 h-6 mr-3 text-blue-400" />
                        Personal Information
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="fullName" className="text-white mb-2 block">
                            Full Name *
                          </Label>
                          <Input
                            id="fullName"
                            value={formData.fullName}
                            onChange={(e) => handleInputChange("fullName", e.target.value)}
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-white mb-2 block">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Conference Details */}
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <Building className="w-6 h-6 mr-3 text-blue-400" />
                        Conference Details
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="school" className="text-white mb-2 block">
                            School/Institution
                            <div className="text-sm text-gray-400">
                              (if Independent Delegate, then write "Independent Delegate")
                            </div>
                          </Label>
                          <Input
                            id="school"
                            value={formData.school}
                            onChange={(e) => handleInputChange("school", e.target.value)}
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                            placeholder="Enter your school name"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="committee" className="text-white mb-2 block">
                            Committee *
                          </Label>
                          <Select
                            value={formData.committee}
                            onValueChange={(value) => handleInputChange("committee", value)}
                          >
                            <SelectTrigger className="bg-white/10 border-white/20 text-white">
                              <SelectValue placeholder="Select your committee" />
                            </SelectTrigger>
                            <SelectContent>
                              {committees.map((committee) => (
                                <SelectItem key={committee} value={committee}>
                                  {committee}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="paymentMethod" className="text-white mb-2 block">
                            Payment Method *
                          </Label>
                          <Select
                            value={formData.paymentMethod}
                            onValueChange={(value) => handleInputChange("paymentMethod", value)}
                          >
                            <SelectTrigger className="bg-white/10 border-white/20 text-white">
                              <SelectValue placeholder="Select payment method" />
                            </SelectTrigger>
                            <SelectContent>
                              {paymentMethods.map((method) => (
                                <SelectItem key={method} value={method}>
                                  {method}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="amount" className="text-white mb-2 block">
                            Payment Amount (CRC) *
                          </Label>
                          <Input
                            id="amount"
                            type="number"
                            min="0"
                            step="0.01"
                            value={formData.amount}
                            onChange={(e) => handleInputChange("amount", e.target.value)}
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                            placeholder="Enter payment amount"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* File Upload */}
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <Upload className="w-6 h-6 mr-3 text-blue-400" />
                        Payment Proof Upload
                      </h2>
                      <div className="border-2 border-dashed border-white/30 rounded-xl p-8 text-center hover:border-blue-400/50 transition-colors">
                        <input
                          type="file"
                          id="file-upload"
                          className="hidden"
                          accept="image/*,.pdf"
                          onChange={handleFileChange}
                        />
                        <label htmlFor="file-upload" className="cursor-pointer">
                          <FileText className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                          <h3 className="text-xl font-semibold text-white mb-2">
                            {file ? file.name : "Upload Payment Proof"}
                          </h3>
                          <p className="text-gray-300 mb-4">Drag and drop your file here, or click to browse</p>
                          <p className="text-sm text-gray-400">Supported formats: PDF, JPG, PNG (Max 5MB)</p>
                        </label>
                      </div>
                      {file && (
                        <div className="mt-4 p-4 bg-green-900/30 rounded-lg border border-green-400/30">
                          <div className="flex items-center space-x-2 text-green-300">
                            <CheckCircle className="w-5 h-5" />
                            <span>File uploaded: {file.name}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Additional Notes */}
                    <div>
                      <Label htmlFor="notes" className="text-white mb-2 block">
                        Additional Notes (Optional)
                      </Label>
                      <Textarea
                        id="notes"
                        value={formData.notes}
                        onChange={(e) => handleInputChange("notes", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="Any additional information or special requests..."
                        rows={4}
                      />
                    </div>

                    {/* Security Notice */}
                    <div className="bg-blue-900/30 rounded-xl p-6 border border-blue-400/30">
                      <div className="flex items-start space-x-3">
                        <Shield className="w-6 h-6 text-blue-400 mt-1" />
                        <div>
                          <h3 className="font-semibold text-blue-300 mb-2">Security & Privacy</h3>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            Your payment information and personal data are encrypted and securely stored. We only use
                            this information for conference registration purposes and will never share it with third
                            parties.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                      {!isFormValid && (
                        <div className="mb-4 p-4 bg-orange-900/30 rounded-lg border border-orange-400/30">
                          <div className="flex items-center space-x-2 text-orange-300">
                            <AlertCircle className="w-5 h-5" />
                            <span>Please fill in all required fields and upload your payment proof</span>
                          </div>
                        </div>
                      )}
                      <Button
                        type="submit"
                        size="lg"
                        disabled={!isFormValid || isSubmitting}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Payment Proof
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
