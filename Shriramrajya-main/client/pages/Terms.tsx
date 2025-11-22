import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AlertCircle } from "lucide-react";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Header */}
        <div className="mb-12 bg-gradient-to-br from-amber-700 via-amber-800 to-amber-900 text-white rounded-3xl p-8 md:p-14 shadow-2xl">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-12 h-12 flex-shrink-0" />
            <div>
              <h1 className="font-playfair font-bold text-5xl md:text-6xl mb-4">
                ⚖️ Terms & Conditions
              </h1>
              <p className="text-lg text-amber-100">
                Please read these terms carefully before using our platform.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 bg-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-amber-100">
          {/* Effective Date */}
          <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-700">
            <p className="text-amber-900">
              <strong>Effective Date:</strong> January 2024<br />
              <strong>Last Updated:</strong> January 2024
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="font-playfair font-bold text-3xl text-amber-950">
              1. Acceptance of Terms
            </h2>
            <p className="text-amber-900 leading-relaxed text-lg">
              By accessing or using ShriRamJourney.com, you agree to these Terms & Conditions. If you disagree with any part, please discontinue using the site.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="font-playfair font-bold text-3xl text-amber-950">
              2. Nature of Service
            </h2>
            <p className="text-amber-900 leading-relaxed text-lg">
              ShriRamJourney.com provides educational, cultural, and spiritual information about Lord Shri Ram's journey and Ramayana-related travel. We are an independent digital platform — not officially affiliated with any religious trust unless specified.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="font-playfair font-bold text-3xl text-amber-950">
              3. Use of Content
            </h2>
            <div className="space-y-3 text-amber-900">
              {[
                "Content, text, and media are for informational and devotional purposes only.",
                "You may not reproduce or redistribute materials without written permission.",
                "Proper credit must be given when referencing our data."
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <span className="text-amber-700 mt-1">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="font-playfair font-bold text-3xl text-amber-950">
              4. External Links
            </h2>
            <p className="text-amber-900 leading-relaxed text-lg">
              Our site includes links to third-party services (e.g., IRCTC, OYO, Air India). We are not responsible for their accuracy, pricing, or privacy practices.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="font-playfair font-bold text-3xl text-amber-950">
              5. Affiliate Disclosure
            </h2>
            <p className="text-amber-900 leading-relaxed text-lg">
              We may earn a small commission when you book hotels, flights, or tours via our affiliate links — at no extra cost to you. This helps sustain and expand the project.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="font-playfair font-bold text-3xl text-amber-950">
              6. Disclaimer
            </h2>
            <p className="text-amber-900 leading-relaxed text-lg">
              While we strive for accuracy, information about sacred sites, historical facts, or travel data may vary by source. We do not guarantee absolute accuracy or availability of any third-party service.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="font-playfair font-bold text-3xl text-amber-950">
              7. Limitation of Liability
            </h2>
            <p className="text-amber-900 leading-relaxed text-lg">
              ShriRamJourney.com shall not be liable for any direct or indirect damages arising from use of the site or reliance on its content.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="font-playfair font-bold text-3xl text-amber-950">
              8. Modifications
            </h2>
            <p className="text-amber-900 leading-relaxed text-lg">
              We reserve the right to modify these Terms anytime. Updates will be reflected on this page.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="font-playfair font-bold text-3xl text-amber-950">
              9. Contact
            </h2>
            <p className="text-amber-900 leading-relaxed text-lg mb-4">
              For questions regarding these Terms, please contact us at:
            </p>
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border-2 border-amber-300">
              <p className="text-amber-900 font-semibold text-lg">
                📧 contact@shriramjourney.com
              </p>
            </div>
          </section>

          {/* Acceptance Notice */}
          <div className="bg-amber-100 border-2 border-amber-400 rounded-lg p-6 mt-12">
            <p className="text-amber-950 font-bold text-center">
              By using this site, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
