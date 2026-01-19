import { Bone, Heart, Sparkles, Activity, Brain, Users, Baby, Wind, Droplets } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";

const conditions = [
  { icon: Bone, title: "Skeletal and Muscular Health" },
  { icon: Heart, title: "Gut Health" },
  { icon: Sparkles, title: "Skin and Hair" },
  { icon: Activity, title: "Metabolic Disorders and Diabetes" },
  { icon: Brain, title: "Stress Management and Hypertension" },
  { icon: Users, title: "Women's Health and Wellness" },
  { icon: Baby, title: "Reproductive Health and Fertility Support" },
  { icon: Wind, title: "Respiratory and Immune Wellness" },
  { icon: Droplets, title: "Liver and Kidney Health" },
];

export const ConditionsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-4">
            Conditions We Support
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {conditions.map((condition, index) => {
            const Icon = condition.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border flex flex-col items-center text-center"
              >
                <div className="bg-accent/10 text-accent w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-heading text-accent">
                  {condition.title}
                </h3>
              </div>
            );
          })}
        </div>

        <CTAButton />
      </div>
    </section>
  );
};
