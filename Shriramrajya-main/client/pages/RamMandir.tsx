import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, MapPin, Clock, Users, Zap, Award } from "lucide-react";
import { useState } from "react";

export default function RamMandir() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navigation />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        {/* Hero Section */}
        <div className="mb-12 bg-gradient-to-r from-amber-700 to-amber-900 text-white rounded-lg p-8 md:p-12">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="font-playfair font-bold text-5xl mb-4">
                Ram Mandir
              </h1>
              <p className="text-2xl font-light mb-4">
                Ayodhya, Uttar Pradesh, India
              </p>
              <div className="flex items-center gap-4 text-amber-100">
                <span className="flex items-center gap-1">
                  <MapPin className="w-5 h-5" />
                  Latitude: 26.8117°N
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-5 h-5" />
                  Longitude: 82.0023°E
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="p-3 hover:bg-amber-800 rounded-full transition"
            >
              <Heart className={`w-8 h-8 ${isFavorite ? "fill-white" : ""}`} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <p className="text-amber-100 text-sm">Opening Date</p>
              <p className="text-2xl font-bold">22 Jan 2024</p>
            </div>
            <div>
              <p className="text-amber-100 text-sm">Construction Time</p>
              <p className="text-2xl font-bold">5.5 Years</p>
            </div>
            <div>
              <p className="text-amber-100 text-sm">Annual Visitors</p>
              <p className="text-2xl font-bold">5 Million+</p>
            </div>
            <div>
              <p className="text-amber-100 text-sm">Built Area</p>
              <p className="text-2xl font-bold">70,000 m²</p>
            </div>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Card className="border-amber-200 hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="text-lg text-amber-950 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-700" />
                Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-amber-700">
                ✅ Inaugurated
              </p>
              <p className="text-sm text-amber-900 mt-2">January 22, 2024</p>
            </CardContent>
          </Card>

          <Card className="border-amber-200 hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="text-lg text-amber-950 flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-700" />
                Darshan Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-amber-700">
                6:00 AM - 12:00 AM
              </p>
              <p className="text-sm text-amber-900 mt-2">
                Open all days, free entry
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-200 hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="text-lg text-amber-950 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-700" />
                Special Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-amber-700">Ram Navami</p>
              <p className="text-sm text-amber-900 mt-2">
                March/April celebrations
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Overview */}
        <Card className="border-amber-200 mb-8">
          <CardHeader>
            <CardTitle className="text-3xl text-amber-950">Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-amber-900">
            <p className="leading-relaxed">
              The Ram Mandir in Ayodhya is a magnificent temple dedicated to
              Lord Rama, inaugurated on January 22, 2024. This is one of the
              most significant spiritual projects of modern India, representing
              centuries of devotion and belief. The temple stands at the
              believed birthplace of Rama, the seventh Avatar of Lord Vishnu.
            </p>
            <p className="leading-relaxed">
              Built over 5.5 years, the Ram Mandir combines ancient Vedic
              architectural principles with modern construction technology. The
              main temple structure features intricate stone carvings depicting
              scenes from the Ramayana, beautiful courtyards, and multiple
              sanctuaries. The sanctum sanctorum houses the idol of Ram - a
              five-foot, intricately carved sandstone figure.
            </p>
            <p className="leading-relaxed font-semibold text-amber-950">
              This temple is not just a religious structure but a symbol of
              India's cultural heritage, spiritual aspiration, and the triumph
              of faith and patience.
            </p>
          </CardContent>
        </Card>

        {/* Historical Background */}
        <Card className="border-amber-200 mb-8">
          <CardHeader>
            <CardTitle className="text-3xl text-amber-950">
              Historical Background
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-amber-900">
            <div className="border-l-4 border-amber-700 pl-4">
              <h3 className="font-bold text-lg text-amber-950 mb-2">
                Ancient History
              </h3>
              <p>
                Ayodhya has been the sacred birthplace of Lord Rama for
                thousands of years. According to the Ramayana, this is where Ram
                was born to King Dashrath and Queen Kausalya. Temples have
                existed at this site since ancient times, serving as pilgrimage
                centers for millions of devotees.
              </p>
            </div>

            <div className="border-l-4 border-amber-700 pl-4">
              <h3 className="font-bold text-lg text-amber-950 mb-2">
                Babri Masjid Era (1528-1992)
              </h3>
              <p>
                In 1528, a mosque (Babri Masjid) was constructed at this
                location. For nearly 500 years, the site remained contested,
                with both Hindu and Muslim communities claiming rights. In 1992,
                the structure was demolished, and intense legal battles ensued
                for three decades.
              </p>
            </div>

            <div className="border-l-4 border-amber-700 pl-4">
              <h3 className="font-bold text-lg text-amber-950 mb-2">
                Supreme Court Judgment (2019)
              </h3>
              <p>
                On November 9, 2019, the Supreme Court of India ruled
                unanimously in favor of constructing a Ram temple at the site.
                The court stated that the entire disputed land should be given
                to a deity representing Ram, with directions to construct the
                temple.
              </p>
            </div>

            <div className="border-l-4 border-amber-700 pl-4">
              <h3 className="font-bold text-lg text-amber-950 mb-2">
                Construction Phase (2018-2024)
              </h3>
              <p>
                Foundation stone was laid on August 5, 2020 by Prime Minister
                Narendra Modi. The Ram Mandir Trust took over the construction
                project. Over 5.5 years, thousands of workers, engineers, and
                artisans worked to build this magnificent structure using
                traditional and modern techniques.
              </p>
            </div>

            <div className="border-l-4 border-amber-700 pl-4 bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded">
              <h3 className="font-bold text-lg text-amber-950 mb-2">
                🎉 Grand Inauguration (2024)
              </h3>
              <p className="mb-3">
                On January 22, 2024, Prime Minister Narendra Modi inaugurated
                the Ram Mandir in a grand ceremony watched by millions across
                India. The first 'Aarti' was performed, and Ram was formally
                installed in the sanctum sanctorum.
              </p>
              <p className="font-semibold">
                This historic event marked the fulfillment of a 500-year
                aspiration and is considered one of the most significant
                spiritual events in modern India.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Architecture & Design */}
        <Card className="border-amber-200 mb-8">
          <CardHeader>
            <CardTitle className="text-3xl text-amber-950">
              Architecture & Design
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-amber-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg text-amber-950 mb-3">
                  Architectural Style
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    ✨ <strong>Nagara Style:</strong> Traditional North Indian
                    temple architecture
                  </li>
                  <li>
                    ✨ <strong>Granite & Marble:</strong> Used premium materials
                    from across India
                  </li>
                  <li>
                    ✨ <strong>Hand-Carved:</strong> All sculptures and carvings
                    done by master artisans
                  </li>
                  <li>
                    ✨ <strong>Seismic Design:</strong> Built to withstand
                    earthquakes up to 7.0 magnitude
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-amber-950 mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    🏛️ <strong>Height:</strong> 49 meters (160 feet) - visible
                    from far away
                  </li>
                  <li>
                    🏛️ <strong>Sanctum:</strong> 12 meters x 12 meters inner
                    chamber
                  </li>
                  <li>
                    🏛️ <strong>Darshan Capacity:</strong> Can accommodate
                    60,000+ devotees daily
                  </li>
                  <li>
                    🏛️ <strong>Ramayana Sculptures:</strong> 392 sculpted
                    figures depicting epic scenes
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h3 className="font-bold text-amber-950 mb-2">
                🎨 Sacred Artwork
              </h3>
              <p>
                The temple walls feature intricate carvings showing scenes from
                the Ramayana - Ram's birth, childhood, exile, the search for
                Sita, the war with Ravana, and his coronation. Each sculpture
                tells a story and represents centuries of artistic tradition.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Significance */}
        <Card className="border-amber-200 mb-8">
          <CardHeader>
            <CardTitle className="text-3xl text-amber-950">
              Spiritual & Cultural Significance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-amber-900">
            <p className="leading-relaxed">
              <strong className="text-amber-950">Global Importance:</strong> The
              Ram Mandir is not just significant for India but represents a
              triumph of faith for Hindu communities worldwide. It's a symbol of
              cultural identity and spiritual aspiration for millions.
            </p>
            <p className="leading-relaxed">
              <strong className="text-amber-950">
                Pilgrimage Destination:
              </strong>{" "}
              Ayodhya is already receiving millions of pilgrims since the
              inauguration. The Ram Mandir has become one of the most visited
              temples globally, comparable to pilgrimage sites like Varanasi and
              Kashi Vishwanath.
            </p>
            <p className="leading-relaxed">
              <strong className="text-amber-950">Symbol of Unity:</strong>{" "}
              Despite the contentious history, the construction involved people
              of all faiths contributing to the project. It represents India's
              pluralistic values and capacity to turn pain into spirituality.
            </p>
            <p className="leading-relaxed">
              <strong className="text-amber-950">Ram Rajya Vision:</strong> The
              temple embodies the concept of Ram Rajya - an ideal kingdom based
              on dharma, justice, and righteousness - inspiring people to build
              a better, more moral society.
            </p>
          </CardContent>
        </Card>

        {/* Statistics */}
        <Card className="border-amber-200 mb-8 bg-gradient-to-br from-amber-50 to-orange-50">
          <CardHeader>
            <CardTitle className="text-3xl text-amber-950">
              Construction Statistics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { label: "Total Cost", value: "₹500+ Crore", icon: "💰" },
                { label: "Total Workers", value: "3000+", icon: "👷" },
                { label: "Construction Days", value: "2000+", icon: "📅" },
                { label: "Granite Used", value: "5000+ Tonnes", icon: "🪨" },
                { label: "Stone Carvings", value: "392", icon: "🎨" },
                { label: "Daily Capacity", value: "60,000+", icon: "👥" },
                { label: "Temple Area", value: "70,000 m²", icon: "📐" },
                { label: "Lifts Installed", value: "8", icon: "🛗" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white rounded-lg border border-amber-200"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <p className="text-sm text-amber-800 mb-1">{stat.label}</p>
                  <p className="font-bold text-amber-950">{stat.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Visiting Info */}
        <Card className="border-amber-200 mb-8">
          <CardHeader>
            <CardTitle className="text-3xl text-amber-950 flex items-center gap-2">
              <Clock className="w-8 h-8" />
              Visiting Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-amber-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg text-amber-950 mb-3">
                  Darshan Timings
                </h3>
                <ul className="space-y-2">
                  <li>
                    <strong>Summer:</strong> 6:00 AM - 12:00 AM (Nov-Feb)
                  </li>
                  <li>
                    <strong>Winter:</strong> 6:30 AM - 12:30 AM (Mar-Oct)
                  </li>
                  <li>
                    <strong>Extended:</strong> Special timings during festivals
                  </li>
                  <li className="text-sm text-amber-800 mt-3">
                    * Entry is absolutely free for all pilgrims
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-amber-950 mb-3">
                  How to Reach
                </h3>
                <ul className="space-y-2">
                  <li>
                    ✈️ <strong>By Air:</strong> Lucknow Airport (240 km), then
                    5-6 hour drive
                  </li>
                  <li>
                    🚂 <strong>By Train:</strong> Ayodhya Junction (connected to
                    major cities)
                  </li>
                  <li>
                    🚗 <strong>By Road:</strong> Well-connected via NH routes
                    from all major cities
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h3 className="font-bold text-amber-950 mb-2">
                📋 What to Know Before Visit
              </h3>
              <ul className="text-sm space-y-1">
                <li>✓ Photography inside sanctum is not allowed</li>
                <li>✓ Footwear to be left at designated areas</li>
                <li>
                  ✓ Modest dress recommended (shoulders and knees covered)
                </li>
                <li>✓ Plan 1-2 hours for the entire darshan experience</li>
                <li>✓ Avoid peak hours (morning rush and evening peak)</li>
                <li>✓ No electronic items allowed in main temple area</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Link to="/map">
            <Button className="w-full bg-amber-700 hover:bg-amber-800 h-12">
              <MapPin className="w-5 h-5 mr-2" />
              Explore on Map
            </Button>
          </Link>
          <Link to="/itinerary">
            <Button
              variant="outline"
              className="w-full border-amber-700 text-amber-700 h-12"
            >
              Plan Visit
            </Button>
          </Link>
          <a
            href="https://www.airindia.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="w-full border-amber-700 text-amber-700 h-12"
            >
              Book Flights
            </Button>
          </a>
        </div>

        {/* Share */}
        <Card className="border-amber-200">
          <CardContent className="pt-6">
            <p className="text-center text-amber-900 text-lg font-semibold mb-4">
              Share the blessing of Ram Mandir
            </p>
            <div className="flex justify-center gap-4">
              <button className="p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition">
                📱 Share on WhatsApp
              </button>
              <button className="p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition">
                👍 Share on Facebook
              </button>
              <button className="p-3 bg-sky-50 hover:bg-sky-100 rounded-lg transition">
                🐦 Share on Twitter
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
