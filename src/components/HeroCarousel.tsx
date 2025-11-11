import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ContactOptionsModal } from "@/components/ContactOptionsModal";
import heroClinic from "@/assets/hero-clinic-interior.jpg";
import heroTreatment from "@/assets/hero-treatment.jpg";
import heroHerbs from "@/assets/hero-herbs.jpg";

const slides = [
  {
    image: heroClinic,
    alt: "Serene Kerala Ayurveda clinic interior with traditional ambiance",
  },
  {
    image: heroTreatment,
    alt: "Authentic Ayurvedic massage therapy in progress",
  },
  {
    image: heroHerbs,
    alt: "Traditional Ayurvedic herbs and natural healing ingredients",
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showContactOptions, setShowContactOptions] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto max-w-7xl px-4">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading text-primary-foreground mb-6 drop-shadow-lg leading-tight">
            Experience Authentic Kerala Ayurveda - in Indiranagar
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/95 mb-8 drop-shadow-md">
            Traditional healing wisdom meets personalized care for your complete wellness journey
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg text-base md:text-lg px-8 py-6 hover-scale"
            >
              Book Your Consultation
            </Button>
            <Button
              onClick={() => setShowContactOptions(true)}
              size="lg"
              variant="outline"
              className="bg-white/10 text-primary-foreground border-primary-foreground/20 hover:bg-white/20 text-base md:text-lg px-8 py-6"
            >
              Talk to Us
            </Button>
          </div>
          
          <ContactOptionsModal 
            open={showContactOptions} 
            onOpenChange={setShowContactOptions} 
          />
          
          <div className="flex flex-wrap gap-4 md:gap-6 mt-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-foreground" />
              <span className="text-primary-foreground text-sm md:text-base font-medium">
                For Every Age & Concern
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-foreground" />
              <span className="text-primary-foreground text-sm md:text-base font-medium">
                Treatment for the Root Causes
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-foreground" />
              <span className="text-primary-foreground text-sm md:text-base font-medium">
                Healing Mind, Body, and Soul
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-foreground" />
              <span className="text-primary-foreground text-sm md:text-base font-medium">
                22 Clinics Across India
              </span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};