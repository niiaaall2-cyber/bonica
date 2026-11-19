/**
 * Bonica — site content.
 * Everything the clinic may want to edit lives in this file.
 * Fields marked TODO are left empty on purpose: the UI hides them until real details are supplied.
 */

export const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const clinic = {
  name: 'Bonica',
  fullName: 'Bonica Aesthetic Clinic',
  descriptor: 'Ayurvedic Skin & Hair Clinic',
  doctor: 'Dr. Jasla P',
  doctorRole: 'Ayurvedic Physician',
  phone: '+919847291010',
  phoneDisplay: '+91 98472 91010',
  whatsapp: '919847291010',
  email: 'bonicaaestheticclinic@gmail.com',
  hours: 'Monday – Saturday',
  hoursNote: 'By appointment only',
  address: 'SkyMall, Edarikode, Kottakkal, Keralam 676501',
  mapsUrl: 'https://maps.app.goo.gl/NsF7UK16GLdip1fDA',
  // TODO: add credentials once confirmed by Dr. Jasla P, e.g. ['BAMS', 'Reg. No. 12345 — TCMC']
  credentials: [] as string[],
};

// TODO: add each doctor's role/qualifications once confirmed (shown only when filled in).
export const doctors = [
  { id: 'jasla', name: 'Dr. Jasla P', role: 'Ayurvedic Physician', photo: '/team/dr-jasla-p.jpg' },
  { id: 'farsana', name: 'Dr. Farsana', role: '', photo: '/team/dr-farsana.jpg' },
];

export const whatsappLink = (text: string) =>
  `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(text)}`;

export const images = {
  hero: '1767884022240-b91fb555495a',
  heroAlt: 'Woman with eyes closed, touching her face in warm natural light',
  leaf: '1561058123-af961c9cfb94',
  doctor: '1765691622563-a57c825c8223',
  closing: '1768729340804-dd94f6dd612e',
};

export const concerns = {
  skin: [
    'Acne and breakouts',
    'Pigmentation and melasma',
    'Eczema and dermatitis',
    'Dull, uneven texture',
    'Early signs of ageing',
  ],
  hair: [
    'Hair fall and thinning',
    'Dandruff and itchy scalp',
    'Premature greying',
    'Dry or flaking scalp',
    'Shedding after stress or illness',
  ],
};

export interface Treatment {
  id: string;
  title: string;
  summary: string;
  body: string;
  method: string;
  includes: string[];
  image: string;
  imageAlt: string;
}

export const treatments: Treatment[] = [
  {
    id: 'consultation',
    title: 'Consultation',
    summary: 'Where every plan starts.',
    body: 'A one-to-one appointment with Dr. Jasla P. We look at your skin or scalp, but also at sleep, digestion, diet, stress and medical history — the things that usually decide whether a treatment works.',
    method: 'Prakriti (constitution) and Vikriti (current imbalance) assessment, pulse examination and a review of your daily routine.',
    includes: ['Constitution assessment', 'Diet & routine guidance', 'Prescription, if needed'],
    image: '1785248197578-62b9b9ef2338',
    imageAlt: 'Wooden cabinet of glass jars filled with dried herbs',
  },
  {
    id: 'skin',
    title: 'Skin therapy',
    summary: 'For acne, pigmentation, eczema and dull skin.',
    body: 'Topical treatments and internal medicines prescribed together, so the skin is calmed on the surface while the cause is addressed underneath. No bleaching agents, no aggressive peels.',
    method: 'Herbal lepas (medicated pastes), herbal steam and classical oils, paired with blood-purifying internal formulations.',
    includes: ['Herbal lepas', 'Herbal steam', 'Classical oils', 'Internal medicines'],
    image: '1693004927824-f2623bbedc8b',
    imageAlt: 'Close-up of a woman applying cream to her cheek',
  },
  {
    id: 'hair',
    title: 'Hair & scalp therapy',
    summary: 'For hair fall, dandruff, greying and scalp conditions.',
    body: 'Hair problems are rarely just about the hair. We treat the scalp directly and support the body from within, with a plan you can keep up at home between visits.',
    method: 'Shiro-abhyanga (medicated oil head massage), herbal scalp packs and internal rejuvenating medicines.',
    includes: ['Medicated oil head massage', 'Herbal scalp packs', 'Internal medicines'],
    image: '1747398690600-ffe8ecda9df1',
    imageAlt: 'A wooden comb drawn through long dark hair',
  },
  {
    id: 'medicines',
    title: 'Ayurvedic medicines',
    summary: 'Classical formulations, prescribed and dispensed here.',
    body: 'Lasting change in skin and hair usually needs support from within. Medicines are prescribed after consultation and adjusted as you progress.',
    method: 'Classical kashayams, arishtams, ghritams and churnams, prepared according to the Ayurvedic pharmacopoeia.',
    includes: ['Kashayams', 'Arishtams', 'Ghritams', 'Churnams'],
    image: '1768729340804-dd94f6dd612e',
    imageAlt: 'Hands grinding ingredients in a small bowl',
  },
];

