import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

export const SuccessModal = ({ isOpen, onClose, title, description }: SuccessModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center bg-teal/20 text-teal h-16 w-16 rounded-full mb-4">
            <Check className="h-8 w-8" />
          </div>
          <h3 className="font-montserrat text-xl font-bold text-navy">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
        
        <Button 
          onClick={onClose}
          className="w-full bg-navy hover:bg-navy-light text-white font-montserrat font-bold py-3 px-6 rounded-md transition duration-300"
        >
          Close
        </Button>
      </DialogContent>
    </Dialog>
  );
};
