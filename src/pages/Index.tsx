import { HeroCarousel } from "@/components/HeroCarousel";
import { ClinicsSection } from "@/components/ClinicsSection";
import { ConditionsSection } from "@/components/ConditionsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { TreatmentsSection } from "@/components/TreatmentsSection";
import { ApproachSection } from "@/components/ApproachSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <ConditionsSection />
      <ClinicsSection />
      <TestimonialsSection />
      <TreatmentsSection />
      <ApproachSection />
      <ContactSection />
    </main>
  );
};

export default Index;