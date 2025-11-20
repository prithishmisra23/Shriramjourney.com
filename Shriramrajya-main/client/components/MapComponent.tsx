import { useState } from "react";
import { ramLocations, Location } from "@shared/locations";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, MapPin, Info, Filter } from "lucide-react";

interface MapComponentProps {
  selectedLocation?: Location | null;
  onLocationSelect?: (location: Location) => void;
}

export function MapComponent({ selectedLocation, onLocationSelect }: MapComponentProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPhase, setSelectedPhase] = useState<string | "all">("all");
  const [filteredLocations, setFilteredLocations] = useState(ramLocations);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const filtered = ramLocations.filter((location) =>
      (location.name.toLowerCase().includes(value.toLowerCase()) ||
        location.state.toLowerCase().includes(value.toLowerCase())) &&
      (selectedPhase === "all" || location.phase === selectedPhase)
    );
    setFilteredLocations(filtered);
  };

  const handlePhaseFilter = (phase: string) => {
    setSelectedPhase(phase);
    const filtered = ramLocations.filter((location) =>
      (phase === "all" || location.phase === phase) &&
      (location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        location.state.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredLocations(filtered);
  };

  const phases = [
    "Birth & Early Life",
    "Vanvās Begins",
    "Deep Forest Journey",
    "Search for Sita",
    "Return & Coronation",
    "Post-Coronation"
  ];

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-700 w-5 h-5" />
        <Input
          placeholder="Search locations or states..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 border-amber-300 focus-visible:ring-amber-700"
        />
      </div>

      {/* Phase Filters */}
      <div className="flex gap-2 flex-wrap p-3 bg-amber-50 rounded-lg border border-amber-200">
        <Filter className="w-5 h-5 text-amber-700 my-auto" />
        <button
          onClick={() => handlePhaseFilter("all")}
          className={`px-3 py-1 rounded-full text-xs font-semibold transition ${
            selectedPhase === "all"
              ? "bg-amber-700 text-white"
              : "bg-white text-amber-900 border border-amber-300 hover:bg-amber-100"
          }`}
        >
          All
        </button>
        {phases.map((phase) => (
          <button
            key={phase}
            onClick={() => handlePhaseFilter(phase)}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition whitespace-nowrap ${
              selectedPhase === phase
                ? "bg-amber-700 text-white"
                : "bg-white text-amber-900 border border-amber-300 hover:bg-amber-100"
            }`}
          >
            {phase.split(" ").slice(0, 2).join(" ")}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Map Placeholder */}
        <div className="lg:col-span-2 rounded-lg border-2 border-amber-200 shadow-lg overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100 h-96 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🗺️</div>
            <p className="text-amber-900 font-semibold mb-2">Interactive Map</p>
            <p className="text-sm text-amber-800">
              Showing {filteredLocations.length} locations<br />
              Click on any location in the list to view details
            </p>
          </div>
        </div>

        {/* Location List */}
        <div className="lg:col-span-1 border-2 border-amber-200 rounded-lg overflow-hidden flex flex-col bg-white">
          <div className="p-4 bg-gradient-to-r from-amber-700 to-amber-900 text-white">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Locations ({filteredLocations.length})
            </h3>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="space-y-2 p-4">
              {filteredLocations.map((location) => (
                <Link
                  key={location.id}
                  to={`/location/${location.id}`}
                  className={`block p-3 rounded-lg border-2 transition cursor-pointer group ${
                    selectedLocation?.id === location.id
                      ? "border-amber-700 bg-amber-50"
                      : "border-amber-200 hover:border-amber-700 hover:bg-amber-50"
                  }`}
                  onClick={() => onLocationSelect?.(location)}
                >
                  <p className="font-semibold text-amber-900 group-hover:text-amber-700 text-sm">
                    {location.name}
                  </p>
                  <p className="text-xs text-amber-800">{location.state}</p>
                  <p className="text-xs text-amber-700 mt-1 italic">{location.phase}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <Card className="border-amber-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-base text-amber-900 flex items-center gap-2">
              <Info className="w-4 h-4" />
              About the Map
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-amber-800">
            <p>
              Explore Ram's complete journey across Bharat. Click on any location to view
              detailed historical, spiritual, and cultural information.
            </p>
          </CardContent>
        </Card>

        <Card className="border-amber-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-base text-amber-900">Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-amber-800 space-y-2">
            <p>📍 <strong>50+ Locations</strong> across Bharat and Sri Lanka</p>
            <p>🕉️ <strong>6 Phases</strong> of Ram's divine journey</p>
            <p>🏛️ <strong>Complete Stories</strong> for each sacred site</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
