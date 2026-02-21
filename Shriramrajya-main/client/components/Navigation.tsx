import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/translations";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMainMenu, setShowMainMenu] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = (key: string) => getTranslation(key, language);

  const mainFeatures = [
    { icon: "🗺️", label: t("nav.map"), href: "/map" },
    { icon: "📅", label: t("nav.timeline"), href: "/timeline" },
    { icon: "📋", label: t("nav.itinerary"), href: "/itinerary" },
  ];

  const templeLinks = [
    { label: t("nav.ramMandir"), href: "/ram-mandir" },
    { label: t("nav.janakiMandir"), href: "/janaki-mandir" },
    { label: t("nav.nashik"), href: "/nashik" },
    { label: t("nav.rameswaram"), href: "/rameswaram" },
  ];

  const exploreFeatures = [
    { icon: "🏛️", label: t("nav.temples"), href: "/ram-mandir" },
    { icon: "🎓", label: t("nav.quiz"), href: "/quiz" },
    { icon: "📖", label: t("nav.stories"), href: "/community" },
    { icon: "🌍", label: t("nav.international"), href: "/international-ramayana" },
  ];

  const newFeatures = [
    { icon: "🛍️", label: t("nav.store"), href: "/souvenir-store" },
    { icon: "🙏", label: t("nav.pooja"), href: "/digital-pooja" },
    { icon: "🔴", label: t("nav.livestreams"), href: "/livestreams" },
    { icon: "📱", label: t("nav.offline"), href: "/offline-mode" },
    { icon: "🥽", label: t("nav.vrar"), href: "/ar-vr-walk" },
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
                  {language === "hi" ? "भगवान" : "Bhagwan"}
                </span>
                <span className="font-playfair font-bold text-amber-100 text-sm">
                  {language === "hi" ? "श्री राम यात्रा" : "Shri Ram Journey"}
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
                  ✨ {t("nav.explore")}
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                </button>

                {/* Mega Menu Dropdown */}
                <div className="absolute left-0 mt-0 w-96 bg-white shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                  <div className="p-6">
                    <div className="space-y-6">
                      {/* Temples */}
                      <div>
                        <h3 className="font-bold text-amber-900 text-sm mb-3">
                          🏛️ {t("nav.temples").toUpperCase()}
                        </h3>
                        <div className="space-y-2">
                          {templeLinks.map((item) => (
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
                          📚 {t("nav.learn").toUpperCase()}
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
                          🎉 {t("nav.newFeatures").toUpperCase()}
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

              {/* Language Toggle — FUNCTIONAL */}
              <button
                onClick={toggleLanguage}
                className="px-3 py-2 text-white hover:bg-white/10 rounded-lg transition font-bold text-sm flex items-center gap-2 border border-white/20"
                title={language === "en" ? "हिंदी में बदलें" : "Switch to English"}
              >
                <Globe className="w-4 h-4" />
                {language === "en" ? "हिंदी" : "EN"}
              </button>
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
              ✨ {t("nav.exploreAll")}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${showMainMenu ? "rotate-180" : ""
                  }`}
              />
            </button>

            {showMainMenu && (
              <div className="ml-4 space-y-3 py-2">
                {/* Temples */}
                <div>
                  <p className="text-amber-200 text-xs font-bold mb-2">
                    🏛️ {t("nav.temples").toUpperCase()}
                  </p>
                  <div className="space-y-1">
                    {templeLinks.map((item) => (
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
                    📚 {t("nav.learn").toUpperCase()}
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
                    🎉 {t("nav.newFeatures").toUpperCase()}
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

            {/* Mobile Language Toggle — FUNCTIONAL */}
            <div className="border-t border-white/20 pt-3 mt-3">
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded-lg transition font-medium flex items-center gap-2 border border-white/20"
              >
                <Globe className="w-4 h-4" />
                {language === "en" ? "🇮🇳 हिंदी में बदलें" : "🇺🇸 Switch to English"}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
