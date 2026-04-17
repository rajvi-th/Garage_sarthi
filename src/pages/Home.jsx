import React from 'react';
import Header from '../components/common/Header';
import Hero from '../components/Hero';
import DashboardFeatures from '../components/DashboardFeatures';
import SmartDashboard from '../components/SmartDashboard';
import IndustrialBenefits from '../components/IndustrialBenefits';
import FAQSection from '../components/FAQSection';
import AppPromotion from '../components/AppPromotion';
import ContactSection from '../components/ContactSection';
import Footer from '../components/common/Footer';
import ScrollToTop from '../components/common/ScrollToTop';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <DashboardFeatures />
        <SmartDashboard />
        <IndustrialBenefits />
        <AppPromotion />
        <FAQSection />
        <ContactSection />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
