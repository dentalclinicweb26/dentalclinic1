import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustIntro from './components/TrustIntro';
import Treatments from './components/Treatments';
import WhyChooseUs from './components/WhyChooseUs';
import DoctorSection from './components/DoctorSection';
import ReviewsSection from './components/ReviewsSection';
import GallerySection from './components/GallerySection';
import OralHealthEducation from './components/OralHealthEducation';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileQuickBar from './components/MobileQuickBar';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sections = ['home', 'about', 'treatments', 'why-us', 'doctor', 'reviews', 'gallery', 'education', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1917] flex flex-col selection:bg-[#E8DFD5] selection:text-[#1C1917] overflow-x-hidden">
      {/* Sticky Header Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Page Sections */}
      <main className="flex-1 w-full overflow-x-hidden">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Trust & Introduction Section */}
        <TrustIntro />

        {/* 3. Comprehensive Treatments Showcase */}
        <Treatments />

        {/* 4. Why Patients Choose Dentoville */}
        <WhyChooseUs />

        {/* 5. Doctor Profile - Dr. Madhulika Sharma */}
        <DoctorSection />

        {/* 6. Patient Reviews & Authentic 5.0 Google Feedback */}
        <ReviewsSection />

        {/* 7. Clinic Atmosphere & Hygiene Gallery */}
        <GallerySection />

        {/* 8. Seasonal & Daily Oral Health Education */}
        <OralHealthEducation />

        {/* 9. Location, Timings & Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Action Bar */}
      <MobileQuickBar />
    </div>
  );
}
