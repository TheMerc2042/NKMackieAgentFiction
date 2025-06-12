import { Link } from "wouter";

const Cookies = () => {
  return (
    <section className="py-16 md:py-24 bg-white text-gray-800">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="font-montserrat text-3xl md:text-4xl font-bold mb-4 text-navy">Cookie Policy</h1>
          <p className="text-gray-600">Last updated: June 2025</p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            This Cookie Policy explains how we use cookies and similar tracking technologies on [nkmackie.com or nkmackiebooks.com] ("Website").
          </p>

          <h2 className="font-montserrat text-2xl font-bold mt-8 mb-4 text-navy">1. What Are Cookies?</h2>
          <p className="mb-6">
            Cookies are small text files placed on your device when you visit a website. They help improve your experience by remembering your preferences, enabling functionality, and helping us understand how visitors use our site.
          </p>

          <h2 className="font-montserrat text-2xl font-bold mt-8 mb-4 text-navy">2. How We Use Cookies</h2>
          <p className="mb-4">We use cookies to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Understand how visitors interact with our site (e.g., via Google Analytics)</li>
            <li className="mb-2">Improve website performance and user experience</li>
            <li className="mb-2">Support basic functionality such as remembering form inputs or preferences</li>
          </ul>
          <p className="mb-6">
            We do not use cookies to track you across other websites or to serve targeted ads.
          </p>

          <h2 className="font-montserrat text-2xl font-bold mt-8 mb-4 text-navy">3. Types of Cookies We Use</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left font-montserrat font-bold text-navy">Type of Cookie</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-montserrat font-bold text-navy">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Essential Cookies</td>
                  <td className="border border-gray-300 px-4 py-2">Necessary for basic site functionality</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Analytics Cookies</td>
                  <td className="border border-gray-300 px-4 py-2">Help us understand how visitors use the website</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Preference Cookies</td>
                  <td className="border border-gray-300 px-4 py-2">Remember your settings (e.g., language, layout)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-montserrat text-2xl font-bold mt-8 mb-4 text-navy">4. Managing Cookies</h2>
          <p className="mb-4">Most web browsers allow you to control cookies through their settings. You can:</p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Delete existing cookies</li>
            <li className="mb-2">Block new cookies</li>
            <li className="mb-2">Receive a warning before cookies are stored</li>
          </ul>
          <p className="mb-6">
            Check your browser's Help section for more information.<br />
            <strong>Note:</strong> Disabling cookies may affect how our website functions.
          </p>

          <h2 className="font-montserrat text-2xl font-bold mt-8 mb-4 text-navy">5. Third-Party Cookies</h2>
          <p className="mb-6">
            We may use third-party services (like Google Analytics or Mailchimp) that also place cookies on your device. These third parties have their own privacy and cookie policies.
          </p>

          <h2 className="font-montserrat text-2xl font-bold mt-8 mb-4 text-navy">6. Updates to This Policy</h2>
          <p className="mb-6">
            We may update this Cookie Policy occasionally. Please review it regularly to stay informed.
          </p>

          <h2 className="font-montserrat text-2xl font-bold mt-8 mb-4 text-navy">7. Contact</h2>
          <p className="mb-6">
            If you have any questions about this Cookie Policy, contact us at:
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

export default Cookies;