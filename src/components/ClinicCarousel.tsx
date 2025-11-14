import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, ExternalLink, User } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Clinic {
  id: number;
  name: string;
  state: string;
  address: string;
  phone: string;
  mapsUrl: string;
  doctors: { name: string; specialty: string }[];
}

interface ClinicCarouselProps {
  clinics: Clinic[];
  activeIndex: number;
  onIndexChange: (index: number) => void;
  getCleanClinicName: (name: string) => string;
}

export const ClinicCarousel = ({ 
  clinics, 
  activeIndex, 
  onIndexChange,
  getCleanClinicName 
}: ClinicCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      onIndexChange(api.selectedScrollSnap());
    });
  }, [api, onIndexChange]);

  useEffect(() => {
    if (api && api.selectedScrollSnap() !== activeIndex) {
      api.scrollTo(activeIndex);
    }
  }, [activeIndex, api]);

  return (
    <div className="flex flex-col h-full justify-center">
      <Carousel
        setApi={setApi}
        className="w-full"
        plugins={[
          Autoplay({
            delay: 8000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {clinics.map((clinic) => (
            <CarouselItem key={clinic.id}>
              <Card className="border-2">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-primary">
                    {getCleanClinicName(clinic.name)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Doctors Section */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Our Doctors</h4>
                    <div className="space-y-3">
                      {clinic.doctors.map((doctor, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                          <User className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground">{doctor.name}</p>
                            <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3 pt-2">
                    <Button
                      asChild
                      className="w-full"
                      size="lg"
                    >
                      <a href={`tel:${clinic.phone}`}>
                        <Phone className="w-4 h-4 mr-2" />
                        CALL
                      </a>
                    </Button>
                    
                    <Button
                      asChild
                      variant="outline"
                      className="w-full"
                      size="lg"
                    >
                      <a 
                        href={clinic.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        GET DIRECTIONS
                      </a>
                    </Button>
                    
                    <Button
                      asChild
                      variant="secondary"
                      className="w-full"
                      size="lg"
                    >
                      <a 
                        href="https://specific-clinics-page.lovable.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        KNOW MORE
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-6">
          <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0" />
          <CarouselNext className="relative inset-0 translate-x-0 translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
};

// Add missing import
import { useState } from "react";
