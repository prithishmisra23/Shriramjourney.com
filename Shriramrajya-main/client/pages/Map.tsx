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
        <div className="mb-12 bg-gradient-to-br from-amber-700 via-amber-800 to-amber-900 text-white rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.3),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.2),transparent_50%)]"></div>
          </div>
          <div className="relative z-10 flex items-start justify-between gap-6">
            <div>
              <h1 className="font-playfair font-bold text-5xl md:text-6xl mb-4 animate-slideDown">
                🗺️ Ram Rajya Sacred Map
              </h1>
              <p className="text-lg md:text-xl text-amber-100 max-w-3xl leading-relaxed">
                Follow Shri Ram's divine journey across 50 sacred locations spanning 6 phases of his eternal life. Each marker represents a sacred moment in the legend.
              </p>
            </div>
            <Button className="bg-white text-amber-700 hover:bg-amber-50 hidden md:flex whitespace-nowrap font-semibold px-6 py-3 rounded-xl shadow-lg">
              <Download className="w-5 h-5 mr-2" />
              Download Map
            </Button>
          </div>
        </div>

        {/* Search & Filters Section */}
        <div className="mb-8 space-y-6 bg-gradient-to-br from-white to-amber-50 rounded-3xl p-8 shadow-lg border border-amber-100">
          {/* Search Bar */}
          <div>
            <label className="block text-sm font-bold text-amber-950 mb-4 flex items-center gap-2">
              <Search className="w-5 h-5 text-amber-700" />
              Search Sacred Locations
            </label>
            <div className="relative">
              <Input
                placeholder="Search by location name or state (e.g., Ayodhya, Varanasi)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-4 py-4 border-2 border-amber-300 focus:border-amber-700 rounded-xl text-base font-medium transition-all"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5 opacity-50" />
            </div>
          </div>

          {/* Phase Filter */}
          <div>
            <label className="block text-sm font-bold text-amber-950 mb-4 flex items-center gap-2">
              <Filter className="w-5 h-5 text-amber-700" />
              Filter by Journey Phase
            </label>
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => setSelectedPhase("all")}
                className={`px-5 py-3 rounded-full text-sm font-bold transition-all transform ${
                  selectedPhase === "all"
                    ? "bg-gradient-to-r from-amber-700 to-amber-800 text-white shadow-lg scale-105"
                    : "bg-white text-amber-900 border-2 border-amber-300 hover:bg-amber-100 hover:scale-105"
                }`}
              >
                All ({ramLocations.length})
              </button>
              {phases.map((phase) => {
                const count = ramLocations.filter(
                  (l) => l.phase === phase,
                ).length;
                return (
                  <button
                    key={phase}
                    onClick={() => setSelectedPhase(phase)}
                    className={`px-5 py-3 rounded-full text-sm font-bold transition-all transform whitespace-nowrap ${
                      selectedPhase === phase
                        ? "bg-gradient-to-r from-amber-700 to-amber-800 text-white shadow-lg scale-105"
                        : "bg-white text-amber-900 border-2 border-amber-200 hover:bg-amber-100 hover:scale-105"
                    }`}
                  >
                    {phase.split(" ")[0]} ({count})
                  </button>
                );
              })}
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
