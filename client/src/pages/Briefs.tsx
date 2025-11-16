import { CORPORATE_MYSTERY_BACKGROUNDS } from "@/lib/constants";
import NewsletterForm from "@/components/NewsletterForm";

const Briefs = () => {
  const backgroundImage = CORPORATE_MYSTERY_BACKGROUNDS[0];

  return (
    <div className="min-h-[90vh] flex items-center justify-center relative">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-slate-200 p-8 space-y-10">
          {/* Header */}
          <header className="text-center space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-montserrat">
              NK Mackie Newsletter
            </h1>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              Get new stories, behind-the-scenes notes, and NK&apos;s latest
              projects delivered straight to your inbox.
            </p>
          </header>

          {/* Subscribe section */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Subscribe
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              Enter your email below to join the list. You can unsubscribe
              anytime.
            </p>
            <NewsletterForm />
          </section>

          {/* Archive / recent issues */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Recent issues
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              After each newsletter is published, we&apos;ll add a link here so
              readers can catch up on past issues.
            </p>

            <ul className="space-y-2 text-sm text-slate-700">
              <li className="italic text-slate-500">
                Archive coming soon.
              </li>
              {/* Example for later:
              <li>
                <a
                  href="https://your-kit-publish-url-here"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Issue #1 – Title goes here
                </a>
              </li>
              */}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Briefs;
