import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMainMenu, setShowMainMenu] = useState(false);
  const [showLanguageTooltip, setShowLanguageTooltip] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const mainFeatures = [
    { icon: "🗺️", label: "Map", href: "/map" },
    { icon: "📅", label: "Timeline", href: "/timeline" },
    { icon: "📋", label: "Itinerary", href: "/itinerary" },
  ];

  const exploreFeatures = [
    { icon: "🏛️", label: "Sacred Temples", href: "/ram-mandir" },
    { icon: "🎓", label: "Quiz & Learning", href: "/quiz" },
    { icon: "📖", label: "Stories", href: "/community" },
    { icon: "🌍", label: "International Ramayana", href: "/international-ramayana" },
  ];

  const newFeatures = [
    { icon: "🛍️", label: "Souvenir Store", href: "/souvenir-store" },
    { icon: "🙏", label: "Digital Pooja", href: "/digital-pooja" },
    { icon: "🔴", label: "Live Darshan", href: "/livestreams" },
    { icon: "📱", label: "Offline Mode", href: "/offline-mode" },
    { icon: "🥽", label: "VR/AR Experience", href: "/ar-vr-walk" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 shadow-xl">
      <div className="max-w-7xl mx-auto">
        {/* Top Bar */}
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group hover:opacity-90 transition-opacity"
            >
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-bold text-amber-700 shadow-lg">
                🏛️
              </div>
              <div className="flex flex-col">
                <span className="font-playfair font-bold text-white text-lg hidden sm:inline">
                  Bhagwan
                </span>
                <span className="font-playfair font-bold text-amber-100 text-sm">
                  Shri Ram Journey
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {mainFeatures.map((item) => (
                <Link key={item.href} to={item.href}>
                  <button className="px-4 py-2 text-white hover:bg-white/10 rounded-lg transition font-medium text-sm">
                    {item.icon} {item.label}
                  </button>
                </Link>
              ))}

              {/* Mega Menu Button */}
              <div className="relative group">
                <button className="px-4 py-2 text-white hover:bg-white/10 rounded-lg transition font-medium text-sm flex items-center gap-2">
                  ✨ Explore
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                </button>

                {/* Mega Menu Dropdown */}
                <div className="absolute left-0 mt-0 w-96 bg-white shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                  <div className="p-6">
                    <div className="space-y-6">
                      {/* Temples */}
                      <div>
                        <h3 className="font-bold text-amber-900 text-sm mb-3">
                          🏛️ SACRED TEMPLES
                        </h3>
                        <div className="space-y-2">
                          {[
                            { label: "Ram Mandir", href: "/ram-mandir" },
                            { label: "Janaki Mandir", href: "/janaki-mandir" },
                            { label: "Nashik & Panchavati", href: "/nashik" },
                            { label: "Rameswaram", href: "/rameswaram" },
                          ].map((item) => (
                            <Link key={item.href} to={item.href}>
                              <div className="text-amber-800 hover:text-amber-600 hover:bg-amber-50 px-3 py-2 rounded transition text-sm font-medium">
                                {item.label}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-amber-200"></div>

                      {/* Explore Options */}
                      <div>
                        <h3 className="font-bold text-amber-900 text-sm mb-3">
                          📚 LEARN & ENGAGE
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                          {exploreFeatures.map((item) => (
                            <Link key={item.href} to={item.href}>
                              <div className="text-amber-800 hover:text-amber-600 hover:bg-amber-50 px-3 py-2 rounded transition text-sm font-medium">
                                {item.icon} {item.label}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-amber-200"></div>

                      {/* New Features */}
                      <div>
                        <h3 className="font-bold text-amber-900 text-sm mb-3">
                          🎉 NEW FEATURES
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                          {newFeatures.map((item) => (
                            <Link key={item.href} to={item.href}>
                              <div className="text-amber-800 hover:text-amber-600 hover:bg-amber-50 px-3 py-2 rounded transition text-sm font-medium">
                                {item.icon} {item.label}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

            {/* Language Toggle */}
            <div className="relative">
              <button
                onClick={() => setShowLanguageTooltip(!showLanguageTooltip)}
                className="px-3 py-2 text-white hover:bg-white/10 rounded-lg transition font-bold text-sm flex items-center gap-2"
                title={language === "en" ? "Switch to Hindi" : "Switch to English"}
              >
                <Globe className="w-4 h-4" />
                {language.toUpperCase()}
              </button>
              {showLanguageTooltip && (
                <div className="absolute right-0 mt-2 w-56 bg-amber-600 text-white rounded-lg shadow-xl p-4 z-50 border-2 border-amber-500">
                  <p className="font-bold text-sm">🌐 Languages Coming Soon</p>
                  <p className="text-xs mt-2 text-amber-100">We are expanding to include Hindi, Sanskrit, and more languages. Stay tuned for multilingual support!</p>
                </div>
              )}
            </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition text-white"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-gradient-to-b from-amber-800 to-amber-900 px-4 sm:px-6 pb-4 space-y-3 max-h-96 overflow-y-auto">
            {mainFeatures.map((item) => (
              <Link key={item.href} to={item.href}>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded-lg transition text-sm font-medium"
                >
                  {item.icon} {item.label}
                </button>
              </Link>
            ))}

            <div className="border-t border-white/20"></div>

            {/* Mobile Explore Menu */}
            <button
              onClick={() => setShowMainMenu(!showMainMenu)}
              className="w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded-lg transition font-medium flex items-center justify-between"
            >
              ✨ Explore All Features
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  showMainMenu ? "rotate-180" : ""
                }`}
              />
            </button>

            {showMainMenu && (
              <div className="ml-4 space-y-3 py-2">
                {/* Temples */}
                <div>
                  <p className="text-amber-200 text-xs font-bold mb-2">
                    🏛️ SACRED TEMPLES
                  </p>
                  <div className="space-y-1">
                    {[
                      { label: "Ram Mandir", href: "/ram-mandir" },
                      { label: "Janaki Mandir", href: "/janaki-mandir" },
                      { label: "Nashik & Panchavati", href: "/nashik" },
                      { label: "Rameswaram", href: "/rameswaram" },
                    ].map((item) => (
                      <Link key={item.href} to={item.href}>
                        <div
                          onClick={() => setIsOpen(false)}
                          className="text-amber-100 hover:text-white hover:bg-white/10 px-3 py-2 rounded transition text-sm"
                        >
                          {item.label}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Learn */}
                <div>
                  <p className="text-amber-200 text-xs font-bold mb-2">
                    📚 LEARN & ENGAGE
                  </p>
                  <div className="space-y-1">
                    {exploreFeatures.map((item) => (
                      <Link key={item.href} to={item.href}>
                        <div
                          onClick={() => setIsOpen(false)}
                          className="text-amber-100 hover:text-white hover:bg-white/10 px-3 py-2 rounded transition text-sm"
                        >
                          {item.icon} {item.label}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* New Features */}
                <div>
                  <p className="text-amber-200 text-xs font-bold mb-2">
                    🎉 NEW FEATURES
                  </p>
                  <div className="space-y-1">
                    {newFeatures.map((item) => (
                      <Link key={item.href} to={item.href}>
                        <div
                          onClick={() => setIsOpen(false)}
                          className="text-amber-100 hover:text-white hover:bg-white/10 px-3 py-2 rounded transition text-sm"
                        >
                          {item.icon} {item.label}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="border-t border-white/20 pt-3 mt-3">
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded-lg transition font-medium flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                {language === "en" ? "हिंदी में" : "English"}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
