import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import BookCover from "@/components/BookCover";
import NewsletterForm from "@/components/NewsletterForm";
import { BookPreviewModal } from "@/components/BookPreviewModal";
import {
  CORPORATE_MYSTERY_BACKGROUNDS,
  AMAZON_BOOK_LINK,
} from "@/lib/constants";

const Home = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[80vh] bg-navy-light overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy-light/60 z-10"></div>
        <div
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 h-screen"
        ></div>

        {/* Tagline in top right corner */}
        <div className="absolute top-4 right-4 z-30 border-2 border-white p-5 rounded-md max-w-md">
          <p className="text-white text-sm font-montserrat">
            From federal agent to novelist, N.K. Mackie brings authentic crime
            investigation expertise to page-turning fiction.
          </p>
        </div>

        <div className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-center">
          <div className="max-w-2xl fade-in">
            <p className="case-number text-sm md:text-base mb-4 text-white">
              FILE: ECI-2306-DISMISSED
            </p>
            <h1 className="font-montserrat text-white text-4xl md:text-6xl font-bold leading-tight mb-4">
              Justice is bought and sold in the shadows. He's bringing it into
              the light.
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/books">
                <Button className="bg-red-600 hover:bg-red-700 text-white font-montserrat font-bold py-3 px-8 rounded-md transition duration-300 text-center w-full sm:w-auto">
                  Discover the Book
                </Button>
              </Link>
              <Button
                onClick={() =>
                  document
                    .getElementById("newsletter")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-white hover:bg-gray-100 text-red-600 border-2 border-white font-montserrat font-bold py-3 px-8 rounded-md transition duration-300 text-center w-full sm:w-auto"
              >
                Join Newsletter
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Book Section */}
      <section id="featured-book" className="py-16 md:py-24 bg-off-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 flex justify-center">
              <BookCover size="large" />
            </div>
            <div className="lg:w-1/2 fade-in">
              <p className="case-number text-sm mb-3">NEW RELEASE: JUNE 2023</p>
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-navy mb-4">
                DISMISSED
              </h2>
              <h3 className="font-montserrat text-xl text-gray-600 italic mb-6">
                The Empire Crime Investigations
              </h3>
              <div className="mb-6 space-y-4">
                <p>
                  Peter Drake—"The Old Man"—thought he left the shadows behind when he retired from the FBI. But when whispers of a corrupt federal judge in Manhattan reach D.C., he's called back into the game.  Between offshore banking, valuable artwork, and decades-old secrets, The Old Man and his Mustang Task Force must determine if justice itself has been compromised.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={AMAZON_BOOK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-navy hover:bg-navy-light text-white font-montserrat font-bold py-3 px-8 rounded-md transition duration-300 text-center w-full sm:w-auto"
                >
                  <img 
                    src="@assets/image_1749683631433.png" 
                    alt="Amazon logo" 
                    className="w-5 h-5 mr-2 filter invert"
                  />
                  Buy on Amazon
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-black text-sm mb-2 font-courier">
              CONFIDENTIAL BRIEFING
            </p>
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-black mb-4">
              Join the Investigation
            </h2>
            <p className="text-black mb-8">
              Subscribe to N.K. Mackie's newsletter for exclusive content,
              behind-the-scenes insights, and advance notice of new releases.
            </p>

            <NewsletterForm />

            <p className="text-black text-sm mt-4">
              Your information will never be shared. You can unsubscribe at any
              time.
            </p>
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

export default Home;
