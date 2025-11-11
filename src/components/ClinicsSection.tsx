import { useState } from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const clinicsData = [
  {
    id: 1,
    name: "Downtown Wellness Center",
    state: "California",
    address: "123 Main Street, Los Angeles, CA 90012",
    phone: "(555) 123-4567",
    hours: "Mon-Fri: 8am-6pm, Sat: 9am-3pm",
  },
  {
    id: 2,
    name: "Bayside Health Clinic",
    state: "California",
    address: "456 Ocean Ave, San Francisco, CA 94102",
    phone: "(555) 234-5678",
    hours: "Mon-Fri: 9am-7pm, Sat: 10am-4pm",
  },
  {
    id: 3,
    name: "Austin Integrative Medicine",
    state: "Texas",
    address: "789 Congress Ave, Austin, TX 78701",
    phone: "(555) 345-6789",
    hours: "Mon-Sat: 8am-6pm",
  },
  {
    id: 4,
    name: "Houston Holistic Center",
    state: "Texas",
    address: "321 Memorial Dr, Houston, TX 77024",
    phone: "(555) 456-7890",
    hours: "Mon-Fri: 8am-5pm",
  },
  {
    id: 5,
    name: "Manhattan Wellness Hub",
    state: "New York",
    address: "654 Broadway, New York, NY 10012",
    phone: "(555) 567-8901",
    hours: "Mon-Fri: 7am-8pm, Sat-Sun: 9am-5pm",
  },
  {
    id: 6,
    name: "Brooklyn Natural Health",
    state: "New York",
    address: "987 Bedford Ave, Brooklyn, NY 11211",
    phone: "(555) 678-9012",
    hours: "Mon-Sat: 9am-6pm",
  },
];

const states = ["All States", ...Array.from(new Set(clinicsData.map(c => c.state)))];

export const ClinicsSection = () => {
  const [selectedState, setSelectedState] = useState("All States");

  const filteredClinics = selectedState === "All States" 
    ? clinicsData 
    : clinicsData.filter(clinic => clinic.state === selectedState);

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Clinics
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Find a location near you
          </p>
          
          <div className="flex justify-center">
            <Select value={selectedState} onValueChange={setSelectedState}>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a state" />
              </SelectTrigger>
              <SelectContent>
                {states.map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClinics.map((clinic) => (
            <Card key={clinic.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{clinic.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{clinic.address}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href={`tel:${clinic.phone}`} className="text-muted-foreground hover:text-primary">
                    {clinic.phone}
                  </a>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <Clock className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{clinic.hours}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
