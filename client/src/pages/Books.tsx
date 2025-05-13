import { useState } from "react";
import { BOOK_BACKGROUNDS, AMAZON_BOOK_LINK } from "@/lib/constants";
import BookCover from "@/components/BookCover";
import { BookPreviewModal } from "@/components/BookPreviewModal";
import { Button } from "@/components/ui/button";

const Books = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <>
      <section className="py-16 md:py-24 bg-off-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="case-number text-sm mb-2">CASE FILES</p>
            <h1 className="font-montserrat text-3xl md:text-4xl font-bold text-navy mb-4">The Empire Crime Investigations</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">Follow investigator Rachel Chen as she navigates the criminal underworld of New York City, solving cases that others have abandoned.</p>
          </div>
          
          <div className="flex flex-col items-center mb-16">
            <div className="bg-white rounded-xl shadow-card overflow-hidden max-w-4xl w-full fade-in">
              <div 
                className="h-48 md:h-64 bg-cover bg-center relative" 
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&h=500')` }}
              >
                <div className="absolute inset-0 bg-navy/60"></div>
              </div>
              
              <div className="p-8 flex flex-col md:flex-row gap-12">
                <div className="md:w-1/3 flex justify-center">
                  <BookCover />
                </div>
                
                <div className="md:w-2/3 md:pl-4">
                  <h2 className="font-montserrat text-2xl font-bold text-navy mb-2">DISMISSED</h2>
                  <p className="text-gray-500 mb-4">Book 1 • Release Date: June 30, 2023</p>
                  
                  <div className="mb-6">
                    <p className="mb-4">When a prominent judge's daughter goes missing, former FBI agent Rachel Chen is hired to find her. What begins as a routine missing persons case quickly spirals into something far more sinister as Rachel discovers a pattern of dismissed cases connected to the city's most powerful figures.</p>
                    
                    <p>As Rachel digs deeper, she realizes the dismissed evidence points to a conspiracy that threatens not only her investigation but her life. With time running out, she must navigate a treacherous landscape of corruption, betrayal, and murder to uncover the truth.</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Thriller</span>
                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Mystery</span>
                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Procedural</span>
                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Urban Crime</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={AMAZON_BOOK_LINK} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center bg-navy hover:bg-navy-light text-white font-montserrat font-bold py-3 px-8 rounded-md transition duration-300"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5381 14.2627C17.3181 14.2627 17.1281 14.2927 16.9681 14.3527C16.8081 14.4127 16.6881 14.4927 16.6081 14.5927C16.5281 14.6927 16.4781 14.8027 16.4581 14.9227C16.4380 15.0427 16.4281 15.1527 16.4281 15.2527C16.4281 15.4527 16.4681 15.6327 16.5481 15.7827C16.6281 15.9327 16.7581 16.0627 16.9381 16.1727C17.1181 16.2827 17.3581 16.3727 17.6581 16.4427C17.9581 16.5127 18.3381 16.5827 18.7881 16.6527C19.3081 16.7327 19.7781 16.8327 20.1981 16.9527C20.6181 17.0727 20.9781 17.2327 21.2781 17.4327C21.5781 17.6327 21.8081 17.8827 21.9681 18.1827C22.1281 18.4827 22.2081 18.8527 22.2081 19.2927C22.2081 19.7927 22.1081 20.2127 21.9081 20.5627C21.7081 20.9127 21.4381 21.1927 21.0981 21.4127C20.7581 21.6327 20.3681 21.7927 19.9281 21.8927C19.4881 21.9927 19.0181 22.0427 18.5181 22.0427C18.0181 22.0427 17.5181 21.9827 17.0181 21.8627C16.5181 21.7427 16.0581 21.5327 15.6381 21.2327C15.2181 20.9327 14.8781 20.5227 14.6181 20.0027C14.3581 19.4827 14.2281 18.8327 14.2281 18.0527H16.5681C16.5681 18.4527 16.6281 18.7827 16.7481 19.0327C16.8681 19.2827 17.0281 19.4727 17.2281 19.6127C17.4281 19.7527 17.6581 19.8527 17.9181 19.9127C18.1781 19.9727 18.4481 20.0027 18.7281 20.0027C18.9281 20.0027 19.1281 19.9827 19.3281 19.9427C19.5281 19.9027 19.7081 19.8327 19.8681 19.7427C20.0281 19.6527 20.1581 19.5327 20.2581 19.3927C20.3581 19.2527 20.4081 19.0727 20.4081 18.8627C20.4081 18.6227 20.3381 18.4227 20.1981 18.2727C20.0581 18.1227 19.8681 17.9927 19.6281 17.8927C19.3881 17.7927 19.1081 17.7027 18.7881 17.6327C18.4681 17.5627 18.1281 17.4927 17.7681 17.4227" />
                      </svg>
                      Pre-order Now
                    </a>
                    <Button
                      onClick={() => setIsPreviewOpen(true)}
                      variant="outline"
                      className="bg-transparent hover:bg-navy/5 text-navy border-2 border-navy font-montserrat font-bold py-3 px-8 rounded-md transition duration-300"
                    >
                      Read Preview
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="font-montserrat text-xl font-medium text-navy mb-4">Coming Soon in the Series</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-card p-6 border-l-4 border-gray-300">
                <h4 className="font-montserrat text-lg font-bold mb-2">Book 2: Unredacted</h4>
                <p className="text-gray-600 mb-2">Expected: Winter 2023</p>
                <p>Rachel Chen uncovers a decades-old cold case with connections to current string of murders in Manhattan.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-card p-6 border-l-4 border-gray-300">
                <h4 className="font-montserrat text-lg font-bold mb-2">Book 3: Undisclosed</h4>
                <p className="text-gray-600 mb-2">Expected: Summer 2024</p>
                <p>A high-profile kidnapping leads Rachel to a criminal network operating within the highest levels of city government.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <BookPreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
    </>
  );
};

export default Books;
