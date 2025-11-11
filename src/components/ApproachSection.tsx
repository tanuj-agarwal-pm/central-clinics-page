import { useState, useEffect, useRef } from "react";
import consultationImg from "@/assets/approach-consultation.jpg";
import planImg from "@/assets/approach-plan.jpg";
import careImg from "@/assets/approach-care.jpg";
import lifestyleImg from "@/assets/approach-lifestyle.jpg";
const steps = [{
  image: consultationImg,
  title: "Consultation",
  description: "Meet with our experienced doctor who diagnoses the root cause through traditional Ayurvedic assessment methods including pulse diagnosis and dosha evaluation."
}, {
  image: planImg,
  title: "Personalized Plan",
  description: "Based on your unique constitution and imbalances, the doctor prescribes customized treatments and medicines tailored to your specific needs."
}, {
  image: careImg,
  title: "Authentic Care",
  description: "Experience treatments using original Kerala Ayurveda products at our wellness centers and begin your healing journey with us."
}, {
  image: lifestyleImg,
  title: "Integrated in your life",
  description: "Receive personalized food and routine guidance that seamlessly integrates into your daily life, ensuring lasting wellness through sustainable lifestyle changes."
}];
export const ApproachSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    // Only auto-scroll on mobile within the container
    if (window.innerWidth < 768 && scrollContainerRef.current && stepRefs.current[activeStep]) {
      const container = scrollContainerRef.current;
      const element = stepRefs.current[activeStep];
      if (element) {
        const scrollLeft = element.offsetLeft - container.offsetWidth / 2 + element.offsetWidth / 2;
        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth"
        });
      }
    }
  }, [activeStep]);
  return <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-muted overflow-visible">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-4">
            Our Approach
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Traditional Kerala Ayurveda wisdom combined with personalized care
          </p>
        </div>

        <div className="relative py-10 md:py-12 overflow-visible">
          {/* Connection line for desktop */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
          
          {/* Connection line for mobile */}
          <div className="md:hidden absolute top-[5.5rem] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent z-0" />

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div ref={scrollContainerRef} className="flex md:grid md:grid-cols-4 gap-8 md:gap-8 overflow-x-auto overflow-y-visible md:overflow-visible snap-x snap-mandatory md:snap-none scrollbar-hide px-8 -mx-8 pt-10 md:pt-6 pb-6">
            {steps.map((step, index) => {
            const isActive = activeStep === index;

            // Unique blob shapes for each step
            const blobShapes = [{
              // Step 1
              active: "rounded-[30%_70%_70%_30%/30%_30%_70%_70%]",
              inactive: "rounded-[35%_65%_65%_35%/35%_35%_65%_65%]"
            }, {
              // Step 2
              active: "rounded-[60%_40%_30%_70%/60%_30%_70%_40%]",
              inactive: "rounded-[55%_45%_35%_65%/55%_35%_65%_45%]"
            }, {
              // Step 3
              active: "rounded-[40%_60%_60%_40%/60%_40%_40%_60%]",
              inactive: "rounded-[45%_55%_55%_45%/55%_45%_45%_55%]"
            }, {
              // Step 4
              active: "rounded-[50%_50%_40%_60%/40%_60%_50%_50%]",
              inactive: "rounded-[48%_52%_45%_55%/45%_55%_48%_52%]"
            }];
            const currentBlobShape = isActive ? blobShapes[index].active : blobShapes[index].inactive;
            return <div key={index} ref={el => stepRefs.current[index] = el} className={`relative transition-all duration-500 ease-in-out snap-center flex-shrink-0 w-[80vw] md:w-auto px-6 scroll-ml-12 scroll-mr-12 overflow-visible transform-gpu isolate ${isActive ? "scale-110" : "scale-100"}`}>
                <div className="flex flex-col items-center text-center">
                  {/* Step number and image */}
                  <div className="relative mb-6">
                    <div className={`overflow-hidden relative z-10 border-4 transition-all duration-500 ease-in-out ${isActive ? `w-36 h-36 border-primary shadow-[0_0_30px_hsla(var(--primary)/0.35)] ${currentBlobShape}` : `w-24 h-24 border-primary shadow-lg ${currentBlobShape}`}`}>
                      <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute top-0 right-0 translate-x-[32%] -translate-y-[32%] md:translate-x-[25%] md:-translate-y-[25%] w-7 h-7 md:w-8 md:h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-heading font-bold text-base md:text-lg z-20">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className={`text-2xl font-heading text-foreground mb-4 transition-all duration-500 ${isActive ? "scale-105" : "scale-100"}`}>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                </div>;
          })}
          </div>
        </div>

        
      </div>
    </section>;
};