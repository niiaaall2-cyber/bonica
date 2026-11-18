/**
 * Bonica Aesthetic Clinic - Master Data Configuration
 * Centralized data structure for Dr. Jasla P and clinic management.
 * All client details, treatment listings, and apothecary items are maintained here.
 */

export interface ClinicInfo {
  name: string;
  tagline: string;
  doctor: string;
  doctorRole: string;
  specialization: string;
  phone: string;
  phoneFormatted: string;
  whatsappNumber: string;
  whatsappLink: string;
  emailPlaceholder: string;
  addressPlaceholder: string;
  consultationHours: string;
  googleMapsQueryUrl: string;
}

export const clinicInfo: ClinicInfo = {
  name: "Bonica Aesthetic Clinic",
  tagline: "Ayurvedic Skin & Hair Care",
  doctor: "Dr. Jasla P",
  doctorRole: "Ayurvedic Physician & Aesthetic Practitioner",
  specialization: "Ayurvedic Skin & Hair Care",
  phone: "+919847291010",
  phoneFormatted: "+91 98472 91010",
  whatsappNumber: "9847291010",
  whatsappLink: "https://wa.me/919847291010",
  emailPlaceholder: "bonicaclinic@gmail.com", // [CLIENT: Update with official email address]
  addressPlaceholder: "Bonica Aesthetic Clinic, [Confirmed Clinic Street Address, Landmark & City to be provided by client]",
  consultationHours: "Monday – Saturday: By Prior Appointment",
  googleMapsQueryUrl: "https://maps.google.com/?q=Bonica+Aesthetic+Clinic",
};

export interface ServiceItem {
  id: string;
  category: "Skin Care" | "Hair Care" | "Internal Wellness" | "Consultation";
  title: string;
  subtitle: string;
  description: string;
  ayurvedicApproach: string;
  targetConcerns: string[];
  isPlaceholderDataNote?: boolean;
}

export const initialServices: ServiceItem[] = [
  {
    id: "ayurvedic-skin-therapy",
    category: "Skin Care",
    title: "Ayurvedic Skin Care & Complexion Therapy",
    subtitle: "Customized botanical protocols for dermatological harmony",
    description: "Holistic topical and internal skin therapies tailored to restore the natural dermal barrier, calm systemic inflammation, and restore natural radiance.",
    ayurvedicApproach: "Rooted in Vata-Pitta-Kapha diagnostic assessment (Prakriti & Vikriti), utilizing traditional medicinal lepas (herbal pastes), herbal steams, and classical oil preparations.",
    targetConcerns: [
      "Acne & Blemish Management",
      "Hyperpigmentation & Melasma",
      "Eczema & Dermatitis Support",
      "Early Ageing & Dermal Elasticity",
      "Dull & Depleted Skin Texture"
    ]
  },
  {
    id: "ayurvedic-hair-therapy",
    category: "Hair Care",
    title: "Trichology & Ayurvedic Scalp Restoration",
    subtitle: "Deep follicular nourishment through authentic classical formulations",
    description: "Targeted scalp conditioning and hair restoration addressing hair thinning, premature greying, and scalp health through herbalized medicated oils and traditional therapies.",
    ayurvedicApproach: "Combines Shiro-abhyanga (medicinal oil head massage), custom herbal scalp packs (Thala pothichil/Lepas), and classical internal rejuvenators to pacify aggravated Pitta and Vata at the hair root.",
    targetConcerns: [
      "Chronic Hair Fall & Thinning",
      "Dandruff & Scalp Irritation",
      "Premature Greying Support",
      "Scalp Dryness & Psoriasis",
      "Post-Stress Follicular Weakness"
    ]
  },
  {
    id: "clinical-prakriti-consultation",
    category: "Consultation",
    title: "In-Depth Ayurvedic Clinical Consultation",
    subtitle: "One-on-one diagnostic consultation with Dr. Jasla P",
    description: "A comprehensive clinical evaluation analyzing your biological constitution (Prakriti), current systemic imbalances (Vikriti), lifestyle patterns, and digestive fire (Agni).",
    ayurvedicApproach: "Traditional Nadi (pulse), Rogi Pariksha (patient examination), and dietary review to formulate a personalized skin and hair healing blueprint.",
    targetConcerns: [
      "Individual Constitution Analysis",
      "Personalized Diet & Dinacharya Plan",
      "Custom Herbal Prescription Blueprint",
      "Long-term Preventive Care"
    ]
  },
  {
    id: "botanical-internal-medicines",
    category: "Internal Wellness",
    title: "Classical Ayurvedic Medicines & Formulations",
    subtitle: "Authentic pharmacy-grade preparations for internal purification",
    description: "Because genuine skin and hair wellness originates from deep within, the clinic dispenses authentic Ayurvedic medicines to support blood purification (Rakta Shodhana) and liver metabolism.",
    ayurvedicApproach: "Certified classical Arishtas, Kashayams, Ghritams, and Churnams prepared in accordance with classical Ayurvedic pharmacopoeia.",
    targetConcerns: [
      "Rakta Dushti (Blood Purification)",
      "Gut Microbiome & Agni Balance",
      "Hormonal Equilibrium",
      "Stress & Pitta Moderation"
    ]
  }
];

