import { useState, useEffect } from "react";
import { Star, Award, Users, Heart, Brain, Baby, Bone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { CTAButton } from "@/components/CTAButton";
import testimonialsBg from "@/assets/testimonials-bg-family.jpg";

const testimonials = [
  {
    name: "Meera Sharma",
    condition: "PCOS Treatment",
    text: "After years of struggling, the personalized Ayurvedic treatment helped me regain balance. The doctors truly understand the root cause approach.",
    icon: Heart,
  },
  {
    name: "Arjun Patel",
    condition: "Stress Management",
    text: "The Panchakarma therapy was transformative. I feel rejuvenated and the chronic stress that plagued me for years has significantly reduced.",
    icon: Brain,
  },
  {
    name: "Divya Menon",
    condition: "Postnatal Care",
    text: "The postnatal care package was a blessing. Traditional treatments combined with modern care helped me recover beautifully after childbirth.",
    icon: Baby,
  },
  {
    name: "Vikram Singh",
    condition: "Joint Pain Relief",
    text: "Years of joint pain made my life difficult. The authentic Kerala Ayurveda treatments have given me my mobility back. Truly grateful!",
    icon: Bone,
  },
];

const credentials = [
  { icon: Star, label: "4.9/5 on Google", value: "500+ Reviews" },
  { icon: Award, label: "75+ Years", value: "Excellence in Care" },
  { icon: Users, label: "10,000+", value: "Patients Treated" },
];

export const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-12 pb-16 md:pt-16 md:pb-24 px-4 relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: `url(${testimonialsBg})`, backgroundPosition: 'center 35%' }}
      />
      <div className="absolute inset-0 bg-white/85" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-4">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Real stories of healing and transformation
          </p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          {/* Credentials - Left Side */}
          <div className="flex flex-col gap-4 md:col-span-2 order-2 md:order-1">
            {credentials.map((cred, index) => {
              const Icon = cred.icon;
              return (
                <div
                  key={index}
                  className="text-center p-4 md:p-6 rounded-lg bg-primary shadow-[var(--shadow-card)] hover:shadow-xl transition-all"
                >
                  <div className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 text-white mb-2 md:mb-4">
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <p className="text-lg md:text-2xl font-heading text-white mb-1">
                    {cred.value}
                  </p>
                  <p className="text-xs md:text-sm text-white/80">{cred.label}</p>
                </div>
              );
            })}
          </div>

          {/* Testimonials - Right Side */}
          <div className="md:col-span-3 order-1 md:order-2">
            <Card className="p-8 md:p-12 shadow-[var(--shadow-card)] relative overflow-visible border-2 border-primary" style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}>
              {/* Icon on border - changes with current testimonial */}
              {testimonials.map((testimonial, index) => {
                const TestimonialIcon = testimonial.icon;
                return (
                  <div
                    key={`icon-${index}`}
                    className={`absolute -top-6 right-12 w-12 h-12 rounded-full bg-primary border-4 border-background flex items-center justify-center shadow-lg transition-opacity duration-500 ${
                      index === currentTestimonial ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <TestimonialIcon className="w-6 h-6 text-white" />
                  </div>
                );
              })}
              
              <div className="absolute top-4 left-4 text-6xl text-primary/10 font-heading">"</div>
              <div className="relative">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`transition-opacity duration-500 ${
                      index === currentTestimonial ? "opacity-100" : "opacity-0 absolute inset-0"
                    }`}
                  >
                    <p className="text-lg md:text-xl text-foreground text-center mb-6 italic">
                      {testimonial.text}
                    </p>
                    <div className="text-center">
                      <p className="font-heading text-xl text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-muted-foreground">{testimonial.condition}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentTestimonial
                      ? "bg-primary w-6"
                      : "bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        <CTAButton />
      </div>
    </section>
  );
};