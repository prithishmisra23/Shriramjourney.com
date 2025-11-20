import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, MapPin, Clock, Users, Zap, Award } from "lucide-react";
import { useState } from "react";

export default function JanakiMandir() {
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
                Janaki Mandir
              </h1>
              <p className="text-2xl font-light mb-4">
                Janakpur (Mithila), Nepal
              </p>
              <div className="flex items-center gap-4 text-amber-100">
                <span className="flex items-center gap-1">
                  <MapPin className="w-5 h-5" />
                  Latitude: 26.9124°N
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-5 h-5" />
                  Longitude: 85.9253°E
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
              <p className="text-2xl font-bold">300+ Years</p>
            </div>
            <div>
              <p className="text-amber-100 text-sm">Annual Visitors</p>
              <p className="text-2xl font-bold">2 Million+</p>
            </div>
            <div>
              <p className="text-amber-100 text-sm">Main Deity</p>
              <p className="text-2xl font-bold">Goddess Sita</p>
            </div>
            <div>
              <p className="text-amber-100 text-sm">Famous Festival</p>
              <p className="text-2xl font-bold">Vivaha Mandap</p>
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
              <p className="text-lg font-bold text-amber-700">
                Sita's Birthplace
              </p>
              <p className="text-sm text-amber-900 mt-2">
                Where goddess Sita was born
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
              <p className="text-sm text-amber-900 mt-2">Open all days</p>
            </CardContent>
          </Card>

          <Card className="border-amber-200 hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="text-lg text-amber-950 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-700" />
                Special Festival
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-amber-700">
                Vivaha Mandap Utsav
              </p>
              <p className="text-sm text-amber-900 mt-2">
                Celebrates Sita's marriage
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
              The Janaki Mandir in Janakpur is one of the most sacred temples
              dedicated to Goddess Sita, the divine consort of Lord Ram. Built
              over 300 years ago, this magnificent temple stands as a testament
              to the devotion of Sita's followers and the cultural richness of
              the Mithila region.
            </p>
            <p className="leading-relaxed">
              According to the Ramayana, Janakpur was the birthplace of Sita,
              who was discovered in a furrow of King Janaka's field. The Janaki
              Mandir marks the exact spot where this divine child appeared on
              earth. Sita was born as the daughter of King Janaka and Queen
              Videha.
            </p>
            <p className="leading-relaxed font-semibold text-amber-950">
              The temple is not only a place of worship but also a symbol of
              feminine divine power, devotion, and the eternal love between Ram
              and Sita.
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
                Janakpur has been the sacred birthplace of Goddess Sita for
                millennia. According to the Ramayana, King Janaka was performing
                a ploughing ritual (Bhoomi Pujan) when Sita appeared in the
                furrow of the field. The king's joy at finding this divine child
                was immeasurable.
              </p>
            </div>

            <div className="border-l-4 border-amber-700 pl-4">
              <h3 className="font-bold text-lg text-amber-950 mb-2">
                Kingdom of Videha
              </h3>
              <p>
                Janakpur was the capital of the ancient kingdom of Videha, one
                of the most progressive and enlightened kingdoms of ancient
                times. King Janaka was known for his wisdom, justice, and
                support for Vedic learning. He was also a great philosopher and
                patron of the arts.
              </p>
            </div>

            <div className="border-l-4 border-amber-700 pl-4">
              <h3 className="font-bold text-lg text-amber-950 mb-2">
                The Swayamvar (Marriage Ceremony)
              </h3>
              <p>
                The most significant event in Janakpur's history is the
                Swayamvar of Sita - a grand assembly where kings and princes
                from across the land gathered to compete for Sita's hand. Ram,
                arriving as an unknown prince, broke the divine Shiva bow and
                won Sita in marriage, uniting the kingdoms of Kosala and Videha.
              </p>
            </div>

            <div className="border-l-4 border-amber-700 pl-4 bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded">
              <h3 className="font-bold text-lg text-amber-950 mb-2">
                🏛️ Temple Construction Era
              </h3>
              <p className="mb-3">
                The Janaki Mandir was constructed approximately 300 years ago
                during the period of Nepalese and local ruler patronage. The
                temple has been maintained and renovated over centuries to
                preserve its sanctity and architectural integrity.
              </p>
              <p className="font-semibold">
                Today, it stands as one of the most important pilgrimage sites
                for devotees of Sita and remains the spiritual heart of
                Janakpur.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Mythology & Significance */}
        <Card className="border-amber-200 mb-8">
          <CardHeader>
            <CardTitle className="text-3xl text-amber-950">
              Mythology & Significance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-amber-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-amber-200 p-4 rounded-lg">
                <h3 className="font-bold text-lg text-amber-950 mb-3">
                  ✨ Sita's Birth
                </h3>
                <p className="text-sm">
                  Sita was discovered in the field by King Janaka when a golden
                  complexioned divine child emerged from the earth. Her name
                  means "furrow" - a reference to her miraculous birth in the
                  ploughed field.
                </p>
              </div>

              <div className="border border-amber-200 p-4 rounded-lg">
                <h3 className="font-bold text-lg text-amber-950 mb-3">
                  💑 The Swayamvar
                </h3>
                <p className="text-sm">
                  Kings and princes competed to break the divine Shiva bow for
                  Sita's hand. Only Ram, with his divine strength, could break
                  the bow and win Sita, symbolizing the union of dharma and
                  beauty.
                </p>
              </div>

              <div className="border border-amber-200 p-4 rounded-lg">
                <h3 className="font-bold text-lg text-amber-950 mb-3">
                  👩 Divine Feminine Power
                </h3>
                <p className="text-sm">
                  Sita represents the highest ideals of womanhood - devotion,
                  sacrifice, virtue, and strength. She is worshipped as the
                  Earth herself (Bhumi Devi), symbolizing fertility and
                  nurturing love.
                </p>
              </div>

              <div className="border border-amber-200 p-4 rounded-lg">
                <h3 className="font-bold text-lg text-amber-950 mb-3">
                  🙏 Eternal Devotion
                </h3>
                <p className="text-sm">
                  Sita's unwavering devotion to Ram, even through trials and
                  exile, makes her the ideal model of marital dedication and
                  spiritual commitment in Hindu culture.
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
                  Architectural Style
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    ✨ <strong>Mithila Style:</strong> Traditional architectural
                    elements from Videha kingdom
                  </li>
                  <li>
                    ✨ <strong>Brick Construction:</strong> Built primarily with
                    baked bricks in traditional method
                  </li>
                  <li>
                    ✨ <strong>Artistic Paintings:</strong> Famous for Mithila
                    art decorations on walls
                  </li>
                  <li>
                    ✨ <strong>Decorated Interiors:</strong> Intricate artwork
                    depicting scenes from Ramayana
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-amber-950 mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    🏛️ <strong>Main Sanctum:</strong> Houses the idol of Sita
                    Devi
                  </li>
                  <li>
                    🏛️ <strong>Vivaha Mandap:</strong> Marriage pavilion marking
                    the Swayamvar venue
                  </li>
                  <li>
                    🏛️ <strong>Courtyard:</strong> Large open courtyard for
                    gatherings and processions
                  </li>
                  <li>
                    🏛️ <strong>Mithila Art:</strong> Walls decorated with
                    traditional folk paintings
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h3 className="font-bold text-amber-950 mb-2">
                🎨 Mithila Art Heritage
              </h3>
              <p>
                Janakpur is world-renowned for its Mithila art, a traditional
                form of painting depicting stories of Ram and Sita. The temple
                walls are adorned with these beautiful paintings, created by
                local artisans using natural pigments and traditional techniques
                passed down through generations.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Sacred Sites in Janakpur */}
        <Card className="border-amber-200 mb-8">
          <CardHeader>
            <CardTitle className="text-3xl text-amber-950">
              Sacred Sites in Janakpur
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-amber-900">
            <div className="space-y-3">
              <div className="p-3 bg-amber-50 rounded border border-amber-200">
                <p className="font-bold text-amber-950">
                  🏛️ Vivaha Mandap (Marriage Pavilion)
                </p>
                <p className="text-sm mt-1">
                  The site where Sita's Swayamvar took place and Ram broke the
                  Shiva bow to win her hand. This exact spot is marked and
                  revered by all pilgrims.
                </p>
              </div>

              <div className="p-3 bg-amber-50 rounded border border-amber-200">
                <p className="font-bold text-amber-950">
                  🏊 Sita Kund (Sita's Pool)
                </p>
                <p className="text-sm mt-1">
                  A sacred water tank believed to have purifying properties.
                  Legend says Sita herself bathed in these waters, making it a
                  significant pilgrimage spot.
                </p>
              </div>

              <div className="p-3 bg-amber-50 rounded border border-amber-200">
                <p className="font-bold text-amber-950">🚩 Ram Navami Mela</p>
                <p className="text-sm mt-1">
                  An annual fair celebrating Ram's birth, with thousands of
                  pilgrims gathering for spiritual festivities, cultural
                  performances, and devotional activities.
                </p>
              </div>

              <div className="p-3 bg-amber-50 rounded border border-amber-200">
                <p className="font-bold text-amber-950">
                  🎨 Mithila Art Center
                </p>
                <p className="text-sm mt-1">
                  A center dedicated to preserving and promoting the traditional
                  Mithila art form. Visitors can see artisans at work and
                  purchase authentic artworks.
                </p>
              </div>
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
                    <strong>Morning:</strong> 5:00 AM - 12:00 PM
                  </li>
                  <li>
                    <strong>Evening:</strong> 3:00 PM - 9:00 PM
                  </li>
                  <li>
                    <strong>Festival Days:</strong> Extended hours during
                    special occasions
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
                    ✈️ <strong>By Air:</strong> Darbhanga Airport (50 km away)
                  </li>
                  <li>
                    🚂 <strong>By Train:</strong> Janakpur Railway Station
                    (well-connected)
                  </li>
                  <li>
                    🚗 <strong>By Road:</strong> Accessible via NH routes from
                    Nepal and major Indian cities
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h3 className="font-bold text-amber-950 mb-2">
                📋 What to Know Before Visit
              </h3>
              <ul className="text-sm space-y-1">
                <li>✓ Respectful attire recommended (modest clothing)</li>
                <li>✓ Photography is allowed in most areas</li>
                <li>✓ Plan 1-2 hours for complete darshan and exploration</li>
                <li>✓ Visit during morning hours to avoid crowds</li>
                <li>✓ Carry water and sun protection during hot months</li>
                <li>
                  ✓ Avoid visiting during peak pilgrimage times if seeking
                  peaceful experience
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Festivals & Celebrations */}
        <Card className="border-amber-200 mb-8 bg-gradient-to-br from-amber-50 to-orange-50">
          <CardHeader>
            <CardTitle className="text-3xl text-amber-950">
              Festivals & Celebrations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-amber-200">
                <p className="font-bold text-amber-950 mb-2">
                  🌸 Vivaha Mandap Utsav
                </p>
                <p className="text-sm text-amber-900">
                  Celebrates Sita's marriage with cultural programs,
                  processions, and special puja ceremonies. The entire city
                  lights up with festivities.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-amber-200">
                <p className="font-bold text-amber-950 mb-2">
                  🎉 Ram Navami Mela
                </p>
                <p className="text-sm text-amber-900">
                  A grand fair celebrating Ram's birth with spiritual
                  activities, Ramleela performances, and gatherings of thousands
                  of devotees.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-amber-200">
                <p className="font-bold text-amber-950 mb-2">
                  🪔 Deepavali (Diwali)
                </p>
                <p className="text-sm text-amber-900">
                  The festival of lights is celebrated with special prayers and
                  the temple is illuminated with oil lamps, creating a divine
                  atmosphere.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-amber-200">
                <p className="font-bold text-amber-950 mb-2">
                  🎨 Mithila Art Festival
                </p>
                <p className="text-sm text-amber-900">
                  Celebrates the traditional Mithila art form with exhibitions,
                  workshops, and performances showcasing the artistic heritage
                  of the region.
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
            href="https://www.irctc.co.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="w-full border-amber-700 text-amber-700 h-12"
            >
              Book Train
            </Button>
          </a>
        </div>

        {/* Share */}
        <Card className="border-amber-200">
          <CardContent className="pt-6">
            <p className="text-center text-amber-900 text-lg font-semibold mb-4">
              Share the blessings of Janaki Mandir
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
