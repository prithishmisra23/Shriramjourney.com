import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Eye, Smartphone, Zap, AlertCircle, ChevronRight, ArrowLeft, Play, Info, MapPin, Clock, Star, Volume2, VolumeX } from "lucide-react";
import { useState, lazy, Suspense, useMemo, useRef, useEffect } from "react";
import { createXRStore } from "@react-three/xr";

const RamMandir3DViewer = lazy(() => import("@/components/RamMandir3DViewer"));

interface Experience {
  id: string;
  title: string;
  hindiTitle: string;
  description: string;
  location: string;
  icon: string;
  duration: string;
  difficulty: "Easy" | "Medium" | "Immersive";
  difficultyColor: string;
  features: string[];
  audioGuide: string;
  highlights: string[];
  gradient: string;
}

const experiences: Experience[] = [
  {
    id: "ram-mandir-3d",
    title: "Ram Mandir — 3D Virtual Tour",
    hindiTitle: "राम मंदिर — त्रिआयामी दर्शन",
    description: "Walk through the newly inaugurated Ram Mandir of Ayodhya in stunning 3D. Explore every pillar, shikhara, and sacred corner of this divine marvel.",
    location: "Ayodhya, Uttar Pradesh",
    icon: "🏰",
    duration: "15–30 min",
    difficulty: "Easy",
    difficultyColor: "bg-green-100 text-green-800",
    features: ["All-angle 3D model", "Day & Night modes", "Guided auto-tour", "Mobile AR support", "Hindi/English narration"],
    audioGuide: "Shri Ram's divine abode, the Ram Mandir, rises 49 metres above the sacred soil of Ayodhya...",
    highlights: ["5-tiered Nagara shikhara", "84 ornate sandstone columns", "Sacred garbhagriha", "Compound wall & gate"],
    gradient: "from-amber-600 to-orange-700",
  },
  {
    id: "ayodhya-walk",
    title: "Walk with Ram in Ayodhya",
    hindiTitle: "अयोध्या में राम के साथ चलें",
    description: "Experience Shri Ram's childhood in the divine city of Ayodhya. Visit Kanak Bhavan, Kaushalya Bhavan and Sarayu Ghat in immersive 3D.",
    location: "Ayodhya, Uttar Pradesh",
    icon: "🌅",
    duration: "30 min",
    difficulty: "Easy",
    difficultyColor: "bg-green-100 text-green-800",
    features: ["3D recreation of ancient Ayodhya", "Ram's birth story narration", "Interactive temple tours", "Character encounters"],
    audioGuide: "Ayodhya, the city of Lord Rama, shines with divine light along the banks of the Sarayu river...",
    highlights: ["Ram's Janmabhoomi", "Sarayu river ghats", "Kanak Bhavan", "Hanuman Garhi"],
    gradient: "from-rose-600 to-pink-700",
  },
  {
    id: "forest-exile",
    title: "Journey Through the Forest Exile",
    hindiTitle: "वन वास की दिव्य यात्रा",
    description: "Walk alongside Ram, Sita, and Lakshman through Chitrakoot and Panchavati during the 14-year exile. Feel the serenity of the ancient forests.",
    location: "Chitrakoot → Panchavati",
    icon: "🌲",
    duration: "45 min",
    difficulty: "Immersive",
    difficultyColor: "bg-blue-100 text-blue-800",
    features: ["Ancient forest environments", "Sacred ashrams", "River crossings", "Sita's perspectives"],
    audioGuide: "Ram, Sita, and Lakshman ventured into the vast forests, their footsteps blessing the earth...",
    highlights: ["Chitrakoot hills", "Atri Ashram", "Panchavati forest", "Godavari banks"],
    gradient: "from-green-700 to-emerald-800",
  },
  {
    id: "bridge-of-faith",
    title: "The Ram Setu — Bridge of Faith",
    hindiTitle: "राम सेतु — आस्था का पुल",
    description: "Cross the legendary bridge built by Nala and Neela's army across the ocean. Experience the epic campaign from Rameswaram to Lanka.",
    location: "Rameswaram & Lanka",
    icon: "🌉",
    duration: "40 min",
    difficulty: "Immersive",
    difficultyColor: "bg-blue-100 text-blue-800",
    features: ["Bridge construction visualisation", "Vanara army formations", "Ocean crossing", "Rameswaram temple"],
    audioGuide: "The Vanara army began placing rocks inscribed with Ram's name — and the rocks floated...",
    highlights: ["65 km floating bridge", "Adam's Bridge (satellite view)", "Ramanathaswamy Temple", "Dhanushkodi"],
    gradient: "from-cyan-700 to-blue-800",
  },
  {
    id: "ravana-palace",
    title: "Ravana's Golden Lanka",
    hindiTitle: "रावण की स्वर्ण लंका",
    description: "Explore the magnificent golden palace of Ravana, the Ashoka Vatika, and understand the epic's depth through immersive storytelling.",
    location: "Lanka (Sri Lanka)",
    icon: "🏯",
    duration: "35 min",
    difficulty: "Medium",
    difficultyColor: "bg-yellow-100 text-yellow-800",
    features: ["Golden palace tour", "Ashoka Vatika grove", "Ravana's character study", "Vibhishana's counsel"],
    audioGuide: "Lanka, adorned in gold and jewels, stood as a testament to Ravana's power and pride...",
    highlights: ["Golden palace towers", "Ashoka Vatika", "Sita's vigil", "Liberation battle"],
    gradient: "from-yellow-600 to-amber-700",
  },
  {
    id: "coronation",
    title: "Ram Rajya — The Coronation",
    hindiTitle: "राम राज्याभिषेक",
    description: "Witness the glorious coronation of Shri Ram as king of Ayodhya, surrounded by divine celebrations, celestial flowers and the rejoicing of all creation.",
    location: "Ayodhya Palace",
    icon: "👑",
    duration: "25 min",
    difficulty: "Easy",
    difficultyColor: "bg-green-100 text-green-800",
    features: ["Grand coronation ceremony", "Royal processions", "Pushpak Viman landing", "Victory celebrations"],
    audioGuide: "With Sita beside him and the whole world rejoicing, Shri Ram sat upon the throne of Ayodhya...",
    highlights: ["Throne room", "Celestial flower shower", "Pushpak Viman", "The 14 years of Ram Rajya"],
    gradient: "from-purple-700 to-indigo-800",
  },
];

