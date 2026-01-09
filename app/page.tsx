import {
  ClientsProblemsSection,
  ContactSection,
  FAQSection,
  HeroSection,
  ProcessSection,
  ProjectsSection,
  TechLine,
  TestimonialsSection,
  WhySection,
} from '@/components/home-page-sections';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <main>
        <TechLine />
        <ClientsProblemsSection />
        <ProcessSection />
        <WhySection />
        <ProjectsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
    </div>
  );
}
