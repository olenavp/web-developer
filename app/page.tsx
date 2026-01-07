import { HeroSection } from "@/components/hero-section"
import { ProcessSection } from "@/components/process-section"
import { WhySection } from "@/components/why-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { ClientsProblemsSection } from "@/components/client-problem-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ProjectsSection } from "@/components/projects-section"

export default function Home() {

  return (
    <div className="min-h-screen">
      <HeroSection />
      <main>
        <section className="section-subtle-1">
          <ClientsProblemsSection />
        </section>

        <section className="section-subtle-2">
          <ProcessSection />
        </section>

        <section className="section-subtle-3">
          <WhySection />
        </section>

        <section className="section-projects">
          <ProjectsSection />
        </section>

        <section className="section-clean">
          <TestimonialsSection />
          <FAQSection />
        </section>

        <section className="section-contact">
          <ContactSection />
        </section>
      </main>
    </div>
  )
}
