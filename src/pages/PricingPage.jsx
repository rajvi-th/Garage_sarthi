import React, { useState, useEffect, useMemo } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import PricingHeader from '../components/pricing/PricingHeader';
import PricingTabs from '../components/pricing/PricingTabs';
import PricingCard from '../components/pricing/PricingCard';
import PricingWalletTopup from '../components/pricing/PricingWalletTopup';
import PricingComparisonTable from '../components/pricing/PricingComparisonTable';
import PricingFeaturesLayout from '../components/pricing/PricingFeaturesLayout';
import PricingAccordionFeatures from '../components/pricing/PricingAccordionFeatures';
import LifetimeInterestModal from '../components/pricing/LifetimeInterestModal';
import { subscriptionApi } from '../api/subscription';

export default function PricingPage() {
  const [plans, setPlans] = useState([]);
  const [creditPlans, setCreditPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPlanId, setSelectedPlanId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const [plansData, creditsData] = await Promise.all([
          subscriptionApi.getActivePlans(),
          subscriptionApi.getActiveCreditPlans()
        ]);

        if (plansData.success) {
          const sorted = plansData.data.sort((a, b) => {
            if (a.name.toLowerCase().includes("life")) return 1;
            if (b.name.toLowerCase().includes("life")) return -1;
            return a.durationMonths - b.durationMonths;
          });
          setPlans(sorted);
          const popularPlan = sorted.find(p => p.isPopular);
          setSelectedPlanId(popularPlan?._id || sorted[0]?._id);
        }
        if (creditsData.success) {
          setCreditPlans(creditsData.data);
        }
      } catch (error) {
        console.error("Error fetching pricing data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const displayPlans = useMemo(() => {
    if (plans.length === 0 || !selectedPlanId) return [];
    const idx = plans.findIndex(p => p._id === selectedPlanId);
    if (idx === -1) return plans.slice(0, 3);
    const total = plans.length;
    return [plans[(idx - 1 + total) % total], plans[idx], plans[(idx + 1) % total]];
  }, [plans, selectedPlanId]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pb-20">
        <div className=" mx-auto">
          <PricingHeader />

          <PricingTabs 
            plans={plans} 
            selectedPlanId={selectedPlanId} 
            setSelectedPlanId={setSelectedPlanId} 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center container mx-auto px-4">
            {displayPlans.map((plan) => (
              <PricingCard 
                key={plan._id} 
                plan={plan} 
                isTarget={plan._id === selectedPlanId} 
                onContactUs={() => setIsModalOpen(true)}
              />
            ))}
          </div>

          <PricingWalletTopup 
            creditPlans={creditPlans} 
          />

          <PricingComparisonTable plans={plans} />
          
          <PricingFeaturesLayout 
          className="bg-[#F6F6F6]"
           />
          
          <PricingAccordionFeatures
           />
        </div>
      </main>
      <Footer />
      <LifetimeInterestModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
