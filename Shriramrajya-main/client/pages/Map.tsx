import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { InteractiveMap } from "@/components/InteractiveMap";
import { Location, ramLocations } from "@shared/locations";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, Filter, MapPin, Download } from "lucide-react";

export default function MapPage() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null,
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPhase, setSelectedPhase] = useState<string | "all">("all");

  const phases = [
    "Birth & Early Life",
    "Vanvās Begins",
    "Deep Forest Journey",
    "Search for Sita",
    "Return & Coronation",
    "Post-Coronation",
  ];

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
        {/* Hero Section */}
        <div className="mb-12 bg-gradient-to-br from-amber-700 via-amber-800 to-amber-950 text-white rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.4),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.3),transparent_50%)]"></div>
          </div>
          <div className="relative z-10">
            <div className="flex items-start justify-between gap-6 mb-6">
              <div className="flex-1">
                <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-4 border border-white/30">
                  📍 INTERACTIVE PILGRIMAGE GUIDE
                </div>
                <h1 className="font-playfair font-bold text-5xl md:text-7xl mb-6 animate-slideDown leading-tight">
                  🗺️ Ram Rajya<br/>Sacred Map
                </h1>
                <p className="text-lg md:text-xl text-amber-100 max-w-3xl leading-relaxed mb-6">
                  Follow Shri Ram's divine journey across <span className="font-bold text-white">45 sacred locations</span> spanning <span className="font-bold text-white">6 phases</span> of his eternal life. Each marker represents a sacred moment steeped in spiritual significance and cultural heritage.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <Button className="bg-white text-amber-700 hover:bg-amber-50 font-semibold px-8 py-3 rounded-xl shadow-lg flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Download Map (PDF)
                  </Button>
                  <Button className="bg-amber-400/30 backdrop-blur-sm border-2 border-white text-white hover:bg-white/20 font-semibold px-8 py-3 rounded-xl">
                    Share Journey
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-12">
          <Card className="border-2 border-amber-200 bg-gradient-to-br from-red-50 to-orange-50 p-6 text-center hover:shadow-xl transition-all hover:scale-105 hover:-translate-y-1">
            <p className="text-4xl font-bold text-red-600 mb-2">45</p>
            <p className="text-sm font-bold text-amber-900">Sacred Sites</p>
            <p className="text-xs text-amber-700 mt-1">Across India & Sri Lanka</p>
          </Card>
          <Card className="border-2 border-amber-200 bg-gradient-to-br from-yellow-50 to-amber-50 p-6 text-center hover:shadow-xl transition-all hover:scale-105 hover:-translate-y-1">
            <p className="text-4xl font-bold text-yellow-600 mb-2">6</p>
            <p className="text-sm font-bold text-amber-900">Journey Phases</p>
            <p className="text-xs text-amber-700 mt-1">Life Chapters</p>
          </Card>
          <Card className="border-2 border-amber-200 bg-gradient-to-br from-green-50 to-emerald-50 p-6 text-center hover:shadow-xl transition-all hover:scale-105 hover:-translate-y-1">
            <p className="text-4xl font-bold text-green-600 mb-2">14</p>
            <p className="text-sm font-bold text-amber-900">Years Exile</p>
            <p className="text-xs text-amber-700 mt-1">Vanvas Period</p>
          </Card>
          <Card className="border-2 border-amber-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 text-center hover:shadow-xl transition-all hover:scale-105 hover:-translate-y-1">
            <p className="text-4xl font-bold text-blue-600 mb-2">2</p>
            <p className="text-sm font-bold text-amber-900">Countries</p>
            <p className="text-xs text-amber-700 mt-1">India & Sri Lanka</p>
          </Card>
          <Card className="border-2 border-amber-200 bg-gradient-to-br from-purple-50 to-pink-50 p-6 text-center hover:shadow-xl transition-all hover:scale-105 hover:-translate-y-1">
            <p className="text-4xl font-bold text-purple-600 mb-2">∞</p>
            <p className="text-sm font-bold text-amber-900">Spiritual</p>
            <p className="text-xs text-amber-700 mt-1">Significance</p>
          </Card>
        </div>

        {/* Search & Filters Section */}
        <div className="mb-8 space-y-8 bg-gradient-to-br from-white to-amber-50 rounded-3xl p-8 md:p-10 shadow-lg border-2 border-amber-100">
          {/* Search Bar */}
          <div>
            <label className="block text-base font-bold text-amber-950 mb-4 flex items-center gap-3">
              <Search className="w-6 h-6 text-amber-700" />
              🔍 Search Sacred Locations
            </label>
            <div className="relative group">
              <Input
                placeholder="🏛️ Search by location name (Ayodhya, Varanasi, Rameswaram...) or state..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-5 pr-12 py-4 border-2 border-amber-300 focus:border-amber-700 focus:ring-2 focus:ring-amber-300 rounded-xl text-base font-medium transition-all placeholder:text-amber-400"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5 opacity-70 group-focus-within:opacity-100 transition-opacity" />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-14 top-1/2 transform -translate-y-1/2 text-amber-600 hover:text-amber-800 font-bold text-xl transition-colors"
                >
                  ✕
                </button>
              )}
            </div>
            {searchTerm && (
              <p className="text-sm text-amber-700 mt-3 flex items-center gap-2">
                ✓ Found <span className="font-bold text-amber-900">{filteredLocations.length}</span> matching locations
              </p>
            )}
          </div>

          {/* Phase Filter */}
          <div>
            <label className="block text-base font-bold text-amber-950 mb-5 flex items-center gap-3">
              <Filter className="w-6 h-6 text-amber-700" />
              🎨 Filter by Journey Phase
            </label>
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => setSelectedPhase("all")}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all transform duration-300 ${
                  selectedPhase === "all"
                    ? "bg-gradient-to-r from-amber-700 to-amber-800 text-white shadow-lg scale-105 ring-2 ring-amber-400"
                    : "bg-white text-amber-900 border-2 border-amber-300 hover:bg-amber-50 hover:scale-105 hover:shadow-md"
                }`}
              >
                📍 All ({ramLocations.length})
              </button>
              {phases.map((phase) => {
                const count = ramLocations.filter(
                  (l) => l.phase === phase,
                ).length;
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

                return (
                  <button
                    key={phase}
                    onClick={() => setSelectedPhase(phase)}
                    className={`px-6 py-3 rounded-full text-sm font-bold transition-all transform duration-300 whitespace-nowrap flex items-center gap-2 ${
                      selectedPhase === phase
                        ? `bg-gradient-to-r ${phaseColors[phase]} text-white shadow-lg scale-105 ring-2 ring-offset-2 ring-amber-300`
                        : "bg-white text-amber-900 border-2 border-amber-200 hover:bg-amber-50 hover:scale-105 hover:shadow-md"
                    }`}
                  >
                    <span>{phaseEmoji[phase]}</span>
                    {phase.split(" ")[0]} <span className="font-bold opacity-80">({count})</span>
                  </button>
                );
              })}
            </div>
            <div className="mt-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border-l-4 border-amber-700">
              <p className="text-sm text-amber-900">
                <span className="font-bold">Selected:</span> {selectedPhase === "all" ? "All Phases" : selectedPhase} •
                <span className="font-bold ml-2">{filteredLocations.length}</span> locations shown
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-8 bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-amber-200">
          <InteractiveMap
            selectedLocation={selectedLocation}
            onLocationSelect={setSelectedLocation}
            locations={filteredLocations}
          />
        </div>

        {/* Statistics & Info Panels */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-2 border-amber-200 bg-gradient-to-br from-red-50 via-amber-50 to-orange-50 p-6 text-center hover:shadow-xl transition-all hover:scale-105">
            <p className="text-4xl font-bold bg-gradient-text mb-2">
              {filteredLocations.length}
            </p>
            <p className="text-sm font-bold text-amber-900">
              Locations Shown
            </p>
          </Card>
          <Card className="border-2 border-amber-200 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 p-6 text-center hover:shadow-xl transition-all hover:scale-105">
            <p className="text-4xl font-bold bg-gradient-text mb-2">
              {ramLocations.length}
            </p>
            <p className="text-sm font-bold text-amber-900">
              Total Locations
            </p>
          </Card>
          <Card className="border-2 border-amber-200 bg-gradient-to-br from-green-50 via-amber-50 to-orange-50 p-6 text-center hover:shadow-xl transition-all hover:scale-105">
            <p className="text-4xl font-bold bg-gradient-text mb-2">6</p>
            <p className="text-sm font-bold text-amber-900">
              Journey Phases
            </p>
          </Card>
          <Card className="border-2 border-amber-200 bg-gradient-to-br from-blue-50 via-amber-50 to-orange-50 p-6 text-center hover:shadow-xl transition-all hover:scale-105">
            <p className="text-4xl font-bold bg-gradient-text mb-2">2</p>
            <p className="text-sm font-bold text-amber-900">Countries</p>
          </Card>
        </div>

        {/* Help & Tips Section */}
        <Card className="border-3 border-amber-300 bg-gradient-to-br from-amber-50 via-white to-orange-50 p-8 shadow-lg">
          <p className="font-playfair font-bold text-amber-950 text-2xl mb-6 flex items-center gap-2">
            💡 How to Use This Sacred Map
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base">
            <ul className="space-y-3 text-amber-900">
              <li className="flex items-start gap-3">
                <span className="text-lg mt-1">✓</span>
                <span><strong>Click markers</strong> to view detailed location history and significance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lg mt-1">✓</span>
                <span><strong>Zoom & pan</strong> to explore sacred regions and geographical details</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lg mt-1">✓</span>
                <span><strong>Color-coded pins</strong> represent different journey phases (red, orange, yellow, green, blue, purple)</span>
              </li>
            </ul>
            <ul className="space-y-3 text-amber-900">
              <li className="flex items-start gap-3">
                <span className="text-lg mt-1">✓</span>
                <span><strong>Search</strong> specific locations by name or state to find them instantly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lg mt-1">✓</span>
                <span><strong>Filter by phase</strong> to focus on specific chapters of Ram's divine journey</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lg mt-1">✓</span>
                <span><strong>Golden route line</strong> traces the complete pilgrimage path from start to end</span>
              </li>
            </ul>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