export const steps = [
  {
    title: 'Consult',
    body: 'Meet Dr. Jasla P and talk through your skin or hair concern.',
  },
  {
    title: 'Understand',
    body: 'Your constitution and current imbalance are assessed.',
  },
  {
    title: 'Treat',
    body: 'A plan combining therapy, medicines and guidance on diet and routine.',
  },
  {
    title: 'Review',
    body: 'Follow-up visits as needed to adjust your plan.',
  },
];

export interface Product {
  id: string;
  type: string;
  name: string;
  description: string;
  note: string;
  image: string;
  imageAlt: string;
}

// TODO: replace generic names with the clinic's own formulation names where applicable.
export const products: Product[] = [
  {
    id: 'oils',
    type: 'Hair & scalp',
    name: 'Medicated oils',
    description: 'Herbs slow-cooked into sesame or coconut oil by the classical Taila Paka method.',
    note: 'Available at the clinic',
    image: '1608571702600-5a5419d31475',
    imageAlt: 'Amber glass dropper bottle on a marble surface',
  },
  {
    id: 'lepas',
    type: 'Skin',
    name: 'Herbal face lepas',
    description: 'Finely milled sandalwood, manjistha and lodhra, blended to suit your skin.',
    note: 'Prescribed after consultation',
    image: '1768729340164-7d83fe18384d',
    imageAlt: 'Turmeric powder with dried roots',
  },
  {
    id: 'kashayams',
    type: 'Internal',
    name: 'Kashayams',
    description: 'Concentrated herbal decoctions for inflammation, heat and blood purification.',
    note: 'Prescription only',
    image: '1590518563786-901882bf6f82',
    imageAlt: 'Glass jar of dark herbal decoction',
  },
  {
    id: 'masks',
    type: 'Hair & scalp',
    name: 'Scalp packs',
    description: 'Bhringraj, amla and brahmi, used in clinic or as guided treatments at home.',
    note: 'Available at the clinic',
    image: '1492552181161-62217fc3076d',
    imageAlt: 'Oil being poured into a stone mortar of herbs',
  },
];

export const faqs = [
  {
    q: 'Do I need a consultation before starting treatment?',
    a: 'Yes. Every treatment and medicine at Bonica is prescribed for the individual, so the first step is always a consultation with Dr. Jasla P.',
  },
  {
    q: 'How soon will I see results?',
    a: 'Results vary from person to person. Dr. Jasla P will discuss what to expect for your concern at your consultation.',
  },
  {
    q: 'Can I take Ayurvedic medicines alongside my current medication?',
    a: 'Please tell us about any medicines you are currently taking during your consultation, so your treatment can be planned safely.',
  },
  {
    q: 'Do you use chemical peels or bleaching agents?',
    a: 'No. Treatments use herbal pastes, medicated oils and classical formulations only.',
  },
  {
    q: 'How do I book?',
    a: 'Send a request through this site, message us on WhatsApp or call. We will confirm a time with you directly.',
  },
];
