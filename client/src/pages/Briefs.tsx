import { CORPORATE_MYSTERY_BACKGROUNDS } from "@/lib/constants";

const Briefs = () => {
  const backgroundImage = CORPORATE_MYSTERY_BACKGROUNDS[0];

  return (
    <div className="min-h-[90vh] flex items-center justify-center relative">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-navy mb-8 font-montserrat">
            Briefs
          </h1>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg border">
            <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
              Briefs are coming soon
            </p>
            
            <p className="text-lg text-gray-600 mb-8">
              In-depth analysis, investigative reports, and exclusive insights 
              from the world of federal investigations and corporate mysteries.
            </p>
            
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            
            <p className="text-sm text-gray-500">
              Stay tuned for compelling stories and expert commentary.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Briefs;