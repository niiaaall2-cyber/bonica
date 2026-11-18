import React, { useCallback, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Concerns, Philosophy } from './components/Philosophy';
import { Treatments } from './components/Treatments';
import { Doctor, Process } from './components/Process';
import { Apothecary, Faq } from './components/Apothecary';
import { Footer, Visit } from './components/Visit';
import { Booking, MobileBar } from './components/Booking';

export default function App() {
  const [booking, setBooking] = useState<{ open: boolean; topic?: string }>({ open: false });
  const openBooking = useCallback((topic?: string) => setBooking({ open: true, topic }), []);
  const closeBooking = useCallback(() => setBooking((b) => ({ ...b, open: false })), []);
  const book = () => openBooking();

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <Header onBook={book} />
      <main id="main">
        <Hero onBook={book} />
        <Philosophy />
        <Concerns onBook={openBooking} />
        <Treatments onBook={openBooking} />
        <Process />
        <Doctor onBook={book} />
        <Apothecary />
        <Faq />
        <Visit onBook={book} />
      </main>
      <Footer />
      <MobileBar onBook={book} hidden={booking.open} />
      <Booking open={booking.open} topic={booking.topic} onClose={closeBooking} />
    </>
  );
}
