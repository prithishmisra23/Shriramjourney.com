import { useEffect, useRef, useState } from "react";
import { ramLocations, Location } from "@shared/locations";

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

// ─── PHASE CONFIG ────────────────────────────────────────────────────────────
const PHASE_COLORS: Record<string, string> = {
  "Birth & Early Life": "#dc2626",
  "Vanvās Begins": "#f97316",
  "Deep Forest Journey": "#eab308",
  "Search for Sita": "#22c55e",
  "Return & Coronation": "#3b82f6",
  "Post-Coronation": "#a855f7",
};
const PHASE_EMOJI: Record<string, string> = {
  "Birth & Early Life": "👶",
  "Vanvās Begins": "🚶",
  "Deep Forest Journey": "🌲",
  "Search for Sita": "🔍",
  "Return & Coronation": "👑",
  "Post-Coronation": "✨",
};
const JOURNEY_ORDER = [
  "ayodhya-birth", "sarayu-river", "vashistha-ashram", "janakpur", "sita-kund",
  "palace-gate", "tamasa-river", "shringaverpur", "bharadwaj-ashram", "prayagraj",
  "chitrakoot", "mandakini-river", "atri-ashram", "bharat-milap", "hanuman-dhara",
  "dandakaranya", "panchavati", "godavari-river", "tapovan", "sita-haran-spot",
  "kabatkund", "pampa-sarovar", "kishkindha", "anjanadri-hill", "rishyamukha-parvat",
  "matanga-hill", "sampati-parvat", "kabandha-moksha", "mahendragiri-hill", "trikuta-parvat",
  "ashok-vatika", "ravana-palace", "nikumbhila", "dhanushkodi", "ram-setu",
  "rameswaram", "lepakshi", "srirangam", "nashik", "ayodhya-coronation",
  "nandigram", "guptar-ghat", "valmiki-ashram", "sitamarhi", "ram-mandir",
];

// ─── BOOKING HELPERS ────────────────────────────────────────────────────────────
function getFlightUrl(city: string): string {
  const encoded = encodeURIComponent(city);
  return `https://www.makemytrip.com/flights/flight-search/#/search?tripType=O&dep_loc=DEL&arr_loc=${encoded}&dep_dt=${new Date().toISOString().slice(0, 10)}&pax=1-0-0&intl=false&cabinClass=E`;
}
function getHotelUrl(city: string): string {
  const encoded = encodeURIComponent(city + " India");
  return `https://www.booking.com/search.html?ss=${encoded}&checkin=${new Date().toISOString().slice(0, 10)}`;
}
function getCabUrl(city: string): string {
  return `https://www.olacabs.com/?lat=&lng=&locName=${encodeURIComponent(city)}`;
}
function getGoogleMapsUrl(lat: number, lng: number, name: string): string {
  return `https://www.google.com/maps/search/${encodeURIComponent(name)}/@${lat},${lng},13z`;
}

