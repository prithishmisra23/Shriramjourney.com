import { useEffect, useRef, useState } from "react";
import { ramLocations, Location } from "@shared/locations";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin, X } from "lucide-react";

declare global {
  interface Window {
    L: any;
  }
}

interface InteractiveMapProps {
  selectedLocation?: Location | null;
  onLocationSelect?: (location: Location) => void;
  locations?: Location[];
}

export function InteractiveMap({
  selectedLocation,
  onLocationSelect,
  locations = ramLocations,
}: InteractiveMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);
  const [mapReady, setMapReady] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState<Location | null>(null);

  useEffect(() => {
    // Load Leaflet CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);

    // Load Leaflet JS
    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.onload = () => {
      initializeMap();
    };
    document.body.appendChild(script);

    return () => {
      if (link.parentNode) link.parentNode.removeChild(link);
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (map.current && mapReady) {
      updateMapMarkers();
    }
  }, [locations]);

  const initializeMap = () => {
    if (!mapContainer.current || map.current) return;

    const L = window.L;

    // Center of India (roughly middle of Ram's journey)
    const center = [22.5, 80];

    map.current = L.map(mapContainer.current).setView(center, 5);

    // Add tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map.current);

    setMapReady(true);
  };

  const updateMapMarkers = () => {
    const L = window.L;

    // Remove all layers except tile layer
    map.current.eachLayer((layer: any) => {
      if (layer instanceof L.Marker || layer instanceof L.Polyline) {
        map.current.removeLayer(layer);
      }
    });

    // Define the correct journey order (50 locations)
    const journeyOrder = [
      "ayodhya-birth", "sarayu-river", "vashistha-ashram", "janakpur", "sita-kund",
      "palace-gate", "tamasa-river", "shringaverpur", "bharadwaj-ashram", "prayagraj",
      "chitrakoot", "mandakini-river", "atri-ashram", "bharat-milap", "hanuman-dhara",
      "dandakaranya", "panchavati", "godavari-river", "tapovan", "sita-haran-spot",
      "kabatkund", "pampa-sarovar", "kishkindha", "anjanadri-hill", "rishyamukha-parvat",
      "matanga-hill", "sampati-parvat", "kabandha-moksha", "mahendragiri-hill", "trikuta-parvat",
      "ashok-vatika", "ravana-palace", "nikumbhila", "dhanushkodi", "ram-setu",
      "rameswaram", "lepakshi", "srirangam", "nashik", "ayodhya-coronation",
      "nandigram", "guptar-ghat", "valmiki-ashram", "sitamarhi", "ram-mandir"
    ];

    // Create a map of location ID to full location object
    const locationMap = new Map(locations.map(loc => [loc.id, loc]));

    // Reorder locations according to journey order
    const orderedLocations = journeyOrder
      .map(id => locationMap.get(id))
      .filter(loc => loc !== undefined) as Location[];

    // Color by phase
    const phaseColors: Record<string, string> = {
      "Birth & Early Life": "#dc2626",
      "Vanvās Begins": "#f97316",
      "Deep Forest Journey": "#eab308",
      "Search for Sita": "#22c55e",
      "Return & Coronation": "#3b82f6",
      "Post-Coronation": "#a855f7",
    };

    // Add markers and create polyline
    const coordinates: [number, number][] = [];

    orderedLocations.forEach((location, index) => {
      if (!location) return;
      coordinates.push([location.latitude, location.longitude]);

      const color = phaseColors[location.phase] || "#8b5a2b";
      const isStart = index === 0;
      const isEnd = index === orderedLocations.length - 1;

      let html = "";

      if (isStart) {
        html = `
          <div style="background: linear-gradient(135deg, #16a34a 0%, #15803d 100%); color: white; padding: 4px 8px; border-radius: 50%; font-weight: bold; font-size: 18px; border: 4px solid white; box-shadow: 0 4px 16px rgba(22, 163, 74, 0.6), inset 0 1px 2px rgba(255,255,255,0.3); width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; position: relative;">
            🚩
            <div style="position: absolute; inset: -2px; border-radius: 50%; border: 2px solid rgba(22, 163, 74, 0.3); animation: pulse 2s infinite;"></div>
          </div>
        `;
      } else if (isEnd) {
        html = `
          <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; padding: 4px 8px; border-radius: 50%; font-weight: bold; font-size: 18px; border: 4px solid white; box-shadow: 0 4px 16px rgba(220, 38, 38, 0.6), inset 0 1px 2px rgba(255,255,255,0.3); width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; position: relative;">
            ✓
            <div style="position: absolute; inset: -2px; border-radius: 50%; border: 2px solid rgba(220, 38, 38, 0.3); animation: pulse 2s infinite;"></div>
          </div>
        `;
      } else {
        html = `
          <div style="background: linear-gradient(135deg, ${color} 0%, ${color}dd 100%); color: white; padding: 0; border-radius: 50%; font-weight: bold; font-size: 13px; border: 3px solid white; box-shadow: 0 3px 12px ${color}80; width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', serif;">
            ${index + 1}
          </div>
        `;
      }

      const marker = L.marker([location.latitude, location.longitude], {
        icon: L.divIcon({
          html,
          iconSize: isStart || isEnd ? [48, 48] : [38, 38],
          className: "custom-marker",
        }),
      }).addTo(map.current);

      // Popup on marker click
      marker.on("click", () => {
        setSelectedMarker(location);
        onLocationSelect?.(location);
      });

      // Tooltip on hover with location number
      const tooltipText = isStart ? "🚩 START: Ayodhya" : isEnd ? "✓ END: Return to Ayodhya" : `${index + 1}. ${location.name}`;
      marker.bindTooltip(tooltipText, { permanent: false, direction: "top", className: "journey-tooltip" });
    });

    // Draw the journey line - main route
    if (coordinates.length > 0) {
      // Shadow/glow layer
      L.polyline(coordinates, {
        color: "#fbbf24",
        weight: 8,
        opacity: 0.3,
        lineCap: "round",
        lineJoin: "round",
      }).addTo(map.current);

      // Main route line
      L.polyline(coordinates, {
        color: "#d97706",
        weight: 4,
        opacity: 0.85,
        lineCap: "round",
        lineJoin: "round",
      }).addTo(map.current);

      // Highlight line
      L.polyline(coordinates, {
        color: "#f59e0b",
        weight: 2,
        opacity: 0.6,
        lineCap: "round",
        lineJoin: "round",
        dashArray: "10, 5",
      }).addTo(map.current);
    }
  };

  return (
    <div className="space-y-4">
      {/* Map Container */}
      <div
        ref={mapContainer}
        className="w-full h-96 md:h-[600px] rounded-xl border-0 shadow-xl"
        style={{ backgroundColor: "#e0f2fe" }}
      />

      {/* Legend */}
      <Card className="border-3 border-amber-300 bg-gradient-to-br from-amber-50 via-white to-orange-50 shadow-xl">
        <div className="p-8 space-y-8">
          <div>
            <p className="font-playfair font-bold text-amber-950 mb-6 text-2xl flex items-center gap-2">
              🗺️ Journey Markers Guide
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm mb-6">
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl border-2 border-green-400 shadow-md">
                <div style={{ background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)", color: "white", width: "44px", height: "44px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", fontWeight: "bold", border: "3px solid white", boxShadow: "0 4px 12px rgba(22, 163, 74, 0.4)" }}>
                  🚩
                </div>
                <span className="text-green-900 font-bold">
                  <strong>START POINT:</strong> Journey Begins at Holy Ayodhya
                </span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-red-100 to-rose-100 rounded-xl border-2 border-red-400 shadow-md">
                <div style={{ background: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)", color: "white", width: "44px", height: "44px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", fontWeight: "bold", border: "3px solid white", boxShadow: "0 4px 12px rgba(220, 38, 38, 0.4)" }}>
                  ✓
                </div>
                <span className="text-red-900 font-bold">
                  <strong>END POINT:</strong> Journey Concludes at Ayodhya
                </span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-xl border-2 border-amber-400 shadow-md">
                <div style={{ background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)", color: "white", width: "44px", height: "44px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: "bold", border: "3px solid white", boxShadow: "0 4px 12px rgba(245, 158, 11, 0.4)" }}>
                  25
                </div>
                <span className="text-amber-900 font-bold">
                  <strong>Numbered Stops:</strong> Sequence of pilgrimage sites
                </span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl border-2 border-orange-400 shadow-md">
                <div style={{ height: "4px", background: "linear-gradient(to right, #d97706, #f59e0b)", width: "40px", borderRadius: "2px", boxShadow: "0 2px 8px rgba(217, 119, 6, 0.4)" }}></div>
                <span className="text-orange-900 font-bold">
                  <strong>Golden Route:</strong> Complete divine journey path
                </span>
              </div>
            </div>
          </div>

          <div>
            <p className="font-bold text-amber-950 mb-4 text-lg flex items-center gap-2">
              🎨 Journey Phase Legend
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
              {[
                { phase: "Birth & Early Life", color: "#dc2626", emoji: "👶" },
                { phase: "Vanvās Begins", color: "#f97316", emoji: "🚶" },
                { phase: "Deep Forest Journey", color: "#eab308", emoji: "🌲" },
                { phase: "Search for Sita", color: "#22c55e", emoji: "🔍" },
                { phase: "Return & Coronation", color: "#3b82f6", emoji: "👑" },
                { phase: "Post-Coronation", color: "#a855f7", emoji: "✨" },
              ].map((item) => (
                <div
                  key={item.phase}
                  className="flex items-center gap-3 p-2 bg-white rounded-lg border border-amber-200 hover:shadow-md transition"
                >
                  <span>{item.emoji}</span>
                  <div
                    className="w-4 h-4 rounded-full border-2 border-white shadow-md"
                    style={{ backgroundColor: item.color }}
                    title={item.phase}
                  />
                  <span className="text-amber-900 font-medium text-xs flex-grow">
                    {item.phase.split(" ")[0]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Info Panels */}
      {selectedMarker && (
        <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="p-4 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-amber-950 text-lg">
                  {selectedMarker.name}
                </h3>
                <p className="text-sm text-amber-800">
                  {selectedMarker.state}, {selectedMarker.country}
                </p>
                <p className="text-xs text-amber-700 mt-1">
                  <span className="font-semibold">{selectedMarker.phase}</span>
                </p>
              </div>
              <button
                onClick={() => setSelectedMarker(null)}
                className="p-1 hover:bg-amber-200 rounded"
              >
                <X className="w-5 h-5 text-amber-900" />
              </button>
            </div>

            <p className="text-sm text-amber-900 line-clamp-2">
              {selectedMarker.description}
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 bg-white rounded border border-amber-200">
                <p className="text-amber-700 font-semibold">Best Time</p>
                <p className="text-amber-900">
                  {selectedMarker.bestTimeToVisit}
                </p>
              </div>
              <div className="p-2 bg-white rounded border border-amber-200">
                <p className="text-amber-700 font-semibold">Nearest City</p>
                <p className="text-amber-900">{selectedMarker.nearestCity}</p>
              </div>
            </div>

            <Link
              to={`/location/${selectedMarker.id}`}
              className="inline-block w-full"
            >
              <button className="w-full px-4 py-2 bg-amber-700 hover:bg-amber-800 text-white rounded-lg text-sm font-semibold transition">
                View Details
              </button>
            </Link>
          </div>
        </Card>
      )}

      {/* Map Info */}
      <Card className="border-2 border-amber-200 bg-white shadow-md">
        <div className="p-6 space-y-4">
          <p className="font-bold text-amber-950 text-lg">
            📍 Map Features & Guide
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="text-sm text-amber-900 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-amber-700">✓</span>
                <span>
                  <strong>50+ Locations</strong> - All sacred pilgrimage sites
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-700">✓</span>
                <span>
                  <strong>6 Phases</strong> - Color-coded journey stages
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-700">✓</span>
                <span>
                  <strong>Route Line</strong> - Complete journey path shown
                </span>
              </li>
            </ul>
            <ul className="text-sm text-amber-900 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-amber-700">✓</span>
                <span>
                  <strong>Interactive</strong> - Click markers for details
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-700">✓</span>
                <span>
                  <strong>Zoomable</strong> - Explore any region in detail
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-700">✓</span>
                <span>
                  <strong>Searchable</strong> - Find locations instantly
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