export interface ProductItem {
  id: string;
  name: string;
  category: "Skin Elixir" | "Scalp & Hair" | "Classical Medicine" | "Specialty Lepa";
  classification: string;
  shortDescription: string;
  usageContext: string;
  availability: string;
  placeholderNotice?: string;
}

export const initialProducts: ProductItem[] = [
  {
    id: "ayurvedic-medicated-oils",
    name: "Classical Medicated Hair & Scalp Oils",
    category: "Scalp & Hair",
    classification: "Authentic Ayurvedic Formulation",
    shortDescription: "Hand-crafted medicated oils prepared with active herbs boiled in sesame or coconut base according to traditional Taila Paka Vidhi.",
    usageContext: "Prescribed for nocturnal scalp nourishment, root strengthening, and tension release.",
    availability: "Available at Clinic Dispensing Pharmacy",
    placeholderNotice: "[Client product catalog item: Replace with specific brand or clinic formulation name]"
  },
  {
    id: "botanical-skin-lepas",
    name: "Herbal Facial Lepas & Dermal Powders",
    category: "Skin Elixir",
    classification: "Purifying Botanical Blend",
    shortDescription: "Micro-ground herbal powders containing sandalwood, manjistha, lodhra, and medicinal botanicals for active dermal application.",
    usageContext: "Custom blended with rose water, honey, or medicated milk according to individual skin condition.",
    availability: "Prescribed Post-Consultation",
    placeholderNotice: "[Client product catalog item: Replace with specific clinic formulation name]"
  },
  {
    id: "classical-internal-kashayams",
    name: "Herbal Decoctions & Classical Kashayams",
    category: "Classical Medicine",
    classification: "Internal Ayurvedic Medicine",
    shortDescription: "Concentrated aqueous herbal extracts addressing chronic skin heat, blood toxification, and systemic inflammation.",
    usageContext: "Administered internally under clinical supervision of Dr. Jasla P.",
    availability: "Dispensed on Clinical Prescription",
    placeholderNotice: "[Client product catalog item: Replace with specific classical medicine name]"
  },
  {
    id: "restorative-scalp-treatments",
    name: "Bespoke Herbal Scalp & Hair Masks",
    category: "Specialty Lepa",
    classification: "Nourishing Trichology Blend",
    shortDescription: "Herbal compounds infused with Bhringraj, Amla, Brahmi, and botanical conditioners to restore scalp vitality.",
    usageContext: "Applied as in-clinic or guided home therapeutic treatments.",
    availability: "Available at Clinic",
    placeholderNotice: "[Client product catalog item: Replace with specific formulation name]"
  }
];

export interface GalleryItem {
  id: string;
  title: string;
  category: "Clinic Environment" | "Apothecary" | "Treatment" | "Consultation";
  caption: string;
  aspectRatio: "aspect-[4/3]" | "aspect-[3/4]" | "aspect-[1/1]" | "aspect-[16/9]";
  placeholderLabel: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Serene Consultation Space",
    category: "Clinic Environment",
    caption: "A quiet, contemplative setting designed for personal diagnostic conversations.",
    aspectRatio: "aspect-[4/3]",
    placeholderLabel: "[Client Photo: Clinic Consultation Room Interior]"
  },
  {
    id: "g2",
    title: "Authentic Ayurvedic Apothecary",
    category: "Apothecary",
    caption: "Classical medicines, botanical decoctions, and freshly prepared herbal compounds.",
    aspectRatio: "aspect-[3/4]",
    placeholderLabel: "[Client Photo: Dispensing Pharmacy / Herb Jars]"
  },
  {
    id: "g3",
    title: "Therapeutic Treatment Setting",
    category: "Treatment",
    caption: "Dedicated treatment beds and equipment for traditional skin & hair applications.",
    aspectRatio: "aspect-[1/1]",
    placeholderLabel: "[Client Photo: Treatment Room & Traditional Equipment]"
  },
  {
    id: "g4",
    title: "Medicinal Botanicals & Oils",
    category: "Apothecary",
    caption: "Traditional brass vessels, medicated sesame preparations, and pure plant essences.",
    aspectRatio: "aspect-[4/3]",
    placeholderLabel: "[Client Photo: Botanical Ingredients & Formulations]"
  },
  {
    id: "g5",
    title: "Dr. Jasla P in Practice",
    category: "Consultation",
    caption: "Personalized clinical evaluation and constitution assessment.",
    aspectRatio: "aspect-[3/4]",
    placeholderLabel: "[Client Photo: Dr. Jasla P with Patient Consultation]"
  },
  {
    id: "g6",
    title: "Clinic Welcome & Reception",
    category: "Clinic Environment",
    caption: "A peaceful sanctuary welcoming patients to holistic aesthetic wellness.",
    aspectRatio: "aspect-[16/9]",
    placeholderLabel: "[Client Photo: Clinic Reception & Architecture]"
  }
];
