import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail, ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Header */}
        <div className="mb-12 bg-gradient-to-br from-amber-700 via-amber-800 to-amber-900 text-white rounded-3xl p-8 md:p-14 shadow-2xl">
          <div className="flex items-start gap-4">
            <ShieldCheck className="w-12 h-12 flex-shrink-0" />
            <div>
              <h1 className="font-playfair font-bold text-5xl md:text-6xl mb-4">
                🕉️ Privacy Policy
              </h1>
              <p className="text-lg text-amber-100">
                Your privacy is sacred. Learn how we protect your personal information.
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

          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="font-playfair font-bold text-3xl text-amber-950">
              Introduction
            </h2>
            <p className="text-amber-900 leading-relaxed text-lg">
              At ShriRamJourney.com, your privacy is sacred. We are committed to protecting your personal information and maintaining your trust while you explore the spiritual and cultural legacy of Lord Shri Ram.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="space-y-4">
            <h2 className="font-playfair font-bold text-3xl text-amber-950">
              Information We Collect
            </h2>
            <div className="space-y-3 text-amber-900">
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <p className="font-bold mb-2">📋 Personal Data</p>
                <p>Name, email address, or phone number (only if you contact us or subscribe).</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <p className="font-bold mb-2">📊 Usage Data</p>
                <p>Browser type, device information, IP address, and pages visited.</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <p className="font-bold mb-2">🍪 Cookies</p>
                <p>To enhance your browsing experience and save preferences.</p>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="space-y-4">
            <h2 className="font-playfair font-bold text-3xl text-amber-950">
              How We Use Your Information
            </h2>
            <p className="text-amber-900 leading-relaxed">
              We may use your data to:
            </p>
            <ul className="space-y-2 text-amber-900">
              {[
                "Improve website performance and content relevance.",
                "Respond to inquiries and provide support.",
                "Share updates about new features, stories, or itineraries.",
                "Enable affiliate or travel bookings via partners such as IRCTC, OYO, or Air India."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-amber-700 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Sharing of Information */}
          <section className="space-y-4">
            <h2 className="font-playfair font-bold text-3xl text-amber-950">
              Sharing of Information
            </h2>
            <p className="text-amber-900 leading-relaxed">
              We do not sell or trade your personal data. Information may be shared only with trusted third parties (e.g., travel partners or analytics providers) strictly for operational purposes.
            </p>
          </section>

          {/* Cookies and Analytics */}
          <section className="space-y-4">
            <h2 className="font-playfair font-bold text-3xl text-amber-950">
              Cookies and Analytics
            </h2>
            <p className="text-amber-900 leading-relaxed">
              We use cookies and tools like Google Analytics to understand user engagement and enhance site experience. You can disable cookies in your browser settings.
            </p>
          </section>

          {/* Security */}
          <section className="space-y-4">
            <h2 className="font-playfair font-bold text-3xl text-amber-950">
              Security
            </h2>
            <p className="text-amber-900 leading-relaxed">
              Your data is protected using secure servers and SSL encryption. However, online transmission carries inherent risks, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Third-Party Links */}
          <section className="space-y-4">
            <h2 className="font-playfair font-bold text-3xl text-amber-950">
              Third-Party Links
            </h2>
            <p className="text-amber-900 leading-relaxed">
              Our site may contain links to third-party services (IRCTC, OYO, etc.). We are not responsible for their privacy policies.
            </p>
          </section>

          {/* Contact for Privacy Concerns */}
          <section className="space-y-4">
            <h2 className="font-playfair font-bold text-3xl text-amber-950">
              Contact for Privacy Concerns
            </h2>
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border-2 border-amber-300">
              <div className="flex items-center gap-3 text-amber-900 font-semibold text-lg">
                <Mail className="w-6 h-6 text-amber-700" />
                <a href="mailto:privacy@shriramjourney.com" className="hover:text-amber-700 transition">
                  privacy@shriramjourney.com
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
