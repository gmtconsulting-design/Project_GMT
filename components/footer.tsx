import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/GMT_Logo1.jpeg"
                alt="GMT Consulting - GrowMore Technocrats"
                width={160}
                height={54}
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Independent ERP advisory firm. We advise, evaluate, and govern — so your technology decisions remain objective and business-led.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground transition-colors hover:text-[#03499e]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground transition-colors hover:text-[#03499e]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-sm text-muted-foreground transition-colors hover:text-[#03499e]">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-sm text-muted-foreground transition-colors hover:text-[#03499e]">
                  Industries
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/services" className="text-sm text-muted-foreground transition-colors hover:text-[#03499e]">
                  ERP Selection & Evaluation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground transition-colors hover:text-[#03499e]">
                  ERP Mediation & Advisory
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground transition-colors hover:text-[#03499e]">
                  Implementation Oversight
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground transition-colors hover:text-[#03499e]">
                  CRM & HRMS Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Get in Touch</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-[#03499e]">
                  Contact Us
                </Link>
              </li>
              <li>
<a href="mailto:head.gmtconsulting@gmail.com" className="text-sm text-muted-foreground transition-colors hover:text-[#03499e]">
                   head.gmtconsulting@gmail.com
                 </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-4">
                <a
                  href="https://www.linkedin.com/company/gmt-consulting-llp/about/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-secondary-foreground transition-colors hover:bg-[#03499e] hover:text-white"
                  aria-label="LinkedIn"
                >
                 <Linkedin className="h-4 w-4" />
               </a>
               <a
                 href="#"
                 className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-secondary-foreground transition-colors hover:bg-[#03499e] hover:text-white"
                 aria-label="Twitter"
               >
                 <Twitter className="h-4 w-4" />
               </a>
               <a
                 href="mailto:head.gmtconsulting@gmail.com"
                 className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-secondary-foreground transition-colors hover:bg-[#03499e] hover:text-white"
                 aria-label="Email"
               >
                 <Mail className="h-4 w-4" />
               </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} GrowMore Technocrats Consulting LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
