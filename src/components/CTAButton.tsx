import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ContactOptionsModal } from "@/components/ContactOptionsModal";

interface CTAButtonProps {
  align?: "center" | "left";
}

export const CTAButton = ({ align = "center" }: CTAButtonProps) => {
  const [showContactOptions, setShowContactOptions] = useState(false);
  
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-form");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className={`flex flex-wrap gap-4 ${align === "center" ? "justify-center" : "justify-start"} mt-12`}>
        <Button 
          onClick={scrollToContact}
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-accent text-base md:text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
        >
          Book Your Consultation
        </Button>
        <Button 
          onClick={() => setShowContactOptions(true)}
          size="lg"
          variant="outline"
          className="text-base md:text-lg px-8 py-6"
        >
          Talk to Us
        </Button>
      </div>
      <ContactOptionsModal 
        open={showContactOptions} 
        onOpenChange={setShowContactOptions} 
      />
    </>
  );
};
