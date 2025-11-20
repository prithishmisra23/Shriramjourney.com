import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, MapPin, Clock, Users, Zap, Award } from "lucide-react";
import { useState } from "react";

export default function RameswaramPage() {
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
                Ramanathaswamy Temple
              </h1>
              <p className="text-2xl font-light mb-4">
                Rameswaram, Tamil Nadu, India
              </p>
              <div className="flex items-center gap-4 text-amber-100">
                <span className="flex items-center gap-1">
                  <MapPin className="w-5 h-5" />
                  Latitude: 9.2876°N
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-5 h-5" />
                  Longitude: 79.1808°E
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
              <p className="text-amber-100 text-sm">Temple Age</p>
              <p className="text-2xl font-bold">1600+ Years</p>
            </div>
            <div>
              <p className="text-amber-100 text-sm">Annual Visitors</p>
              <p className="text-2xl font-bold">3 Million+</p>
            </div>
            <div>
              <p className="text-amber-100 text-sm">Char Dham Status</p>
              <p className="text-2xl font-bold">One of Four</p>
            </div>
            <div>
              <p className="text-amber-100 text-sm">Main Deity</p>
              <p className="text-2xl font-bold">Lord Shiva</p>
            </div>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Card className="border-amber-200 hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="text-lg text-amber-950 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-700" />
                Significance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-bold text-amber-700">Return Point</p>
              <p className="text-sm text-amber-900 mt-2">
                Where Ram returned after defeating Ravana
              </p>
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
                5:00 AM - 9:00 PM
              </p>
              <p className="text-sm text-amber-900 mt-2">
                Open daily, Char Dham site
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-200 hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="text-lg text-amber-950 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-700" />
                Famous For
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-amber-700">Ram Setu Bridge</p>
              <p className="text-sm text-amber-900 mt-2">
                Ancient bridge across ocean
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
              Rameswaram is one of the four most sacred pilgrimage destinations
              in Hinduism (Char Dham), home to the magnificent Ramanathaswamy
              Temple. Located on the island of Pamban in Tamil Nadu, Rameswaram
              holds immense significance in the Ramayana as the place where Lord
              Ram returned after defeating Ravana and began his journey back to
              Ayodhya.
            </p>
            <p className="leading-relaxed">
              The Ramanathaswamy Temple is a marvel of South Indian Dravidian
              architecture, featuring the longest temple corridors in India. The
              temple is dedicated to Lord Shiva (as Ramanatha) and is revered as
              the southernmost point of Ram's journey, marking the completion of
              his mission in Lanka.
            </p>
            <p className="leading-relaxed font-semibold text-amber-950">
              Visiting Rameswaram is considered essential for a complete Ram
              Yatra (pilgrimage journey) and grants moksha (liberation) to
              devoted pilgrims.
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
                Ancient Significance
              </h3>
              <p>
                Rameswaram has been a significant pilgrimage site for over 1600
                years. According to the Ramayana, after defeating Ravana and
                securing his victory over evil, Ram needed to perform rituals to
                cleanse himself of the sin of killing a Brahmin (Ravana). He
                came to Rameswaram and installed a Shiva Linga to perform
                penance.
              </p>
            </div>

            <div className="border-l-4 border-amber-700 pl-4">
              <h3 className="font-bold text-lg text-amber-950 mb-2">
                The Shiva Linga Installation
              </h3>
              <p>
                The central Shiva Linga at Rameswaram was installed by Ram
                himself, making it an extremely sacred object of worship. Unlike
                other temple lingas, this one was brought by Hanuman on Ram's
                request, adding to its significance. The linga is believed to
                carry the divine blessings of both Ram and Shiva.
              </p>
            </div>

            <div className="border-l-4 border-amber-700 pl-4">
              <h3 className="font-bold text-lg text-amber-950 mb-2">
                Ram Setu Connection
              </h3>
              <p>
                Rameswaram is traditionally believed to be the southern endpoint
                of Ram Setu (Adam's Bridge), the legendary bridge built across
                the ocean to Lanka. This connection makes Rameswaram the gateway
                to understanding one of the Ramayana's most engineering marvels.
              </p>
            </div>

            <div className="border-l-4 border-amber-700 pl-4 bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded">
              <h3 className="font-bold text-lg text-amber-950 mb-2">
                🏛️ Temple Construction History
              </h3>
              <p className="mb-3">
                The current temple structure was built in the 12th century and
                underwent major renovations over subsequent centuries. The
                temple's most distinctive feature - its longest temple corridors
                - were developed over time, making it an architectural marvel of
                South India.
              </p>
              <p className="font-semibold">
                The temple's continuous tradition of worship and maintenance for
                over 600 years demonstrates the unwavering devotion of millions
                of pilgrims.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Ram Setu & Legend */}
        <Card className="border-amber-200 mb-8">
          <CardHeader>
            <CardTitle className="text-3xl text-amber-950">
              Ram Setu - The Bridge of Legend
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-amber-900">
            <p className="leading-relaxed">
              Ram Setu, also known as Adam's Bridge, is one of the most
              fascinating subjects in Indian mythology and astronomy. According
              to the Ramayana, when Ram needed to cross the vast ocean to Lanka,
              he called upon his devotees to build a bridge. The bridge was
              constructed in just 5 days using floating stones and the might of
              Hanuman.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-amber-200 p-4 rounded-lg">
                <h3 className="font-bold text-lg text-amber-950 mb-3">
                  🌊 Geographical Reality
                </h3>
                <p className="text-sm">
                  Satellite imaging and geological surveys have identified a
                  chain of underwater formations between Rameswaram and Lanka
                  that align with descriptions in the Ramayana. Scientists
                  believe this formation could be over 7000 years old.
                </p>
              </div>

              <div className="border border-amber-200 p-4 rounded-lg">
                <h3 className="font-bold text-lg text-amber-950 mb-3">
                  ⚙️ Engineering Marvel
                </h3>
                <p className="text-sm">
                  The bridge construction showcases ancient knowledge of
                  architecture and engineering. The use of floating stones and
                  strategic placement demonstrates sophisticated understanding
                  of materials and structures.
                </p>
              </div>

              <div className="border border-amber-200 p-4 rounded-lg">
                <h3 className="font-bold text-lg text-amber-950 mb-3">
                  📍 Visible Evidence
                </h3>
                <p className="text-sm">
                  From Rameswaram, visitors can see remnants and formations
                  associated with Ram Setu. The nearby Dhanushkodi, meaning
                  "bow's end," marks the legendary point where the bridge
                  begins.
                </p>
              </div>

              <div className="border border-amber-200 p-4 rounded-lg">
                <h3 className="font-bold text-lg text-amber-950 mb-3">
                  🏰 Cultural Legacy
                </h3>
                <p className="text-sm">
                  The bridge represents human collective effort for a greater
                  purpose. It symbolizes the power of unity, faith, and
                  determination in overcoming seemingly impossible obstacles.
                </p>
              </div>
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
                  Dravidian Architecture
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    ✨ <strong>Gopuram:</strong> Magnificent gateway towers
                    rising 130 feet
                  </li>
                  <li>
                    ✨ <strong>Corridors:</strong> Longest temple corridors in
                    India (2400+ pillars)
                  </li>
                  <li>
                    ✨ <strong>Intricate Carvings:</strong> Detailed stone work
                    depicting mythological scenes
                  </li>
                  <li>
                    ✨ <strong>Holy Tanks:</strong> 22 sacred water tanks within
                    the temple
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-amber-950 mb-3">
                  Unique Features
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    🏛️ <strong>Inner Sanctum:</strong> Dedicated to the Shiva
                    Linga installed by Ram
                  </li>
                  <li>
                    🏛️ <strong>Sita Devi Temple:</strong> Dedicated to Goddess
                    Sita
                  </li>
                  <li>
                    🏛️ <strong>Mandapa:</strong> Grand assembly halls for
                    religious gatherings
                  </li>
                  <li>
                    🏛️ <strong>Water Channels:</strong> Ancient system for
                    ablution rituals
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h3 className="font-bold text-amber-950 mb-2">
                🎨 Architectural Excellence
              </h3>
              <p>
                The temple's architecture represents the pinnacle of South
                Indian Dravidian style. The massive columns are carved with such
                precision that they demonstrate advanced mathematical and
                structural knowledge. Each corridor tells stories of the
                Ramayana through intricate relief sculptures.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Sacred Water Rituals */}
        <Card className="border-amber-200 mb-8">
          <CardHeader>
            <CardTitle className="text-3xl text-amber-950">
              Sacred Water Rituals
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-amber-900">
            <p className="leading-relaxed">
              One of the unique aspects of the Ramanathaswamy Temple is the
              ritual bathing in water from all of India's sacred rivers. The
              temple maintains 22 separate tanks, each named after a different
              sacred river or spiritual site.
            </p>
            <div className="space-y-3">
              <div className="p-3 bg-amber-50 rounded border border-amber-200">
                <p className="font-bold text-amber-950">
                  🚿 The Ritual Bathing
                </p>
                <p className="text-sm mt-1">
                  Pilgrims traditionally bathe in water from all 22 tanks in
                  sequence, symbolically taking a pilgrimage to all major sacred
                  sites of India without leaving the temple premises. This
                  practice is believed to grant the spiritual benefits of
                  visiting all these places.
                </p>
              </div>

              <div className="p-3 bg-amber-50 rounded border border-amber-200">
                <p className="font-bold text-amber-950">💧 Water Sources</p>
                <p className="text-sm mt-1">
                  The tanks include water or mud from rivers like Ganga, Yamuna,
                  Godavari, Krishna, Narmada, and other sacred sites. Water is
                  brought and maintained with great ceremonial care and
                  reverence.
                </p>
              </div>

              <div className="p-3 bg-amber-50 rounded border border-amber-200">
                <p className="font-bold text-amber-950">
                  🙏 Spiritual Significance
                </p>
                <p className="text-sm mt-1">
                  This practice connects the devotee to the entire sacred
                  geography of India, emphasizing the spiritual unity of the
                  Hindu pilgrimage circuit. It represents the holistic
                  understanding of India's spiritual landscape.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Visiting Information */}
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
                    <strong>Morning:</strong> 5:00 AM - 12:00 PM
                  </li>
                  <li>
                    <strong>Evening:</strong> 4:00 PM - 9:00 PM
                  </li>
                  <li>
                    <strong>Special Days:</strong> Extended hours during
                    festivals
                  </li>
                  <li className="text-sm text-amber-800 mt-3">
                    * Free entry for all pilgrims
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-amber-950 mb-3">
                  How to Reach
                </h3>
                <ul className="space-y-2">
                  <li>
                    ✈️ <strong>By Air:</strong> Madurai Airport (240 km),
                    domestic flights
                  </li>
                  <li>
                    🚂 <strong>By Train:</strong> Rameswaram Railway Station
                    (major railhead)
                  </li>
                  <li>
                    🚗 <strong>By Road:</strong> Well-connected via NH routes;
                    168 km from Madurai
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h3 className="font-bold text-amber-950 mb-2">
                📋 What to Know Before Visit
              </h3>
              <ul className="text-sm space-y-1">
                <li>✓ Footwear removed before entering sanctum</li>
                <li>✓ Plan 2-3 hours minimum for complete darshan</li>
                <li>✓ Bathing ritual in 22 tanks recommended (1-2 hours)</li>
                <li>✓ Modest dress required (shoulders and knees covered)</li>
                <li>✓ Visit early morning for peaceful experience</li>
                <li>✓ Hot climate - carry water and sun protection</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Festivals */}
        <Card className="border-amber-200 mb-8 bg-gradient-to-br from-amber-50 to-orange-50">
          <CardHeader>
            <CardTitle className="text-3xl text-amber-950">
              Major Festivals & Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-amber-200">
                <p className="font-bold text-amber-950 mb-2">
                  🌊 Maha Shivaratri
                </p>
                <p className="text-sm text-amber-900">
                  The night dedicated to Lord Shiva is celebrated with special
                  prayers, all-night vigils, and grand processions attended by
                  lakhs of devotees.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-amber-200">
                <p className="font-bold text-amber-950 mb-2">
                  🎊 Panguni Uthiram
                </p>
                <p className="text-sm text-amber-900">
                  A major festival in March/April celebrating celestial
                  marriages. The temple hosts processions with elaborate
                  decorations and ritual performances.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-amber-200">
                <p className="font-bold text-amber-950 mb-2">🌸 Ram Navami</p>
                <p className="text-sm text-amber-900">
                  Birth anniversary of Lord Ram is celebrated with special
                  pujas, recitations from the Ramayana, and ceremonial
                  decorations throughout the temple.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-amber-200">
                <p className="font-bold text-amber-950 mb-2">🪔 Deepavali</p>
                <p className="text-sm text-amber-900">
                  Festival of lights is celebrated with thousands of oil lamps
                  lighting the temple corridors, creating a breathtakingly
                  beautiful scene.
                </p>
              </div>
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
            href="https://www.oyo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="w-full border-amber-700 text-amber-700 h-12"
            >
              Book Hotel
            </Button>
          </a>
        </div>

        {/* Share */}
        <Card className="border-amber-200">
          <CardContent className="pt-6">
            <p className="text-center text-amber-900 text-lg font-semibold mb-4">
              Share the divine journey of Rameswaram
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
