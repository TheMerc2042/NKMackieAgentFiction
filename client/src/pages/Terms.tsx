import { Link } from "wouter";

const Terms = () => {
  return (
    <section className="py-16 md:py-24 bg-white text-gray-800">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="font-montserrat text-3xl md:text-4xl font-bold mb-4 text-navy">Terms of Service</h1>
          <p className="text-gray-600">Last updated: June 2025</p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            Welcome to [insert website URL], the official website of NK Mackie ("we", "us", or "our"). By using this website, you agree to the following terms and conditions. Please read them carefully.
          </p>

          <h2 className="font-montserrat text-2xl font-bold mt-8 mb-4 text-navy">1. Use of Website</h2>
          <p className="mb-6">
            You agree to use this website for lawful purposes only. You may not use this site in any way that could damage the site, interfere with other users, or infringe on our rights or the rights of others.
          </p>

          <h2 className="font-montserrat text-2xl font-bold mt-8 mb-4 text-navy">2. Intellectual Property</h2>
          <p className="mb-6">
            All content on this website — including text, graphics, logos, images, and downloadable materials — is the property of NK Mackie or used with proper permission. You may not copy, distribute, or reproduce any content without prior written consent.
          </p>

          <h2 className="font-montserrat text-2xl font-bold mt-8 mb-4 text-navy">3. Email Subscriptions</h2>
          <p className="mb-6">
            If you subscribe to our newsletter, you agree to receive occasional updates from us. You may unsubscribe at any time by clicking the "unsubscribe" link in any email. We will never share or sell your information.
          </p>

          <h2 className="font-montserrat text-2xl font-bold mt-8 mb-4 text-navy">4. User Contributions</h2>
          <p className="mb-6">
            If you submit comments, messages, or content through our forms or email, you grant us the right to use, reproduce, and display that content as appropriate for marketing or community engagement, unless you explicitly state otherwise.
          </p>

          <h2 className="font-montserrat text-2xl font-bold mt-8 mb-4 text-navy">5. Third-Party Links</h2>
          <p className="mb-6">
            This site may contain links to external websites. We are not responsible for the content or practices of those third-party sites.
          </p>

          <h2 className="font-montserrat text-2xl font-bold mt-8 mb-4 text-navy">6. Disclaimers</h2>
          <p className="mb-6">
            The content on this site is provided for informational and entertainment purposes only. While we strive for accuracy, we make no guarantees about the completeness or reliability of any content.
          </p>

          <h2 className="font-montserrat text-2xl font-bold mt-8 mb-4 text-navy">7. Limitation of Liability</h2>
          <p className="mb-6">
            We are not liable for any damages arising from your use of, or inability to use, this website — including any viruses or harmful components that may be transmitted.
          </p>

          <h2 className="font-montserrat text-2xl font-bold mt-8 mb-4 text-navy">8. Modifications</h2>
          <p className="mb-6">
            We may update these terms from time to time. Continued use of the website after changes are posted means you accept the updated terms.
          </p>

          <h2 className="font-montserrat text-2xl font-bold mt-8 mb-4 text-navy">9. Governing Law</h2>
          <p className="mb-6">
            These terms are governed by the laws of the State of [Insert State, likely New York], without regard to conflict of law principles.
          </p>

          <h2 className="font-montserrat text-2xl font-bold mt-8 mb-4 text-navy">10. Contact Us</h2>
          <p className="mb-6">
            If you have questions about these terms, please contact us at:
          </p>
          <p className="text-center">
            <Link href="/contact" className="text-red-600 hover:text-red-700 font-bold">
              🌐 nkmackie.com/contact
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Terms;