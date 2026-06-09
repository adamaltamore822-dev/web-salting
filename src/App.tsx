import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-dark-bg selection:bg-neon-blue selection:text-dark-bg">
      {/* Dynamic Headers & Navigation */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Main Sections */}
      <main>
        {/* Energetic Hero Section */}
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Features / Services showcasing trampoline arena, laser tag & VIP birth celebrations */}
        <Features onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Testimonials directly based on real business reviews */}
        <Testimonials />

        {/* FAQ Area answering key safety & calcetines questions */}
        <FAQ />

        {/* Contact info, open hours, location details & mock-map */}
        <ContactSection />
      </main>

      {/* Persistent Footer */}
      <Footer />

      {/* Multi-step Interactive Booking & Calculator Modal */}
      <AnimatePresence>
        {isBookingOpen && (
          <BookingForm isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
