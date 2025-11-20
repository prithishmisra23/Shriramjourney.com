import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  MapPin,
  BookOpen,
  Users,
  MapPinned,
  Calendar,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import RamMandir3DViewer from "@/components/RamMandir3DViewer";
import { TempleStreams } from "@/components/TempleStreams";

export default function Index() {
  const [activeTab, setActiveTab] = useState<
    "journey" | "temples" | "experience"
  >("journey");

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-700 to-amber-900 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h1 className="font-playfair font-bold text-5xl sm:text-7xl leading-tight">
            The Journey of <span className="text-amber-300">Shri Ram</span>
          </h1>
          <p className="text-lg sm:text-xl text-amber-100 max-w-2xl mx-auto font-light leading-relaxed">
            From the sacred city of Ayodhya to the distant shores of Lanka,
            follow the divine path of Lord Rama through his epic journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link to="/map">
              <Button
                size="lg"
                className="bg-amber-500 text-white hover:bg-amber-600 font-bold text-lg h-12 rounded-full px-8"
              >
                Explore the Journey →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 3D Ram Mandir Viewer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-white">
              🏰 Ram Mandir in 3D
            </h2>
            <p className="text-lg text-gray-300">
              Explore the newly inaugurated Ram Mandir - drag to rotate, scroll
              to zoom
            </p>
          </div>

          <RamMandir3DViewer />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 text-center">
              <p className="text-amber-400 text-4xl mb-2">49m</p>
              <p className="text-gray-300 font-semibold">Height</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 text-center">
              <p className="text-amber-400 text-4xl mb-2">🕉️</p>
              <p className="text-gray-300 font-semibold">
                Inaugurated Jan 2024
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 text-center">
              <p className="text-amber-400 text-4xl mb-2">⚡</p>
              <p className="text-gray-300 font-semibold">Seismic Design</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Mandirs Accordion Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-amber-950">
              🏛️ Sacred Mandirs
            </h2>
            <p className="text-lg text-amber-800">
              Explore the divine temples dedicated to Shri Ram and Sita Mata
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {/* Ram Mandir Accordion */}
            <AccordionItem
              value="ram-mandir"
              className="border-2 border-amber-200 rounded-lg overflow-hidden bg-amber-50"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-amber-100 text-amber-950 font-bold text-lg">
                <span>🏰 Ram Mandir - Ayodhya</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fd90bbe9fa7e84f6aa0f8e85ef524c7ad%2Fe979eeb96fea4ee6953e61b1e2cdcae4?format=webp&width=800"
                    alt="Ram Mandir"
                    className="w-full h-72 object-cover rounded-lg"
                  />
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-amber-200">
                        <p className="text-sm text-amber-800">Height</p>
                        <p className="text-2xl font-bold text-amber-950">49m</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-amber-200">
                        <p className="text-sm text-amber-800">Inaugurated</p>
                        <p className="text-2xl font-bold text-amber-950">
                          Jan 2024
                        </p>
                      </div>
                    </div>
                    <p className="text-amber-900 leading-relaxed">
                      The newly inaugurated Ram Mandir in Ayodhya is a
                      magnificent architectural marvel and one of the most
                      significant spiritual landmarks in India. Built on the
                      sacred site of Shri Ram's birth, this temple represents
                      the devotion of millions of devotees worldwide. The temple
                      features intricate carvings, traditional Nagara-style
                      architecture, and stunning marble work that reflects
                      divine craftsmanship.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-bold text-amber-950">
                        Darshan Timings:
                      </h4>
                      <p className="text-sm text-amber-900">
                        • Morning: 6:00 AM - 12:00 PM
                      </p>
                      <p className="text-sm text-amber-900">
                        • Afternoon: 12:30 PM - 5:30 PM
                      </p>
                      <p className="text-sm text-amber-900">
                        • Evening: 5:30 PM - 9:00 PM
                      </p>
                    </div>
                    <Link to="/ram-mandir">
                      <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white">
                        Learn More about Ram Mandir
                      </Button>
                    </Link>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Janaki Mandir Accordion */}
            <AccordionItem
              value="janaki-mandir"
              className="border-2 border-amber-200 rounded-lg overflow-hidden bg-amber-50"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-amber-100 text-amber-950 font-bold text-lg">
                <span>👑 Janaki Mandir - Ayodhya</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fd90bbe9fa7e84f6aa0f8e85ef524c7ad%2F53edc8ffe1d842dc993dac967c348eda?format=webp&width=800"
                    alt="Janaki Mandir"
                    className="w-full h-72 object-cover rounded-lg"
                  />
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-amber-200">
                        <p className="text-sm text-amber-800">Built</p>
                        <p className="text-2xl font-bold text-amber-950">
                          300+ yrs
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-amber-200">
                        <p className="text-sm text-amber-800">Style</p>
                        <p className="text-2xl font-bold text-amber-950">
                          Victorian
                        </p>
                      </div>
                    </div>
                    <p className="text-amber-900 leading-relaxed">
                      The Janaki Mandir is a magnificent temple dedicated to
                      Sita Mata, the beloved consort of Shri Ram. Located in the
                      heart of Ayodhya, this temple stands as a testament to
                      feminine divinity and the eternal devotion between Ram and
                      Sita. Built over three centuries ago, the temple showcases
                      beautiful Victorian architecture mixed with traditional
                      Hindu design elements. The sanctum sanctorum houses a
                      stunning idol of Mata Janaki, attracting thousands of
                      devotees daily.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-bold text-amber-950">
                        Darshan Timings:
                      </h4>
                      <p className="text-sm text-amber-900">
                        • Morning: 6:00 AM - 12:00 PM
                      </p>
                      <p className="text-sm text-amber-900">
                        • Afternoon: 1:00 PM - 5:00 PM
                      </p>
                      <p className="text-sm text-amber-900">
                        • Evening: 6:00 PM - 9:00 PM
                      </p>
                    </div>
                    <Link to="/janaki-mandir">
                      <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white">
                        Learn More about Janaki Mandir
                      </Button>
                    </Link>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Live Darshan Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <TempleStreams />
        </div>
      </section>

      {/* Sacred Journey Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 via-white to-amber-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-amber-950">
              🕉️ The Sacred Journey
            </h2>
            <p className="text-lg text-amber-800">
              Trace the divine path of Lord Rama through the pivotal moments of
              his life
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-0 md:left-1/2 w-1 h-full bg-gradient-to-b from-amber-700 to-amber-500 transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {/* Timeline Item 1 */}
              <div className="md:flex md:items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <div className="bg-white rounded-lg p-6 border-2 border-amber-200 shadow-md hover:shadow-lg transition">
                    <div className="flex md:justify-end items-start gap-3 mb-3">
                      <MapPin className="w-5 h-5 text-amber-700 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-amber-950 text-lg">
                          Ayodhya
                        </h3>
                        <p className="text-sm text-amber-600">
                          Birth & Early Life
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-amber-900">
                      The sacred birthplace of Shri Ram. The newly inaugurated
                      Ram Mandir stands as a testament to his divine presence
                      and the devotion of millions.
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 md:relative md:w-auto md:mx-0 w-auto">
                  <div className="w-6 h-6 bg-amber-700 rounded-full border-4 border-white shadow-md absolute -left-3 top-6 md:static md:-left-0" />
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="md:flex md:items-center md:flex-row-reverse">
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white rounded-lg p-6 border-2 border-amber-200 shadow-md hover:shadow-lg transition">
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="w-5 h-5 text-amber-700 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-amber-950 text-lg">
                          Mithila
                        </h3>
                        <p className="text-sm text-amber-600">The Union</p>
                      </div>
                    </div>
                    <p className="text-sm text-amber-900">
                      Breaking of Shiva's bow and marriage to Sita, daughter of
                      King Janaka. A union blessed by the heavens.
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 md:relative md:w-auto md:mx-0 w-auto">
                  <div className="w-6 h-6 bg-amber-700 rounded-full border-4 border-white shadow-md absolute -left-3 top-6 md:static md:-left-0" />
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="md:flex md:items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <div className="bg-white rounded-lg p-6 border-2 border-amber-200 shadow-md hover:shadow-lg transition">
                    <div className="flex md:justify-end items-start gap-3 mb-3">
                      <MapPin className="w-5 h-5 text-amber-700 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-amber-950 text-lg">
                          Exile Begins
                        </h3>
                        <p className="text-sm text-amber-600">
                          The 14-Year Vanvās
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-amber-900">
                      Banishment to the forest with Sita and Lakshman. The
                      trials and tribulations that shape destiny begin.
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 md:relative md:w-auto md:mx-0 w-auto">
                  <div className="w-6 h-6 bg-amber-700 rounded-full border-4 border-white shadow-md absolute -left-3 top-6 md:static md:-left-0" />
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="md:flex md:items-center md:flex-row-reverse">
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white rounded-lg p-6 border-2 border-amber-200 shadow-md hover:shadow-lg transition">
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="w-5 h-5 text-amber-700 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-amber-950 text-lg">
                          Rescue of Sita
                        </h3>
                        <p className="text-sm text-amber-600">
                          The Epic Battle
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-amber-900">
                      With Hanuman's aid and an army of devoted allies, Sita is
                      rescued from Lanka. Good triumphs over evil.
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 md:relative md:w-auto md:mx-0 w-auto">
                  <div className="w-6 h-6 bg-amber-700 rounded-full border-4 border-white shadow-md absolute -left-3 top-6 md:static md:-left-0" />
                </div>
              </div>

              {/* Timeline Item 5 */}
              <div className="md:flex md:items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <div className="bg-white rounded-lg p-6 border-2 border-amber-200 shadow-md hover:shadow-lg transition">
                    <div className="flex md:justify-end items-start gap-3 mb-3">
                      <MapPin className="w-5 h-5 text-amber-700 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-amber-950 text-lg">
                          Return & Coronation
                        </h3>
                        <p className="text-sm text-amber-600">Homecoming</p>
                      </div>
                    </div>
                    <p className="text-sm text-amber-900">
                      Ram returns to Ayodhya and is crowned king. Justice is
                      restored, and the kingdom flourishes.
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 md:relative md:w-auto md:mx-0 w-auto">
                  <div className="w-6 h-6 bg-amber-700 rounded-full border-4 border-white shadow-md absolute -left-3 top-6 md:static md:-left-0" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/timeline">
              <Button className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 px-8 rounded-full text-lg">
                Explore Full Timeline →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex gap-4 mb-12 border-b-2 border-amber-200 overflow-x-auto">
            <button
              onClick={() => setActiveTab("journey")}
              className={`pb-4 px-6 font-bold text-lg whitespace-nowrap transition ${
                activeTab === "journey"
                  ? "text-amber-700 border-b-4 border-amber-700"
                  : "text-amber-900 hover:text-amber-700"
              }`}
            >
              📖 The Sacred Journey
            </button>
            <button
              onClick={() => setActiveTab("temples")}
              className={`pb-4 px-6 font-bold text-lg whitespace-nowrap transition ${
                activeTab === "temples"
                  ? "text-amber-700 border-b-4 border-amber-700"
                  : "text-amber-900 hover:text-amber-700"
              }`}
            >
              🏛️ Sacred Temples
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={`pb-4 px-6 font-bold text-lg whitespace-nowrap transition ${
                activeTab === "experience"
                  ? "text-amber-700 border-b-4 border-amber-700"
                  : "text-amber-900 hover:text-amber-700"
              }`}
            >
              ✨ Experience & Features
            </button>
          </div>

          {/* Tab Content */}
          <div className="min-h-96">
            {/* Journey Tab */}
            {activeTab === "journey" && (
              <div className="space-y-8 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-playfair font-bold text-3xl text-amber-950">
                      The 14-Year Vanvas
                    </h3>
                    <p className="text-amber-900 leading-relaxed text-lg">
                      Follow Shri Ram's exile journey from Ayodhya to Lanka
                      across 14 sacred years. Discover the divine teachings and
                      historical events that shaped one of humanity's greatest
                      epics.
                    </p>
                    <div className="space-y-3">
                      <Link to="/timeline">
                        <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white font-semibold py-3">
                          📊 Journey Timeline
                        </Button>
                      </Link>
                      <Link to="/map">
                        <Button
                          variant="outline"
                          className="w-full border-amber-700 text-amber-700 font-semibold py-3"
                        >
                          🗺️ Explore Locations
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 h-fit">
                    {[
                      {
                        icon: "👶",
                        label: "Birth & Early Life",
                        color: "from-red-50 to-red-100",
                      },
                      {
                        icon: "🚶",
                        label: "Vanvas Begins",
                        color: "from-orange-50 to-orange-100",
                      },
                      {
                        icon: "🌲",
                        label: "Deep Forest",
                        color: "from-yellow-50 to-yellow-100",
                      },
                      {
                        icon: "🔍",
                        label: "Search for Sita",
                        color: "from-green-50 to-green-100",
                      },
                    ].map((phase, idx) => (
                      <div
                        key={idx}
                        className={`bg-gradient-to-br ${phase.color} rounded-lg p-4 text-center border-2 border-amber-200 hover:shadow-md transition`}
                      >
                        <p className="text-3xl mb-2">{phase.icon}</p>
                        <p className="text-xs font-semibold text-amber-950">
                          {phase.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-8">
                  <p className="font-bold text-amber-950 text-lg mb-4">
                    🎓 Key Locations: Ayodhya → Chitrakoot → Panchavati → Hampi
                    → Rameswaram
                  </p>
                  <p className="text-amber-900 leading-relaxed">
                    Each location holds profound spiritual and historical
                    significance. From Ram's birth in Ayodhya to his return to
                    reclaim his throne, every stop reveals divine wisdom and
                    eternal truths.
                  </p>
                </div>
              </div>
            )}

            {/* Temples Tab */}
            {activeTab === "temples" && (
              <div className="space-y-8 animate-fadeIn">
                <p className="text-xl text-amber-900 mb-8">
                  Explore the most sacred temples dedicated to Shri Ram and the
                  divine family
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      name: "Ram Mandir",
                      city: "Ayodhya, UP",
                      year: "2024",
                      icon: "🏰",
                      link: "/ram-mandir",
                    },
                    {
                      name: "Janaki Mandir",
                      city: "Janakpur, Nepal",
                      year: "300+ yrs",
                      icon: "👑",
                      link: "/janaki-mandir",
                    },
                    {
                      name: "Nashik (Panchavati)",
                      city: "Maharashtra",
                      year: "Ancient",
                      icon: "🌊",
                      link: "/nashik",
                    },
                    {
                      name: "Rameswaram",
                      city: "Tamil Nadu",
                      year: "1600+ yrs",
                      icon: "🌉",
                      link: "/rameswaram",
                    },
                  ].map((temple, idx) => (
                    <Link key={idx} to={temple.link}>
                      <Card className="border-2 border-amber-200 hover:shadow-xl transition h-full cursor-pointer">
                        <CardHeader className="text-center">
                          <div className="text-5xl mb-3">{temple.icon}</div>
                          <CardTitle className="text-amber-950">
                            {temple.name}
                          </CardTitle>
                          <CardDescription className="text-amber-800">
                            {temple.city}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="text-center text-sm text-amber-700 font-semibold">
                          {temple.year}
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Experience Tab */}
            {activeTab === "experience" && (
              <div className="space-y-8 animate-fadeIn">
                <p className="text-xl text-amber-900 mb-8">
                  Discover what makes Bhagwan Shri Ram Journey the ultimate
                  spiritual guide
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: "🗺️",
                      title: "Interactive Map",
                      desc: "Explore 50+ locations with color-coded phases",
                    },
                    {
                      icon: "📱",
                      title: "Offline Access",
                      desc: "Download maps for offline viewing",
                    },
                    {
                      icon: "🤖",
                      title: "AI Guide",
                      desc: "Ask questions, get instant answers",
                    },
                    {
                      icon: "📚",
                      title: "Rich Content",
                      desc: "Comprehensive Ramayana teachings",
                    },
                    {
                      icon: "🎯",
                      title: "Itinerary Builder",
                      desc: "Plan custom pilgrimage journeys",
                    },
                    {
                      icon: "🤝",
                      title: "Community",
                      desc: "Connect with millions of devotees",
                    },
                    {
                      icon: "🎬",
                      title: "Livestreams",
                      desc: "Watch temple aarti ceremonies live",
                    },
                    {
                      icon: "🎓",
                      title: "Quiz & Badges",
                      desc: "Test knowledge, earn achievements",
                    },
                    {
                      icon: "✈️",
                      title: "Travel Bookings",
                      desc: "Book flights, hotels, trains easily",
                    },
                  ].map((feature, idx) => (
                    <Card
                      key={idx}
                      className="border-2 border-amber-200 hover:shadow-lg transition"
                    >
                      <CardHeader>
                        <div className="text-4xl mb-3">{feature.icon}</div>
                        <CardTitle className="text-amber-950 text-lg">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-amber-900">{feature.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-100 to-orange-100 border-y-4 border-amber-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/map">
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition cursor-pointer border-2 border-amber-200 h-full hover:border-amber-400">
                <p className="text-4xl mb-3">🗺️</p>
                <p className="font-bold text-amber-950">Explore Map</p>
                <p className="text-xs text-amber-800 mt-2">
                  50+ Sacred Locations
                </p>
              </div>
            </Link>
            <Link to="/itinerary">
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition cursor-pointer border-2 border-amber-200 h-full hover:border-amber-400">
                <p className="text-4xl mb-3">📋</p>
                <p className="font-bold text-amber-950">Plan Journey</p>
                <p className="text-xs text-amber-800 mt-2">Custom Itinerary</p>
              </div>
            </Link>
            <Link to="/quiz">
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition cursor-pointer border-2 border-amber-200 h-full hover:border-amber-400">
                <p className="text-4xl mb-3">🎓</p>
                <p className="font-bold text-amber-950">Test Knowledge</p>
                <p className="text-xs text-amber-800 mt-2">Earn Badges</p>
              </div>
            </Link>
            <Link to="/community">
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition cursor-pointer border-2 border-amber-200 h-full hover:border-amber-400">
                <p className="text-4xl mb-3">📖</p>
                <p className="font-bold text-amber-950">Share Story</p>
                <p className="text-xs text-amber-800 mt-2">Community Tales</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Bhagwan Shri Ram Journey */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-amber-950">
              Why Choose Bhagwan Shri Ram Journey?
            </h2>
            <p className="text-lg text-amber-800">
              Everything you need for a meaningful spiritual journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "✨",
                title: "100% Free",
                desc: "All features accessible without any cost",
              },
              {
                icon: "📚",
                title: "Authentic Content",
                desc: "Verified scriptures & historical accuracy",
              },
              {
                icon: "🌍",
                title: "Global Community",
                desc: "Connect with devotees worldwide",
              },
              {
                icon: "⚡",
                title: "User Friendly",
                desc: "Easy navigation for all ages",
              },
              {
                icon: "🛡️",
                title: "Secure & Safe",
                desc: "Your data is protected & private",
              },
              {
                icon: "🎯",
                title: "Comprehensive",
                desc: "50+ locations, full timeline coverage",
              },
              {
                icon: "📱",
                title: "Always Available",
                desc: "Access anytime, anywhere on any device",
              },
              {
                icon: "🤝",
                title: "Community Driven",
                desc: "Share stories and connect with others",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 border-2 border-amber-200 text-center hover:shadow-lg transition"
              >
                <p className="text-4xl mb-3">{item.icon}</p>
                <h3 className="font-bold text-amber-950 mb-2">{item.title}</h3>
                <p className="text-sm text-amber-900">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-700 to-amber-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-playfair font-bold text-5xl sm:text-6xl">
            Begin Your Divine Journey Today
          </h2>
          <p className="text-xl text-amber-100">
            Join millions of devotees exploring the sacred legacy of Shri Ram
          </p>
          <Link to="/map">
            <Button
              size="lg"
              className="bg-white text-amber-700 hover:bg-amber-50 font-bold text-lg h-14 px-12"
            >
              Start Exploring →
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
