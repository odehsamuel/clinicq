// Home page content definitions
// Authentic, warm, and professional patient-centric copy for ClinicQ Dental Studio

export const homeContent = {
  hero: {
    headline: "Thoughtful, gentle dental care — booked in real time.",
    paragraph:
      "Experience unhurried dentistry in a calm, modern studio. Select your clinician, review live appointment availability, and secure your visit with instant calendar confirmation.",
    trustPoints: [
      "Accepting new private patients",
      "Direct health fund billing",
      "Same-day emergency appointments",
    ],
    primaryCta: {
      label: "Book an appointment",
      href: "/book",
    },
    secondaryCta: {
      label: "Explore treatments",
      href: "#services",
    },
    preview: {
      service: "Comprehensive Check-up & 3D Scans",
      dentist: "Dr. Sarah Jenkins, BDS",
      date: "Thursday, 29 October",
      slots: ["09:30", "11:00", "14:15", "16:00"],
    },
  },
  howItWorks: {
    title: "How your appointment works",
    subtitle: "A modern, transparent booking experience with zero waiting on hold.",
    steps: [
      {
        number: "01",
        title: "Select your treatment",
        description:
          "Choose routine hygiene, check-ups, restorative care, or clear aligner consultations.",
      },
      {
        number: "02",
        title: "Choose your clinician",
        description:
          "Select your preferred dentist or choose 'First available' for the earliest open slot.",
      },
      {
        number: "03",
        title: "Select a live slot",
        description:
          "Pick from genuinely available appointments in our live schedule with instant reservation.",
      },
      {
        number: "04",
        title: "Instant confirmation",
        description:
          "Receive immediate SMS and email confirmation with a calendar file and digital intake form.",
      },
    ],
    note: "Plans change: reschedule or cancel anytime up to 24 hours before your visit directly from your phone.",
  },
  services: {
    title: "Clinical treatments & care",
    subtitle: "Preventive, restorative, and aesthetic dentistry delivered with modern precision.",
  },
  dentists: {
    title: "Our clinical team",
    subtitle: "Hospital-trained clinicians dedicated to gentle, conversational care.",
    text: "Every patient is unique. You can choose to see the same trusted clinician for continuity of care, or select our first available specialist for urgent visits.",
    cta: {
      label: "Meet the clinical team",
      href: "/dentists",
    },
    list: [
      {
        id: "jenkins",
        name: "Dr. Sarah Jenkins",
        credentials: "BDS (Hons) London, MFDS RCS",
        role: "Principal Dentist & Clinical Director",
        specialty: "Preventive Care, Aesthetic Restorations & Dental Anxiety",
        experience: "14+ years experience",
        availability: "Mon, Tue, Thu",
        image: "/dentists/sarah-jenkins.jpg",
      },
      {
        id: "vance",
        name: "Dr. Marcus Vance",
        credentials: "DDS, MSc Implantology (GDC Spec.)",
        role: "Restorative & Implant Surgeon",
        specialty: "Single & Full-Arch Implants, Bone Grafting & Complex Rehab",
        experience: "16+ years experience",
        availability: "Tue, Wed, Fri",
        image: "/dentists/marcus-vance.jpg",
      },
      {
        id: "chen",
        name: "Dr. Amara Chen",
        credentials: "BDS Bristol, Dip Clear Aligners",
        role: "Cosmetic & Orthodontic Associate",
        specialty: "Invisalign®, Airflow® Stain Removal & Smile Design",
        experience: "9+ years experience",
        availability: "Mon, Wed, Sat",
        image: "/dentists/amara-chen.jpg",
      },
    ],
  },
  account: {
    title: "Your patient portal",
    summary:
      "Manage all aspects of your dental health online. View upcoming visits, access digital treatment summaries, and handle intake forms at home.",
    items: [
      "Review upcoming and past appointment records",
      "Seamless self-service rescheduling and cancellation",
      "Fast paperless medical history check-in prior to arrival",
      "Download itemized receipts for private health insurance claims",
    ],
  },
  clinicStandard: {
    badge: "The ClinicQ Standard",
    title: "A calm, unhurried patient experience",
    statement:
      "We founded ClinicQ to eliminate the sterile, rushed atmosphere common in traditional dental practices. Here, appointments start on time, your questions are listened to, and every procedure is gentle and clearly explained.",
    pillars: [
      {
        title: "Calm, Anxiety-Aware Atmosphere",
        summary:
          "Quiet private treatment suites, warm lighting, noise-canceling headphones, and gentle anesthetic techniques.",
      },
      {
        title: "Transparent, Itemized Treatment",
        summary:
          "Clear printed treatment options with exact costs before any clinical work commences. No hidden fees ever.",
      },
      {
        title: "Low-Radiation Digital Scanners",
        summary:
          "State-of-the-art 3D intraoral imaging replaces uncomfortable impression trays with pinpoint accuracy.",
      },
      {
        title: "Zero Waiting Room Delays",
        summary:
          "We intentionally schedule generous buffers between visits so your clinician is ready when you arrive.",
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    subtitle: "Everything you need to know about booking, visits, and insurance.",
    items: [
      {
        question: "Do I need an account before booking?",
        answer:
          "No pre-registration is needed. You can check available slots and services freely. Your patient profile is created automatically when you confirm your first visit.",
      },
      {
        question: "Can I reschedule or cancel my appointment?",
        answer:
          "Yes. You can modify or cancel your booking through the link in your confirmation email or via your patient portal up to 24 hours prior to your visit with no cancellation fee.",
      },
      {
        question: "Do you accept private dental insurance?",
        answer:
          "Yes. We accept all major private health insurance providers (Bupa, AXA, Aviva, WPA, etc.) and provide itemized receipt statements with standard dental codes for instant claiming.",
      },
      {
        question: "What happens during my first check-up visit?",
        answer:
          "Your 45-minute new patient assessment includes low-dose digital 3D scans, full gum health staging, bite evaluation, oral cancer screening, and an unhurried consultation to answer all questions.",
      },
    ],
  },
};
