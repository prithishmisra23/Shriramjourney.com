import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { InteractiveMap } from "@/components/InteractiveMap";
import { Location, ramLocations } from "@shared/locations";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, Filter } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const phases = [
  "Birth & Early Life",
  "Vanvās Begins",
  "Deep Forest Journey",
  "Search for Sita",
  "Return & Coronation",
  "Post-Coronation",
];

const phaseColors: Record<string, string> = {
  "Birth & Early Life": "from-red-500 to-red-600",
  "Vanvās Begins": "from-orange-500 to-orange-600",
  "Deep Forest Journey": "from-yellow-500 to-yellow-600",
  "Search for Sita": "from-green-500 to-green-600",
  "Return & Coronation": "from-blue-500 to-blue-600",
  "Post-Coronation": "from-purple-500 to-purple-600",
};
const phaseEmoji: Record<string, string> = {
  "Birth & Early Life": "👶",
  "Vanvās Begins": "🚶",
  "Deep Forest Journey": "🌲",
  "Search for Sita": "🔍",
  "Return & Coronation": "👑",
  "Post-Coronation": "✨",
};

const BOOKING_PARTNERS = [
  {
    name: "MakeMyTrip",
    nameHi: "मेकमाईट्रिप",
    icon: "✈️",
    desc: "Flights, trains & holiday packages for your yatra",
    descHi: "यात्रा के लिए फ्लाइट, ट्रेन और हॉलिडे पैकेज",
    color: "from-blue-600 to-blue-700",
    url: "https://www.makemytrip.com/",
  },
  {
    name: "IRCTC Tourism",
    nameHi: "आईआरसीटीसी पर्यटन",
    icon: "🚂",
    desc: "Official Ramayana Circuit Yatra train packages",
    descHi: "रामायण सर्किट यात्रा ट्रेन पैकेज",
    color: "from-orange-600 to-orange-700",
    url: "https://www.irctctourism.com/tour_based_on_category?category=R",
  },
  {
    name: "Booking.com",
    nameHi: "बुकिंग.कॉम",
    icon: "🏨",
    desc: "Hotels, dharamshalas & resorts near all temples",
    descHi: "सभी मंदिरों के पास होटल, धर्मशाला व रिसॉर्ट",
    color: "from-cyan-600 to-teal-700",
    url: "https://www.booking.com/searchresults.html?ss=Ayodhya+India",
  },
  {
    name: "Ola / Rapido",
    nameHi: "ओला / रैपिडो",
    icon: "🛺",
    desc: "Auto, cab & bike rides to reach every sacred site",
    descHi: "हर तीर्थ तक ऑटो, कैब और बाइक सेवा",
    color: "from-green-600 to-green-700",
    url: "https://www.olacabs.com/",
  },
];

