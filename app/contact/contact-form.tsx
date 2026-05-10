"use client"

import { useState, useMemo, memo } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, CheckCircle, Loader2, Send } from "lucide-react"
import { validateEmail } from "@/lib/validate-email"
import { validatePhone } from "@/lib/validate-phone"
import { validateMessageLength } from "@/lib/validate-message-length"

const useContactInfo = () => {
  return useMemo(() => [
    {
      icon: Mail,
      title: "Email",
      value: "head.gmtconsulting@gmail.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "9372080019",
      description: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "Mumbai, Maharashtra, India",
      description: "Visit our headquarters",
    },
  ], [])
}

const services = [
  "ERP Selection & Evaluation",
  "ERP Mediation & Advisory",
  "Implementation Oversight",
  "CRM Advisory",
  "HRMS Advisory",
  "Finance Automation",
  "Project Management Systems",
  "Other",
]

export const ContactForm = memo(function ContactForm() {
  const contactInfo = useContactInfo()
   const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })
   const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
   const [errors, setErrors] = useState<Record<string, string>>({})
   const [serverError, setServerError] = useState<string | null>(null)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // First Name validation - only letters, no numbers
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    } else if (!/^[a-zA-Z\s'-]+$/.test(formData.firstName.trim())) {
      newErrors.firstName = "First name can only contain letters"
    }

    // Last Name validation - only letters, no numbers
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    } else if (!/^[a-zA-Z\s'-]+$/.test(formData.lastName.trim())) {
      newErrors.lastName = "Last name can only contain letters"
    }

    // Email validation using validateEmail
    const emailResult = validateEmail(formData.email)
    if (!emailResult.valid) {
      newErrors.email = emailResult.error!
    }

    // Phone validation using validatePhone
    const phoneResult = validatePhone(formData.phone)
    if (!phoneResult.valid) {
      newErrors.phone = phoneResult.error!
    }

    // Service validation
    if (!formData.service) {
      newErrors.service = "Please select a service"
    }

    // Message validation using validateMessageLength
    const messageResult = validateMessageLength(formData.message)
    if (!messageResult.valid) {
      newErrors.message = messageResult.error!
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateField = (name: string, value: string) => {
    let error: string | undefined

    switch (name) {
      case "firstName":
        if (!value.trim()) {
          error = "First name is required"
        } else if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) {
          error = "First name can only contain letters"
        }
        break

      case "lastName":
        if (!value.trim()) {
          error = "Last name is required"
        } else if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) {
          error = "Last name can only contain letters"
        }
        break

      case "email": {
        const result = validateEmail(value)
        if (!result.valid) error = result.error
        break
      }

      case "phone": {
        const result = validatePhone(value)
        if (!result.valid) error = result.error
        break
      }

      case "message": {
        const result = validateMessageLength(value)
        if (!result.valid) error = result.error
        break
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error ?? "",
    }))
  }

   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setStatus("loading")
    setServerError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setStatus("success")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      })
    } catch (error) {
      setStatus("error")
      const errorMessage = error instanceof Error ? error.message : 'Failed to send message'
      setServerError(errorMessage)
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    validateField(name, value)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    validateField(name, value)
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#03499e]/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#03499e]/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Contact <span className="text-[#03499e]">Us</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Looking for clarity before committing to an ERP decision? Speak to GMT Consulting and
              move forward with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-t border-border bg-card py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
              <p className="mt-4 text-muted-foreground">
                Connect with our team for independent ERP, CRM, HRMS, and enterprise solutions advisory. We're here to help you make unbiased technology decisions.
              </p>

              <div className="mt-8 space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#03499e]/10">
                      <info.icon className="h-6 w-6 text-[#03499e]" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{info.title}</p>
                      <p className="text-[#03499e]">{info.value}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="mt-12 rounded-xl border border-border bg-background p-6">
                <h3 className="font-semibold text-foreground">Office Hours</h3>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-xl border border-border bg-background p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#03499e]/10">
                    <CheckCircle className="h-8 w-8 text-[#03499e]" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">Message Sent Successfully!</h3>
                  <p className="mt-2 text-muted-foreground">
                    Thank you for contacting us. Our team will review your message and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 inline-flex h-10 items-center justify-center rounded-lg bg-[#03499e] px-6 text-sm font-medium text-white transition-colors hover:bg-[#03499e]/90"
                  >
                    Send Another Message
                  </button>
                </div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-6">
                   {serverError && (
                     <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                       <p className="text-sm text-red-700">{serverError}</p>
                     </div>
                   )}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`mt-2 block w-full rounded-lg border ${errors.firstName ? 'border-red-500' : 'border-border'} bg-background px-4 py-2.5 text-foreground focus:border-[#03499e] focus:outline-none focus:ring-1 focus:ring-[#03499e]`}
                        placeholder="John"
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`mt-2 block w-full rounded-lg border ${errors.lastName ? 'border-red-500' : 'border-border'} bg-background px-4 py-2.5 text-foreground focus:border-[#03499e] focus:outline-none focus:ring-1 focus:ring-[#03499e]`}
                        placeholder="Doe"
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`mt-2 block w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-border'} bg-background px-4 py-2.5 text-foreground focus:border-[#03499e] focus:outline-none focus:ring-1 focus:ring-[#03499e]`}
                        placeholder="john@company.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`mt-2 block w-full rounded-lg border ${errors.phone ? 'border-red-500' : 'border-border'} bg-background px-4 py-2.5 text-foreground focus:border-[#03499e] focus:outline-none focus:ring-1 focus:ring-[#03499e]`}
                        placeholder="+91 98765 43210"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
<div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground focus:border-[#03499e] focus:outline-none focus:ring-1 focus:ring-[#03499e]"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground">
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`mt-2 block w-full rounded-lg border ${errors.service ? 'border-red-500' : 'border-border'} bg-background px-4 py-2.5 text-foreground focus:border-[#03499e] focus:outline-none focus:ring-1 focus:ring-[#03499e]`}
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-sm text-red-500">{errors.service}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`mt-2 block w-full rounded-lg border ${errors.message ? 'border-red-500' : 'border-border'} bg-background px-4 py-2.5 text-foreground focus:border-[#03499e] focus:outline-none focus:ring-1 focus:ring-[#03499e]`}
                      placeholder="Tell us about your ERP, CRM, or HRMS requirements..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#03499e] px-8 text-base font-medium text-white transition-colors hover:bg-[#03499e]/90 disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-sm text-muted-foreground">
                    By submitting this form, you agree to our{" "}
                    <Link href="#" className="text-[#03499e] hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

<Footer />
    </main>
  )
})