// ─── LOADING SPINNER ─────────────────────────────────────────────────────────

function LoadingSpinner() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 gap-4">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-amber-500/30" />
        <div className="absolute inset-0 rounded-full border-4 border-amber-500 border-t-transparent animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center text-2xl">🕉</div>
      </div>
      <p className="text-amber-300 text-sm font-semibold animate-pulse">Loading divine experience…</p>
    </div>
  );
}

// ─── EXPERIENCE CARD ─────────────────────────────────────────────────────────

function ExperienceCard({ exp, onLaunch }: { exp: Experience; onLaunch: (id: string) => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="group relative rounded-2xl overflow-hidden border-2 border-amber-200 hover:border-amber-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer bg-white"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onLaunch(exp.id)}
    >
      {/* Gradient banner */}
      <div className={`h-28 bg-gradient-to-br ${exp.gradient} flex items-center justify-center relative overflow-hidden`}>
        <span className="text-6xl filter drop-shadow-lg">{exp.icon}</span>
        {/* Animated glow */}
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Duration badge */}
        <div className="absolute top-3 right-3 bg-black/40 backdrop-blur text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
          <Clock className="w-3 h-3" /> {exp.duration}
        </div>
        {/* Difficulty */}
        <div className={`absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-full ${exp.difficultyColor}`}>
          {exp.difficulty}
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-bold text-amber-950 text-base leading-tight">{exp.title}</h3>
          <p className="text-amber-600 text-xs mt-0.5 font-medium">{exp.hindiTitle}</p>
        </div>
        <div className="flex items-center gap-1 text-amber-700 text-xs">
          <MapPin className="w-3 h-3 flex-shrink-0" /> {exp.location}
        </div>
        <p className="text-amber-900 text-xs leading-relaxed line-clamp-2">{exp.description}</p>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-1">
          {exp.features.slice(0, 3).map((f, i) => (
            <span key={i} className="text-xs bg-amber-50 border border-amber-200 text-amber-800 px-2 py-0.5 rounded-full">{f}</span>
          ))}
        </div>

        <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white font-semibold text-sm py-2 rounded-xl transition-all group-hover:shadow-lg">
          Launch Experience <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}

// ─── ACTIVE EXPERIENCE VIEW ────────────────────────────────────────────────── 

