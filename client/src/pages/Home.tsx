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
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 120 60"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="#FF9900" d="M82.54 35.23c-2.64 1.95-6.46 2.98-9.76 2.98-4.62 0-8.78-1.71-11.93-4.54-.25-.22-.03-.52.27-.35 3.46 2.01 7.74 3.22 12.16 3.22 2.98 0 6.26-.62 9.27-1.9.45-.19.83.3.4.65l-.41-.06z"/>
                      <path fill="#FF9900" d="M84.16 33.33c-.34-.43-2.22-.2-3.07-.1-.26.03-.3-.19-.07-.35 1.5-1.05 3.96-.75 4.25-.4.29.36-.08 2.84-1.49 4.03-.22.18-.43.08-.33-.15.32-.81 1.05-2.6.71-3.03z"/>
                      <path fill="#000000" d="M77.45 13.06V11c0-.3.23-.5.5-.5h8.95c.28 0 .51.22.51.5v1.76c0 .28-.24.65-.65 1.1l-4.63 6.61c1.72-.04 3.54.22 5.1 1.1.35.2.45.49.48.78v1.87c0 .29-.32.62-.65.47-2.68-1.4-6.23-1.56-9.19.01-.31.14-.64-.19-.64-.48v-1.78c0-.32.01-.86.32-1.34l5.36-7.68h-4.66c-.28 0-.51-.22-.51-.5l-.29.06z"/>
                      <path fill="#000000" d="M31.84 24.72h-2.39c-.23-.02-.41-.19-.43-.4V11.05c0-.24.2-.44.45-.44h2.22c.24.01.43.19.45.42v1.68h.05c.6-1.6 1.73-2.37 3.25-2.37 1.55 0 2.52.77 3.21 2.37.6-1.6 1.96-2.37 3.43-2.37 1.04 0 2.18.43 2.88 1.4.78 1.08.62 2.65.62 4.03v8.51c0 .24-.2.44-.45.44h-2.38c-.24-.02-.43-.21-.43-.44v-7.15c0-.54.05-1.89-.07-2.4-.19-.86-.76-1.1-1.49-1.1-.61 0-1.26.41-1.52 1.07-.26.65-.23 1.75-.23 2.43v7.15c0 .24-.2.44-.45.44h-2.38c-.24-.02-.43-.21-.43-.44v-7.15c0-1.5.24-3.71-1.56-3.71-1.83 0-1.76 2.08-1.76 3.71v7.15c0 .24-.2.44-.45.44z"/>
                      <path fill="#000000" d="M70.84 10.26c3.54 0 5.46 3.04 5.46 6.91 0 3.74-2.12 6.7-5.46 6.7-3.47 0-5.37-3.04-5.37-6.83 0-3.82 1.93-6.78 5.37-6.78zm0 2.48c-1.76 0-1.87 2.4-1.87 3.89 0 1.51-.02 4.69 1.85 4.69 1.85 0 1.94-2.59 1.94-4.17 0-1.03-.05-2.27-.28-3.25-.2-.86-.59-1.16-1.31-1.16h-.33z"/>
                      <path fill="#000000" d="M81.98 24.72h-2.37c-.24-.02-.43-.21-.43-.44V11.05c0-.24.21-.44.47-.44h2.21c.21.01.39.15.43.35v1.96h.05c.67-1.74 1.61-2.58 3.3-2.58 1.09 0 2.15.39 2.83 1.47.64 1.01.64 2.71.64 3.93v8.54c0 .24-.2.44-.45.44h-2.39c-.23-.02-.42-.21-.42-.44v-7.37c0-1.48.17-3.66-1.64-3.66-.64 0-1.22.43-1.51 1.08-.37.82-.42 1.64-.42 2.55v7.37c0 .24-.2.44-.45.44l-.82.03z"/>
                      <path fill="#000000" d="M26.5 17.45c0 1.31.03 2.4-.63 3.56-.53.94-1.38 1.52-2.32 1.52-1.29 0-2.04-.98-2.04-2.43 0-2.86 2.57-3.38 4.99-3.38v.73zm2.42 5.88c-.16.14-.39.15-.57.06--.8-.66--.94--.97-1.38-1.6-1.32 1.34-2.26 1.74-3.97 1.74-2.03 0-3.61-1.25-3.61-3.76 0-1.96.71-3.29 2.42-3.94 1.48-.57 3.55-.67 5.13-.83v-.31c0-.57.04-1.24-.29-1.71-.29-.42-.84-.59-1.33-.59--.9 0-1.7.46-1.9 1.42-.04.21-.2.42-.42.43l-2.32-.25c-.2-.05-.42-.22-.36-.55.54-2.84 3.13-3.7 5.44-3.7 1.19 0 2.74.32 3.68 1.22 1.19 1.13 1.08 2.64 1.08 4.28v3.88c0 1.17.48 1.68.93 2.31.16.22.19.49.01.65-.47.39-1.31 1.12-1.77 1.53l-.04-.03z"/>
                      <path fill="#000000" d="M8.81 17.45c0 1.31.03 2.4-.63 3.56-.53.94-1.38 1.52-2.32 1.52-1.29 0-2.04-.98-2.04-2.43 0-2.86 2.57-3.38 4.99-3.38v.73zm2.42 5.88c-.16.14-.39.15-.57.06-.8-.66-.94-.97-1.38-1.6-1.32 1.34-2.26 1.74-3.97 1.74-2.03 0-3.61-1.25-3.61-3.76 0-1.96.71-3.29 2.42-3.94 1.48-.57 3.55-.67 5.13-.83v-.31c0-.57.04-1.24-.29-1.71-.29-.42-.84-.59-1.33-.59-.9 0-1.7.46-1.9 1.42-.04.21-.2.42-.42.43l-2.32-.25c-.2-.05-.42-.22-.36-.55.54-2.84 3.13-3.7 5.44-3.7 1.19 0 2.74.32 3.68 1.22 1.19 1.13 1.08 2.64 1.08 4.28v3.88c0 1.17.48 1.68.93 2.31.16.22.19.49.01.65-.47.39-1.31 1.12-1.77 1.53l-.04-.03z"/>
                      <path fill="#000000" d="M52.81 10.26c1.73 0 2.67.43 3.6 1.97l4.25 8.59 4.15-8.59c.91-1.54 1.84-1.97 3.57-1.97h2.68c.28 0 .47.24.41.52l-6.89 13.44c-.84 1.64-2.21 3.02-4.02 3.02-1.29 0-2.64-.48-3.54-1.78-.2-.29-.18-.49.08-.73l1.46-1.23c.22-.19.47-.13.67.11.49.59.93.87 1.69.87.78 0 1.21-.38 1.61-1.22l.21-.48-6.59-12.71c-.16-.3.02-.54.34-.54h2.51z"/>
                    </g>
                  </svg>
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
