import NewsletterForm from "@/components/NewsletterForm";
import { CORPORATE_MYSTERY_BACKGROUNDS } from "@/lib/constants";

const Newsletter = () => {
  const backgroundImage = CORPORATE_MYSTERY_BACKGROUNDS[0];

  return (
    <div className="min-h-[90vh] flex items-center justify-center relative py-12 px-4">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      <div className="relative z-10 w-full max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-navy mb-4 font-montserrat">
            Newsletter
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with exclusive insights, investigative reports, and behind-the-scenes content 
            from the world of federal investigations and corporate mysteries.
          </p>
        </div>
        
        <NewsletterForm />
        
        <div className="mt-8 text-center text-gray-600">
          <p className="text-sm">
            Join our community of readers who receive exclusive content, early book announcements, 
            and special offers directly in their inbox.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
