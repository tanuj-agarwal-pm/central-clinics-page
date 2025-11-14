import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useRef } from "react";

interface Clinic {
  id: number;
  name: string;
  state: string;
  address: string;
  phone: string;
  mapsUrl: string;
  doctors: { name: string; specialty: string }[];
}

interface ClinicListProps {
  clinics: Clinic[];
  activeClinicIndex: number;
  onClinicSelect: (index: number) => void;
  selectedCity: string;
  getCleanClinicName: (name: string) => string;
}

export const ClinicList = ({ 
  clinics, 
  activeClinicIndex, 
  onClinicSelect,
  selectedCity,
  getCleanClinicName 
}: ClinicListProps) => {
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [activeClinicIndex]);

  return (
    <div className="flex flex-col h-full">
      <h3 className="text-lg font-semibold mb-2 px-2">
        Clinics in {selectedCity}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 px-2">
        {clinics.length} {clinics.length === 1 ? "clinic" : "clinics"}
      </p>
      <ScrollArea className="flex-1">
        <div className="space-y-2 pr-4">
          {clinics.map((clinic, index) => {
            const isActive = activeClinicIndex === index;
            
            return (
              <button
                key={clinic.id}
                ref={isActive ? activeRef : null}
                onClick={() => onClinicSelect(index)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-primary/10 border-2 border-primary text-foreground font-medium"
                    : "bg-background hover:bg-muted text-foreground border border-border"
                }`}
              >
                {getCleanClinicName(clinic.name)}
              </button>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};
