import { Droplets, Flower2, Heart, Sparkles, Leaf, Wind } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import treatmentBg from "@/assets/hero-treatment.jpg";

const treatments = [
  {
    icon: Droplets,
    title: "Panchakarma Therapy",
    description: "Complete detoxification and rejuvenation through five traditional cleansing procedures for deep healing and balance.",
  },
  {
    icon: Flower2,
    title: "Abhyanga Massage",
    description: "Traditional full body massage with warm herbal oils to improve circulation and release deep-seated tension.",
  },
  {
    icon: Heart,
    title: "Shirodhara Treatment",
    description: "Continuous stream of warm oil on the forehead to calm the mind, balance the nervous system, and promote deep relaxation.",
  },
  {
    icon: Sparkles,
    title: "Therapeutic Basti",
    description: "Specialized treatments including Kati, Greeva, and Janu Basti for targeted pain relief and joint healing.",
  },
  {
    icon: Leaf,
    title: "Herbal Therapies",
    description: "Udvartana, Elakizhi, and Njavara Kizhi using traditional herbal preparations for holistic wellness and vitality.",
  },
  {
    icon: Wind,
    title: "Wellness Packages",
    description: "Comprehensive care packages combining multiple therapies for prenatal, postnatal, and lifestyle wellness needs.",
  },
];

export const TreatmentsSection = () => {
  return (
    <section 
      aria-labelledby="treatments-heading" 
      className="relative py-16 md:py-24 bg-background overflow-hidden"
    >
      {/* Background Image - Absolute positioned on the right */}
      <div className="absolute top-0 md:top-16 bottom-0 right-0 w-full md:w-[52%] pointer-events-none">
        <img
          src={treatmentBg}
          alt="Ayurvedic therapy session showing traditional treatment methods"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover rounded-s-2xl md:rounded-none md:rounded-l-2xl shadow-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-background/30 via-background/50 to-background/95 md:to-background/0" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4">
        <div className="max-w-md md:max-w-lg">
          <h2 
            id="treatments-heading" 
            className="text-3xl md:text-5xl font-heading text-foreground mb-4 text-center md:text-left"
          >
            Most Popular Treatments
          </h2>
          <p className="text-base md:text-lg text-primary md:text-muted-foreground leading-relaxed mb-8 max-w-sm md:max-w-md text-center md:text-left mx-auto md:mx-0">
            Your care is shaped by our highly experienced team of doctors and therapists who work together to ensure you walk out feeling healed.
          </p>
        </div>

        {/* Treatment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl md:max-w-2xl">
          {treatments.map((treatment) => {
            const Icon = treatment.icon;
            return (
              <div
                key={treatment.title}
                className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="mt-3 text-lg font-heading text-foreground">
                  {treatment.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {treatment.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* What Makes Us Unique - Animated Scroll */}
        <div className="mt-16 overflow-hidden">
          <h3 className="text-xl md:text-2xl font-heading text-foreground mb-6 max-w-md">
            What Makes Our Treatments Unique
          </h3>
          <div className="relative -z-10">
            <div className="flex gap-6 animate-scroll-fast" style={{ willChange: 'transform' }}>
              <div className="flex gap-6">
                {[
                  "Doctor-guided classical and proprietary treatments with personalised and authentic Kerala Ayurveda products for maximum benefits",
                  "Oils heated to the optimal temperatures - the way body accepts best",
                  "Chaturhasta Abhyanga - two therapists, four hands for deeper relaxation",
                  "Guided therapeutic positions - for promoting balanced circulation and head to toe healing",
                  "Gentle finishing ritual - to leave you grounded and refreshed - and prevent any post treatment issues"
                ].map((point, index) => (
                  <div
                    key={`g1-${index}`}
                    className="flex-shrink-0 w-64 bg-card/50 border border-border/50 rounded-lg px-5 py-4 backdrop-blur-sm"
                  >
                    <p className="text-sm text-foreground leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex gap-6" aria-hidden="true">
                {[
                  "Doctor-guided classical and proprietary treatments with personalised and authentic Kerala Ayurveda products for maximum benefits",
                  "Oils heated to the optimal temperatures - the way body accepts best",
                  "Chaturhasta Abhyanga - two therapists, four hands for deeper relaxation",
                  "Guided therapeutic positions - for promoting balanced circulation and head to toe healing",
                  "Gentle finishing ritual - to leave you grounded and refreshed - and prevent any post treatment issues"
                ].map((point, index) => (
                  <div
                    key={`g2-${index}`}
                    className="flex-shrink-0 w-64 bg-card/50 border border-border/50 rounded-lg px-5 py-4 backdrop-blur-sm"
                  >
                    <p className="text-sm text-foreground leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <CTAButton align="left" />
      </div>
    </section>
  );
};