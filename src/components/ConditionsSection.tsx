import { Users, ActivitySquare, Bone, Stethoscope, Baby, Brain, Activity, Moon } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
const conditions = [{
  icon: Users,
  title: "PCOS",
  description: "Hormonal balance treatments addressing the root causes of PCOS through personalized Ayurvedic care."
}, {
  icon: ActivitySquare,
  title: "Digestive & Gut Health",
  description: "Comprehensive digestive care addressing indigestion, gut healing, and overall digestive wellness through Ayurvedic principles."
}, {
  icon: Bone,
  title: "Joint Pain",
  description: "Therapeutic treatments to reduce inflammation and restore mobility naturally and effectively."
}, {
  icon: Stethoscope,
  title: "Chronic Conditions",
  description: "Long-term management of chronic ailments through holistic Ayurvedic approaches and lifestyle changes."
}, {
  icon: Baby,
  title: "Maternal Care",
  description: "Comprehensive support for mothers during pregnancy and postpartum with traditional Ayurvedic therapies."
}, {
  icon: Moon,
  title: "Sleep Management",
  description: "Natural solutions to improve sleep quality and address insomnia through Ayurvedic practices and herbs."
}, {
  icon: Brain,
  title: "Stress Management",
  description: "Holistic stress relief through meditation, herbal remedies, and Ayurvedic relaxation therapies."
}, {
  icon: Activity,
  title: "Lifestyle Correction",
  description: "Personalized guidance to transform daily habits and achieve lasting health and vitality."
}];
export const ConditionsSection = () => {
  return <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-4">Conditions We Support</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">Whether you are struggling with a health condition or looking to step up your general wellness, Kerala Ayurveda can help you reach your best self.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((condition, index) => {
          const Icon = condition.icon;
          return <div key={index} className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border">
                <div className="bg-accent/10 text-accent w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-heading text-accent mb-2">
                  {condition.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {condition.description}
                </p>
              </div>;
        })}
        </div>
        
        <CTAButton />
      </div>
    </section>;
};