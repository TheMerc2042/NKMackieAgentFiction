import { useState } from "react";
import { CONTACT_BACKGROUNDS, SOCIAL_LINKS, UPCOMING_EVENTS } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";
import { formatDate } from "@/lib/utils";
import { Link } from "wouter";
import { Twitter, Instagram, Facebook, BookOpen } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-off-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="case-number text-sm mb-2">SECURE COMMUNICATION</p>
          <h1 className="font-montserrat text-3xl md:text-4xl font-bold text-navy mb-4">Contact</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about upcoming books, speaking engagements, or media inquiries? Get in touch.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          <div className="lg:w-1/2 fade-in">
            <div className="h-64 bg-gray-100 rounded-xl overflow-hidden shadow-lg">
              <div className="h-full w-full p-8 flex items-end">
                <div>
                  <h3 className="font-montserrat text-xl font-bold text-black mb-2">Business Inquiries</h3>
                  <div className="space-y-1 text-black">
                    <p>Literary Agent: Maxwell Literary Agency</p>
                    <p>Speaking Engagements: contact@nkmackie.com</p>
                    <p>Media Requests: press@nkmackie.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 space-y-6 px-4">
              <div>
                <h3 className="font-montserrat text-xl font-bold text-navy mb-3">Connect</h3>
                <div className="flex gap-4">
                  <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" 
                     className="bg-navy hover:bg-navy-light text-white h-12 w-12 rounded-full flex items-center justify-center transition duration-300">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer"
                     className="bg-navy hover:bg-navy-light text-white h-12 w-12 rounded-full flex items-center justify-center transition duration-300">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer"
                     className="bg-navy hover:bg-navy-light text-white h-12 w-12 rounded-full flex items-center justify-center transition duration-300">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href={SOCIAL_LINKS.goodreads} target="_blank" rel="noopener noreferrer"
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
          
          <div className="lg:w-1/2 fade-in">
            <div className="bg-white rounded-xl shadow-card p-8">
              <h3 className="font-montserrat text-xl font-bold text-navy mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
