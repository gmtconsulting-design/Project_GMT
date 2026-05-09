"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Mail } from "lucide-react"
import { MegaMenu } from "./mega-menu"
import { SolutionsMegaMenu } from "./solutions-mega-menu"
import { IndustriesMegaMenu } from "./industries-mega-menu"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/solutions", label: "Solutions" },
    { href: "/industries", label: "Industries" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <div className="sticky top-0 z-50 w-full">
    {/* Top Bar */}
    <div className="hidden w-full bg-[#03499e] text-white md:block">
      <div className="mx-auto flex h-8 max-w-7xl items-center justify-end gap-6 px-4 text-xs sm:px-6 lg:px-8">
        <a href="tel:+919372080019" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <Phone className="h-3 w-3" />
          <span>+91 9372080019</span>
        </a>
        <a href="mailto:head.gmtconsulting@gmail.com" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <Mail className="h-3 w-3" />
          <span>head.gmtconsulting@gmail.com</span>
        </a>
      </div>
    </div>
    <header className={`w-full border-b transition-all duration-300 ${
      scrolled
        ? "border-border bg-background/95 backdrop-blur-lg shadow-lg supports-[backdrop-filter]:bg-background/80"
        : "border-border/50 bg-background/60 backdrop-blur-sm supports-[backdrop-filter]:bg-background/40"
    }`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/GMT_Logo1.jpeg"
              alt="GMT Consulting - GrowMore Technocrats"
              width={160}
              height={54}
              className="h-14 w-auto"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-[#03499e] group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-[#03499e] to-[#00b4d8] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <MegaMenu />
          <SolutionsMegaMenu />
          <IndustriesMegaMenu />
          <Link
            href="/contact"
            className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-[#03499e] group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-[#03499e] to-[#00b4d8] transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="group inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#03499e] to-[#0066cc] px-6 text-sm font-medium text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
          >
            Request Consultation
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-all hover:bg-secondary md:hidden"
          aria-label="Toggle menu"
        >
          <div className="relative h-5 w-5">
            <Menu className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
            <X className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div className={`overflow-hidden border-t border-border bg-background/95 backdrop-blur-lg transition-all duration-300 md:hidden ${
        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="flex flex-col gap-4 px-4 py-6">
          {navLinks.slice(0, 2).map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-sm font-medium text-muted-foreground transition-all hover:text-[#03499e] hover:translate-x-2 ${
                isOpen ? 'animate-slide-in-left' : ''
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/services"
            onClick={() => setIsOpen(false)}
            className={`text-sm font-medium text-muted-foreground transition-all hover:text-[#03499e] hover:translate-x-2 ${
              isOpen ? 'animate-slide-in-left' : ''
            }`}
            style={{ animationDelay: `${2 * 50}ms` }}
          >
            Services
          </Link>
          {navLinks.slice(2).map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-sm font-medium text-muted-foreground transition-all hover:text-[#03499e] hover:translate-x-2 ${
                isOpen ? 'animate-slide-in-left' : ''
              }`}
              style={{ animationDelay: `${(index + 3) * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={`inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#03499e] to-[#0066cc] px-6 text-sm font-medium text-white shadow-lg transition-all hover:shadow-xl ${
              isOpen ? 'animate-scale-in delay-300' : ''
            }`}
          >
            Request Consultation
          </Link>
        </div>
      </div>
    </header>
    </div>
  )
}
