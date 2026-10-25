"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Calendar, Clock, User, Shield } from "lucide-react";

export default function BookingPreview() {
  const [selectedService, setSelectedService] = useState(
    "Comprehensive Check-up & 3D Scans"
  );
  const [selectedDentist, setSelectedDentist] = useState(
    "Dr. Sarah Jenkins, BDS"
  );
  const [selectedDate, setSelectedDate] = useState("Thu 29 Oct");
  const [selectedSlot, setSelectedSlot] = useState("11:00");

  const services = [
    { name: "Comprehensive Check-up & 3D Scans", duration: "45 min" },
    { name: "Hygiene & Airflow® Polish", duration: "45 min" },
    { name: "Enlighten® Whitening Consult", duration: "30 min" },
    { name: "Invisalign® Smile Assessment", duration: "30 min" },
  ];

  const dentists = [
    { name: "Dr. Sarah Jenkins, BDS", title: "Principal Dentist" },
    { name: "Dr. Marcus Vance, DDS", title: "Implant & Restorative" },
    { name: "First Available Clinician", title: "Earliest appointment" },
  ];

  const dates = [
    { label: "Thu 29 Oct", subtitle: "Today" },
    { label: "Fri 30 Oct", subtitle: "Tomorrow" },
    { label: "Sat 31 Oct", subtitle: "Weekend" },
    { label: "Mon 02 Nov", subtitle: "Next week" },
  ];

  const morningSlots = ["09:30", "11:00", "11:45"];
  const afternoonSlots = ["14:15", "15:30", "16:45"];

  return (
    <div className="rounded-3xl border border-white/30 bg-[#faf7f2]/95 text-left p-6 sm:p-7 relative transition-all shadow-2xl shadow-black/20 backdrop-blur-xl">
      {/* Top status bar */}
      <div className="flex items-center justify-between pb-4 border-b border-clinic-gray/15">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-clinic-brand font-semibold">
            Live Booking Portal
          </span>
        </div>
        <span className="text-[11px] font-mono text-clinic-slate/80 bg-white/70 px-2.5 py-1 rounded-full border border-clinic-brand/10 shadow-2xs">
          Marylebone Studio
        </span>
      </div>

      <div className="mt-5 space-y-5 text-sm">
        {/* Treatment selection */}
        <div>
          <label className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-clinic-slate/80 font-medium mb-1.5">
            <Check className="w-3.5 h-3.5 text-clinic-CTA" />
            <span>Select Clinical Service</span>
          </label>
          <div className="grid grid-cols-1 gap-1.5">
            {services.slice(0, 2).map((srv) => {
              const isSelected = selectedService === srv.name;
              return (
                <button
                  key={srv.name}
                  type="button"
                  onClick={() => setSelectedService(srv.name)}
                  className={`w-full text-left px-3.5 py-2.5 text-xs transition-all flex items-center justify-between rounded-xl border ${
                    isSelected
                      ? "border-clinic-brand bg-clinic-brand/10 text-clinic-brand font-semibold shadow-2xs"
                      : "border-[#e5dfd5] text-clinic-slate hover:border-clinic-brand/40 bg-white/70 hover:bg-white"
                  }`}
                >
                  <span className="truncate pr-2">{srv.name}</span>
                  <span className="font-mono text-[11px] text-clinic-gray shrink-0">
                    {srv.duration}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Clinician selection */}
        <div>
          <label className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-clinic-slate/80 font-medium mb-1.5">
            <User className="w-3.5 h-3.5 text-clinic-CTA" />
            <span>Preferred Clinician</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            {dentists.slice(0, 2).map((doc) => {
              const isSelected = selectedDentist === doc.name;
              return (
                <button
                  key={doc.name}
                  type="button"
                  onClick={() => setSelectedDentist(doc.name)}
                  className={`text-left p-2.5 text-xs transition-all rounded-xl border ${
                    isSelected
                      ? "border-clinic-brand bg-clinic-brand/10 text-clinic-brand font-semibold shadow-2xs"
                      : "border-[#e5dfd5] text-clinic-slate hover:border-clinic-brand/40 bg-white/70 hover:bg-white"
                  }`}
                >
                  <span className="block font-medium truncate">{doc.name}</span>
                  <span className="block text-[10px] text-clinic-gray mt-0.5 truncate">
                    {doc.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Date selection */}
        <div>
          <label className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-clinic-slate/80 font-medium mb-1.5">
            <Calendar className="w-3.5 h-3.5 text-clinic-CTA" />
            <span>Select Date</span>
          </label>
          <div className="grid grid-cols-4 gap-1.5">
            {dates.map((d) => {
              const isSelected = selectedDate === d.label;
              return (
                <button
                  key={d.label}
                  type="button"
                  onClick={() => setSelectedDate(d.label)}
                  className={`text-center py-2 px-1 text-xs transition-all rounded-xl border ${
                    isSelected
                      ? "border-clinic-brand bg-clinic-brand text-white font-semibold shadow-xs"
                      : "border-[#e5dfd5] text-clinic-slate hover:border-clinic-brand/40 bg-white/70 hover:bg-white"
                  }`}
                >
                  <span className="block font-mono text-[11px] leading-tight">
                    {d.label.split(" ")[0]}
                  </span>
                  <span className="block font-mono text-[10px] opacity-80">
                    {d.label.split(" ")[1]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Time slots */}
        <div>
          <label className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-clinic-slate/80 font-medium mb-1.5">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-clinic-CTA" />
              <span>Available Times ({selectedDate})</span>
            </span>
            <span className="text-[10px] text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              4 slots open
            </span>
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[...morningSlots.slice(0, 2), ...afternoonSlots.slice(0, 4)].map(
              (slot) => {
                const isSelected = selectedSlot === slot;
                return (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`py-2 text-center text-xs font-mono transition-all rounded-xl border ${
                      isSelected
                        ? "border-clinic-CTA bg-clinic-CTA text-white font-semibold shadow-xs"
                        : "border-[#e5dfd5] text-clinic-slate hover:border-clinic-CTA/50 bg-white/70 hover:bg-white"
                    }`}
                  >
                    {slot}
                  </button>
                );
              }
            )}
          </div>
        </div>
      </div>

      {/* Action CTA */}
      <div className="mt-6 pt-4 border-t border-clinic-gray/15 space-y-3">
        <Link
          href={`/book?service=${encodeURIComponent(
            selectedService
          )}&dentist=${encodeURIComponent(
            selectedDentist
          )}&date=${encodeURIComponent(selectedDate)}&slot=${encodeURIComponent(
            selectedSlot
          )}`}
          className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3 px-4 bg-clinic-CTA text-white font-semibold text-sm hover:bg-[#e85b3c] transition-all border border-clinic-CTA rounded-xl shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-clinic-brand"
        >
          <span>
            Continue with {selectedSlot} on {selectedDate}
          </span>
          <span>&rarr;</span>
        </Link>
        <div className="flex items-center justify-between text-[11px] font-mono text-clinic-gray pt-1">
          <span className="flex items-center gap-1">
            <Shield className="w-3 h-3 text-emerald-600" />
            <span>No upfront payment</span>
          </span>
          <span>Free cancellation up to 24h</span>
        </div>
      </div>
    </div>
  );
}