export default function MapPage() {
  const { language } = useLanguage();
  const isHi = language === "hi";

  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPhase, setSelectedPhase] = useState<string | "all">("all");

  const filteredLocations = ramLocations.filter(
    (location) =>
      (location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        location.state.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedPhase === "all" || location.phase === selectedPhase),
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">

        {/* ═══ HERO ═══ */}
        <div className="mb-10 bg-gradient-to-br from-amber-700 via-amber-800 to-amber-950 text-white rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.4),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.3),transparent_50%)]" />
          </div>
          <div className="relative z-10">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-4 border border-white/30">
              {isHi ? "📍 इंटरैक्टिव तीर्थ यात्रा मार्गदर्शिका" : "📍 INTERACTIVE PILGRIMAGE GUIDE"}
            </span>
            <h1 className="font-playfair font-bold text-4xl md:text-6xl mb-4 leading-tight">
              {isHi ? "🗺️ श्री राम की\nपवित्र यात्रा" : "🗺️ Shri Ram's\nSacred Journey"}
            </h1>
            <p className="text-lg text-amber-100 max-w-2xl leading-relaxed mb-2">
              {isHi
                ? "भारत, नेपाल और श्रीलंका में फैले ४५+ पवित्र स्थलों का भ्रमण करें — जहाँ-जहाँ श्री राम के चरण पड़े।"
                : "Explore 45+ sacred locations across India, Nepal & Sri Lanka — connected by the golden journey path of Shri Ram."}
            </p>
            <p className="text-sm text-amber-300 font-semibold">
              {isHi
                ? "👆 किसी भी मार्कर पर क्लिक करें और उड़ान, होटल व यात्रा बुक करें"
                : "👆 Click any marker on the map to get details + book flights, hotels & transport"}
            </p>
          </div>
        </div>

        {/* ═══ STATS ═══ */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10">
          {[
            { n: "45+", label: isHi ? "पवित्र स्थल" : "Sacred Sites", sub: isHi ? "भारत व श्रीलंका" : "India & Sri Lanka", color: "red" },
            { n: "6", label: isHi ? "यात्रा चरण" : "Journey Phases", sub: isHi ? "जीवन के अध्याय" : "Life Chapters", color: "yellow" },
            { n: "14", label: isHi ? "वर्ष वनवास" : "Years Exile", sub: isHi ? "वन-यात्रा काल" : "Vanvas Period", color: "green" },
            { n: "2", label: isHi ? "देश" : "Countries", sub: isHi ? "भारत व श्रीलंका" : "India & Sri Lanka", color: "blue" },
            { n: "∞", label: isHi ? "आध्यात्मिक महत्व" : "Spiritual Depth", sub: isHi ? "जय श्री राम" : "Jai Shri Ram", color: "purple" },
          ].map((s, i) => (
            <Card key={i} className={`border-2 border-${s.color}-200 bg-gradient-to-br from-${s.color}-50 to-${s.color}-100 p-5 text-center hover:shadow-xl transition-all hover:scale-105`}>
              <p className={`text-4xl font-bold text-${s.color}-600 mb-1`}>{s.n}</p>
              <p className="text-sm font-bold text-amber-900">{s.label}</p>
              <p className="text-xs text-amber-700 mt-0.5">{s.sub}</p>
            </Card>
          ))}
        </div>

        {/* ═══ FILTERS ═══ */}
        <div className="mb-8 space-y-6 bg-gradient-to-br from-white to-amber-50 rounded-3xl p-6 md:p-8 shadow-lg border-2 border-amber-100">
          {/* Search */}
          <div>
            <label className="block text-sm font-bold text-amber-950 mb-3 flex items-center gap-2">
              <Search className="w-5 h-5 text-amber-700" />
              {isHi ? "🔍 पवित्र स्थान खोजें" : "🔍 Search Sacred Locations"}
            </label>
            <div className="relative">
              <Input
                placeholder={isHi ? "🏛️ स्थान का नाम लिखें (अयोध्या, चित्रकूट, रामेश्वरम...)" : "🏛️ Search by name (Ayodhya, Chitrakoot, Rameswaram...)"}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-5 pr-10 py-3 border-2 border-amber-300 focus:border-amber-700 rounded-xl text-sm font-medium placeholder:text-amber-400"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-600 hover:text-red-600 font-bold"
                >✕</button>
              )}
            </div>
            {searchTerm && (
              <p className="text-xs text-amber-700 mt-2">
                ✓ {filteredLocations.length} {isHi ? "स्थान मिले" : "locations found"}
              </p>
            )}
          </div>

          {/* Phase Filter */}
          <div>
            <label className="block text-sm font-bold text-amber-950 mb-3 flex items-center gap-2">
              <Filter className="w-5 h-5 text-amber-700" />
              {isHi ? "🎨 यात्रा चरण के अनुसार फ़िल्टर करें" : "🎨 Filter by Journey Phase"}
            </label>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setSelectedPhase("all")}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${selectedPhase === "all"
                    ? "bg-gradient-to-r from-amber-700 to-amber-800 text-white shadow-lg scale-105 ring-2 ring-amber-400"
                    : "bg-white text-amber-900 border-2 border-amber-300 hover:bg-amber-50"
                  }`}
              >
                📍 {isHi ? "सभी" : "All"} ({ramLocations.length})
              </button>
              {phases.map((phase) => {
                const count = ramLocations.filter((l) => l.phase === phase).length;
                return (
                  <button
                    key={phase}
                    onClick={() => setSelectedPhase(phase)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${selectedPhase === phase
                        ? `bg-gradient-to-r ${phaseColors[phase]} text-white shadow-lg scale-105 ring-2 ring-offset-1 ring-amber-300`
                        : "bg-white text-amber-900 border-2 border-amber-200 hover:bg-amber-50"
                      }`}
                  >
                    {phaseEmoji[phase]} {phase.split(" ")[0]} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ═══ MAP ═══ */}
        <div className="mb-10">
          <InteractiveMap
            selectedLocation={selectedLocation}
            onLocationSelect={setSelectedLocation}
            locations={filteredLocations}
          />
        </div>

        {/* ═══ BOOKING PARTNERS ═══ */}
        <section className="mb-10 bg-gradient-to-br from-amber-900 to-amber-950 rounded-3xl p-8 text-white">
          <h2 className="font-playfair font-bold text-2xl sm:text-3xl text-amber-100 mb-2">
            {isHi ? "🛕 अपनी पवित्र यात्रा बुक करें" : "🛕 Book Your Sacred Yatra"}
          </h2>
          <p className="text-amber-400 text-sm mb-7">
            {isHi
              ? "उड़ान, ट्रेन, होटल और स्थानीय परिवहन सभी एक जगह — मानचित्र पर किसी भी स्थान पर क्लिक करें और बुकिंग लिंक देखें।"
              : "Flights, trains, hotels and local transport — click any location on the map for instant booking links."}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BOOKING_PARTNERS.map((p, i) => (
              <a
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block rounded-2xl bg-gradient-to-br ${p.color} p-5 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
              >
                <div className="absolute -right-4 -top-4 text-6xl opacity-15 group-hover:opacity-25 transition-opacity">{p.icon}</div>
                <p className="text-3xl mb-3">{p.icon}</p>
                <p className="font-bold text-base text-white">{isHi ? p.nameHi : p.name}</p>
                <p className="text-xs text-white/75 mt-1 leading-relaxed">{isHi ? p.descHi : p.desc}</p>
                <div className="mt-3 flex items-center gap-1 text-white/60 text-xs font-bold">
                  <span>{isHi ? "अभी बुक करें" : "Book Now"}</span>
                  <span>↗</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ═══ GUIDE ═══ */}
        <Card className="border-4 border-amber-400 bg-gradient-to-br from-amber-50 via-white to-orange-50 p-8 shadow-2xl">
          <p className="font-playfair font-bold text-amber-950 text-2xl mb-6 flex items-center gap-3">
            <span className="text-3xl">💡</span>
            {isHi ? "मानचित्र का उपयोग कैसे करें" : "How to Use This Sacred Map"}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
            {[
              { icon: "🎯", title: isHi ? "मार्कर पर क्लिक करें" : "Click Location Markers", desc: isHi ? "विवरण, मार्गदर्शन और बुकिंग लिंक तुरंत देखें" : "View details, highlights & instant booking links" },
              { icon: "✈️", title: isHi ? "उड़ान बुक करें" : "Book Flights", desc: isHi ? "MakeMyTrip पर निकटतम हवाई अड्डे के लिए सीधे लिंक" : "Direct links to MakeMyTrip for the nearest airport" },
              { icon: "🏨", title: isHi ? "होटल खोजें" : "Find Hotels", desc: isHi ? "Booking.com पर मंदिर के पास होटल और धर्मशाला" : "Hotels & dharamshalas near temples on Booking.com" },
              { icon: "🚶", title: isHi ? "क्रमवार यात्रा करें" : "Follow the Journey", desc: isHi ? "पैनल में ‹ › बटन से एक-एक स्थान पर आगे बढ़ें" : "Use ‹ › in the side panel to navigate location by location" },
              { icon: "🗺️", title: isHi ? "सुनहरा मार्ग" : "Golden Route Line", desc: isHi ? "सभी ४५ स्थानों को जोड़ने वाली चमकती हुई पथ रेखा" : "Glowing path connecting all 45 sacred locations in order" },
              { icon: "🔍", title: isHi ? "खोजें और फ़िल्टर करें" : "Search & Filter", desc: isHi ? "नाम या चरण के अनुसार तुरंत स्थान खोजें" : "Find any sacred site instantly by name or journey phase" },
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl border-l-4 border-amber-500 hover:shadow-md transition-all">
                <span className="text-2xl">{tip.icon}</span>
                <div>
                  <p className="font-bold text-amber-950 text-sm">{tip.title}</p>
                  <p className="text-xs text-amber-800 mt-0.5">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
