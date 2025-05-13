import { Link } from "wouter";
import { SOCIAL_LINKS } from "@/lib/constants";

interface FooterProps {
  onAdminAccess: () => void;
}

const Footer = ({ onAdminAccess }: FooterProps) => {
  const handleAdminClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    if (e.altKey && e.shiftKey) {
      onAdminAccess();
      e.preventDefault();
    }
  };

  return (
    <footer className="bg-navy-light text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="font-montserrat font-bold text-xl tracking-wide">
              <span className="text-teal">N.K.</span> MACKIE
            </Link>
            <p className="text-white/70 mt-2">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <Link href="/privacy" className="text-white/70 hover:text-white transition duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/70 hover:text-white transition duration-300">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-white/70 hover:text-white transition duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/50 text-sm">
          <p>N.K. Mackie is a former FBI agent and author of crime fiction. All case details in her books are fictionalized.</p>
          <p className="mt-2" onClick={handleAdminClick}>
            Website designed and developed by Creative Agency.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
