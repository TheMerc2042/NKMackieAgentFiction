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
                  className="flex items-center justify-center bg-navy hover:bg-navy-light text-white font-montserrat font-bold py-3 px-8 rounded-md transition duration-300 text-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.5381 14.2627C17.3181 14.2627 17.1281 14.2927 16.9681 14.3527C16.8081 14.4127 16.6881 14.4927 16.6081 14.5927C16.5281 14.6927 16.4781 14.8027 16.4581 14.9227C16.4380 15.0427 16.4281 15.1527 16.4281 15.2527C16.4281 15.4527 16.4681 15.6327 16.5481 15.7827C16.6281 15.9327 16.7581 16.0627 16.9381 16.1727C17.1181 16.2827 17.3581 16.3727 17.6581 16.4427C17.9581 16.5127 18.3381 16.5827 18.7881 16.6527C19.3081 16.7327 19.7781 16.8327 20.1981 16.9527C20.6181 17.0727 20.9781 17.2327 21.2781 17.4327C21.5781 17.6327 21.8081 17.8827 21.9681 18.1827C22.1281 18.4827 22.2081 18.8527 22.2081 19.2927C22.2081 19.7927 22.1081 20.2127 21.9081 20.5627C21.7081 20.9127 21.4381 21.1927 21.0981 21.4127C20.7581 21.6327 20.3681 21.7927 19.9281 21.8927C19.4881 21.9927 19.0181 22.0427 18.5181 22.0427C18.0181 22.0427 17.5181 21.9827 17.0181 21.8627C16.5181 21.7427 16.0581 21.5327 15.6381 21.2327C15.2181 20.9327 14.8781 20.5227 14.6181 20.0027C14.3581 19.4827 14.2281 18.8327 14.2281 18.0527H16.5681C16.5681 18.4527 16.6281 18.7827 16.7481 19.0327C16.8681 19.2827 17.0281 19.4727 17.2281 19.6127C17.4281 19.7527 17.6581 19.8527 17.9181 19.9127C18.1781 19.9727 18.4481 20.0027 18.7281 20.0027C18.9281 20.0027 19.1281 19.9827 19.3281 19.9427C19.5281 19.9027 19.7081 19.8327 19.8681 19.7427C20.0281 19.6527 20.1581 19.5327 20.2581 19.3927C20.3581 19.2527 20.4081 19.0727 20.4081 18.8627C20.4081 18.6227 20.3381 18.4227 20.1981 18.2727C20.0581 18.1227 19.8681 17.9927 19.6281 17.8927C19.3881 17.7927 19.1081 17.7027 18.7881 17.6327C18.4681 17.5627 18.1281 17.4927 17.7681 17.4227C17.2881 17.3427 16.8481 17.2527 16.4481 17.1527C16.0481 17.0527 15.6981 16.9127 15.3981 16.7427C15.0981 16.5727 14.8581 16.3427 14.6781 16.0627C14.4981 15.7827 14.4081 15.4127 14.4081 14.9627C14.4081 14.4927 14.5081 14.0927 14.7081 13.7527C14.9081 13.4127 15.1681 13.1327 15.4881 12.9127C15.8081 12.6927 16.1881 12.5327 16.6281 12.4227C17.0681 12.3127 17.5281 12.2627 18.0081 12.2627C18.5081 12.2627 18.9881 12.3227 19.4481 12.4427C19.9081 12.5627 20.3081 12.7527 20.6481 13.0227C20.9881 13.2927 21.2581 13.6427 21.4681 14.0627C21.6781 14.4827 21.7881 14.9827 21.7981 15.5727H19.4981C19.4781 15.2727 19.4281 15.0227 19.3381 14.8227C19.2481 14.6227 19.1281 14.4627 18.9781 14.3427C18.8281 14.2227 18.6481 14.1327 18.4481 14.0827C18.2481 14.0327 18.0381 14.0027 17.8081 14.0027C17.7081 14.0027 17.6081 14.0127 17.5181 14.0227C17.4281 14.0327 17.3481 14.0527 17.2681 14.0827C17.1881 14.1127 17.1281 14.1627 17.0781 14.2227C17.0281 14.2827 17.0081 14.3627 17.0081 14.4527C17.0081 14.6527 17.0881 14.8127 17.2381 14.9227C17.3881 15.0327 17.5981 15.1327 17.8581 15.2127C18.1181 15.2927 18.4081 15.3627 18.7381 15.4327C19.0681 15.5027 19.4081 15.5827 19.7581 15.6627C20.2281 15.7427 20.6681 15.8427 21.0681 15.9627C21.4681 16.0827 21.8181 16.2427 22.1081 16.4427C22.3981 16.6427 22.6281 16.8927 22.7981 17.1827C22.9681 17.4727 23.0481 17.8327 23.0481 18.2527C23.0481 18.6727 22.9681 19.0627 22.8081 19.4127C22.6481 19.7627 22.4081 20.0727 22.0981 20.3327C21.7881 20.5927 21.4081 20.8027 20.9681 20.9527C20.5281 21.1027 20.0281 21.1827 19.4681 21.1827C18.9181 21.1827 18.3981 21.1227 17.9081 21.0027C17.4181 20.8827 16.9781 20.6727 16.5981 20.3727C16.2181 20.0727 15.9181 19.6727 15.6981 19.1827C15.4781 18.6927 15.3681 18.0727 15.3681 17.3327H17.6781C17.6781 17.7127 17.7281 18.0227 17.8281 18.2627C17.9281 18.5027 18.0681 18.6827 18.2581 18.8127C18.4481 18.9427 18.6481 19.0327 18.8681 19.0827C19.0881 19.1327 19.3181 19.1627 19.5481 19.1627C19.7581 19.1627 19.9581 19.1427 20.1381 19.1027C20.3181 19.0627 20.4681 19.0027 20.5981 18.9227C20.7281 18.8427 20.8281 18.7427 20.9081 18.6227C20.9881 18.5027 21.0281 18.3627 21.0281 18.2027C21.0281 17.9627 20.9581 17.7627 20.8181 17.6127C20.6781 17.4627 20.4881 17.3427 20.2481 17.2427C20.0081 17.1427 19.7181 17.0527 19.3881 16.9827C19.0581 16.9127 18.7181 16.8427 18.3681 16.7727C17.8081 16.6727 17.3280 16.5627 16.9280 16.4427C16.5280 16.3227 16.1881 16.1727 15.9081 15.9927C15.6281 15.8127 15.4081 15.5727 15.2481 15.2827C15.0881 14.9927 15.0081 14.6227 15.0081 14.1727C15.0081 13.7227 15.0881 13.3127 15.2481 12.9527C15.4081 12.5927 15.6381 12.2827 15.9381 12.0327C16.2381 11.7827 16.5881 11.5927 16.9981 11.4627C17.4081 11.3327 17.8481 11.2727 18.3181 11.2727C18.8181 11.2727 19.2881 11.3327 19.7381 11.4527C20.1881 11.5727 20.5781 11.7627 20.9081 12.0227C21.2381 12.2827 21.4981 12.6027 21.6981 12.9927C21.8981 13.3827 21.9981 13.8527 21.9981 14.4027H19.6981C19.6881 14.0627 19.5981 13.7927 19.4381 13.5927C19.2781 13.3927 19.0881 13.2427 18.8581 13.1427C18.6281 13.0427 18.3881 12.9727 18.1381 12.9427C17.8881 12.9127 17.6581 12.8927 17.4381 12.8927C17.2380 12.8927 17.0681 12.9127 16.9281 12.9427C16.7881 12.9727 16.6581 13.0227 16.5581 13.0827C16.4581 13.1427 16.3881 13.2227 16.3381 13.3127C16.2881 13.4027 16.2681 13.5027 16.2681 13.6127C16.2681 13.8127 16.3481 13.9727 16.4981 14.0827C16.6481 14.1927 16.8581 14.2927 17.1181 14.3727C17.3781 14.4527 17.6681 14.5227 17.9981 14.5927C18.3281 14.6627 18.6681 14.7427 19.0181 14.8227C19.4881 14.9027 19.9281 15.0027 20.3281 15.1227C20.7281 15.2427 21.0781 15.4027 21.3681 15.6027C21.6581 15.8027 21.8881 16.0527 22.0581 16.3427C22.2281 16.6327 22.3081 16.9927 22.3081 17.4127C22.3081 17.8327 22.2281 18.2227 22.0681 18.5727C21.9081 18.9227 21.6681 19.2327 21.3481 19.4927C21.0281 19.7527 20.6581 19.9527 20.2181 20.1027C19.7781 20.2527 19.2980 20.3227 18.7781 20.3227C18.2080 20.3227 17.6781 20.2527 17.1881 20.1127C16.6981 19.9727 16.2881 19.7527 15.9581 19.4527C15.6281 19.1527 15.3781 18.7727 15.2081 18.3127C15.0381 17.8527 14.9581 17.2927 14.9681 16.6327H17.2781C17.2781 17.0127 17.3281 17.3127 17.4281 17.5527C17.5281 17.7927 17.6681 17.9927 17.8581 18.1227C18.0481 18.2527 18.2481 18.3427 18.4681 18.3927C18.6881 18.4427 18.9181 18.4727 19.1481 18.4727C19.3581 18.4727 19.5581 18.4527 19.7381 18.4127C19.9181 18.3727 20.0681 18.3127 20.1981 18.2327C20.3281 18.1527 20.4281 18.0527 20.5081 17.9327C20.5881 17.8127 20.6281 17.6727 20.6281 17.5127C20.6281 17.3027 20.5581 17.1327 20.4181 17.0027C20.2781 16.8727 20.1081 16.7627 19.9081 16.6827C19.7081 16.6027 19.4781 16.5427 19.2181 16.4927C18.9581 16.4427 18.6981 16.3927 18.4381 16.3527" />
                  </svg>
                  Buy on Amazon
                </a>
                <Button
                  onClick={() => setIsPreviewOpen(true)}
                  variant="outline"
                  className="bg-transparent hover:bg-navy/5 text-navy border-2 border-navy font-montserrat font-bold py-3 px-8 rounded-md transition duration-300 text-center"
                >
                  Read Preview
                </Button>
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
