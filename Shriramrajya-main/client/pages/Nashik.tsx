import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, MapPin, Clock, Users, Zap, Award } from "lucide-react";
import { useState } from "react";

export default function NashikPage() {
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
                Nashik & Panchavati
              </h1>
              <p className="text-2xl font-light mb-4">
                Godavari Valley, Maharashtra, India
              </p>
              <div className="flex items-center gap-4 text-amber-100">
                <span className="flex items-center gap-1">
                  <MapPin className="w-5 h-5" />
                  Latitude: 19.8975°N
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-5 h-5" />
                  Longitude: 75.3281°E
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
              <p className="text-amber-100 text-sm">Main River</p>
              <p className="text-2xl font-bold">Godavari</p>
            </div>
            <div>
              <p className="text-amber-100 text-sm">Annual Visitors</p>
              <p className="text-2xl font-bold">4 Million+</p>
            </div>
            <div>
              <p className="text-amber-100 text-sm">Kumbh Cycle</p>
              <p className="text-2xl font-bold">Every 12 Years</p>
            </div>
            <div>
              <p className="text-amber-100 text-sm">Sacred Sites</p>
              <p className="text-2xl font-bold">Multiple</p>
            </div>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Card className="border-amber-200 hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="text-lg text-amber-950 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-700" />
                Historical Significance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-bold text-amber-700">Exile Site</p>
              <p className="text-sm text-amber-900 mt-2">
                Where Ram spent exile years
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-200 hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="text-lg text-amber-950 flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-700" />
                Kumbh Mela
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-amber-700">
                World's Largest Gathering
              </p>
              <p className="text-sm text-amber-900 mt-2">
                Millions of pilgrims gather
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-200 hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="text-lg text-amber-950 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-700" />
                Sacred River
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-amber-700">Godavari</p>
              <p className="text-sm text-amber-900 mt-2">
                Second holiest river
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
              Nashik, nestled in the Godavari Valley of Maharashtra, is one of
              the most significant pilgrimage destinations in Hinduism. The city
              is intrinsically linked to the Ramayana, as it was in the forests
              around Nashik that Ram, Sita, and Lakshman spent a substantial
              portion of their 14-year exile in the forest of Dandakaranya.
            </p>
            <p className="leading-relaxed">
              Panchavati, located near Nashik, is particularly sacred as it
              marks the site where Ram established his hermitage during exile.
              It was also from the banks of the Godavari River at Panchavati
              that Sita was abducted by Ravana - one of the most pivotal events
              in the Ramayana that set off the entire quest to Lanka.
            </p>
            <p className="leading-relaxed font-semibold text-amber-950">
              Today, Nashik hosts the Kumbh Mela every 12 years, attracting
              millions of devotees in one of the world's largest religious
              gatherings. It remains a beacon of spirituality and faith for Ram
              devotees worldwide.
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
                Panchavati - The Five Banyan Trees
              </h3>
              <p>
                The name Panchavati literally means "five banyan trees."
                According to legend, when Ram first came to this location, he
                chose this place for his hermitage because of the five beautiful
                banyan trees that marked the sacred spot. These trees provided
                shelter and symbolized the interconnectedness of all life.
              </p>
            </div>

            <div className="border-l-4 border-amber-700 pl-4">
              <h3 className="font-bold text-lg text-amber-950 mb-2">
                14 Years of Exile
              </h3>
              <p>
                When Ram was exiled from Ayodhya, he brought his wife Sita and
                brother Lakshman to the forests of Dandakaranya. They spent most
                of their 14-year exile in the Panchavati region, living a simple
                life in a hermitage on the banks of the Godavari River. This
                period is central to the Ramayana narrative and shaped Ram's
                character.
              </p>
            </div>

            <div className="border-l-4 border-amber-700 pl-4">
              <h3 className="font-bold text-lg text-amber-950 mb-2">
                Sita's Abduction - The Turning Point
              </h3>
              <p>
                The most tragic and pivotal event of the Ramayana occurred at
                Panchavati. Ravana, the demon king of Lanka, came to the
                Godavari banks in search of revenge against Lakshman, who had
                disfigured his sister Surpanakha. In his anger, Ravana abducted
                Sita and took her across the ocean to Lanka. This incident led
                to Ram's quest to Lanka and the final war between good and evil.
              </p>
            </div>

            <div className="border-l-4 border-amber-700 pl-4 bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded">
              <h3 className="font-bold text-lg text-amber-950 mb-2">
                🌊 Kumbh Mela - Modern Legacy
              </h3>
              <p className="mb-3">
                Nashik's Kumbh Mela, held every 12 years on the banks of the
                Godavari, has become the world's largest religious congregation.
                It's held alternately at four sites (Nashik, Prayagraj,
                Haridwar, and Ujjain), with each location playing a crucial role
                in Hindu pilgrimage traditions.
              </p>
              <p className="font-semibold">
                The last Nashik Kumbh in 2015 attracted over 100 million
                pilgrims, making it the single largest gathering of humanity for
                any purpose.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Panchavati Sacred Sites */}
        <Card className="border-amber-200 mb-8">
          <CardHeader>
            <CardTitle className="text-3xl text-amber-950">
              Sacred Sites of Panchavati
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-amber-900">
            <div className="space-y-3">
              <div className="p-3 bg-amber-50 rounded border border-amber-200">
                <p className="font-bold text-amber-950">🏛️ Panchavati Temple</p>
                <p className="text-sm mt-1">
                  The main temple marking the site of Ram's hermitage. Built
                  over the legendary location where the five banyan trees once
                  stood, it's a major pilgrimage destination with daily worship
                  and spiritual gatherings.
                </p>
              </div>

              <div className="p-3 bg-amber-50 rounded border border-amber-200">
                <p className="font-bold text-amber-950">🚩 Sita Haran Spot</p>
                <p className="text-sm mt-1">
                  The sacred place on the Godavari banks where Ravana abducted
                  Sita. Pilgrims visit this spot with deep reverence,
                  remembering the courage and devotion of this divine couple
                  through their trials.
                </p>
              </div>

              <div className="p-3 bg-amber-50 rounded border border-amber-200">
                <p className="font-bold text-amber-950">
                  🏞️ Godavari River Ghats
                </p>
                <p className="text-sm mt-1">
                  The sacred ghats along the Godavari where Ram and Sita bathed
                  daily during exile. Pilgrims come here for ritual bathing,
                  believing the waters carry their divine blessings and purify
                  the soul.
                </p>
              </div>

              <div className="p-3 bg-amber-50 rounded border border-amber-200">
                <p className="font-bold text-amber-950">🏔️ Anjaneri Hill</p>
                <p className="text-sm mt-1">
                  Sacred hill believed to be the birthplace of Hanuman. The trek
                  to the top offers panoramic views of the region and spiritual
                  enlightenment. Many pilgrims combine visits to Panchavati with
                  Anjaneri Hill.
                </p>
              </div>

              <div className="p-3 bg-amber-50 rounded border border-amber-200">
                <p className="font-bold text-amber-950">🌾 Tapovan</p>
                <p className="text-sm mt-1">
                  The forest area where many ascetics and sages performed
                  spiritual practices. Visiting Tapovan is believed to inspire
                  spiritual awakening and inner peace.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The Kumbh Mela Experience */}
        <Card className="border-amber-200 mb-8">
          <CardHeader>
            <CardTitle className="text-3xl text-amber-950">
              The Kumbh Mela - World's Largest Pilgrimage
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-amber-900">
            <p className="leading-relaxed font-semibold text-amber-950">
              The Kumbh Mela is a massive religious gathering that occurs every
              12 years at four different locations across India. Nashik hosts
              one of these mega-events, drawing millions of pilgrims, sadhus
              (holy men), and spiritual seekers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-amber-200 p-4 rounded-lg">
                <h3 className="font-bold text-amber-950 mb-2">
                  📊 Scale & Numbers
                </h3>
                <ul className="text-sm space-y-1">
                  <li>• 100+ million pilgrims (2015 Nashik Mela)</li>
                  <li>• Temporary cities built for accommodation</li>
                  <li>• Over 1 month duration</li>
                  <li>• Spiritual rituals and ceremonies</li>
                </ul>
              </div>

              <div className="border border-amber-200 p-4 rounded-lg">
                <h3 className="font-bold text-amber-950 mb-2">
                  🙏 Spiritual Significance
                </h3>
                <ul className="text-sm space-y-1">
                  <li>• Sacred bathing in holy waters</li>
                  <li>• Spiritual discourses and satsangs</li>
                  <li>• Meetings with enlightened masters</li>
                  <li>• Collective spiritual energy</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h3 className="font-bold text-amber-950 mb-2">
                ⏰ Next Nashik Kumbh Mela: 2027
              </h3>
              <p className="text-sm">
                The next Nashik Kumbh Mela is scheduled for 2027. Millions of
                pilgrims are expected to gather for this once-in-12-years
                spiritual spectacle. If you're planning to attend, early
                preparations are recommended as it's one of the most crowded
                religious events globally.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Architecture & Design */}
        <Card className="border-amber-200 mb-8">
          <CardHeader>
            <CardTitle className="text-3xl text-amber-950">
              Architecture & Temples
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-amber-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg text-amber-950 mb-3">
                  Main Temples
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    ✨ <strong>Panchavati Temple:</strong> Central shrine of the
                    region
                  </li>
                  <li>
                    ✨ <strong>Kalaram Temple:</strong> Ancient temple dedicated
                    to Rama
                  </li>
                  <li>
                    ✨ <strong>Ramkund:</strong> Sacred tank with ritual bathing
                  </li>
                  <li>
                    ✨ <strong>Anjaneri Temple:</strong> Hilltop temple of
                    Hanuman
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-amber-950 mb-3">
                  Religious Features
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    🏛️ <strong>River Ghats:</strong> Multiple bathing areas
                  </li>
                  <li>
                    🏛️ <strong>Ashrams:</strong> Spiritual centers and
                    monasteries
                  </li>
                  <li>
                    🏛️ <strong>Caves:</strong> Ancient meditation caves
                  </li>
                  <li>
                    🏛️ <strong>Sacred Groves:</strong> Protected natural areas
                  </li>
                </ul>
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
                  Temple Timings
                </h3>
                <ul className="space-y-2">
                  <li>
                    <strong>Panchavati Temple:</strong> 6:00 AM - 8:00 PM
                  </li>
                  <li>
                    <strong>Kalaram Temple:</strong> 5:00 AM - 9:00 PM
                  </li>
                  <li>
                    <strong>Godavari Ghats:</strong> Open 24/7
                  </li>
                  <li className="text-sm text-amber-800 mt-3">
                    * Free entry to all temples
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg text-amber-950 mb-3">
                  How to Reach
                </h3>
                <ul className="space-y-2">
                  <li>
                    ✈️ <strong>By Air:</strong> Aurangabad Airport (150 km)
                  </li>
                  <li>
                    🚂 <strong>By Train:</strong> Nashik Railway Station
                  </li>
                  <li>
                    🚗 <strong>By Road:</strong> 200 km from Mumbai via NH
                    routes
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h3 className="font-bold text-amber-950 mb-2">
                📋 Best Time to Visit
              </h3>
              <ul className="text-sm space-y-1">
                <li>
                  ✓ <strong>October to February:</strong> Pleasant weather
                  (15-30°C)
                </li>
                <li>
                  ✓ <strong>Avoid May-June:</strong> Extreme heat (40°C+)
                </li>
                <li>
                  ✓ <strong>Monsoon (July-September):</strong> Scenic but
                  slippery paths
                </li>
                <li>
                  ✓ <strong>Special Event:</strong> Next Kumbh in 2027
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
                  🎉 Kumbh Mela (Every 12 Years)
                </p>
                <p className="text-sm text-amber-900">
                  The grand pilgrimage festival with millions of devotees,
                  spiritual leaders, and seekers gathering on the Godavari
                  banks.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-amber-200">
                <p className="font-bold text-amber-950 mb-2">🌸 Ram Navami</p>
                <p className="text-sm text-amber-900">
                  Celebrates Ram's birth with special pujas, temple decorations,
                  and processions. Nashik sees special celebrations due to its
                  Ramayana connection.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-amber-200">
                <p className="font-bold text-amber-950 mb-2">
                  🪔 Diwali (Deepavali)
                </p>
                <p className="text-sm text-amber-900">
                  Festival of lights celebrated with thousands of lamps lighting
                  up the Godavari ghats and temples, creating a divine ambiance.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-amber-200">
                <p className="font-bold text-amber-950 mb-2">
                  🌺 Hanuman Jayanti
                </p>
                <p className="text-sm text-amber-900">
                  Celebrates Hanuman's birth with special pujas at Anjaneri Hill
                  and throughout Nashik region where he's believed to have been
                  born.
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
              Share the divine journey of Nashik & Panchavati
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
