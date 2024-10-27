import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Partners />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
    </main>
  );
}