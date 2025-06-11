import { Facebook, BookOpen } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-off-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="case-number text-sm mb-2">SECURE COMMUNICATION</p>
          <h1 className="font-montserrat text-3xl md:text-4xl font-bold text-navy mb-4">Contact</h1>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="fade-in">
            <div className="h-64 bg-gray-100 rounded-xl overflow-hidden shadow-lg">
              <div className="h-full w-full p-8 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-montserrat text-xl font-bold text-black mb-4">References/contact for author N.K. Mackie are at email: nkmackie@outlook.com</h3>
                </div>
              </div>
            </div>
            
            <div className="mt-12 space-y-6 px-4 text-center">
              <div>
                <h3 className="font-montserrat text-xl font-bold text-navy mb-3">Connect</h3>
                <div className="flex gap-4 justify-center">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                     className="bg-navy hover:bg-navy-light text-white h-12 w-12 rounded-full flex items-center justify-center transition duration-300">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="https://www.goodreads.com/author/show/55699276.N_K_Mackie" target="_blank" rel="noopener noreferrer"
                     className="bg-navy hover:bg-navy-light text-white h-12 w-12 rounded-full flex items-center justify-center transition duration-300">
                    <BookOpen className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="font-montserrat text-xl font-bold text-navy mb-3">Upcoming Events</h3>
                <div className="space-y-4">
                  <p className="text-gray-600">Check back soon for upcoming events and speaking engagements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
