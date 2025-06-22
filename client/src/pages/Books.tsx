import { BOOK_BACKGROUNDS, AMAZON_BOOK_LINK } from "@/lib/constants";
import BookCover from "@/components/BookCover";
import PublisherLogo from "@assets/image_1749165475370.png";

const Books = () => {

  return (
    <>
      <section className="py-16 md:py-24 bg-off-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="case-number text-sm mb-2">CASE FILES</p>
            <h1 className="font-montserrat text-3xl md:text-4xl font-bold text-navy mb-4">The Empire Crime Investigations</h1>
          </div>
          
          <div className="flex flex-col items-center mb-16">
            <div className="bg-white rounded-xl shadow-card overflow-hidden max-w-4xl w-full fade-in">
              <div 
                className="h-48 md:h-64 bg-cover bg-center relative" 
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&h=500')` }}
              >
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white text-3xl md:text-4xl font-montserrat font-bold text-center drop-shadow-lg">
                    The Empire Crime Investigations
                  </h2>
                </div>
              </div>
              
              <div className="p-8 flex flex-col md:flex-row gap-12">
                <div className="md:w-1/3 flex justify-center">
                  <BookCover />
                </div>
                
                <div className="md:w-2/3 md:pl-4">
                  <h2 className="font-montserrat text-2xl font-bold text-navy mb-2">DISMISSED</h2>
                  <p className="text-gray-500 mb-4">Book 1 • Release Date: June 17, 2025</p>
                  
                  <div className="mb-6">
                    <p className="mb-4">Peter Drake—better known as "The Old Man"—thought he was done chasing shadows. After decades of leading some of the FBI's most intricate operations, he's traded his badge for beach walks and sunsets at his Florida condo.</p>
                    
                    <p className="mb-4">But retirement doesn't last long for men like him.</p>
                    
                    <p className="mb-4">When a cryptic three-line note lands on a Justice Department desk in Washington, it sets off alarm bells at the highest levels of government. A federal judge in Manhattan is thought to be systematically dismissing organized crime cases, her gavel seemingly for sale to the highest bidder.</p>
                    
                    <p className="mb-4">Reluctantly stepping back into the game, The Old Man assembles the Mustang Task Force—an elite team of agents and analysts with the goal of dismantling the conspiracy fully. As surveillance units deploy across New York and hushed conversations are captured, the investigation reveals connections to a powerful criminal enterprise that no one anticipated.</p>
                    
                    <p>Between offshore banking, valuable artwork, and decades-old secrets, The Old Man must determine if justice itself has been compromised—or if he's chasing shadows cast by someone else.</p>
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
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Publisher Section */}
          <div className="text-center">
            <div className="bg-white rounded-xl shadow-card overflow-hidden max-w-2xl mx-auto fade-in p-8">
              <h3 className="font-montserrat text-2xl font-bold text-navy mb-6">Published by</h3>
              <div className="flex flex-col items-center gap-4">
                <img 
                  src={PublisherLogo} 
                  alt="Severn River Books Logo" 
                  className="max-w-xs w-full h-auto"
                />
                <a 
                  href="https://severnriverbooks.com/collections/n-k-mackie" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-montserrat font-bold py-3 px-8 rounded-md transition duration-300"
                >
                  Click Here for the Publisher's Website
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Books;
