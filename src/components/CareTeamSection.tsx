import { useState } from "react";
import { ChevronLeft, ChevronRight, GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const doctors = [
  {
    name: "Dr. Lakshmi Menon",
    qualification: "BAMS, MD (Ayurveda)",
    specialization: "Panchakarma & Women's Health",
    experience: "15 years",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
  },
  {
    name: "Dr. Rajesh Kumar",
    qualification: "BAMS, PhD",
    specialization: "Chronic Disease Management",
    experience: "20 years",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
  },
  {
    name: "Dr. Priya Nair",
    qualification: "BAMS, MS (Ayurveda)",
    specialization: "Rejuvenation & Lifestyle Medicine",
    experience: "12 years",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
  },
];

const therapists = [
  { name: "Ananya Krishnan", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop" },
  { name: "Rohit Nair", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" },
  { name: "Kavya Reddy", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop" },
  { name: "Aditya Sharma", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop" },
];

export const CareTeamSection = () => {
  const [currentDoctor, setCurrentDoctor] = useState(0);

  const nextDoctor = () => {
    setCurrentDoctor((prev) => (prev + 1) % doctors.length);
  };

  const prevDoctor = () => {
    setCurrentDoctor((prev) => (prev - 1 + doctors.length) % doctors.length);
  };

  return (
    <section className="pt-16 md:pt-24 pb-0 px-4 bg-card">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-4">
            Our Expert Care Team
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Experienced practitioners dedicated to your healing journey
          </p>
        </div>

        {/* Doctors Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading text-foreground mb-6 text-center">
            Our Doctors
          </h3>
          <div className="relative max-w-2xl mx-auto">
            <Card className="p-8 shadow-[var(--shadow-card)]">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                  src={doctors[currentDoctor].image}
                  alt={doctors[currentDoctor].name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary"
                />
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-2xl font-heading text-foreground mb-2">
                    {doctors[currentDoctor].name}
                  </h4>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground mb-3">
                    <GraduationCap className="w-4 h-4" />
                    <span>{doctors[currentDoctor].qualification}</span>
                  </div>
                  <p className="text-foreground font-medium mb-2">
                    {doctors[currentDoctor].specialization}
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                    <Award className="w-4 h-4" />
                    <span>{doctors[currentDoctor].experience} of experience</span>
                  </div>
                </div>
              </div>
            </Card>

            <button
              onClick={prevDoctor}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-all shadow-lg"
              aria-label="Previous doctor"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextDoctor}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-all shadow-lg"
              aria-label="Next doctor"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {doctors.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentDoctor(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentDoctor
                    ? "bg-primary w-6"
                    : "bg-border hover:bg-primary/50"
                }`}
                aria-label={`Go to doctor ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Therapists */}
        <div className="bg-white dark:bg-slate-950 -mx-[50vw] left-1/2 relative right-1/2 w-screen px-4 py-12 md:py-16">
          <h3 className="text-2xl font-heading text-foreground mb-6 text-center">
            Our Therapists
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {therapists.map((therapist, index) => (
              <div key={index} className="text-center">
                <div className="aspect-square rounded-lg overflow-hidden shadow-[var(--shadow-card)] hover:shadow-xl transition-all mb-3">
                  <img
                    src={therapist.image}
                    alt={therapist.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="font-heading text-foreground">{therapist.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};