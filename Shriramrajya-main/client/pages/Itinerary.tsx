import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ramLocations, Location, phases } from "@shared/locations";
import { Search, Trash2, Download, Plus, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export default function ItineraryPage() {
  const [selectedLocations, setSelectedLocations] = useState<Location[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPhase, setSelectedPhase] = useState<string | "all">("all");
  const [days, setDays] = useState(14);
  const [name, setName] = useState("");

  const filteredLocations = ramLocations.filter((location) => {
    const matchesSearch = location.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesPhase =
      selectedPhase === "all" || location.phase === selectedPhase;
    return (
      matchesSearch &&
      matchesPhase &&
      !selectedLocations.find((l) => l.id === location.id)
    );
  });

  const addLocation = (location: Location) => {
    setSelectedLocations([...selectedLocations, location]);
  };

  const removeLocation = (id: string) => {
    setSelectedLocations(selectedLocations.filter((loc) => loc.id !== id));
  };

  const downloadItinerary = () => {
    const content = `
SHRI RAM LEGACY JOURNEY - CUSTOM ITINERARY
${name ? `Traveler: ${name}` : ""}
Total Days: ${days}
Total Locations: ${selectedLocations.length}

JOURNEY PLAN:
${selectedLocations
  .map(
    (loc, idx) => `
${idx + 1}. ${loc.name}
   Location: ${loc.state}, ${loc.country}
   Phase: ${loc.phase}
   Best Time: ${loc.bestTimeToVisit}
   Nearest City: ${loc.nearestCity}
   Description: ${loc.description}
`,
  )
  .join("\n")}

SPIRITUAL HIGHLIGHTS:
${selectedLocations
  .slice(0, 5)
  .map((loc) => `- ${loc.name}: ${loc.spiritual.substring(0, 100)}...`)
  .join("\n")}

Generated from Bhagwan Shri Ram Journey - Experience the Sacred Journey
    `;

    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(content),
    );
    element.setAttribute(
      "download",
      `shri-ram-journey-itinerary-${Date.now()}.txt`,
    );
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const estimatedCost = selectedLocations.length * 1500; // Rough estimate per location

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="font-playfair font-bold text-4xl text-amber-950 mb-2">
            Plan Your Sacred Yatra
          </h1>
          <p className="text-amber-900 text-lg">
            Create a personalized journey across the sacred locations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Location Selector */}
          <div className="lg:col-span-2 space-y-6">
            {/* Filters */}
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-lg text-amber-950">
                  Select Locations
                </CardTitle>
                <CardDescription>
                  Choose locations to include in your journey
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-700 w-5 h-5" />
                  <Input
                    placeholder="Search locations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-amber-300"
                  />
                </div>

                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={() => setSelectedPhase("all")}
                    className={`px-3 py-1 rounded-full text-sm transition ${
                      selectedPhase === "all"
                        ? "bg-amber-700 text-white"
                        : "bg-amber-100 text-amber-900 hover:bg-amber-200"
                    }`}
                  >
                    All Phases
                  </button>
                  {phases.map((phase) => (
                    <button
                      key={phase}
                      onClick={() => setSelectedPhase(phase)}
                      className={`px-3 py-1 rounded-full text-sm transition ${
                        selectedPhase === phase
                          ? "bg-amber-700 text-white"
                          : "bg-amber-100 text-amber-900 hover:bg-amber-200"
                      }`}
                    >
                      {phase}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Available Locations */}
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-lg text-amber-950">
                  Available Locations ({filteredLocations.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {filteredLocations.length > 0 ? (
                    filteredLocations.map((location) => (
                      <div
                        key={location.id}
                        className="flex items-start justify-between p-3 rounded-lg border-2 border-amber-200 hover:border-amber-700 hover:bg-amber-50 transition"
                      >
                        <div className="flex-1">
                          <p className="font-semibold text-amber-900">
                            {location.name}
                          </p>
                          <p className="text-xs text-amber-800">
                            {location.state}
                          </p>
                          <p className="text-xs text-amber-700 italic">
                            {location.phase}
                          </p>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => addLocation(location)}
                          className="bg-amber-700 hover:bg-amber-800 ml-2"
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    ))
                  ) : (
                    <p className="text-amber-800 text-center py-8">
                      No locations found. Adjust your filters.
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Itinerary Summary */}
          <div className="space-y-6">
            {/* Traveler Info */}
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-lg text-amber-950">
                  Journey Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-amber-900 block mb-2">
                    Your Name (Optional)
                  </label>
                  <Input
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border-amber-300"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-amber-900 block mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Duration (Days)
                  </label>
                  <Input
                    type="number"
                    min="1"
                    max="90"
                    value={days}
                    onChange={(e) => setDays(parseInt(e.target.value) || 1)}
                    className="border-amber-300"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Selected Locations */}
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-lg text-amber-950">
                  Your Journey ({selectedLocations.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedLocations.length > 0 ? (
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {selectedLocations.map((location, index) => (
                      <div
                        key={location.id}
                        className="p-3 rounded-lg bg-amber-50 border-l-4 border-amber-700"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="font-semibold text-amber-900">
                              Day {index + 1}: {location.name}
                            </p>
                            <p className="text-xs text-amber-800">
                              {location.state}
                            </p>
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => removeLocation(location.id)}
                            className="text-red-600 hover:bg-red-50 ml-2"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-amber-800 text-center py-8 text-sm">
                    Add locations to create your journey
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Summary Stats */}
            <Card className="border-amber-700 bg-gradient-to-br from-amber-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-lg text-amber-950">
                  Journey Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-amber-900">Locations:</span>
                  <span className="font-bold text-amber-700">
                    {selectedLocations.length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-900">Duration:</span>
                  <span className="font-bold text-amber-700">{days} days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-900">Phases:</span>
                  <span className="font-bold text-amber-700">
                    {new Set(selectedLocations.map((l) => l.phase)).size}
                  </span>
                </div>
                <div className="border-t border-amber-300 pt-3">
                  <div className="flex justify-between mb-2">
                    <span className="text-amber-900">Est. Budget (Beta):</span>
                    <span className="font-bold text-amber-700">
                      ₹{estimatedCost.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-amber-700 bg-white px-3 py-2 rounded border border-amber-300">
                    💰 Estimation Beta: ₹1500 average/day (may vary by travel mode)
                  </p>
                </div>

                <Button
                  onClick={downloadItinerary}
                  disabled={selectedLocations.length === 0}
                  className="w-full bg-amber-700 hover:bg-amber-800 mt-4"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Itinerary
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tips Section */}
        <Card className="border-amber-200 mt-8">
          <CardHeader>
            <CardTitle className="text-lg text-amber-950">
              Planning Tips
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="font-semibold text-amber-900 mb-2">
                📍 Best Route Order
              </p>
              <p className="text-sm text-amber-800">
                Follow Ram's journey in chronological order for maximum
                spiritual benefit
              </p>
            </div>
            <div>
              <p className="font-semibold text-amber-900 mb-2">
                🏨 Book Accommodations
              </p>
              <p className="text-sm text-amber-800">
                Reserve hotels in advance, especially during pilgrimage seasons
              </p>
            </div>
            <div>
              <p className="font-semibold text-amber-900 mb-2">
                💪 Physical Preparation
              </p>
              <p className="text-sm text-amber-800">
                Some locations require hiking. Prepare accordingly with proper
                footwear
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
