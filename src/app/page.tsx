import dynamic from 'next/dynamic';

// Dynamically import components to handle any potential client/server component issues
const HeroSection = dynamic(() => import('@/components/sections/HeroSection'));
const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'));
const PricingSection = dynamic(() => import('@/components/sections/PricingSection'));
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'));
const LocationSection = dynamic(() => import('@/components/sections/LocationSection'));

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <LocationSection />
    </>
  );
}