// ─── LOCATION PANEL ─────────────────────────────────────────────────────────
function LocationPanel({
  location,
  stepNumber,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  location: Location;
  stepNumber: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const color = PHASE_COLORS[location.phase] || "#8b5a2b";
  const emoji = PHASE_EMOJI[location.phase] || "🏛️";
  const isFirst = stepNumber === 1;
  const isLast = stepNumber === total;

  return (
    <div
      className="absolute top-0 right-0 h-full w-full sm:w-[420px] bg-white z-[1000] flex flex-col shadow-2xl"
      style={{ borderLeft: `4px solid ${color}` }}
    >
      {/* ── Header ── */}
      <div
        className="flex-shrink-0 p-5 text-white relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)` }}
      >
        {/* Decorative orb */}
        <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10" />
        <div className="absolute -right-4 -top-4 w-20 h-20 rounded-full bg-white/10" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold bg-white/25 px-3 py-1 rounded-full">
              {emoji} {location.phase}
            </span>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition text-white font-bold text-base"
            >
              ✕
            </button>
          </div>

          <h2 className="font-playfair font-bold text-2xl leading-tight mb-1">
            {location.name}
          </h2>
          <p className="text-sm text-white/80">
            📍 {location.state}, {location.country}
          </p>
          {location.temple && (
            <p className="text-xs text-white/70 mt-1">🛕 {location.temple}</p>
          )}

          {/* Step indicator */}
          <div className="flex items-center gap-2 mt-3">
            <button
              onClick={onPrev}
              disabled={isFirst}
              className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/40 disabled:opacity-30 flex items-center justify-center text-sm transition"
            >
              ‹
            </button>
            <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white/80 rounded-full transition-all"
                style={{ width: `${(stepNumber / total) * 100}%` }}
              />
            </div>
            <button
              onClick={onNext}
              disabled={isLast}
              className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/40 disabled:opacity-30 flex items-center justify-center text-sm transition"
            >
              ›
            </button>
            <span className="text-xs text-white/70 ml-1">
              {stepNumber}/{total}
            </span>
          </div>
        </div>
      </div>

      {/* ── Scrollable Body ── */}
      <div className="flex-1 overflow-y-auto p-5 space-y-5">

        {/* Description */}
        <p className="text-sm text-amber-900 leading-relaxed font-medium">
          {location.description}
        </p>

        {/* Quick Info Grid */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-amber-50 rounded-xl p-3 border border-amber-200">
            <p className="text-xs text-amber-600 font-bold mb-1">🗓️ BEST TIME</p>
            <p className="text-xs text-amber-900 font-semibold">{location.bestTimeToVisit}</p>
          </div>
          <div className="bg-orange-50 rounded-xl p-3 border border-orange-200">
            <p className="text-xs text-orange-600 font-bold mb-1">🏙️ NEAREST CITY</p>
            <p className="text-xs text-amber-900 font-semibold">{location.nearestCity}</p>
          </div>
          {location.distance && (
            <div className="bg-blue-50 rounded-xl p-3 border border-blue-200 col-span-2">
              <p className="text-xs text-blue-600 font-bold mb-1">📏 DISTANCE</p>
              <p className="text-xs text-blue-900 font-semibold">{location.distance}</p>
            </div>
          )}
        </div>

        {/* Highlights */}
        {location.highlights?.length > 0 && (
          <div>
            <p className="text-xs font-bold text-amber-800 mb-2">✨ HIGHLIGHTS</p>
            <div className="flex flex-wrap gap-1.5">
              {location.highlights.map((h, i) => (
                <span
                  key={i}
                  className="text-xs px-2.5 py-1 rounded-full font-semibold text-white"
                  style={{ background: color }}
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Spiritual */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200">
          <p className="text-xs font-bold text-amber-700 mb-2">🙏 SPIRITUAL SIGNIFICANCE</p>
          <p className="text-xs text-amber-900 leading-relaxed line-clamp-4">
            {location.spiritual}
          </p>
        </div>

        {/* Events */}
        {location.events && (
          <div className="bg-purple-50 rounded-xl p-3 border border-purple-200">
            <p className="text-xs font-bold text-purple-700 mb-1">🎪 KEY EVENTS</p>
            <p className="text-xs text-purple-900">{location.events}</p>
          </div>
        )}

        {/* ─────────────────── TRAVEL & BOOKING ─────────────────── */}
        <div>
          <p className="text-xs font-bold text-gray-700 mb-3 flex items-center gap-2">
            <span className="text-base">✈️</span>
            PLAN YOUR PILGRIMAGE
          </p>

          <div className="space-y-2">
            {/* Flight */}
            <a
              href={getFlightUrl(location.nearestCity)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-white text-sm font-bold transition-all hover:scale-[1.02] hover:shadow-lg"
              style={{ background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)" }}
            >
              <span className="text-xl">✈️</span>
              <div className="flex-1 text-left">
                <p className="text-sm font-bold">Book Flights</p>
                <p className="text-xs text-blue-200">To {location.nearestCity} via MakeMyTrip</p>
              </div>
              <span className="text-blue-300">↗</span>
            </a>

            {/* Hotel */}
            <a
              href={getHotelUrl(location.nearestCity)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-white text-sm font-bold transition-all hover:scale-[1.02] hover:shadow-lg"
              style={{ background: "linear-gradient(135deg, #0891b2 0%, #0e7490 100%)" }}
            >
              <span className="text-xl">🏨</span>
              <div className="flex-1 text-left">
                <p className="text-sm font-bold">Book Hotels</p>
                <p className="text-xs text-cyan-200">Near {location.name} via Booking.com</p>
              </div>
              <span className="text-cyan-300">↗</span>
            </a>

            {/* Cab */}
            <a
              href={getCabUrl(location.nearestCity)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-white text-sm font-bold transition-all hover:scale-[1.02] hover:shadow-lg"
              style={{ background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)" }}
            >
              <span className="text-xl">🚖</span>
              <div className="flex-1 text-left">
                <p className="text-sm font-bold">Book Cab / Auto</p>
                <p className="text-xs text-green-200">Local transport via Ola</p>
              </div>
              <span className="text-green-300">↗</span>
            </a>

            {/* Map */}
            <a
              href={getGoogleMapsUrl(location.latitude, location.longitude, location.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-white text-sm font-bold transition-all hover:scale-[1.02] hover:shadow-lg"
              style={{ background: "linear-gradient(135deg, #d97706 0%, #b45309 100%)" }}
            >
              <span className="text-xl">🗺️</span>
              <div className="flex-1 text-left">
                <p className="text-sm font-bold">Open in Google Maps</p>
                <p className="text-xs text-amber-200">Get directions & street view</p>
              </div>
              <span className="text-amber-300">↗</span>
            </a>
          </div>
        </div>

        {/* Pilgrimage Package Banner */}
        <div
          className="rounded-xl p-4 text-white relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${color}dd 0%, ${color} 100%)` }}
        >
          <div className="absolute -right-4 -bottom-4 text-6xl opacity-20">🕉</div>
          <p className="font-bold text-sm mb-1">🌟 Full Pilgrimage Package</p>
          <p className="text-xs text-white/80 mb-3">
            Book a curated Ramayana yatra covering all sacred sites with guides, transport & dharamshala
          </p>
          <a
            href="https://www.irctctourism.com/tour_based_on_category?category=R"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-amber-800 text-xs font-bold px-4 py-2 rounded-lg hover:bg-amber-50 transition"
          >
            View IRCTC Yatra Packages →
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export function InteractiveMap({
  selectedLocation,
  onLocationSelect,
  locations = ramLocations,
}: InteractiveMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);
  const [mapReady, setMapReady] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState<Location | null>(null);
  const [orderedLocations, setOrderedLocations] = useState<Location[]>([]);

  // Compute journey step number
  const stepNumber = selectedMarker
    ? (orderedLocations.findIndex((l) => l.id === selectedMarker.id) + 1) || 1
    : 0;

  const goToStep = (idx: number) => {
    const loc = orderedLocations[idx];
    if (!loc) return;
    setSelectedMarker(loc);
    onLocationSelect?.(loc);
    map.current?.setView([loc.latitude, loc.longitude], 10, { animate: true });
  };

  useEffect(() => {
    // Load Leaflet CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);

    // Load Leaflet JS
    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.onload = () => { initializeMap(); };
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
  }, [locations, mapReady]);

  const initializeMap = () => {
    if (!mapContainer.current || map.current) return;
    const L = window.L;
    map.current = L.map(mapContainer.current, {
      scrollWheelZoom: true,
      trackResize: true,
    }).setView([23.5, 80.5], 5);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
      minZoom: 3,
      className: "map-tiles",
    }).addTo(map.current);

    L.control.zoom({ position: "topright" }).addTo(map.current);
    setMapReady(true);
  };

  const updateMapMarkers = () => {
    const L = window.L;

    // Remove all markers and polylines
    map.current.eachLayer((layer: any) => {
      if (layer instanceof L.Marker || layer instanceof L.Polyline || layer instanceof L.CircleMarker) {
        map.current.removeLayer(layer);
      }
    });

    // Build ordered list
    const locationMap = new Map(locations.map((loc) => [loc.id, loc]));
    const ordered = JOURNEY_ORDER
      .map((id) => locationMap.get(id))
      .filter(Boolean) as Location[];
    setOrderedLocations(ordered);

    const coordinates: [number, number][] = [];

    ordered.forEach((location, index) => {
      coordinates.push([location.latitude, location.longitude]);
      const color = PHASE_COLORS[location.phase] || "#8b5a2b";
      const isStart = index === 0;
      const isEnd = index === ordered.length - 1;

      const markerEl = document.createElement("div");
      Object.assign(markerEl.style, {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontWeight: "900",
        borderRadius: "50%",
        border: "4px solid white",
        fontFamily: "'Inter', sans-serif",
        width: isStart || isEnd ? "56px" : "44px",
        height: isStart || isEnd ? "56px" : "44px",
        fontSize: isStart || isEnd ? "26px" : "14px",
        color: "white",
        transition: "transform 0.2s, box-shadow 0.2s",
        boxShadow: `0 4px 14px ${color}99`,
        background: isStart
          ? "linear-gradient(135deg, #16a34a 0%, #15803d 100%)"
          : isEnd
            ? "linear-gradient(135deg, #b91c1c 0%, #991b1b 100%)"
            : `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`,
      });

      markerEl.textContent = isStart ? "🚩" : isEnd ? "✓" : String(index + 1);

      const marker = L.marker([location.latitude, location.longitude], {
        icon: L.divIcon({
          html: markerEl.outerHTML,
          iconSize: isStart || isEnd ? [56, 56] : [44, 44],
          iconAnchor: isStart || isEnd ? [28, 28] : [22, 22],
          popupAnchor: [0, -30],
          className: "custom-marker location-marker",
        }),
      }).addTo(map.current);

      marker.on("click", () => {
        setSelectedMarker(location);
        onLocationSelect?.(location);
        map.current?.setView([location.latitude, location.longitude], 9, { animate: true });
      });

      const tooltipText = isStart
        ? "🚩 START · Ayodhya"
        : isEnd
          ? "✓ END · Ayodhya Coronation"
          : `${String(index + 1).padStart(2, "0")}. ${location.name}`;

      marker.bindTooltip(tooltipText, {
        permanent: false,
        direction: "top",
        className: "journey-tooltip",
        offset: [0, -10],
      });
    });

    // Draw journey path — layered glow effect
    if (coordinates.length > 0) {
      // Glow outer
      L.polyline(coordinates, { color: "#fbbf24", weight: 14, opacity: 0.18, lineCap: "round", lineJoin: "round" }).addTo(map.current);
      // Mid glow
      L.polyline(coordinates, { color: "#f59e0b", weight: 8, opacity: 0.30, lineCap: "round", lineJoin: "round" }).addTo(map.current);
      // Primary
      L.polyline(coordinates, { color: "#d97706", weight: 4, opacity: 0.95, lineCap: "round", lineJoin: "round" }).addTo(map.current);
      // Highlight
      L.polyline(coordinates, { color: "#fef3c7", weight: 1.5, opacity: 0.6, lineCap: "round", lineJoin: "round" }).addTo(map.current);

      const bounds = L.latLngBounds(coordinates);
      map.current.fitBounds(bounds, { padding: [60, 60], maxZoom: 7 });
    }
  };

  return (
    <div className="space-y-4">
      {/* ── Map + Side Panel Container ── */}
      <div className="relative w-full h-[520px] md:h-[680px] rounded-xl overflow-hidden border-2 border-amber-200 shadow-xl">
        <div ref={mapContainer} className="absolute inset-0" style={{ backgroundColor: "#e0f2fe" }} />

        {/* Journey Counter Badge */}
        <div className="absolute top-4 left-4 z-[500] bg-amber-900/90 backdrop-blur text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg flex items-center gap-2">
          <span className="text-amber-300">🗺️</span>
          <span>{orderedLocations.length} Sacred Sites · {Object.keys(PHASE_COLORS).length} Phases</span>
        </div>

        {/* Click hint badge */}
        {!selectedMarker && orderedLocations.length > 0 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[500] bg-white/95 backdrop-blur text-amber-900 text-xs font-bold px-4 py-2.5 rounded-full shadow-xl border border-amber-200 flex items-center gap-2 animate-bounce">
            <span>👆</span> Click any marker to plan your yatra
          </div>
        )}

        {/* Side Panel */}
        {selectedMarker && orderedLocations.length > 0 && (
          <LocationPanel
            location={selectedMarker}
            stepNumber={stepNumber}
            total={orderedLocations.length}
            onClose={() => setSelectedMarker(null)}
            onPrev={() => goToStep(stepNumber - 2)}
            onNext={() => goToStep(stepNumber)}
          />
        )}
      </div>

      {/* ── Legend ── */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border-2 border-amber-200 p-6">
        <p className="font-playfair font-bold text-amber-950 text-xl mb-4 flex items-center gap-2">
          🎨 Six Sacred Phases of Shri Ram's Journey
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {Object.entries(PHASE_COLORS).map(([phase, color]) => (
            <div
              key={phase}
              className="flex flex-col items-center gap-2 p-3 bg-white rounded-xl border-2 text-center cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1"
              style={{ borderColor: color }}
            >
              <span className="text-2xl">{PHASE_EMOJI[phase]}</span>
              <div
                className="w-5 h-5 rounded-full border-2 border-white shadow"
                style={{ background: color }}
              />
              <span className="text-xs text-amber-900 font-bold leading-tight">
                {phase.split(" ").slice(0, 2).join(" ")}
              </span>
            </div>
          ))}
        </div>

        {/* Route legend */}
        <div className="mt-4 flex flex-wrap gap-4 items-center text-sm text-amber-900">
          <div className="flex items-center gap-2">
            <div className="w-10 h-1 rounded-full" style={{ background: "linear-gradient(to right, #d97706, #fbbf24)" }} />
            <span className="font-bold text-xs">Golden Journey Path</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-green-600 border-2 border-white shadow flex items-center justify-center text-white text-base">🚩</div>
            <span className="text-xs font-bold">Start · Ayodhya</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-red-700 border-2 border-white shadow flex items-center justify-center text-white text-sm font-bold">✓</div>
            <span className="text-xs font-bold">End · Coronation</span>
          </div>
        </div>
      </div>
    </div>
  );
}
