import { useState } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
// Clinic data by location
const clinicsByLocation: Record<string, string[]> = {
  "Bengaluru": [
    "Indiranagar, 12th Main Road",
    "HSR Layout, Sector 7",
    "Jayanagar, 4th Block",
    "Koramangala, 4th Block",
    "Sarjapur",
    "Shivaji Nagar",
    "Whitefield"
  ],
  "Kerala": [
    "Ernakulam Alangad",
    "Ernakulam Edapally",
    "Ernakulam Pallimukku",
    "Kochi Aluva",
    "Thiruvananthapuram Kowdiar"
  ],
  "Maharashtra": [
    "Mumbai Marol",
    "Pune Hadapsar"
  ],
  "Chennai": ["Anna Nagar"],
  "Hyderabad": ["Somajiguda"],
  "Vishakhapatnam": ["Venkojipalem"],
  "Delhi": ["East of Kailash"],
  "Amritsar": ["Basant Avenue"],
  "Panipat": ["Model Town"],
  "Singapore": ["Serangoon Rd", "Tessensohn Rd"]
};

const locations = Object.keys(clinicsByLocation);

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    location: "Bengaluru",
    clinic: "Indiranagar, 12th Main Road"
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.phone) {
      toast.error("Please fill in your name and phone number");
      return;
    }

    // Success message
    toast.success("Thank you! We'll contact you shortly to confirm your consultation.");

    // Reset form
    setFormData({
      name: "",
      phone: "",
      date: "",
      time: "",
      location: "Bengaluru",
      clinic: "Indiranagar, 12th Main Road"
    });
  };
  
  const handleLocationChange = (location: string) => {
    const clinicsInLocation = clinicsByLocation[location];
    setFormData({
      ...formData,
      location,
      clinic: clinicsInLocation[0] // Set first clinic as default
    });
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact-form" className="py-16 md:py-24 px-4 bg-white dark:bg-slate-950">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-4">​Start your journey towards holistic healing.</h2>
          <p className="text-muted-foreground text-base md:text-lg">Request a callback and book your consultation.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Map Section */}
          <div>
            <div className="h-[400px] lg:h-[600px] rounded-lg overflow-hidden shadow-[var(--shadow-card)] border border-border">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0!2d76.2673!3d9.9312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTUnNTIuMyJOIDc2wrAxNicwMi4zIkU!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Kerala Ayurveda Clinic Location" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-[var(--shadow-card)] border border-border">
            

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Enter your full name" className="w-full" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" className="w-full" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
                    Preferred Date
                  </label>
                  <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange} className="w-full" />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-foreground mb-2">
                    Preferred Time
                  </label>
                  <Input id="time" name="time" type="time" value={formData.time} onChange={handleChange} className="w-full" />
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-foreground mb-2">
                  Location *
                </label>
                <Select value={formData.location} onValueChange={handleLocationChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent className="bg-background z-50">
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {clinicsByLocation[formData.location]?.length > 1 ? (
                <div>
                  <label htmlFor="clinic" className="block text-sm font-medium text-foreground mb-2">
                    Preferred Clinic
                  </label>
                  <Select value={formData.clinic} onValueChange={value => setFormData({
                  ...formData,
                  clinic: value
                })}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a clinic" />
                    </SelectTrigger>
                    <SelectContent className="bg-background z-50">
                      {clinicsByLocation[formData.location]?.map((clinic) => (
                        <SelectItem key={clinic} value={clinic}>
                          {clinic}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              ) : (
                <div>
                  <label htmlFor="clinic" className="block text-sm font-medium text-foreground mb-2">
                    Clinic
                  </label>
                  <div className="w-full px-3 py-2 border border-input rounded-md bg-muted text-foreground">
                    {formData.clinic}
                  </div>
                </div>
              )}

              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-accent">
                <Calendar className="w-5 h-5 mr-2" />
                Request Consultation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};