import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CitySelectorProps {
  cities: string[];
  selectedCity: string;
  onCitySelect: (city: string) => void;
  getClinicCount: (city: string) => number;
}

export const CitySelector = ({ cities, selectedCity, onCitySelect, getClinicCount }: CitySelectorProps) => {
  return (
    <div className="flex flex-col h-full">
      <h3 className="text-lg font-semibold mb-4 px-2">Select City</h3>
      <ScrollArea className="flex-1">
        <div className="space-y-2 pr-4">
          {cities.map((city) => {
            const clinicCount = getClinicCount(city);
            const isSelected = selectedCity === city;
            
            return (
              <button
                key={city}
                onClick={() => onCitySelect(city)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{city}</span>
                  {clinicCount > 1 && (
                    <Badge
                      variant={isSelected ? "secondary" : "outline"}
                      className="ml-2 text-xs"
                    >
                      {clinicCount}
                    </Badge>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};
