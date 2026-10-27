// Dental services catalog for ClinicQ Dental Studio
// Authentic clinical services with realistic timelines and care details

export const services = [
  {
    slug: "checkup",
    name: "Comprehensive Check-up & 3D Scans",
    category: "Preventive & Diagnostic",
    summary:
      "Full dental and periodontal examination, digital low-radiation bitewing X-rays, intraoral camera imagery, and oral cancer screening.",
    durationMinutes: 45,
    price: {
      amount: 95,
      currency: "GBP",
    },
    whatToExpect:
      "Your visit begins with a conversational review of your oral health history and any questions you have. We then take low-dose digital radiographs and 3D intraoral scans before conducting a thorough tooth-by-tooth exam and gum assessment. We discuss all findings clearly before outlining any recommended next steps.",
    active: true,
    placeholderFields: ["price"],
  },
  {
    slug: "cleaning",
    name: "Hygiene Therapy & Airflow® Polishing",
    category: "Oral Hygiene",
    summary:
      "Ultrasonic calculus removal, deep periodontal pocket debridement, and stain-lifting Airflow® polishing for a natural finish.",
    durationMinutes: 45,
    price: {
      amount: 85,
      currency: "GBP",
    },
    whatToExpect:
      "The hygienist begins with a gentle periodontal assessment to evaluate gum health and plaque levels. We use calibrated ultrasonic instruments to remove tartar deposits, followed by an Airflow fine-powder spray to lift superficial stains from tea, coffee, or wine without abrading your enamel.",
    active: true,
    placeholderFields: ["price"],
  },
  {
    slug: "fillings",
    name: "Biomimetic Tooth-Colored Fillings",
    category: "Restorative Care",
    summary:
      "Minimally invasive composite resin restorations layered to match your natural enamel texture, shade, and translucency.",
    durationMinutes: 60,
    price: undefined,
    whatToExpect:
      "After local anesthesia is gently placed, decayed or damaged enamel is carefully removed while preserving as much healthy tooth structure as possible. We then layer composite resin in increments, curing each layer with light, before shaping and polishing the restoration to restore your natural bite.",
    active: true,
    placeholderFields: [],
  },
  {
    slug: "whitening",
    name: "Enlighten® In-Studio Whitening",
    category: "Cosmetic Dentistry",
    summary:
      "Precision in-chair LED activation combined with customized home conditioning trays for controlled, even brightening.",
    durationMinutes: 60,
    price: {
      amount: 395,
      currency: "GBP",
    },
    whatToExpect:
      "We begin by recording your baseline tooth shade with a digital shade guide and taking precision impressions or 3D scans for custom-fitted application trays. You will receive clear instructions on using the home conditioning kit, followed by an in-studio session to finalize the treatment.",
    active: true,
    placeholderFields: ["price"],
  },
];

// Preserved for home page backwards compatibility
export const servicesData = {
  viewAllLink: {
    label: "View all dental treatments",
    href: "/services",
  },
  services: [
    {
      id: "checkup",
      name: "Comprehensive Check-up & 3D Scans",
      category: "Preventive & Diagnostic",
      description:
        "Full dental and periodontal examination, digital low-radiation bitewing X-rays, intraoral camera imagery, and oral cancer screening.",
      duration: "45 min",
      idealFor: "Routine 6-monthly reviews & new patients",
      popular: true,
    },
    {
      id: "cleaning",
      name: "Hygiene Therapy & Airflow® Polishing",
      category: "Oral Hygiene",
      description:
        "Gentle ultrasonic calculus removal, deep periodontal pocket debridement, and stain-lifting Airflow® polishing for a natural bright finish.",
      duration: "45 min",
      idealFor: "Gum health, fresh breath & coffee/tea stain removal",
      popular: true,
    },
    {
      id: "fillings",
      name: "Biomimetic Tooth-Colored Fillings",
      category: "Restorative Care",
      description:
        "Minimally invasive composite resin restorations layered to match your natural enamel texture, shade, and translucency.",
      duration: "60 min",
      idealFor: "Minor decay, chipped teeth & replacing old amalgam",
      popular: false,
    },
    {
      id: "whitening",
      name: "Enlighten® In-Studio Whitening",
      category: "Cosmetic Dentistry",
      description:
        "Precision in-chair LED activation combined with customized home conditioning trays, achieving guaranteed Vita shade B1 brightness.",
      duration: "60 min",
      idealFor: "Special events, weddings & long-lasting brightening",
      popular: true,
    },
    {
      id: "aligners",
      name: "Clear Aligner & Smile Assessment",
      category: "Orthodontics",
      description:
        "Digital iTero 3D simulation showing your projected smile transformation, crowding correction plan, and discreet aligner options.",
      duration: "30 min",
      idealFor: "Mild to moderate crowding, spacing & bite alignment",
      popular: false,
    },
    {
      id: "emergency",
      name: "Emergency Toothache & Trauma Relief",
      category: "Urgent Care",
      description:
        "Rapid diagnosis, immediate pain relief, digital imaging, and emergency stabilization for cracked teeth, lost crowns, or acute pulpitis.",
      duration: "30 min",
      idealFor: "Sudden pain, broken restorations & facial dental trauma",
      popular: false,
    },
  ],
};
