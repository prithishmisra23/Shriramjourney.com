import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail } from "lucide-react";

export default function SouvenirStore() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50 flex flex-col">
      <Navigation />

      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="max-w-2xl w-full">
          {/* Main Banner */}
          <div className="bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-600 text-white rounded-3xl shadow-2xl p-12 md:p-16 text-center space-y-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.4),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.3),transparent_50%)]"></div>
            </div>

            <div className="relative z-10 space-y-6">
              <div className="text-7xl md:text-8xl animate-bounce">🚧</div>

              <div className="space-y-3">
                <h1 className="font-playfair font-bold text-4xl md:text-5xl leading-tight">
                  🛍️ Souvenir Store
                </h1>
                <p className="text-xl md:text-2xl text-orange-100 font-semibold">
                  Launching Soon
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                <p className="text-lg text-orange-50 leading-relaxed">
                  We're curating an exclusive collection of handcrafted Ramayana souvenirs, traditional clothing, and sacred items directly from talented artisans across India.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <p className="text-sm text-orange-100 mb-1">📌 Expected Launch</p>
                  <p className="text-2xl font-bold text-white">December 2025</p>
                </div>

                <div className="space-y-3">
                  <p className="text-orange-100 font-semibold">🎁 Coming Soon:</p>
                  <ul className="text-left space-y-2 text-orange-50">
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">🎨</span>
                      <span>Hand-painted Religious Idols & Art</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">👗</span>
                      <span>Traditional Clothing & Accessories</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">🏺</span>
                      <span>Handcrafted Prasad Boxes & Temple Items</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-2xl">✈️</span>
                      <span>Pilgrim Travel Kits & Essentials</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white text-amber-900 rounded-xl p-6 space-y-3">
                <p className="font-bold text-lg">Get notified when we launch</p>
                <p className="text-sm text-amber-800 mb-4">
                  Sign up to be the first to know and get exclusive launch offers
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border-2 border-amber-300 focus:border-amber-700 focus:ring-2 focus:ring-amber-300 outline-none"
                  />
                  <Button className="bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6">
                    <Mail className="w-4 h-4 mr-2" />
                    Notify
                  </Button>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/">
                  <Button className="bg-white text-amber-700 hover:bg-amber-50 font-bold text-lg px-8 py-3">
                    ← Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-2xl p-6 border-2 border-amber-200 shadow-lg text-center">
              <p className="text-5xl mb-3">🎯</p>
              <h3 className="font-bold text-amber-950 mb-2">Curated Selection</h3>
              <p className="text-sm text-amber-800">
                Every product is carefully selected for authenticity and quality
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-amber-200 shadow-lg text-center">
              <p className="text-5xl mb-3">🤝</p>
              <h3 className="font-bold text-amber-950 mb-2">Support Artisans</h3>
              <p className="text-sm text-amber-800">
                Direct support to skilled craftspeople and rural communities
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-amber-200 shadow-lg text-center">
              <p className="text-5xl mb-3">✨</p>
              <h3 className="font-bold text-amber-950 mb-2">Quality Assured</h3>
              <p className="text-sm text-amber-800">
                Certified authentic items with guaranteed quality standards
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