function ActiveExpView({ exp, xrStore, onExit }: { exp: Experience; xrStore: ReturnType<typeof createXRStore>; onExit: () => void }) {
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [tab, setTab] = useState<"3d" | "info">("3d");
  const isRamMandir = exp.id === "ram-mandir-3d";

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950 flex flex-col">
      {/* Top Bar */}
      <div className="flex-shrink-0 h-14 bg-slate-900/95 backdrop-blur border-b border-slate-800 px-3 flex items-center justify-between gap-2">
        <button
          onClick={onExit}
          className="flex items-center gap-1.5 text-white/80 hover:text-white transition text-sm font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Exit</span>
        </button>

        <div className="flex items-center gap-2 min-w-0">
          <span className="text-xl">{exp.icon}</span>
          <div className="min-w-0">
            <p className="text-white font-bold text-sm truncate">{exp.title}</p>
            <p className="text-amber-400 text-xs truncate hidden sm:block">{exp.hindiTitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setAudioEnabled(!audioEnabled)}
            className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-white hover:bg-slate-600 transition"
          >
            {audioEnabled ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4" />}
          </button>
          <button
            onClick={() => xrStore.enterAR()}
            className="px-2.5 py-1 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold rounded-lg transition"
          >
            📱 AR
          </button>
          <button
            onClick={() => xrStore.enterVR()}
            className="px-2.5 py-1 bg-blue-700 hover:bg-blue-600 text-white text-xs font-bold rounded-lg transition"
          >
            🥽 VR
          </button>
        </div>
      </div>

      {/* Tab Bar */}
      <div className="flex-shrink-0 flex border-b border-slate-800 bg-slate-900">
        {[
          { id: "3d", label: "🏰 3D View" },
          { id: "info", label: "ℹ️ Info & Audio" },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id as any)}
            className={`flex-1 py-2.5 text-sm font-semibold transition ${tab === t.id ? "text-amber-400 border-b-2 border-amber-400" : "text-slate-400 hover:text-white"}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-grow relative overflow-hidden">
        {tab === "3d" ? (
          <Suspense fallback={<LoadingSpinner />}>
            <div className="w-full h-full">
              <RamMandir3DViewer showXR={true} />
            </div>
          </Suspense>
        ) : (
          <div className="h-full overflow-y-auto p-4 space-y-5 text-white">
            {/* Audio guide */}
            <div className="bg-amber-900/30 border border-amber-700/40 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <Volume2 className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-amber-300">Audio Guide</h3>
              </div>
              <p className="text-amber-100 text-sm leading-relaxed italic">"{exp.audioGuide}"</p>
              <div className="mt-3 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-amber-500 rounded-full animate-pulse" />
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="font-bold text-amber-300 mb-3 flex items-center gap-2">
                <Star className="w-4 h-4" /> Key Highlights
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {exp.highlights.map((h, i) => (
                  <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm text-slate-200">
                    ✦ {h}
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-bold text-amber-300 mb-3">✨ What You'll Experience</h3>
              <ul className="space-y-2">
                {exp.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-amber-700 text-white text-xs flex items-center justify-center font-bold flex-shrink-0">{i + 1}</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Controls */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4">
              <h3 className="font-bold text-slate-200 mb-3">🎮 Controls</h3>
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
                <div><span className="text-amber-400 font-semibold">Drag</span> — Rotate model</div>
                <div><span className="text-amber-400 font-semibold">Pinch</span> — Zoom in/out</div>
                <div><span className="text-amber-400 font-semibold">▶ Button</span> — Auto tour</div>
                <div><span className="text-amber-400 font-semibold">☀ Button</span> — Day/Night</div>
              </div>
            </div>

            {/* XR launch */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => xrStore.enterAR()}
                className="flex items-center justify-center gap-2 bg-orange-700 hover:bg-orange-600 text-white font-bold py-4 rounded-2xl transition text-sm"
              >
                <Smartphone className="w-5 h-5" /> Launch AR
              </button>
              <button
                onClick={() => xrStore.enterVR()}
                className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-600 text-white font-bold py-4 rounded-2xl transition text-sm"
              >
                <Eye className="w-5 h-5" /> Launch VR
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function ARVRWalk() {
  const [activeExpId, setActiveExpId] = useState<string | null>(null);
  const xrStore = useMemo(() => createXRStore(), []);
  const activeExp = experiences.find((e) => e.id === activeExpId);

  if (activeExp) {
    return (
      <ActiveExpView
        exp={activeExp}
        xrStore={xrStore}
        onExit={() => setActiveExpId(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 via-amber-900 to-slate-950">
      <Navigation />

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-16 px-4 sm:px-6 overflow-hidden">
        {/* Starfield bg */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/30 animate-pulse"
              style={{
                width: Math.random() * 3 + 1 + "px",
                height: Math.random() * 3 + 1 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                animationDelay: Math.random() * 3 + "s",
                animationDuration: 2 + Math.random() * 3 + "s",
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 rounded-full px-4 py-1.5 text-amber-300 text-sm font-semibold backdrop-blur">
            <Zap className="w-4 h-4" /> Powered by WebXR & Three.js
          </div>
          <h1 className="font-playfair font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
            🕉 Walk with <span className="text-amber-400">Shri Ram</span>
          </h1>
          <p className="text-amber-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Immerse yourself in the divine journey — explore the Ram Mandir in 3D,
            walk through ancient Ayodhya, and cross the legendary Ram Setu using
            cutting-edge AR &amp; VR technology.
          </p>
          <div className="flex flex-wrap gap-3 justify-center text-xs sm:text-sm">
            {[
              { icon: "📱", label: "Works on mobile" },
              { icon: "🥽", label: "VR headset support" },
              { icon: "🌐", label: "No app needed" },
              { icon: "🆓", label: "Completely free" },
            ].map((b) => (
              <span key={b.label} className="flex items-center gap-1.5 bg-white/10 border border-white/20 text-white px-3 py-1.5 rounded-full backdrop-blur">
                {b.icon} {b.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3D VIEWER PREVIEW ── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">🏰 Ram Mandir — Live 3D Model</h2>
            <p className="text-amber-300 text-sm">Explore the actual Nagara-style architecture · Rotate · Zoom · Day &amp; Night</p>
          </div>
          <Suspense fallback={
            <div className="h-[400px] rounded-2xl bg-slate-900 border-2 border-amber-500/30 flex items-center justify-center">
              <LoadingSpinner />
            </div>
          }>
            <RamMandir3DViewer showXR={true} />
          </Suspense>
        </div>
      </section>

      {/* ── EXPERIENCES GRID ── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">🌍 Choose Your Experience</h2>
            <p className="text-amber-300">6 immersive journeys — from Ayodhya to Lanka</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} onLaunch={setActiveExpId} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">🎮 How to Use</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Mobile */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-5 space-y-4">
              <h3 className="text-amber-400 font-bold text-lg flex items-center gap-2">
                <Smartphone className="w-5 h-5" /> On Mobile (AR)
              </h3>
              {[
                ["Open any experience", "Tap Launch Experience"],
                ["Enable camera", "Allow camera when prompted"],
                ["Point at flat surface", "Table or floor works best"],
                ["Temple appears in AR!", "Walk around the model"],
              ].map(([step, desc], i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-amber-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{i + 1}</div>
                  <div>
                    <p className="text-white font-semibold text-sm">{step}</p>
                    <p className="text-white/60 text-xs">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* VR */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-5 space-y-4">
              <h3 className="text-blue-400 font-bold text-lg flex items-center gap-2">
                <Eye className="w-5 h-5" /> On VR Headset
              </h3>
              {[
                ["Put on your headset", "Meta Quest, HTC Vive, etc."],
                ["Open Chrome/Browser", "Navigate to this website"],
                ["Select an experience", "Use gaze or controller"],
                ["Click 'Launch VR'", "Experience in full 360°"],
              ].map(([step, desc], i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{i + 1}</div>
                  <div>
                    <p className="text-white font-semibold text-sm">{step}</p>
                    <p className="text-white/60 text-xs">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── REQUIREMENTS ── */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto bg-amber-950/50 border border-amber-700/40 rounded-2xl p-6">
          <div className="flex gap-3">
            <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-300 mb-2">Device Compatibility</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-amber-200">
                {[
                  { icon: "✅", label: "Chrome 79+", note: "Best experience" },
                  { icon: "✅", label: "Android AR", note: "Full support" },
                  { icon: "⚠️", label: "iOS Safari", note: "3D viewer only" },
                  { icon: "✅", label: "Meta Quest", note: "Full VR" },
                ].map((c, i) => (
                  <div key={i} className="bg-white/10 rounded-lg p-2 text-center">
                    <div className="text-lg mb-1">{c.icon}</div>
                    <div className="font-semibold">{c.label}</div>
                    <div className="text-amber-400/70">{c.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
