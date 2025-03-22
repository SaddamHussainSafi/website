import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import StatsSection from '@/components/sections/StatsSection';
import ContactForm from '@/components/sections/ContactForm';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactForm />
    </div>
  );
}
