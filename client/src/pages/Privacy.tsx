const Privacy = () => {
  return (
    <section className="py-16 md:py-24 bg-white text-gray-800">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="font-montserrat text-3xl md:text-4xl font-bold mb-4 text-navy">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: June 2025</p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            This Privacy Policy describes how NK Mackie ("we", "us", or "our") collects, uses, and protects your information when you visit our website [nkmackie.com or nkmackiebooks.com].
          </p>

          <h2 className="font-montserrat text-2xl font-bold mt-8 mb-4 text-navy">1. Information We Collect</h2>
          <p className="mb-4">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">
              <strong>Personal Information</strong> you provide directly, such as your name and email address when you subscribe to our newsletter or fill out a contact form.
            </li>
            <li className="mb-2">
              <strong>Usage Data</strong> such as IP address, browser type, pages visited, and time spent on the site — collected through cookies or analytics tools like Google Analytics.
            </li>
          </ul>

          <h2 className="font-montserrat text-2xl font-bold mt-8 mb-4 text-navy">2. How We Use Your Information</h2>
          <p className="mb-4">We use your information to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Send email updates and newsletters (with your consent)</li>
            <li className="mb-2">Respond to your messages or inquiries</li>
            <li className="mb-2">Analyze site traffic and improve the website experience</li>
          </ul>

          <h2 className="font-montserrat text-2xl font-bold mt-8 mb-4 text-navy">3. Sharing Your Information</h2>
          <p className="mb-6">
            We do not sell, rent, or trade your personal information. We may share data with third-party services that help us operate the website (e.g., our email marketing provider), but only to the extent necessary.
          </p>

          <h2 className="font-montserrat text-2xl font-bold mt-8 mb-4 text-navy">4. Cookies</h2>
          <p className="mb-6">
            We use cookies to analyze traffic and understand user behavior. You can disable cookies through your browser settings.
          </p>

          <h2 className="font-montserrat text-2xl font-bold mt-8 mb-4 text-navy">5. Data Security</h2>
          <p className="mb-6">
            We take reasonable measures to protect your information but cannot guarantee 100% security due to the nature of the internet.
          </p>

          <h2 className="font-montserrat text-2xl font-bold mt-8 mb-4 text-navy">6. Your Rights</h2>
          <p className="mb-6">
            You can unsubscribe from emails at any time by clicking the link in the email footer. You may also contact us at [insert email] to request access to or deletion of your data.
          </p>

          <h2 className="font-montserrat text-2xl font-bold mt-8 mb-4 text-navy">7. Third-Party Links</h2>
          <p className="mb-6">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites.
          </p>

          <h2 className="font-montserrat text-2xl font-bold mt-8 mb-4 text-navy">8. Children's Privacy</h2>
          <p className="mb-6">
            This website is not intended for children under the age of 13, and we do not knowingly collect information from them.
          </p>

          <h2 className="font-montserrat text-2xl font-bold mt-8 mb-4 text-navy">9. Changes to This Policy</h2>
          <p className="mb-6">
            We may update this policy occasionally. Please check this page for the latest version.
          </p>

          <h2 className="font-montserrat text-2xl font-bold mt-8 mb-4 text-navy">10. Contact Us</h2>
          <p className="mb-6">
            If you have any questions about this Privacy Policy, please contact us using our contact form:
          </p>
          <p className="text-center">
            <a href="/contact" className="text-red-600 hover:text-red-700 font-bold">
              🌐 nkmackie.com/contact
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;