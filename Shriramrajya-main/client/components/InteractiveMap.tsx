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

    // Center on northern India, covering the entire journey route
    const center = [23.5, 80.5];
    const initialZoom = 5;

    map.current = L.map(mapContainer.current, {
      scrollWheelZoom: true,
      trackResize: true,
    }).setView(center, initialZoom);

    // Add tile layer with better styling
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
      minZoom: 4,
      className: "map-tiles",
    }).addTo(map.current);

    // Add a subtle zoom control
    L.control.zoom({
      position: "topright",
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

    // Define the correct journey order (45 sacred locations)
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
          <div style="background: linear-gradient(135deg, ${color} 0%, ${color}dd 100%); color: white; padding: 0; border-radius: 50%; font-weight: 900; font-size: 18px; border: 4px solid white; box-shadow: 0 4px 16px ${color}99, inset 0 2px 4px rgba(255,255,255,0.3); width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', serif; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
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
      // Outer glow layer for depth
      L.polyline(coordinates, {
        color: "#fbbf24",
        weight: 12,
        opacity: 0.25,
        lineCap: "round",
        lineJoin: "round",
      }).addTo(map.current);

      // Mid-tone shadow layer
      L.polyline(coordinates, {
        color: "#f59e0b",
        weight: 8,
        opacity: 0.4,
        lineCap: "round",
        lineJoin: "round",
      }).addTo(map.current);

      // Primary golden route line
      L.polyline(coordinates, {
        color: "#d97706",
        weight: 5,
        opacity: 0.9,
        lineCap: "round",
        lineJoin: "round",
      }).addTo(map.current);

      // Accent highlight line with animation
      L.polyline(coordinates, {
        color: "#fbbf24",
        weight: 2.5,
        opacity: 0.7,
        lineCap: "round",
        lineJoin: "round",
      }).addTo(map.current);

      // Auto-fit map to show all markers with adequate padding
      const bounds = L.latLngBounds(coordinates);
      map.current.fitBounds(bounds, { padding: [80, 80], maxZoom: 7 });
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
      <Card className="border-4 border-amber-400 bg-gradient-to-br from-amber-50 via-white to-orange-50 shadow-2xl">
        <div className="p-8 space-y-8">
          <div>
            <p className="font-playfair font-bold text-amber-950 mb-8 text-3xl flex items-center gap-3">
              <span className="text-4xl">🗺️</span> Sacred Journey Markers Guide
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
            <p className="font-playfair font-bold text-amber-950 mb-8 text-3xl flex items-center gap-3">
              <span className="text-4xl">🎨</span> Six Sacred Phases
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 text-sm">
              {[
                { phase: "Birth & Early Life", color: "#dc2626", emoji: "👶", description: "Ayodhya Birth", locations: "1-5" },
                { phase: "Vanvās Begins", color: "#f97316", emoji: "🚶", description: "Exile Starts", locations: "6-10" },
                { phase: "Deep Forest Journey", color: "#eab308", emoji: "🌲", description: "Forests", locations: "16-20" },
                { phase: "Search for Sita", color: "#22c55e", emoji: "🔍", description: "Quest Phase", locations: "21-30" },
                { phase: "Return & Coronation", color: "#3b82f6", emoji: "👑", description: "Victory", locations: "31-40" },
                { phase: "Post-Coronation", color: "#a855f7", emoji: "✨", description: "Legacy", locations: "41-45" },
              ].map((item) => (
                <div
                  key={item.phase}
                  className="flex flex-col items-center gap-3 p-5 bg-gradient-to-br from-white to-amber-100 rounded-xl border-3 transition-all hover:shadow-xl hover:scale-105 hover:-translate-y-1"
                  style={{ borderColor: item.color }}
                >
                  <span className="text-4xl">{item.emoji}</span>
                  <div
                    className="w-8 h-8 rounded-full border-4 border-white shadow-lg"
                    style={{ backgroundColor: item.color, boxShadow: `0 0 15px ${item.color}99, inset 0 0 8px rgba(255,255,255,0.5)` }}
                    title={item.phase}
                  />
                  <span className="text-amber-900 font-bold text-xs text-center leading-tight">
                    {item.description}
                  </span>
                  <span className="text-amber-700 text-xs opacity-75">
                    #{item.locations}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Info Panels */}
      {selectedMarker && (
        <Card className="border-3 border-amber-300 bg-gradient-to-br from-white via-amber-50 to-orange-50 shadow-2xl">
          <div className="p-6 space-y-5">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-playfair font-bold text-amber-950 text-2xl mb-2">
                  {selectedMarker.name}
                </h3>
                <p className="text-base font-semibold text-amber-800 mb-2">
                  📍 {selectedMarker.state}, {selectedMarker.country}
                </p>
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-amber-700 to-orange-700 text-white rounded-full text-xs font-bold">
                  {selectedMarker.phase}
                </div>
              </div>
              <button
                onClick={() => setSelectedMarker(null)}
                className="p-2 hover:bg-amber-200 rounded-full transition-all"
              >
                <X className="w-6 h-6 text-amber-900" />
              </button>
            </div>

            <p className="text-base font-medium text-amber-900 leading-relaxed">
              {selectedMarker.description}
            </p>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-gradient-to-br from-white to-amber-100 rounded-lg border-2 border-amber-300 shadow-md">
                <p className="text-amber-700 font-bold text-xs mb-1">🗓️ BEST TIME</p>
                <p className="text-amber-900 font-semibold">
                  {selectedMarker.bestTimeToVisit}
                </p>
              </div>
              <div className="p-3 bg-gradient-to-br from-white to-orange-100 rounded-lg border-2 border-orange-300 shadow-md">
                <p className="text-orange-700 font-bold text-xs mb-1">🏙️ NEAREST CITY</p>
                <p className="text-amber-900 font-semibold">{selectedMarker.nearestCity}</p>
              </div>
            </div>

            <Link
              to={`/location/${selectedMarker.id}`}
              className="inline-block w-full"
            >
              <button className="w-full px-6 py-3 bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-800 hover:to-orange-800 text-white rounded-xl text-base font-bold transition-all transform hover:scale-105 shadow-lg">
                View Complete Details →
              </button>
            </Link>
          </div>
        </Card>
      )}

      {/* Map Info */}
      <Card className="border-3 border-amber-300 bg-gradient-to-br from-amber-50 via-white to-orange-50 shadow-lg">
        <div className="p-8 space-y-6">
          <p className="font-playfair font-bold text-amber-950 text-2xl flex items-center gap-2">
            📍 Complete Map Features
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="text-base text-amber-900 space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-xl text-amber-700">✓</span>
                <span>
                  <strong>50+ Sacred Locations</strong> - Comprehensive pilgrimage site coverage
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl text-amber-700">✓</span>
                <span>
                  <strong>6 Journey Phases</strong> - Color-coded stages of Ram's divine life
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl text-amber-700">✓</span>
                <span>
                  <strong>Golden Route Line</strong> - Complete journey path visualization
                </span>
              </li>
            </ul>
            <ul className="text-base text-amber-900 space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-xl text-amber-700">✓</span>
                <span>
                  <strong>Fully Interactive</strong> - Click any marker to view details
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl text-amber-700">✓</span>
                <span>
                  <strong>Zoom & Explore</strong> - Discover regional details and geography
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl text-amber-700">✓</span>
                <span>
                  <strong>Smart Search</strong> - Find any location by name or state instantly
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
