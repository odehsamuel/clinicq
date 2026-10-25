// Dental services catalog for ClinicQ Dental Studio
// Authentic clinical services with realistic timelines and care details

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
