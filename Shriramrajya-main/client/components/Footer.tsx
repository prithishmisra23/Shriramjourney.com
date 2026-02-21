import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Linkedin,
} from "lucide-react";
import { ShareButtons } from "@/components/ShareButtons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-amber-900 to-amber-950 text-amber-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-amber-700 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                🏛️
              </div>
              <span className="font-playfair font-bold text-xl">
                Bhagwan Shri Ram Journey
              </span>
            </div>
            <p className="text-amber-100 text-sm mb-4">
              Explore the sacred journey of Shri Ram across Bharat
            </p>
            <div className="flex gap-4 mb-4">
              <a href="#" className="hover:text-white transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/shriramjourney-com/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <ShareButtons compact />
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/map" className="hover:text-white transition">
                  🗺️ Interactive Map
                </Link>
              </li>
              <li>
                <Link to="/itinerary" className="hover:text-white transition">
                  📋 Plan Journey
                </Link>
              </li>
              <li>
                <Link to="/community" className="hover:text-white transition">
                  👥 Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">Learn</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  📚 About Ramayana
                </Link>
              </li>
              <li>
                <Link to="/timeline" className="hover:text-white transition">
                  📖 Timeline
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="hover:text-white transition">
                  🎯 Take Quiz
                </Link>
              </li>
            </ul>
          </div>

          {/* Sacred Temples */}
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">🏛️ Temples</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/ram-mandir" className="hover:text-white transition">
                  Ram Mandir
                </Link>
              </li>
              <li>
                <Link
                  to="/janaki-mandir"
                  className="hover:text-white transition"
                >
                  Janaki Mandir
                </Link>
              </li>
              <li>
                <Link to="/nashik" className="hover:text-white transition">
                  Nashik
                </Link>
              </li>
              <li>
                <Link to="/rameswaram" className="hover:text-white transition">
                  Rameswaram
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">Support</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href="mailto:prithishmisrabusiness@gmail.com"
                  className="hover:text-white transition"
                >
                  prithishmisrabusiness@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Ayodhya, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-amber-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-amber-800/30 rounded-lg p-4 border border-amber-700">
              <p className="font-semibold text-amber-100 mb-2">
                🎓 Educational Mission
              </p>
              <p className="text-xs text-amber-200">
                Spreading knowledge of Ramayana across generations
              </p>
            </div>
            <div className="bg-amber-800/30 rounded-lg p-4 border border-amber-700">
              <p className="font-semibold text-amber-100 mb-2">
                🌍 Global Community
              </p>
              <p className="text-xs text-amber-200">
                Connecting millions of Ram devotees worldwide
              </p>
            </div>
            <div className="bg-amber-800/30 rounded-lg p-4 border border-amber-700">
              <p className="font-semibold text-amber-100 mb-2">
                ✨ Cultural Preservation
              </p>
              <p className="text-xs text-amber-200">
                Preserving sacred heritage for future generations
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-amber-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-amber-100 mb-4">
            <p>
              &copy; {currentYear} Bhagwan Shri Ram Journey - All rights
              reserved. Made with 🙏 for devotees of Shri Ram
            </p>
            <div className="flex gap-6 flex-wrap justify-center md:justify-end">
              <Link to="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition">
                Terms of Service
              </Link>
              <Link to="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </div>
          </div>
          <p className="text-xs text-amber-200 text-center">
            This platform is dedicated to preserving and sharing the divine
            teachings of the Ramayana
          </p>
        </div>
      </div>
    </footer>
  );
}
