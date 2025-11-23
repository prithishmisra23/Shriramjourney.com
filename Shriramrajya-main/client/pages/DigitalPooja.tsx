import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail } from "lucide-react";

export default function DigitalPooja() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50 flex flex-col">
      <Navigation />

      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="max-w-2xl w-full">
          {/* Main Banner */}
          <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 text-white rounded-3xl shadow-2xl p-12 md:p-16 text-center space-y-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.4),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.3),transparent_50%)]"></div>
            </div>

            <div className="relative z-10 space-y-6">
              <div className="text-7xl md:text-8xl animate-pulse">🙏</div>

              <div className="space-y-3">
                <h1 className="font-playfair font-bold text-4xl md:text-5xl leading-tight">
                  🙏 Digital Pooja
                </h1>
                <p className="text-xl md:text-2xl text-purple-100 font-semibold">
                  Opening Soon
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                <p className="text-lg text-purple-50 leading-relaxed">
                  Experience the sacred ritual of Pooja from the comfort of your home. Book personalized ceremonies performed by trained priests at sacred temples across India.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <p className="text-sm text-purple-100 mb-1">📌 Expected Launch</p>
                  <p className="text-2xl font-bold text-white">December 2025</p>
                </div>

                <div className="space-y-3">
                  <p className="text-purple-100 font-semibold">📿 Pooja Services Coming Soon:</p>
                  <ul className="text-left space-y-2 text-purple-50">
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">🕉️</span>
                      <span>Daily Aarti & Darshan Booking</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">💒</span>
                      <span>Special Occasion Ceremonies</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">📞</span>
                      <span>Live Streaming of Your Pooja</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">🎁</span>
                      <span>Prasad Delivery to Your Home</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white text-purple-900 rounded-xl p-6 space-y-3">
                <p className="font-bold text-lg">Get notified when we launch</p>
                <p className="text-sm text-purple-800 mb-4">
                  Be among the first to book sacred ceremonies at revered temples
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border-2 border-purple-300 focus:border-purple-700 focus:ring-2 focus:ring-purple-300 outline-none"
                  />
                  <Button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6">
                    <Mail className="w-4 h-4 mr-2" />
                    Notify
                  </Button>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/">
                  <Button className="bg-white text-purple-700 hover:bg-purple-50 font-bold text-lg px-8 py-3">
                    ← Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-2xl p-6 border-2 border-purple-200 shadow-lg text-center">
              <p className="text-5xl mb-3">🏛️</p>
              <h3 className="font-bold text-purple-950 mb-2">Temple Network</h3>
              <p className="text-sm text-purple-800">
                Connected with major temples across India for authentic ceremonies
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-purple-200 shadow-lg text-center">
              <p className="text-5xl mb-3">👨‍⚛️</p>
              <h3 className="font-bold text-purple-950 mb-2">Expert Priests</h3>
              <p className="text-sm text-purple-800">
                Trained and experienced priests performing authentic rituals
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-purple-200 shadow-lg text-center">
              <p className="text-5xl mb-3">✨</p>
              <h3 className="font-bold text-purple-950 mb-2">Sacred Experience</h3>
              <p className="text-sm text-purple-800">
                Personalized ceremonies tailored to your spiritual needs
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
