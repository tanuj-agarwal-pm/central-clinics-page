import { useState } from "react";
import { CitySelector } from "./CitySelector";
import { ClinicList } from "./ClinicList";
import { ClinicCarousel } from "./ClinicCarousel";

const clinicsData = [
  // Karnataka
  {
    id: 1,
    name: "Bengaluru Indiranagar Clinic",
    state: "Karnataka",
    address: "3282, 12th Main Rd, HAL 2nd Stage, Appareddipalya, Indiranagar, Bengaluru, Karnataka - 560038",
    phone: "+91 80 2520 5000",
    mapsUrl: "https://www.google.com/maps?q=3282,+12th+Main+Rd,+HAL+2nd+Stage,+Appareddipalya,+Indiranagar,+Bengaluru,+Karnataka+560038",
    doctors: [
      { name: "Dr. Rajesh Kumar", specialty: "Panchakarma Specialist" },
      { name: "Dr. Priya Nair", specialty: "General Consultation" },
      { name: "Dr. Anand Sharma", specialty: "Lifestyle Medicine" }
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
      { name: "Dr. Meera Patel", specialty: "Ayurvedic Physician" },
      { name: "Dr. Suresh Menon", specialty: "Wellness Advisor" }
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
      { name: "Dr. Lakshmi Iyer", specialty: "Panchakarma Specialist" },
      { name: "Dr. Karthik Rao", specialty: "General Consultation" }
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
      { name: "Dr. Arun Kumar", specialty: "Lifestyle Medicine" },
      { name: "Dr. Divya Krishnan", specialty: "Ayurvedic Physician" },
      { name: "Dr. Ramesh Nair", specialty: "Wellness Advisor" }
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
      { name: "Dr. Vineeth Kumar", specialty: "General Consultation" },
      { name: "Dr. Shobha Menon", specialty: "Panchakarma Specialist" }
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
      { name: "Dr. Sanjay Hegde", specialty: "Ayurvedic Physician" },
      { name: "Dr. Pooja Sharma", specialty: "Lifestyle Medicine" }
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
      { name: "Dr. Naveen Reddy", specialty: "General Consultation" },
      { name: "Dr. Kavitha Bhat", specialty: "Wellness Advisor" }
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
      { name: "Dr. Deepak Pillai", specialty: "Panchakarma Specialist" },
      { name: "Dr. Suma Thomas", specialty: "Ayurvedic Physician" }
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
      { name: "Dr. Ravi Varma", specialty: "General Consultation" },
      { name: "Dr. Anjali Nair", specialty: "Lifestyle Medicine" }
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
      { name: "Dr. Manoj Kumar", specialty: "Wellness Advisor" },
      { name: "Dr. Sreelatha Menon", specialty: "Panchakarma Specialist" }
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
      { name: "Dr. Vinod George", specialty: "Ayurvedic Physician" },
      { name: "Dr. Reshma Das", specialty: "General Consultation" }
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
      { name: "Dr. Sunil Kumar", specialty: "Lifestyle Medicine" },
      { name: "Dr. Latha Krishnan", specialty: "Panchakarma Specialist" }
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
      { name: "Dr. Ashok Patil", specialty: "General Consultation" },
      { name: "Dr. Neha Shah", specialty: "Wellness Advisor" }
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
      { name: "Dr. Prakash Deshmukh", specialty: "Ayurvedic Physician" },
      { name: "Dr. Swati Joshi", specialty: "Panchakarma Specialist" },
      { name: "Dr. Rajesh Kulkarni", specialty: "Lifestyle Medicine" }
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
      { name: "Dr. Suresh Pawar", specialty: "General Consultation" },
      { name: "Dr. Priya Kadam", specialty: "Wellness Advisor" }
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
      { name: "Dr. Amit Verma", specialty: "Ayurvedic Physician" },
      { name: "Dr. Shalini Gupta", specialty: "Panchakarma Specialist" }
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
      { name: "Dr. Venkat Rao", specialty: "General Consultation" },
      { name: "Dr. Madhavi Reddy", specialty: "Lifestyle Medicine" }
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
      { name: "Dr. Karthikeyan Subramanian", specialty: "Wellness Advisor" },
      { name: "Dr. Bharathi Devi", specialty: "Ayurvedic Physician" }
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
      { name: "Dr. Prasad Murthy", specialty: "Panchakarma Specialist" },
      { name: "Dr. Sailaja Rani", specialty: "General Consultation" }
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
      { name: "Dr. Ramesh Kumar", specialty: "Lifestyle Medicine" },
      { name: "Dr. Deepa Lakshmi", specialty: "Wellness Advisor" }
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
      { name: "Dr. Harpreet Singh", specialty: "Ayurvedic Physician" },
      { name: "Dr. Simran Kaur", specialty: "Panchakarma Specialist" }
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
      { name: "Dr. Rakesh Sharma", specialty: "General Consultation" },
      { name: "Dr. Anjali Verma", specialty: "Lifestyle Medicine" }
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
      { name: "Dr. Anand Krishnan", specialty: "Ayurvedic Physician" },
      { name: "Dr. Priya Menon", specialty: "Wellness Advisor" }
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
      { name: "Dr. Suresh Kumar", specialty: "Panchakarma Specialist" },
      { name: "Dr. Maya Nair", specialty: "General Consultation" }
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
  return clinicName
    .replace(/^(Bengaluru|Chennai|Ernakulam|Kochi|Thiruvananthapuram|Mumbai|Pune|New Delhi|Hyderabad|Vizag|Ayurvedamrut Wellness Centre|Ayurniwas - Panipat|Kelara Ayurveda Sukayur Vaidiyasalai)\s*/i, '')
    .replace(/\s*Clinic\s*$/i, '')
    .trim();
};

export const ClinicsSection = () => {
  const [selectedCity, setSelectedCity] = useState("Bengaluru");
  const [activeClinicIndex, setActiveClinicIndex] = useState(0);

  // Multi-city locations that need name-based filtering
  const multiCityLocations = ["Bengaluru", "Ernakulam", "Kochi", "Thiruvananthapuram", "Mumbai", "Chennai", "Singapore"];
  
  const filteredClinics = clinicsData.filter(clinic => {
    const matchesState = locationMap[selectedCity]?.includes(clinic.state);
    
    if (multiCityLocations.includes(selectedCity)) {
      const matchesCity = clinic.name.includes(selectedCity);
      return matchesState && matchesCity;
    }
    
    return matchesState;
  });

  // Calculate clinic count for each location
  const getClinicCount = (location: string) => {
    return clinicsData.filter(clinic => {
      const matchesState = locationMap[location]?.includes(clinic.state);
      
      if (multiCityLocations.includes(location)) {
        const matchesCity = clinic.name.includes(location);
        return matchesState && matchesCity;
      }
      
      return matchesState;
    }).length;
  };

  // Reset active clinic when city changes
  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setActiveClinicIndex(0);
  };

  // Handle clinic selection from center column
  const handleClinicSelect = (index: number) => {
    setActiveClinicIndex(index);
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-[1600px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience Kerala - wherever you are.
          </h2>
          <p className="text-muted-foreground text-lg">
            Find a location near you
          </p>
        </div>

        {/* Desktop: Three-column layout */}
        <div className="hidden lg:grid lg:grid-cols-[280px_320px_1fr] gap-6 min-h-[700px]">
          <div className="border rounded-lg p-4 bg-card">
            <CitySelector
              cities={locations}
              selectedCity={selectedCity}
              onCitySelect={handleCitySelect}
              getClinicCount={getClinicCount}
            />
          </div>

          <div className="border rounded-lg p-4 bg-card">
            <ClinicList
              clinics={filteredClinics}
              activeClinicIndex={activeClinicIndex}
              onClinicSelect={handleClinicSelect}
              selectedCity={selectedCity}
              getCleanClinicName={getCleanClinicName}
            />
          </div>

          <div className="border rounded-lg p-6 bg-card">
            <ClinicCarousel
              clinics={filteredClinics}
              activeIndex={activeClinicIndex}
              onIndexChange={setActiveClinicIndex}
              getCleanClinicName={getCleanClinicName}
            />
          </div>
        </div>

        {/* Mobile/Tablet: Stacked layout */}
        <div className="lg:hidden space-y-6">
          <div className="border rounded-lg p-4 bg-card">
            <CitySelector
              cities={locations}
              selectedCity={selectedCity}
              onCitySelect={handleCitySelect}
              getClinicCount={getClinicCount}
            />
          </div>

          <div className="border rounded-lg p-4 bg-card">
            <ClinicList
              clinics={filteredClinics}
              activeClinicIndex={activeClinicIndex}
              onClinicSelect={handleClinicSelect}
              selectedCity={selectedCity}
              getCleanClinicName={getCleanClinicName}
            />
          </div>

          <div className="border rounded-lg p-6 bg-card">
            <ClinicCarousel
              clinics={filteredClinics}
              activeIndex={activeClinicIndex}
              onIndexChange={setActiveClinicIndex}
              getCleanClinicName={getCleanClinicName}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
