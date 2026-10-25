"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "Dentists", href: "/dentists" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-clinic-brand focus:text-clinic-bg focus:outline-2 focus:outline-clinic-CTA text-sm font-medium"
      >
        Skip to main content
      </a>

      <header className="w-full bg-clinic-bg border-b border-clinic-gray/20 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20">
            {/* Wordmark */}
            <div className="flex items-center">
              <Link
                href="/"
                className="group flex items-baseline gap-1 text-clinic-brand focus-visible:outline-2 focus-visible:outline-clinic-CTA focus-visible:outline-offset-2"
                aria-label="ClinicQ Home"
              >
                <span className="font-serif text-2xl font-semibold tracking-tight text-clinic-brand">
                  Clinic<span className="text-clinic-CTA">Q</span>
                </span>
                <span className="hidden sm:inline-block font-sans text-[11px] font-medium tracking-wide uppercase text-clinic-gray pl-1.5 border-l border-clinic-gray/30 ml-1.5">
                  Dental Studio
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav
              className="hidden sm:flex items-center gap-7 text-sm font-medium text-clinic-slate"
              aria-label="Primary navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="py-2 text-clinic-slate hover:text-clinic-brand border-b border-transparent hover:border-clinic-CTA transition-colors focus-visible:outline-2 focus-visible:outline-clinic-CTA focus-visible:outline-offset-2"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden sm:flex items-center gap-4">
              <Link
                href="/login"
                className="min-h-[44px] inline-flex items-center px-4 py-2 text-sm font-medium text-clinic-slate hover:text-clinic-brand rounded-xl hover:bg-clinic-brand/5 focus-visible:outline-2 focus-visible:outline-clinic-CTA focus-visible:outline-offset-2 transition-colors"
              >
                Log in
              </Link>
              <Link
                href="/book"
                className="min-h-[44px] inline-flex items-center px-5 py-2 text-sm font-medium bg-clinic-brand text-clinic-bg hover:bg-clinic-slate border border-clinic-brand rounded-xl shadow-xs transition-colors focus-visible:outline-2 focus-visible:outline-clinic-CTA focus-visible:outline-offset-2"
              >
                Book an appointment
              </Link>
            </div>

            {/* Mobile Hamburger Button (< 640px) */}
            <div className="flex sm:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav-menu"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center p-2 text-clinic-brand border border-clinic-gray/25 hover:border-clinic-brand rounded-xl focus-visible:outline-2 focus-visible:outline-clinic-CTA"
              >
                <span className="sr-only">Toggle navigation menu</span>
                <div className="w-5 h-4 relative flex flex-col justify-between">
                  <span
                    className={`block h-0.5 w-5 bg-clinic-brand transition-transform duration-200 ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                      }`}
                  />
                  <span
                    className={`block h-0.5 w-5 bg-clinic-brand transition-opacity duration-200 ${mobileMenuOpen ? "opacity-0" : ""
                      }`}
                  />
                  <span
                    className={`block h-0.5 w-5 bg-clinic-brand transition-transform duration-200 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                      }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown (< 640px) */}
        {mobileMenuOpen && (
          <nav
            id="mobile-nav-menu"
            className="sm:hidden border-t border-clinic-gray/20 bg-clinic-bg px-4 py-4 space-y-1"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center min-h-[44px] px-3 text-base font-medium text-clinic-slate hover:text-clinic-brand hover:bg-clinic-brand/5 border-b border-clinic-gray/10"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 pb-2 space-y-2">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center min-h-[44px] px-4 text-base font-medium text-clinic-slate border border-clinic-gray/30 hover:border-clinic-brand rounded-xl"
              >
                Log in
              </Link>
              <Link
                href="/book"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center min-h-[44px] px-4 text-base font-medium bg-clinic-brand text-clinic-bg hover:bg-clinic-slate border border-clinic-brand rounded-xl shadow-xs"
              >
                Book an appointment
              </Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
