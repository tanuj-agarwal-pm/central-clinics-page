import { HeroCarousel } from "@/components/HeroCarousel";
import { ConditionsSection } from "@/components/ConditionsSection";
import { CareTeamSection } from "@/components/CareTeamSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { TreatmentsSection } from "@/components/TreatmentsSection";
import { ApproachSection } from "@/components/ApproachSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <ConditionsSection />
      <CareTeamSection />
      <TestimonialsSection />
      <TreatmentsSection />
      <ApproachSection />
      <ContactSection />
    </main>
  );
};

export default Index;