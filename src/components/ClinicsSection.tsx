import { useState } from "react";
import { MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const clinicsData = [
  // Karnataka
  {
    id: 1,
    name: "Bengaluru Indiranagar Clinic",
    state: "Karnataka",
    address: "3282, 12th Main Rd, HAL 2nd Stage, Appareddipalya, Indiranagar, Bengaluru, Karnataka - 560038",
    phone: "+91 80 2520 5000",
    mapsUrl: "https://www.google.com/maps?q=3282,+12th+Main+Rd,+HAL+2nd+Stage,+Appareddipalya,+Indiranagar,+Bengaluru,+Karnataka+560038",
  },
  {
    id: 2,
    name: "Bengaluru HSR Layout Clinic",
    state: "Karnataka",
    address: "No-1187 Bhagwati, Ground Floor 5th Main, Sector 7, HSR Layout, Bengaluru, Karnataka - 560102",
    phone: "+91 80 4112 7777",
    mapsUrl: "https://www.google.com/maps/dir//Ground+Floor,+Bhagwati+%231187,+5th+Main+Rd,+Sector+7,+HSR+Layout,+Bengaluru,+Karnataka+560102",
  },
  {
    id: 3,
    name: "Bengaluru Jayanagar Clinic",
    state: "Karnataka",
    address: "452 Ground Floor, 7th Main Rd, 4th Block, Jayanagar, Bengaluru, Karnataka - 560011",
    phone: "+91 80 2663 3565",
    mapsUrl: "https://www.google.com/maps/dir//452,+7th+Main+Rd,+4th+Block,+Jayanagar,+Bengaluru,+Karnataka+560011",
  },
  {
    id: 4,
    name: "Bengaluru Koramangala Clinic",
    state: "Karnataka",
    address: "No 600/1, Ground floor, 5th Cross, 16th Main, next to Joyalukkas, near Sony world signal, 4th Block, Koramangala, Bengaluru - 560034",
    phone: "+91 80 4903 5678",
    mapsUrl: "https://maps.app.goo.gl/KtpHy438Ko1LCwDPA",
  },
  {
    id: 5,
    name: "Bengaluru Sarjapur Clinic",
    state: "Karnataka",
    address: "No 86 muthanallur village Sarjapur hobli Anekal taluk, Bengaluru, Karnataka - 560099",
    phone: "+91 80 4903 5678",
    mapsUrl: "https://maps.app.goo.gl/PkFJZ76wpdGi1ZVn8",
  },
  {
    id: 6,
    name: "Bengaluru Shivaji Nagar Clinic",
    state: "Karnataka",
    address: "12, Bowring Hospital Road, Bengaluru, Karnataka - 560001",
    phone: "+91 80 4171 7000",
    mapsUrl: "https://www.google.com/maps?q=12,+Bowring+Hospital+Rd,+Tasker+Town,+Sampangi+Rama+Nagar,+Bengaluru,+Karnataka+560001",
  },
  {
    id: 7,
    name: "Bengaluru Whitefield Clinic",
    state: "Karnataka",
    address: "No-2/85, Whitefield Main Rd, Opp to Loyal City Hypermarket - 560066",
    phone: "+91 80 4903 5678",
    mapsUrl: "https://www.google.com/maps?q=No.+2/85,+Whitefield+Main+Rd,+opposite+to+Loyal+City+Hypermarket,+Dodsworth+Layout,+Whitefield,+Bengaluru,+Karnataka+560065",
  },
  {
    id: 8,
    name: "Bengaluru Whitefield New Clinic",
    state: "Karnataka",
    address: "184/4, Whitefield Main Rd, Palm Meadows, Whitefield, Bengaluru, Karnataka - 560066",
    phone: "+91 80 4903 5678",
    mapsUrl: "https://maps.app.goo.gl/BPK8JQ3rqRAWxzEe7",
  },
  // Kerala
  {
    id: 9,
    name: "Ernakulam Alangad Clinic",
    state: "Kerala",
    address: "Manakkalparambu, Kottapuram, Aluva Paravur Main Road, Near Alangad Bevco outlet, Alangad P.O, Alwaye - 683511",
    phone: "+91 484 2628 888",
    mapsUrl: "https://maps.app.goo.gl/EdB8e1FKhzj1krWTA",
  },
  {
    id: 10,
    name: "Ernakulam Edapally Clinic",
    state: "Kerala",
    address: "XXVII/478, Thejus, OPP Nandilath G Mart, Toll JN, Edapally, Ernakulam, Kerala - 682024",
    phone: "+91 484 4017 000",
    mapsUrl: "https://maps.app.goo.gl/WDJtuC8NXNTaikNaA",
  },
  {
    id: 11,
    name: "Ernakulam Pallimukku Clinic",
    state: "Kerala",
    address: "Old warriam Road East, A.M.Thomas Road, Ernakulam - 682016",
    phone: "+91 484 2371 727",
    mapsUrl: "https://www.google.com/maps?q=X78Q%2B84M,+A+M+Thomas+Rd,+Pallimukku,+Kochi,+Ernakulam,+Kerala+682016",
  },
  {
    id: 12,
    name: "Kochi Aluva Clinic",
    state: "Kerala",
    address: "ZEEN, AMC VIII/73, Periyar Nagar, Bank Road, Kerala - 683101",
    phone: "+91 484 2628 888",
    mapsUrl: "https://www.google.com/maps?q=4963%2BVG4,+Periyar+Nagar,+Aluva,+Kerala+683101",
  },
  {
    id: 13,
    name: "Thiruvananthapuram Kowdiar Clinic",
    state: "Kerala",
    address: "A-35, Pandit's Colony, Kowdiar, Thiruvananthapuram - 695003",
    phone: "+91 471 2725 999",
    mapsUrl: "https://www.google.com/maps/place/Kerala+Ayurvedic+Health+Care/@8.5169197,76.9050929,11z",
  },
  // Maharashtra
  {
    id: 14,
    name: "Mumbai Marol Clinic",
    state: "Maharashtra",
    address: "Orchid Premises Co-Op soc Ltd, Shop no 9-10, Twin Arcade C wing, Military Road, Marol, Andheri East, Mumbai, Maharashtra - 400059",
    phone: "+91 22 2821 1711",
    mapsUrl: "https://www.google.com/maps/dir//Wing,+Twin+Arcade,+Orchid+Premises+Co-Op+Soc+Ltd,+Shop+no:+9-10,+Ground+Floor+C,+Military+Rd,+Marol,+Andheri+East,+Mumbai,+Maharashtra+400059",
  },
  {
    id: 15,
    name: "Pune Hadapsar Clinic",
    state: "Maharashtra",
    address: "Oxygen Valley Commercial Complex Office no 1,2,3,4 Second Floor, Opposite HP Petrol Pump Manjari farm, Manjari budruk, Hadapsar, Pune, Maharashtra - 412307",
    phone: "+91 20 2697 4242",
    mapsUrl: "https://maps.app.goo.gl/RPwn6dBKRuKaPupZ6",
  },
  // Rest of India
  {
    id: 16,
    name: "New Delhi East of Kailash Clinic",
    state: "Delhi",
    address: "E-11, 3rd Floor, East of Kailash, South East Delhi, Delhi - 110065",
    phone: "+91 11 4655 5000",
    mapsUrl: "https://www.google.com/maps/dir//House,+Plot+No.E,+Kerala+Ayurveda+Clinic+and+Wellness+Centre,+Lamba,+11-A,+East+of+Kailash,+New+Delhi,+Delhi+110065",
  },
  {
    id: 17,
    name: "Hyderabad Somajiguda Clinic",
    state: "Telangana",
    address: "6-3-0906/B/1, Behind Yasoda hospital, Somajiguda, Hyderabad - 500082",
    phone: "+91 40 4855 5000",
    mapsUrl: "https://www.google.com/maps/dir//kerala+ayurveda+clinic+hsr+HYDERABAD",
  },
  {
    id: 18,
    name: "Chennai Anna Nagar Clinic",
    state: "Tamil Nadu",
    address: "20 (Plot No.3337), 5th Avenue, Block AD Chennai, Tamil Nadu - 600040",
    phone: "+91 44 4855 5000",
    mapsUrl: "https://www.google.com/maps?q=5th+Ave,+Block+AD,+Anna+Nagar,+Chennai,+Tamil+Nadu+600040",
  },
  {
    id: 19,
    name: "Vizag Venkojipalem Clinic",
    state: "Andhra Pradesh",
    address: "51-1-19, JR Nagar, Venkojipalem, Visakhapatnam, Andhra Pradesh - 530022",
    phone: "+91 891 2855 000",
    mapsUrl: "https://www.google.com/maps/dir//kerala+ayurveda+clinic+hsr+visakhapatnam",
  },
  {
    id: 20,
    name: "Kelara Ayurveda Sukayur Vaidiyasalai",
    state: "Tamil Nadu",
    address: "15/A, 3rd Floor, Rampratap Apartments, Near Bashyam Apartments, Poes Garden, Chennai, Tamil Nadu - 600086",
    phone: "+91 44 4855 5000",
    mapsUrl: "https://maps.app.goo.gl/K16A89MPjWN9wuSbA",
  },
  {
    id: 21,
    name: "Ayurvedamrut Wellness Centre",
    state: "Punjab",
    address: "Samra Tower, 648, Basant Ave, near Dua Gallery, Basant Avenue, White Avenue, Amritsar, Punjab - 143001",
    phone: "+91 183 5055 000",
    mapsUrl: "https://maps.app.goo.gl/ZvuKizsXYb9pxLci8",
  },
  {
    id: 22,
    name: "Ayurniwas - Panipat Clinic",
    state: "Haryana",
    address: "512L, Model Town Rd, Model Town, Panipat, Haryana - 132103",
    phone: "+91 180 5055 000",
    mapsUrl: "https://maps.app.goo.gl/K9F5v7fE8cMD4UUE9",
  },
  // International
  {
    id: 23,
    name: "Serangoon Rd Clinic Singapore",
    state: "Singapore",
    address: "OM VEDIC HERITAGE CENTRE, 444 Serangoon Rd, Singapore - 218136",
    phone: "+65 6291 1722",
    mapsUrl: "https://maps.app.goo.gl/cDd7Kd45fpRXU6xLA",
  },
  {
    id: 24,
    name: "Tessensohn Rd Clinic Singapore",
    state: "Singapore",
    address: "OM VEDIC HERITAGE CENTRE, 43 Tessensohn Road, Singapore - 217661",
    phone: "+65 6396 1955",
    mapsUrl: "https://maps.app.goo.gl/7J2fzGgj25Cch5Qq6",
  },
];

// Location mapping for filtering
const locationMap: Record<string, string[]> = {
  "Bengaluru": ["Karnataka"],
  "Kerala": ["Kerala"],
  "Maharashtra": ["Maharashtra"],
  "Chennai": ["Tamil Nadu"],
  "Hyderabad": ["Telangana"],
  "Vishakhapatnam": ["Andhra Pradesh"],
  "Delhi": ["Delhi"],
  "Amritsar": ["Punjab"],
  "Haryana": ["Haryana"],
  "Singapore": ["Singapore"],
};

const locations = Object.keys(locationMap);

export const ClinicsSection = () => {
  const [selectedLocation, setSelectedLocation] = useState("Bengaluru");

  const filteredClinics = clinicsData.filter(clinic => 
    locationMap[selectedLocation]?.includes(clinic.state)
  );

  // Calculate clinic count for each location
  const getClinicCount = (location: string) => {
    return clinicsData.filter(clinic => 
      locationMap[location]?.includes(clinic.state)
    ).length;
  };

  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-950">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Clinics
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Find a location near you
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {locations.map((location) => (
              <Badge
                key={location}
                variant={selectedLocation === location ? "default" : "outline"}
                className="cursor-pointer px-4 py-2 text-sm hover:bg-primary hover:text-white transition-colors"
                onClick={() => setSelectedLocation(location)}
              >
                {location}
                <span className={`ml-2 px-1.5 py-0.5 rounded-full text-xs font-medium ${
                  selectedLocation === location 
                    ? "bg-white/20 text-white" 
                    : "bg-muted text-foreground hover:text-foreground"
                }`}>
                  {getClinicCount(location)}
                </span>
              </Badge>
            ))}
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
                <a 
                  href={clinic.mapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  Get Directions →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
