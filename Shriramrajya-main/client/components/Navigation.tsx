import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTemples, setShowTemples] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-amber-200/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 group hover:scale-105 transition-transform">
            <div className="w-9 h-9 bg-gradient-to-br from-amber-700 to-amber-900 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-amber-700/50 transition-shadow">
              🏛️
            </div>
            <span className="font-playfair font-bold text-lg text-amber-900 hidden sm:inline hover:gradient-text transition-all">
              Bhagwan Shri Ram Journey
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/map"
              className="text-amber-900 font-bold text-sm hover:text-amber-700 transition relative group"
            >
              🗺️ Map
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-700 to-amber-900 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Sacred Temples Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-2 text-amber-900 font-bold text-sm hover:text-amber-700 transition py-2 px-1">
                🏛️ Temples
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute left-0 mt-0 w-52 bg-white/98 backdrop-blur-md border-2 border-amber-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                <Link
                  to="/ram-mandir"
                  className="block px-5 py-3 text-amber-900 hover:bg-gradient-to-r hover:from-amber-50 to-orange-50 border-b border-amber-100 text-sm font-bold transition-all"
                >
                  🏰 Ram Mandir
                </Link>
                <Link
                  to="/janaki-mandir"
                  className="block px-5 py-3 text-amber-900 hover:bg-gradient-to-r hover:from-amber-50 to-orange-50 border-b border-amber-100 text-sm font-bold transition-all"
                >
                  👑 Janaki Mandir
                </Link>
                <Link
                  to="/nashik"
                  className="block px-5 py-3 text-amber-900 hover:bg-gradient-to-r hover:from-amber-50 to-orange-50 border-b border-amber-100 text-sm font-bold transition-all"
                >
                  🌊 Nashik & Panchavati
                </Link>
                <Link
                  to="/rameswaram"
                  className="block px-5 py-3 text-amber-900 hover:bg-gradient-to-r hover:from-amber-50 to-orange-50 text-sm font-bold transition-all"
                >
                  Ramanathaswamy
                </Link>
              </div>
            </div>

            <Link
              to="/timeline"
              className="text-amber-900 hover:text-amber-700 transition font-medium text-sm"
            >
              Timeline
            </Link>
            <Link
              to="/quiz"
              className="text-amber-900 hover:text-amber-700 transition font-medium text-sm"
            >
              Quiz
            </Link>
            <Link
              to="/community"
              className="text-amber-900 hover:text-amber-700 transition font-medium text-sm"
            >
              Stories
            </Link>
            <Link
              to="/itinerary"
              className="text-amber-900 hover:text-amber-700 transition font-medium text-sm"
            >
              Itinerary
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-amber-50 rounded-lg transition"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-amber-900" />
            ) : (
              <Menu className="w-5 h-5 text-amber-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              to="/map"
              className="block px-4 py-2 text-amber-900 hover:bg-amber-50 rounded transition text-sm"
              onClick={() => setIsOpen(false)}
            >
              Map
            </Link>

            {/* Sacred Temples Mobile */}
            <button
              onClick={() => setShowTemples(!showTemples)}
              className="w-full text-left px-4 py-2 text-amber-900 hover:bg-amber-50 rounded transition text-sm font-semibold flex items-center justify-between"
            >
              🏛️ Sacred Temples
              <ChevronDown
                className={`w-4 h-4 transition-transform ${showTemples ? "rotate-180" : ""}`}
              />
            </button>
            {showTemples && (
              <>
                <Link
                  to="/ram-mandir"
                  className="block px-8 py-2 text-amber-900 hover:bg-amber-50 rounded transition text-sm"
                  onClick={() => {
                    setIsOpen(false);
                    setShowTemples(false);
                  }}
                >
                  Ram Mandir
                </Link>
                <Link
                  to="/janaki-mandir"
                  className="block px-8 py-2 text-amber-900 hover:bg-amber-50 rounded transition text-sm"
                  onClick={() => {
                    setIsOpen(false);
                    setShowTemples(false);
                  }}
                >
                  Janaki Mandir
                </Link>
                <Link
                  to="/nashik"
                  className="block px-8 py-2 text-amber-900 hover:bg-amber-50 rounded transition text-sm"
                  onClick={() => {
                    setIsOpen(false);
                    setShowTemples(false);
                  }}
                >
                  Nashik & Panchavati
                </Link>
                <Link
                  to="/rameswaram"
                  className="block px-8 py-2 text-amber-900 hover:bg-amber-50 rounded transition text-sm"
                  onClick={() => {
                    setIsOpen(false);
                    setShowTemples(false);
                  }}
                >
                  Ramanathaswamy
                </Link>
              </>
            )}

            <Link
              to="/timeline"
              className="block px-4 py-2 text-amber-900 hover:bg-amber-50 rounded transition text-sm"
              onClick={() => setIsOpen(false)}
            >
              Timeline
            </Link>
            <Link
              to="/quiz"
              className="block px-4 py-2 text-amber-900 hover:bg-amber-50 rounded transition text-sm"
              onClick={() => setIsOpen(false)}
            >
              Quiz
            </Link>
            <Link
              to="/community"
              className="block px-4 py-2 text-amber-900 hover:bg-amber-50 rounded transition text-sm"
              onClick={() => setIsOpen(false)}
            >
              Stories
            </Link>
            <Link
              to="/itinerary"
              className="block px-4 py-2 text-amber-900 hover:bg-amber-50 rounded transition text-sm"
              onClick={() => setIsOpen(false)}
            >
              Itinerary
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 text-amber-900 hover:bg-amber-50 rounded transition text-sm"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <div className="px-4 py-2">
              <Button className="w-full bg-amber-700 hover:bg-amber-800 text-sm">
                📞 Support
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
