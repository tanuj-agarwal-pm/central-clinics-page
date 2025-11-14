import { useState, useEffect } from "react";
import { MapPin, Phone, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Doctor {
  id: number;
  name: string;
  image: string;
  specialty: string;
}

interface Clinic {
  id: number;
  name: string;
  state: string;
  address: string;
  phone: string;
  mapsUrl: string;
  doctors: Doctor[];
}

const clinicsData: Clinic[] = [
  // Karnataka
  {
    id: 1,
    name: "Bengaluru Indiranagar Clinic",
    state: "Karnataka",
    address: "3282, 12th Main Rd, HAL 2nd Stage, Appareddipalya, Indiranagar, Bengaluru, Karnataka - 560038",
    phone: "+91 80 2520 5000",
    mapsUrl: "https://www.google.com/maps?q=3282,+12th+Main+Rd,+HAL+2nd+Stage,+Appareddipalya,+Indiranagar,+Bengaluru,+Karnataka+560038",
    doctors: [
      { id: 1, name: "Dr. Rajesh Kumar", image: "/placeholder.svg", specialty: "Panchakarma Specialist" },
      { id: 2, name: "Dr. Priya Sharma", image: "/placeholder.svg", specialty: "Pain Management" },
      { id: 3, name: "Dr. Arjun Menon", image: "/placeholder.svg", specialty: "Lifestyle Disorders" }
    ]
  },
  {
    id: 2,
    name: "Bengaluru HSR Layout Clinic",
    state: "Karnataka",
    address: "No-1187 Bhagwati, Ground Floor 5th Main, Sector 7, HSR Layout, Bengaluru, Karnataka - 560102",
    phone: "+91 80 4112 7777",
    mapsUrl: "https://www.google.com/maps/dir//Ground+Floor,+Bhagwati+%231187,+5th+Main+Rd,+Sector+7,+HSR+Layout,+Bengaluru,+Karnataka+560102",
    doctors: [
      { id: 1, name: "Dr. Anita Desai", image: "/placeholder.svg", specialty: "Women's Health" },
      { id: 2, name: "Dr. Vikram Patel", image: "/placeholder.svg", specialty: "Digestive Health" },
      { id: 3, name: "Dr. Lakshmi Iyer", image: "/placeholder.svg", specialty: "Stress & Anxiety" }
    ]
  },
  {
    id: 3,
    name: "Bengaluru Jayanagar Clinic",
    state: "Karnataka",
    address: "452 Ground Floor, 7th Main Rd, 4th Block, Jayanagar, Bengaluru, Karnataka - 560011",
    phone: "+91 80 2663 3565",
    mapsUrl: "https://www.google.com/maps/dir//452,+7th+Main+Rd,+4th+Block,+Jayanagar,+Bengaluru,+Karnataka+560011",
    doctors: [
      { id: 1, name: "Dr. Suresh Reddy", image: "/placeholder.svg", specialty: "Skin & Hair Care" },
      { id: 2, name: "Dr. Meera Nair", image: "/placeholder.svg", specialty: "Joint & Arthritis Care" },
      { id: 3, name: "Dr. Karthik Bhat", image: "/placeholder.svg", specialty: "Panchakarma Specialist" }
    ]
  },
  {
    id: 4,
    name: "Bengaluru Koramangala Clinic",
    state: "Karnataka",
    address: "No 600/1, Ground floor, 5th Cross, 16th Main, next to Joyalukkas, near Sony world signal, 4th Block, Koramangala, Bengaluru - 560034",
    phone: "+91 80 4903 5678",
    mapsUrl: "https://maps.app.goo.gl/KtpHy438Ko1LCwDPA",
    doctors: [
      { id: 1, name: "Dr. Arun Kumar", image: "/placeholder.svg", specialty: "Pain Management" },
      { id: 2, name: "Dr. Divya Rao", image: "/placeholder.svg", specialty: "Lifestyle Disorders" },
      { id: 3, name: "Dr. Ramesh Gowda", image: "/placeholder.svg", specialty: "Digestive Health" }
    ]
  },
  {
    id: 5,
    name: "Bengaluru Sarjapur Clinic",
    state: "Karnataka",
    address: "No 86 muthanallur village Sarjapur hobli Anekal taluk, Bengaluru, Karnataka - 560099",
    phone: "+91 80 4903 5678",
    mapsUrl: "https://maps.app.goo.gl/PkFJZ76wpdGi1ZVn8",
    doctors: [
      { id: 1, name: "Dr. Sandeep Joshi", image: "/placeholder.svg", specialty: "Women's Health" },
      { id: 2, name: "Dr. Pooja Krishna", image: "/placeholder.svg", specialty: "Stress & Anxiety" },
      { id: 3, name: "Dr. Naveen Kumar", image: "/placeholder.svg", specialty: "Skin & Hair Care" }
    ]
  },
  {
    id: 6,
    name: "Bengaluru Shivaji Nagar Clinic",
    state: "Karnataka",
    address: "12, Bowring Hospital Road, Bengaluru, Karnataka - 560001",
    phone: "+91 80 4171 7000",
    mapsUrl: "https://www.google.com/maps?q=12,+Bowring+Hospital+Rd,+Tasker+Town,+Sampangi+Rama+Nagar,+Bengaluru,+Karnataka+560001",
    doctors: [
      { id: 1, name: "Dr. Manjunath Hegde", image: "/placeholder.svg", specialty: "Joint & Arthritis Care" },
      { id: 2, name: "Dr. Sneha Rao", image: "/placeholder.svg", specialty: "Panchakarma Specialist" },
      { id: 3, name: "Dr. Harish Murthy", image: "/placeholder.svg", specialty: "Pain Management" }
    ]
  },
  {
    id: 7,
    name: "Bengaluru Whitefield Clinic",
    state: "Karnataka",
    address: "184/4, Whitefield Main Rd, Palm Meadows, Whitefield, Bengaluru, Karnataka - 560066",
    phone: "+91 80 4903 5678",
    mapsUrl: "https://maps.app.goo.gl/BPK8JQ3rqRAWxzEe7",
    doctors: [
      { id: 1, name: "Dr. Deepak Shetty", image: "/placeholder.svg", specialty: "Lifestyle Disorders" },
      { id: 2, name: "Dr. Kavita Menon", image: "/placeholder.svg", specialty: "Digestive Health" },
      { id: 3, name: "Dr. Prasad Rao", image: "/placeholder.svg", specialty: "Women's Health" }
    ]
  },
  // Kerala
  {
    id: 9,
    name: "Ernakulam Alangad Clinic",
    state: "Kerala",
    address: "Manakkalparambu, Kottapuram, Aluva Paravur Main Road, Near Alangad Bevco outlet, Alangad P.O, Alwaye - 683511",
    phone: "+91 484 2628 888",
    mapsUrl: "https://maps.app.goo.gl/EdB8e1FKhzj1krWTA",
    doctors: [
      { id: 1, name: "Dr. Anil Varma", image: "/placeholder.svg", specialty: "Stress & Anxiety" },
      { id: 2, name: "Dr. Riya Thomas", image: "/placeholder.svg", specialty: "Skin & Hair Care" },
      { id: 3, name: "Dr. Sanjay Pillai", image: "/placeholder.svg", specialty: "Joint & Arthritis Care" }
    ]
  },
  {
    id: 10,
    name: "Ernakulam Edapally Clinic",
    state: "Kerala",
    address: "XXVII/478, Thejus, OPP Nandilath G Mart, Toll JN, Edapally, Ernakulam, Kerala - 682024",
    phone: "+91 484 4017 000",
    mapsUrl: "https://maps.app.goo.gl/WDJtuC8NXNTaikNaA",
    doctors: [
      { id: 1, name: "Dr. Maya Krishnan", image: "/placeholder.svg", specialty: "Panchakarma Specialist" },
      { id: 2, name: "Dr. Raghav Nair", image: "/placeholder.svg", specialty: "Pain Management" },
      { id: 3, name: "Dr. Suma Joseph", image: "/placeholder.svg", specialty: "Lifestyle Disorders" }
    ]
  },
  {
    id: 11,
    name: "Ernakulam Pallimukku Clinic",
    state: "Kerala",
    address: "Old warriam Road East, A.M.Thomas Road, Ernakulam - 682016",
    phone: "+91 484 2371 727",
    mapsUrl: "https://www.google.com/maps?q=X78Q%2B84M,+A+M+Thomas+Rd,+Pallimukku,+Kochi,+Ernakulam,+Kerala+682016",
    doctors: [
      { id: 1, name: "Dr. Vinod Kumar", image: "/placeholder.svg", specialty: "Women's Health" },
      { id: 2, name: "Dr. Anjali Menon", image: "/placeholder.svg", specialty: "Digestive Health" },
      { id: 3, name: "Dr. Ravi Shankar", image: "/placeholder.svg", specialty: "Stress & Anxiety" }
    ]
  },
  {
    id: 12,
    name: "Kochi Aluva Clinic",
    state: "Kerala",
    address: "ZEEN, AMC VIII/73, Periyar Nagar, Bank Road, Kerala - 683101",
    phone: "+91 484 2628 888",
    mapsUrl: "https://www.google.com/maps?q=4963%2BVG4,+Periyar+Nagar,+Aluva,+Kerala+683101",
    doctors: [
      { id: 1, name: "Dr. Sreejith Nair", image: "/placeholder.svg", specialty: "Skin & Hair Care" },
      { id: 2, name: "Dr. Nisha George", image: "/placeholder.svg", specialty: "Joint & Arthritis Care" },
      { id: 3, name: "Dr. Anand Kumar", image: "/placeholder.svg", specialty: "Panchakarma Specialist" }
    ]
  },
  {
    id: 13,
    name: "Thiruvananthapuram Kowdiar Clinic",
    state: "Kerala",
    address: "A-35, Pandit's Colony, Kowdiar, Thiruvananthapuram - 695003",
    phone: "+91 471 2725 999",
    mapsUrl: "https://www.google.com/maps/place/Kerala+Ayurvedic+Health+Care/@8.5169197,76.9050929,11z",
    doctors: [
      { id: 1, name: "Dr. Prakash Menon", image: "/placeholder.svg", specialty: "Pain Management" },
      { id: 2, name: "Dr. Latha Pillai", image: "/placeholder.svg", specialty: "Lifestyle Disorders" },
      { id: 3, name: "Dr. Sunil Kumar", image: "/placeholder.svg", specialty: "Digestive Health" }
    ]
  },
  // Maharashtra
  {
    id: 14,
    name: "Mumbai Marol Clinic",
    state: "Maharashtra",
    address: "Orchid Premises Co-Op soc Ltd, Shop no 9-10, Twin Arcade C wing, Military Road, Marol, Andheri East, Mumbai, Maharashtra - 400059",
    phone: "+91 22 2821 1711",
    mapsUrl: "https://www.google.com/maps/dir//Wing,+Twin+Arcade,+Orchid+Premises+Co-Op+Soc+Ltd,+Shop+no:+9-10,+Ground+Floor+C,+Military+Rd,+Marol,+Andheri+East,+Mumbai,+Maharashtra+400059",
    doctors: [
      { id: 1, name: "Dr. Ashok Patil", image: "/placeholder.svg", specialty: "Women's Health" },
      { id: 2, name: "Dr. Neha Deshmukh", image: "/placeholder.svg", specialty: "Stress & Anxiety" },
      { id: 3, name: "Dr. Rahul Joshi", image: "/placeholder.svg", specialty: "Skin & Hair Care" }
    ]
  },
  {
    id: 15,
    name: "Pune Hadapsar Clinic",
    state: "Maharashtra",
    address: "Oxygen Valley Commercial Complex Office no 1,2,3,4 Second Floor, Opposite HP Petrol Pump Manjari farm, Manjari budruk, Hadapsar, Pune, Maharashtra - 412307",
    phone: "+91 20 2697 4242",
    mapsUrl: "https://maps.app.goo.gl/RPwn6dBKRuKaPupZ6",
    doctors: [
      { id: 1, name: "Dr. Sanjay Kulkarni", image: "/placeholder.svg", specialty: "Joint & Arthritis Care" },
      { id: 2, name: "Dr. Priyanka Naik", image: "/placeholder.svg", specialty: "Panchakarma Specialist" },
      { id: 3, name: "Dr. Amit Pawar", image: "/placeholder.svg", specialty: "Pain Management" }
    ]
  },
  {
    id: 25,
    name: "Mumbai Kalyan Clinic",
    state: "Maharashtra",
    address: "Om Ananat Krupa Co op Housing Society, Agra Rd, Ghodekhot Aali, Kalyan West, Mumbai, Kalyan, Maharashtra - 421301",
    phone: "+91 9888988702",
    mapsUrl: "https://maps.app.goo.gl/4xVJgGSpK7dFjCE68",
    doctors: [
      { id: 1, name: "Dr. Vijay Shah", image: "/placeholder.svg", specialty: "Lifestyle Disorders" },
      { id: 2, name: "Dr. Rekha Singh", image: "/placeholder.svg", specialty: "Digestive Health" },
      { id: 3, name: "Dr. Manish Thakur", image: "/placeholder.svg", specialty: "Women's Health" }
    ]
  },
  // Rest of India
  {
    id: 16,
    name: "New Delhi East of Kailash Clinic",
    state: "Delhi",
    address: "E-11, 3rd Floor, East of Kailash, South East Delhi, Delhi - 110065",
    phone: "+91 11 4655 5000",
    mapsUrl: "https://www.google.com/maps/dir//House,+Plot+No.E,+Kerala+Ayurveda+Clinic+and+Wellness+Centre,+Lamba,+11-A,+East+of+Kailash,+New+Delhi,+Delhi+110065",
    doctors: [
      { id: 1, name: "Dr. Arjun Verma", image: "/placeholder.svg", specialty: "Stress & Anxiety" },
      { id: 2, name: "Dr. Shreya Kapoor", image: "/placeholder.svg", specialty: "Skin & Hair Care" },
      { id: 3, name: "Dr. Rajat Malhotra", image: "/placeholder.svg", specialty: "Joint & Arthritis Care" }
    ]
  },
  {
    id: 17,
    name: "Hyderabad Somajiguda Clinic",
    state: "Telangana",
    address: "6-3-0906/B/1, Behind Yasoda hospital, Somajiguda, Hyderabad - 500082",
    phone: "+91 40 4855 5000",
    mapsUrl: "https://www.google.com/maps/dir//kerala+ayurveda+clinic+hsr+HYDERABAD",
    doctors: [
      { id: 1, name: "Dr. Venkat Reddy", image: "/placeholder.svg", specialty: "Panchakarma Specialist" },
      { id: 2, name: "Dr. Swathi Rao", image: "/placeholder.svg", specialty: "Pain Management" },
      { id: 3, name: "Dr. Krishna Murthy", image: "/placeholder.svg", specialty: "Lifestyle Disorders" }
    ]
  },
  {
    id: 18,
    name: "Chennai Anna Nagar Clinic",
    state: "Tamil Nadu",
    address: "20 (Plot No.3337), 5th Avenue, Block AD Chennai, Tamil Nadu - 600040",
    phone: "+91 44 4855 5000",
    mapsUrl: "https://www.google.com/maps?q=5th+Ave,+Block+AD,+Anna+Nagar,+Chennai,+Tamil+Nadu+600040",
    doctors: [
      { id: 1, name: "Dr. Selvam Rajan", image: "/placeholder.svg", specialty: "Women's Health" },
      { id: 2, name: "Dr. Gayatri Subramanian", image: "/placeholder.svg", specialty: "Digestive Health" },
      { id: 3, name: "Dr. Karthik Sundaram", image: "/placeholder.svg", specialty: "Stress & Anxiety" }
    ]
  },
  {
    id: 19,
    name: "Vizag Venkojipalem Clinic",
    state: "Andhra Pradesh",
    address: "51-1-19, JR Nagar, Venkojipalem, Visakhapatnam, Andhra Pradesh - 530022",
    phone: "+91 891 2855 000",
    mapsUrl: "https://www.google.com/maps/dir//kerala+ayurveda+clinic+hsr+visakhapatnam",
    doctors: [
      { id: 1, name: "Dr. Prasad Babu", image: "/placeholder.svg", specialty: "Skin & Hair Care" },
      { id: 2, name: "Dr. Lakshmi Devi", image: "/placeholder.svg", specialty: "Joint & Arthritis Care" },
      { id: 3, name: "Dr. Ravi Kumar", image: "/placeholder.svg", specialty: "Panchakarma Specialist" }
    ]
  },
  {
    id: 20,
    name: "Chennai Poes Garden Clinic",
    state: "Tamil Nadu",
    address: "15/A, 3rd Floor, Rampratap Apartments, Near Bashyam Apartments, Poes Garden, Chennai, Tamil Nadu - 600086",
    phone: "+91 80 1569 4651",
    mapsUrl: "https://maps.app.goo.gl/K16A89MPjWN9wuSbA",
    doctors: [
      { id: 1, name: "Dr. Ramesh Kumar", image: "/placeholder.svg", specialty: "Pain Management" },
      { id: 2, name: "Dr. Deepa Krishnan", image: "/placeholder.svg", specialty: "Lifestyle Disorders" },
      { id: 3, name: "Dr. Balaji Rajan", image: "/placeholder.svg", specialty: "Digestive Health" }
    ]
  },
  {
    id: 21,
    name: "Ayurvedamrut Wellness Centre",
    state: "Punjab",
    address: "Samra Tower, 648, Basant Ave, near Dua Gallery, Basant Avenue, White Avenue, Amritsar, Punjab - 143001",
    phone: "+91 183 5055 000",
    mapsUrl: "https://maps.app.goo.gl/ZvuKizsXYb9pxLci8",
    doctors: [
      { id: 1, name: "Dr. Gurpreet Singh", image: "/placeholder.svg", specialty: "Women's Health" },
      { id: 2, name: "Dr. Simran Kaur", image: "/placeholder.svg", specialty: "Stress & Anxiety" },
      { id: 3, name: "Dr. Jaspreet Brar", image: "/placeholder.svg", specialty: "Skin & Hair Care" }
    ]
  },
  {
    id: 22,
    name: "Ayurniwas - Panipat Clinic",
    state: "Haryana",
    address: "512L, Model Town Rd, Model Town, Panipat, Haryana - 132103",
    phone: "+91 180 5055 000",
    mapsUrl: "https://maps.app.goo.gl/K9F5v7fE8cMD4UUE9",
    doctors: [
      { id: 1, name: "Dr. Mohit Sharma", image: "/placeholder.svg", specialty: "Joint & Arthritis Care" },
      { id: 2, name: "Dr. Neetu Yadav", image: "/placeholder.svg", specialty: "Panchakarma Specialist" },
      { id: 3, name: "Dr. Rohit Kumar", image: "/placeholder.svg", specialty: "Pain Management" }
    ]
  },
  // International
  {
    id: 23,
    name: "Serangoon Rd Clinic Singapore",
    state: "Singapore",
    address: "OM VEDIC HERITAGE CENTRE, 444 Serangoon Rd, Singapore - 218136",
    phone: "+65 6291 1722",
    mapsUrl: "https://maps.app.goo.gl/cDd7Kd45fpRXU6xLA",
    doctors: [
      { id: 1, name: "Dr. Arjun Narayanan", image: "/placeholder.svg", specialty: "Lifestyle Disorders" },
      { id: 2, name: "Dr. Priya Menon", image: "/placeholder.svg", specialty: "Digestive Health" },
      { id: 3, name: "Dr. Vikram Iyer", image: "/placeholder.svg", specialty: "Women's Health" }
    ]
  },
  {
    id: 24,
    name: "Tessensohn Rd Clinic Singapore",
    state: "Singapore",
    address: "OM VEDIC HERITAGE CENTRE, 43 Tessensohn Road, Singapore - 217661",
    phone: "+65 6396 1955",
    mapsUrl: "https://maps.app.goo.gl/7J2fzGgj25Cch5Qq6",
    doctors: [
      { id: 1, name: "Dr. Anand Kumar", image: "/placeholder.svg", specialty: "Stress & Anxiety" },
      { id: 2, name: "Dr. Shalini Nair", image: "/placeholder.svg", specialty: "Skin & Hair Care" },
      { id: 3, name: "Dr. Manoj Pillai", image: "/placeholder.svg", specialty: "Joint & Arthritis Care" }
    ]
  },
];

// Location mapping for filtering (city -> state mapping)
const locationMap: Record<string, string[]> = {
  "Bengaluru": ["Karnataka"],
  "Chennai": ["Tamil Nadu"],
  "Delhi": ["Delhi"],
  "Ernakulam": ["Kerala"],
  "Hyderabad": ["Telangana"],
  "Kochi": ["Kerala"],
  "Mumbai": ["Maharashtra"],
  "Panipat": ["Haryana"],
  "Pune": ["Maharashtra"],
  "Thiruvananthapuram": ["Kerala"],
  "Vishakhapatnam": ["Andhra Pradesh"],
  "Amritsar": ["Punjab"],
  "Singapore": ["Singapore"],
};

const locations = Object.keys(locationMap);

// Helper function to clean up clinic names for display
const getCleanClinicName = (clinicName: string) => {
  // Remove city prefixes and "Clinic" suffix
  return clinicName
    .replace(/^(Bengaluru|Chennai|Ernakulam|Kochi|Thiruvananthapuram|Mumbai|Pune|New Delhi|Hyderabad|Vizag|Ayurvedamrut Wellness Centre|Ayurniwas - Panipat|Kelara Ayurveda Sukayur Vaidiyasalai)\s*/i, '')
    .replace(/\s*Clinic\s*$/i, '')
    .trim();
};

export const ClinicsSection = () => {
  const [selectedLocation, setSelectedLocation] = useState("Bengaluru");
  const [activeClinicIndex, setActiveClinicIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Multi-city locations that need name-based filtering
  const multiCityLocations = ["Bengaluru", "Ernakulam", "Kochi", "Thiruvananthapuram", "Mumbai", "Chennai", "Singapore"];
  
  const filteredClinics = clinicsData.filter(clinic => {
    const matchesState = locationMap[selectedLocation]?.includes(clinic.state);
    
    // For multi-city locations, also check if clinic name contains the city
    if (multiCityLocations.includes(selectedLocation)) {
      const matchesCity = clinic.name.includes(selectedLocation);
      return matchesState && matchesCity;
    }
    
    // For single-city locations, just check state
    return matchesState;
  });

  // Auto-scroll through clinics
  useEffect(() => {
    if (!isAutoScrolling || filteredClinics.length === 0) return;

    const interval = setInterval(() => {
      setActiveClinicIndex((prev) => (prev + 1) % filteredClinics.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoScrolling, filteredClinics.length]);

  // Reset active clinic when location changes
  useEffect(() => {
    setActiveClinicIndex(0);
    setIsAutoScrolling(true);
  }, [selectedLocation]);

  // Handle manual clinic selection
  const handleClinicClick = (index: number) => {
    setActiveClinicIndex(index);
    setIsAutoScrolling(false);
    
    // Resume auto-scroll after 10 seconds of inactivity
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  // Calculate clinic count for each location
  const getClinicCount = (location: string) => {
    return clinicsData.filter(clinic => {
      const matchesState = locationMap[location]?.includes(clinic.state);
      
      // For multi-city locations, also check if clinic name contains the city
      if (multiCityLocations.includes(location)) {
        const matchesCity = clinic.name.includes(location);
        return matchesState && matchesCity;
      }
      
      // For single-city locations, just check state
      return matchesState;
    }).length;
  };

  // Doctor Card Component
  const DoctorCard = ({ doctor, clinic }: { doctor: Doctor; clinic: Clinic }) => {
    return (
      <Card className="overflow-hidden">
        <div className="flex gap-4 p-4">
          {/* Doctor Image */}
          <div className="flex-shrink-0">
            <Avatar className="w-20 h-20">
              <AvatarImage src={doctor.image} alt={doctor.name} />
              <AvatarFallback>{doctor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
          </div>

          {/* Doctor Info */}
          <div className="flex-grow">
            <h4 className="font-semibold text-lg">{doctor.name}</h4>
            <p className="text-sm text-muted-foreground">{doctor.specialty}</p>

            {/* Action Icons */}
            <div className="flex gap-3 mt-3">
              {/* Call Icon */}
              <Button
                size="sm"
                variant="outline"
                asChild
                className="flex items-center gap-2"
              >
                <a href={`tel:${clinic.phone}`}>
                  <Phone className="w-4 h-4" />
                </a>
              </Button>

              {/* Map Icon */}
              <Button
                size="sm"
                variant="outline"
                asChild
                className="flex items-center gap-2"
              >
                <a href={clinic.mapsUrl} target="_blank" rel="noopener noreferrer">
                  <MapPin className="w-4 h-4" />
                </a>
              </Button>

              {/* Know More Icon */}
              <Button
                size="sm"
                variant="outline"
                asChild
                className="flex items-center gap-2"
              >
                <a href="https://specific-clinics-page.lovable.app/" target="_blank" rel="noopener noreferrer">
                  <Info className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-950">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience Kerala - wherever you are.
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Find a location near you
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {locations.map((location) => {
              const clinicCount = getClinicCount(location);
              const showCount = clinicCount > 1;
              
              return (
                <Badge
                  key={location}
                  variant={selectedLocation === location ? "default" : "outline"}
                  className="cursor-pointer px-4 py-2 text-sm hover:bg-primary hover:text-white transition-colors"
                  onClick={() => setSelectedLocation(location)}
                >
                  {location}
                  {showCount && (
                    <span className={`ml-2 px-1.5 py-0.5 rounded-full text-xs font-medium ${
                      selectedLocation === location 
                        ? "bg-white/20 text-white" 
                        : "bg-primary/10 text-primary"
                    }`}>
                      {clinicCount}
                    </span>
                  )}
                </Badge>
              );
            })}
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] md:grid-cols-[180px_1fr] lg:grid-cols-[280px_1fr] gap-4 lg:gap-8 mt-12">
          {/* LEFT COLUMN - Clinic Names List */}
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-sm sm:text-base lg:text-xl font-semibold mb-2 sm:mb-4">Select Clinic</h3>
            <ScrollArea className="h-[400px] sm:h-[500px] pr-2">
              {filteredClinics.map((clinic, index) => (
                <div
                  key={clinic.id}
                  onClick={() => handleClinicClick(index)}
                  className={cn(
                    "p-2 sm:p-3 lg:p-4 mb-2 rounded-lg cursor-pointer transition-all duration-300 text-xs sm:text-sm lg:text-base",
                    activeClinicIndex === index
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-muted hover:bg-muted/80"
                  )}
                >
                  {getCleanClinicName(clinic.name)}
                </div>
              ))}
            </ScrollArea>
          </div>

          {/* RIGHT COLUMN - Doctor Cards */}
          <div>
            <h3 className="text-sm sm:text-base lg:text-xl font-semibold mb-2 sm:mb-4">Our Doctors</h3>
            <div className="space-y-4">
              {filteredClinics[activeClinicIndex]?.doctors.map((doctor) => (
                <DoctorCard
                  key={doctor.id}
                  doctor={doctor}
                  clinic={filteredClinics[activeClinicIndex]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
