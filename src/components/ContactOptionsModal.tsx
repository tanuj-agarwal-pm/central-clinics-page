import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";

interface ContactOptionsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const contactOptions = [
  {
    icon: Phone,
    label: "Call Us",
    action: () => window.open("tel:+1234567890", "_self"),
  },
  {
    icon: MessageCircle,
    label: "WhatsApp Us",
    action: () => window.open("https://wa.me/1234567890", "_blank"),
  },
  {
    icon: MapPin,
    label: "Get Directions",
    action: () => window.open("https://maps.google.com", "_blank"),
  },
];

const ContactOptionsContent = () => (
  <div className="flex flex-col gap-3 py-4">
    {contactOptions.map((option) => (
      <Button
        key={option.label}
        onClick={option.action}
        size="lg"
        variant="outline"
        className="flex items-center gap-3 justify-start h-14 text-base"
      >
        <option.icon className="h-5 w-5" />
        {option.label}
      </Button>
    ))}
  </div>
);

export const ContactOptionsModal = ({ open, onOpenChange }: ContactOptionsModalProps) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Got Questions?</DrawerTitle>
            <DrawerDescription>
              Our experts are right here to help you get started on your healing journey
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 pb-8">
            <ContactOptionsContent />
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Got Questions?</DialogTitle>
          <DialogDescription>
            Our experts are right here to help you get started on your healing journey
          </DialogDescription>
        </DialogHeader>
        <ContactOptionsContent />
      </DialogContent>
    </Dialog>
  );
};
