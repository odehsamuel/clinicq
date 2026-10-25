// Clinic configuration and contact details
// Real-world clinic presentation for ClinicQ Dental Studio

export const clinicData = {
  name: "ClinicQ Dental Studio",
  shortName: "ClinicQ",
  tagline: "Calm, precise dental care designed around your life",
  status: "Accepting New Patients",
  established: "2018",
  phone: "(020) 7946 0822",
  emergencyPhone: "(020) 7946 0899",
  email: "appointments@clinicqdental.com",
  address: {
    line1: "42 Harley Street",
    line2: "Suite 300, Medical Pavilion",
    area: "Marylebone",
    city: "London",
    postalCode: "W1G 9PR",
    transit: "3 min from Regent's Park & Oxford Circus. Step-free access.",
  },
  openingHours: [
    { days: "Monday – Thursday", hours: "08:00 – 18:30", note: "Early & evening visits" },
    { days: "Friday", hours: "08:00 – 17:00", note: "Standard clinic hours" },
    { days: "Saturday", hours: "09:00 – 14:00", note: "Hygiene & check-ups" },
    { days: "Sunday", hours: "On-call triage", note: "Registered emergencies" },
  ],
  insurance: [
    "Bupa Global",
    "AXA Health",
    "Aviva Health",
    "Vitality",
    "WPA",
    "All major corporate dental schemes",
  ],
  accreditations: [
    "CQC Registered Dental Practice",
    "British Dental Association (BDA) Member",
    "Invisalign® Platinum Elite Provider",
    "International Team for Implantology (ITI)",
  ],
};
