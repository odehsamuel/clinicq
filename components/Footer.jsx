import React from "react";
import Link from "next/link";
import { clinicData } from "@/content/clinic";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const mainLinks = [
    { label: "Treatments & Services", href: "/services" },
    { label: "Clinical Team", href: "/dentists" },
    { label: "How Booking Works", href: "#how-it-works" },
    { label: "Contact & Location", href: "/contact" },
    { label: "Book an Appointment", href: "/book" },
    { label: "Patient Portal Login", href: "/login" },
  ];

  return (
    <footer className="w-full bg-clinic-bg border-t border-clinic-gray/25 text-clinic-slate mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-clinic-gray/20">
          {/* Wordmark and Clinic Details */}
          <div className="md:col-span-6 space-y-3">
            <Link
              href="/"
              className="inline-block font-serif text-2xl font-semibold tracking-tight text-clinic-brand focus-visible:outline-2 focus-visible:outline-clinic-CTA"
            >
              Clinic<span className="text-clinic-CTA">Q</span>
              <span className="text-sm font-sans font-normal text-clinic-gray ml-2">
                Dental Studio
              </span>
            </Link>
            <p className="text-sm text-clinic-gray max-w-md leading-relaxed">
              Modern, unhurried dental care in central London. Dedicated to
              gentle clinical precision, low-radiation digital 3D diagnostics, and
              conflict-free real-time scheduling.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-clinic-slate/80">
              <span className="inline-block bg-clinic-brand/5 border border-clinic-brand/15 px-2.5 py-0.5 rounded-full">
                CQC Registered
              </span>
              <span className="inline-block bg-clinic-brand/5 border border-clinic-brand/15 px-2.5 py-0.5 rounded-full">
                BDA Good Practice
              </span>
              <span className="inline-block bg-clinic-brand/5 border border-clinic-brand/15 px-2.5 py-0.5 rounded-full">
                Harley St, London
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-6 flex flex-row justify-between sm:flex-row sm:justify-end gap-8 sm:gap-12">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-clinic-gray mb-3">
                Practice
              </p>
              <ul className="space-y-2 text-sm">
                {mainLinks.slice(0, 4).map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-clinic-slate hover:text-clinic-brand/65 transition-colors focus-visible:outline-2 focus-visible:outline-clinic-CTA"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-clinic-gray mb-3">
                Patient Care
              </p>
              <ul className="space-y-2 text-sm">
                {mainLinks.slice(4).map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-clinic-slate hover:text-clinic-brand/65 transition-colors focus-visible:outline-2 focus-visible:outline-clinic-CTA"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <span className="block text-xs font-mono text-clinic-gray">
                    Emergency Triage:
                  </span>
                  <a
                    href={`tel:${clinicData.emergencyPhone}`}
                    className="text-xs font-mono font-medium text-clinic-brand hover:text-clinic-CTA transition-colors"
                  >
                    {clinicData.emergencyPhone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-clinic-gray">
          <p className="text-center w-full sm:text-left">© {currentYear} ClinicQ Dental Studio. All clinical rights reserved.</p>
          <div className="flex w-full justify-center sm:justify-between gap-x-4 gap-y-1">
            <span className="text-center sm:text-left">Marylebone, London W1G 9PR</span>
            <span>•</span>
            <span className="text-center sm:text-left">Care Quality Commission Registered</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
