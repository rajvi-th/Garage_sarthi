import React from 'react';
import Header from './components/common/Header';
import Hero from './components/Hero';
import DashboardFeatures from './components/DashboardFeatures';
import SmartDashboard from './components/SmartDashboard';
import IndustrialBenefits from './components/IndustrialBenefits';
import ContactSection from './components/ContactSection';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <DashboardFeatures />
        <SmartDashboard />
        <IndustrialBenefits />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
