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

    locations.forEach((location, index) => {
      coordinates.push([location.latitude, location.longitude]);

      const color = phaseColors[location.phase] || "#8b5a2b";
      const isStart = index === 0;
      const isEnd = index === locations.length - 1;

      let html = "";

      if (isStart) {
        html = `
          <div style="background-color: #16a34a; color: white; padding: 4px 8px; border-radius: 50%; font-weight: bold; font-size: 16px; border: 3px solid white; box-shadow: 0 2px 12px rgba(0,0,0,0.4); width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; position: relative;">
            🚩
            <div style="position: absolute; top: -8px; right: -8px; background: #15803d; color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; border: 2px solid white;">START</div>
          </div>
        `;
      } else if (isEnd) {
        html = `
          <div style="background-color: #dc2626; color: white; padding: 4px 8px; border-radius: 50%; font-weight: bold; font-size: 16px; border: 3px solid white; box-shadow: 0 2px 12px rgba(0,0,0,0.4); width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; position: relative;">
            ✓
            <div style="position: absolute; top: -8px; right: -8px; background: #b91c1c; color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; border: 2px solid white;">END</div>
          </div>
        `;
      } else {
        html = `
          <div style="background-color: ${color}; color: white; padding: 0; border-radius: 50%; font-weight: bold; font-size: 14px; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3); width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;">
            ${index + 1}
          </div>
        `;
      }

      const marker = L.marker([location.latitude, location.longitude], {
        icon: L.divIcon({
          html,
          iconSize: isStart || isEnd ? [44, 44] : [40, 40],
          className: "custom-marker",
        }),
      }).addTo(map.current);

      // Popup on marker click
      marker.on("click", () => {
        setSelectedMarker(location);
        onLocationSelect?.(location);
      });

      // Tooltip on hover
      marker.bindTooltip(location.name, { permanent: false, direction: "top" });
    });

    // Draw line connecting all locations - thicker and more visible
    if (coordinates.length > 0) {
      L.polyline(coordinates, {
        color: "#b45309",
        weight: 4,
        opacity: 0.8,
        lineCap: "round",
        lineJoin: "round",
      }).addTo(map.current);

      // Add a subtle shadow effect with a thicker lighter line underneath
      L.polyline(coordinates, {
        color: "#f5deb3",
        weight: 6,
        opacity: 0.4,
        lineCap: "round",
        lineJoin: "round",
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
      <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 shadow-md">
        <div className="p-6 space-y-6">
          <div>
            <p className="font-bold text-amber-950 mb-4 text-lg flex items-center gap-2">
              🗺️ Journey Markers Guide
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-green-300">
                <div style={{ backgroundColor: "#16a34a", color: "white", width: "36px", height: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: "bold", border: "3px solid white" }}>
                  🚩
                </div>
                <span className="text-amber-900 font-medium">
                  <strong>START:</strong> Journey Begins (Ayodhya)
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-red-300">
                <div style={{ backgroundColor: "#dc2626", color: "white", width: "36px", height: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: "bold", border: "3px solid white" }}>
                  ✓
                </div>
                <span className="text-amber-900 font-medium">
                  <strong>END:</strong> Journey Completes (Ayodhya)
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-amber-300">
                <div style={{ backgroundColor: "#f97316", color: "white", width: "36px", height: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "bold", border: "3px solid white" }}>
                  2
                </div>
                <span className="text-amber-900 font-medium">
                  <strong>Numbers:</strong> Stop sequence in journey
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-amber-300">
                <div style={{ height: "3px", backgroundColor: "#b45309", width: "30px", borderRadius: "2px" }}></div>
                <span className="text-amber-900 font-medium">
                  <strong>Route Line:</strong> Complete journey path
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
