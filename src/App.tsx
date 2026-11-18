import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustIntro } from './components/TrustIntro';
import { AboutDoctor } from './components/AboutDoctor';
import { ServicesSection } from './components/ServicesSection';
import { ProductsSection } from './components/ProductsSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { FloatingActions } from './components/FloatingActions';
import { clinicInfo } from './data/clinicData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceName?: string) => {
    setPreselectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleSelectProductForEnquiry = (productName: string) => {
    const text = `Hello Dr. Jasla P, I am enquiring about "${productName}" available at Bonica Aesthetic Clinic. Could you provide details regarding prescription and usage?`;
    const url = `https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A3021] selection:bg-[#1A3021] selection:text-[#FAF8F5] font-sans">
      {/* Top Bar Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main id="main-content">
        {/* Editorial Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Trust & Clinical Introduction */}
        <TrustIntro />

        {/* About Dr. Jasla P & Clinic Section */}
        <AboutDoctor onOpenBooking={() => handleOpenBooking()} />

        {/* Curated Skin & Hair Services Section */}
        <ServicesSection onSelectServiceForBooking={(service) => handleOpenBooking(service)} />

        {/* Botanical Apothecary & Ayurvedic Medicines */}
        <ProductsSection onSelectProductForEnquiry={handleSelectProductForEnquiry} />

        {/* Editorial Clinic Environment Gallery */}
        <GallerySection />

        {/* Verified Patient Feedback & Clinical Integrity */}
        <TestimonialsSection />

        {/* High-Conversion Contact, Appointments & Google Maps */}
        <ContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Minimal Editorial Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <FloatingActions onOpenBooking={() => handleOpenBooking()} />

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedService={preselectedService}
      />
    </div>
  );
}
