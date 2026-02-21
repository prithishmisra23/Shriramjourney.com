import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ShareButtons } from "@/components/ShareButtons";
import { ScrollCTA } from "@/components/ScrollCTA";
import { useDailyLocation } from "@/hooks/useDailyLocation";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/translations";
import { useState, lazy, Suspense } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { TempleStreams } from "@/components/TempleStreams";

const RamMandir3DViewer = lazy(() => import("@/components/RamMandir3DViewer"));

function Viewer3DFallback() {
  return (
    <div className="w-full h-[420px] sm:h-[520px] rounded-2xl bg-slate-900 flex items-center justify-center border-2 border-amber-500/30">
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin" />
        <p className="text-amber-300 text-sm font-medium">Loading 3D Temple…</p>
      </div>
    </div>
  );
}

// ─── FEATURE DATA ─────────────────────────────────────────────────────────────

const ALL_FEATURES = [
  {
    icon: "🗺️",
    title: "Interactive Map",
    hindiTitle: "इंटरैक्टिव मानचित्र",
    desc: "Explore 50+ sacred locations across India, Nepal & Sri Lanka with colour-coded Ramayana phases",
    href: "/map",
    gradient: "from-emerald-500 to-teal-600",
    badge: "50+ Locations",
  },
  {
    icon: "🏰",
    title: "Ram Mandir 3D",
    hindiTitle: "राम मंदिर त्रिआयामी",
    desc: "Rotate, zoom and explore the newly inaugurated Ram Mandir in stunning real-time 3D with day/night mode",
    href: "/ar-vr-walk",
    gradient: "from-amber-500 to-orange-600",
    badge: "AR/VR Ready",
  },
  {
    icon: "🥽",
    title: "AR/VR Experience",
    hindiTitle: "AR/VR अनुभव",
    desc: "Walk with Shri Ram through Ayodhya, Lanka and the forest exile in immersive AR & VR",
    href: "/ar-vr-walk",
    gradient: "from-blue-600 to-indigo-700",
    badge: "New",
  },
  {
    icon: "🔴",
    title: "Live Darshan",
    hindiTitle: "लाइव दर्शन",
    desc: "Watch sacred aarti and darshan ceremonies LIVE from Ram Mandir, Rameswaram & Janaki Mandir 24/7",
    href: "/livestreams",
    gradient: "from-red-600 to-rose-700",
    badge: "Live",
  },
  {
    icon: "🙏",
    title: "Digital Pooja",
    hindiTitle: "डिजिटल पूजा",
    desc: "Book pandit-performed pooja at your chosen temple online — receive prasad at home",
    href: "/digital-pooja",
    gradient: "from-orange-500 to-yellow-600",
    badge: "Book Online",
  },
  {
    icon: "🗓️",
    title: "Itinerary Builder",
    hindiTitle: "यात्रा योजनाकार",
    desc: "Plan your perfect Ramayana pilgrimage with AI-powered route optimisation and hotel suggestions",
    href: "/itinerary",
    gradient: "from-violet-600 to-purple-700",
    badge: "AI Powered",
  },
  {
    icon: "🎓",
    title: "Quiz & Badges",
    hindiTitle: "प्रश्नोत्तरी और बैज",
    desc: "Test your Ramayana knowledge, earn divine achievement badges and compete with devotees worldwide",
    href: "/quiz",
    gradient: "from-pink-600 to-fuchsia-700",
    badge: "Earn Badges",
  },
  {
    icon: "👥",
    title: "Community Stories",
    hindiTitle: "समुदाय की कहानियाँ",
    desc: "Read inspiring pilgrimage experiences from 12,000+ devotees and share your own journey",
    href: "/community",
    gradient: "from-cyan-600 to-sky-700",
    badge: "12K+ Members",
  },
  {
    icon: "🌍",
    title: "International Ramayana",
    hindiTitle: "विश्व रामायण",
    desc: "Discover how the epic shaped Sri Lanka, Thailand, Indonesia and Nepal's culture and temples",
    href: "/international-ramayana",
    gradient: "from-lime-600 to-green-700",
    badge: "4 Countries",
  },
  {
    icon: "🛍️",
    title: "Souvenir Store",
    hindiTitle: "स्मृति चिन्ह भंडार",
    desc: "Handcrafted Ramayana artwork, brass idols, silk paintings and personalised digital gifts",
    href: "/souvenir-store",
    gradient: "from-yellow-500 to-amber-600",
    badge: "200+ Items",
  },
  {
    icon: "📵",
    title: "Offline Mode",
    hindiTitle: "ऑफ़लाइन मोड",
    desc: "Download maps, location guides and audio content for pilgrimage without internet connection",
    href: "/offline-mode",
    gradient: "from-slate-600 to-zinc-700",
    badge: "No Wi-Fi Needed",
  },
  {
    icon: "🤖",
    title: "AI Guide — Ramji",
    hindiTitle: "AI गाइड — रामजी",
    desc: "Chat with our Ramayana AI guide for instant answers about places, stories and spiritual guidance",
    href: "/",
    gradient: "from-rose-500 to-pink-600",
    badge: "24/7 Chat",
  },
];

const TEMPLES = [
  { name: "Ram Mandir", nameHi: "राम मंदिर", icon: "🏰", href: "/ram-mandir", location: "Ayodhya", locationHi: "अयोध्या", color: "border-amber-400 bg-amber-50 hover:bg-amber-100" },
  { name: "Janaki Mandir", nameHi: "जनकी मंदिर", icon: "🏛️", href: "/janaki-mandir", location: "Janakpur, Nepal", locationHi: "जनकपुर, नेपाल", color: "border-rose-300 bg-rose-50 hover:bg-rose-100" },
  { name: "Nashik & Panchavati", nameHi: "नाशिक और पंचवटी", icon: "🕉️", href: "/nashik", location: "Maharashtra", locationHi: "महाराष्ट्र", color: "border-emerald-300 bg-emerald-50 hover:bg-emerald-100" },
  { name: "Rameswaram", nameHi: "रामेश्वरम", icon: "🌊", href: "/rameswaram", location: "Tamil Nadu", locationHi: "तमिलनाडु", color: "border-blue-300 bg-blue-50 hover:bg-blue-100" },
];

const TIMELINE_PHASES = [
  { icon: "👶", phase: "Birth & Early Life", phaseHi: "जन्म और बाल्यकाल", color: "bg-blue-500", desc: "Ayodhya · Sarayu River · Janakpur", descHi: "अयोध्या · सरयू नदी · जनकपुर" },
  { icon: "🌿", phase: "Forest Exile Begins", phaseHi: "वनवास की शुरुआत", color: "bg-green-500", desc: "Chitrakoot · Prayagraj · Dandakaranya", descHi: "चित्रकूट · प्रयागराज · दंडकारण्य" },
  { icon: "🏔️", phase: "Deep Forest Journey", phaseHi: "गहरी वन यात्रा", color: "bg-emerald-600", desc: "Panchavati · Nashik · Godavari", descHi: "पंचवटी · नाशिक · गोदावरी" },
  { icon: "🔍", phase: "Search for Sita", phaseHi: "सीता की खोज", color: "bg-purple-500", desc: "Kishkindha · Hampi · Anjanadri", descHi: "किष्किन्धा · हम्पी · अंजनाद्रि" },
  { icon: "👑", phase: "Return & Coronation", phaseHi: "वापसी और राज्याभिषेक", color: "bg-amber-500", desc: "Rameswaram · Lanka · Ayodhya", descHi: "रामेश्वरम · लंका · अयोध्या" },
];

// ─── GALLERY PAINTINGS ─────────────────────────────────────────────────────────
const GALLERY_PAINTINGS = [
  {
    src: "/images/bal-ram.jpg",
    titleHi: "बाल राम",
    title: "Bal Ram — The Divine Child",
    captionHi: "धनुष-बाण लिए बाल राम अपनी दिव्य लीला में",
    caption: "Little Ram holds his bow — a glimpse of the divine warrior within the child",
    phase: "बाल्यकाल",
  },
  {
    src: "/images/kaushalya-ram.jpg",
    titleHi: "माँ कौशल्या और श्री राम",
    title: "Kaushalya & Shri Ram",
    captionHi: "माँ कौशल्या की गोद में शिशु राम — ममता और भक्ति का अनुपम चित्र",
    caption: "Infant Ram rests in mother Kaushalya's loving embrace in the Ayodhya palace",
    phase: "जन्म",
  },
  {
    src: "/images/vanvas-ashram.jpg",
    titleHi: "ऋषि आश्रम में राम-सीता-लक्ष्मण",
    title: "Ram, Sita & Lakshman at the Ashram",
    captionHi: "वनवास के दौरान ऋषि के आश्रम में प्रभु राम, सीता माता और लक्ष्मण",
    caption: "During the 14-year exile, Ram, Sita and Lakshman receive blessings at a forest ashram",
    phase: "वनवास",
  },
  {
    src: "/images/dhanush-bhang.jpg",
    titleHi: "स्वयंवर — धनुषभंग",
    title: "Sita Swayamvar — Dhanushbhang",
    captionHi: "जनकपुर के स्वयंवर में राम ने शिव धनुष उठाकर तोड़ा और सीता का वरण किया",
    caption: "Ram lifts and breaks Lord Shiva's mighty bow at the Swayamvar — winning Sita's hand",
    phase: "स्वयंवर",
  },
  {
    src: "/images/archery-training.jpg",
    titleHi: "धनुर्विद्या का अभ्यास",
    title: "Archery Training",
    captionHi: "गुरु के मार्गदर्शन में राम और लक्ष्मण धनुर्विद्या का अभ्यास करते हुए",
    caption: "Ram and Lakshman practice archery under the guidance of their guru",
    phase: "गुरुकुल",
  },
];

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function Index() {
  const dailyLocation = useDailyLocation();
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(key, language);
  const isHi = language === "hi";

  const [activeGalleryIdx, setActiveGalleryIdx] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">
      <Navigation />

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-800 via-amber-700 to-orange-800 text-white overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M20 0L40 20L20 40L0 20Z' fill-opacity='0.15'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        {/* Glowing orbs */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-48 h-48 bg-orange-400/20 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/30 rounded-full px-4 py-1.5 text-sm font-semibold">
            🕉 {isHi ? "जय श्री राम" : "Jai Shri Ram"} 🕉
          </div>
          <h1 className="font-playfair font-bold text-4xl sm:text-6xl lg:text-7xl leading-tight">
            {isHi ? "की यात्रा" : "The Journey of"}{" "}
            <span className="text-amber-300">{isHi ? "श्री राम" : "Shri Ram"}</span>
          </h1>
          <p className="text-lg sm:text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
            {isHi
              ? "अयोध्या से लंका तक — भगवान राम की दिव्य यात्रा को 3D, AR/VR और लाइव दर्शन के साथ अनुभव करें"
              : "From Ayodhya to Lanka — experience Lord Rama's divine journey through 3D tours, AR/VR, live darshan and much more"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/map">
              <Button size="lg" className="bg-white text-amber-800 hover:bg-amber-50 font-bold text-base h-13 px-10 shadow-xl">
                {isHi ? "यात्रा शुरू करें →" : "Start the Journey →"}
              </Button>
            </Link>
            <Link to="/ar-vr-walk">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/15 font-bold text-base h-13 px-10 bg-transparent">
                🥽 {isHi ? "3D/AR अनुभव" : "3D / AR Experience"}
              </Button>
            </Link>
          </div>
          {/* Stat pills */}
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {[
              { n: "50+", l: isHi ? "पवित्र स्थान" : "Sacred Locations" },
              { n: "12K+", l: isHi ? "भक्त" : "Devotees" },
              { n: "100%", l: isHi ? "मुफ़्त" : "Free Forever" },
              { n: "AR/VR", l: isHi ? "समर्थित" : "Supported" },
            ].map((s) => (
              <div key={s.l} className="bg-white/15 backdrop-blur border border-white/25 rounded-full px-4 py-1.5 text-sm font-semibold">
                <span className="text-amber-300 font-bold">{s.n}</span> {s.l}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SCROLLING DOHA BANNER ═══════════════ */}
      <div className="overflow-hidden bg-gradient-to-r from-amber-950 to-amber-900 py-3 border-b border-amber-700">
        <div className="flex animate-marquee whitespace-nowrap gap-16 text-amber-200 text-sm font-medium">
          {[
            "🕉 मंगल भवन अमंगल हारी · द्रवहु सुदसरथ अजर बिहारी 🕉",
            "🌸 राम सिया राम · सिया राम जय राम · जय जय राम 🌸",
            "🪔 जय रघुनन्दन जय सिय राम · जानकी वल्लभ सितापति राम 🪔",
            "✨ हरे राम हरे राम · राम राम हरे हरे ✨",
            "🌺 श्री राम जय राम · जय जय राम 🌺",
          ].map((doha, i) => (
            <span key={i}>{doha}</span>
          ))}
          {/* Duplicate for seamless loop */}
          {[
            "🕉 मंगल भवन अमंगल हारी · द्रवहु सुदसरथ अजर बिहारी 🕉",
            "🌸 राम सिया राम · सिया राम जय राम · जय जय राम 🌸",
            "🪔 जय रघुनन्दन जय सिय राम · जानकी वल्लभ सितापति राम 🪔",
          ].map((doha, i) => (
            <span key={`r${i}`}>{doha}</span>
          ))}
        </div>
      </div>

      {/* ═══════════════ ALL MAIN FEATURES GRID ═══════════════ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-amber-950">
              {isHi ? "✨ सभी सुविधाएं एक जगह" : "✨ Everything in One Place"}
            </h2>
            <p className="text-amber-700 text-base sm:text-lg max-w-2xl mx-auto">
              {isHi
                ? "हमारे सभी 12 दिव्य अनुभव — नि:शुल्क और मोबाइल अनुकूल"
                : "All 12 divine experiences — completely free and mobile-friendly"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {ALL_FEATURES.map((f, i) => (
              <Link key={i} to={f.href}>
                <div className="group relative rounded-2xl border-2 border-amber-100 hover:border-amber-400 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full cursor-pointer">
                  {/* Gradient top bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${f.gradient}`} />
                  <div className="p-5 space-y-3">
                    <div className="flex items-start justify-between">
                      <span className="text-4xl group-hover:scale-110 transition-transform duration-200">{f.icon}</span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${f.gradient} text-white`}>{f.badge}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-amber-950 text-base leading-tight">{isHi ? f.hindiTitle : f.title}</h3>
                      {isHi && <p className="text-amber-500 text-xs font-medium">{f.title}</p>}
                    </div>
                    <p className="text-amber-800 text-sm leading-relaxed">{f.desc}</p>
                    <div className="flex items-center gap-1 text-amber-600 font-semibold text-sm group-hover:gap-2 transition-all">
                      {isHi ? "खोलें" : "Explore"} <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ 3D RAM MANDIR ═══════════════ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-white">
              {isHi ? "🏰 3D में राम मंदिर" : "🏰 Ram Mandir in 3D"}
            </h2>
            <p className="text-amber-300 text-base max-w-xl mx-auto">
              {isHi
                ? "नव निर्मित राम मंदिर को घुमाएं, ज़ूम करें और दिव्य वास्तुकला का अनुभव करें"
                : "Rotate, zoom and experience the divine Nagara architecture of the newly inaugurated temple"}
            </p>
          </div>

          <Suspense fallback={<Viewer3DFallback />}>
            <RamMandir3DViewer />
          </Suspense>

          <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto">
            {[
              { v: "49m", l: isHi ? "ऊंचाई" : "Height" },
              { v: "22 Jan", l: isHi ? "उद्घाटन 2024" : "Inauguration 2024" },
              { v: "84", l: isHi ? "स्तंभ" : "Pillars" },
            ].map((s) => (
              <div key={s.l} className="bg-slate-800 border border-amber-500/30 rounded-xl p-3 text-center">
                <p className="text-amber-400 font-bold text-lg">{s.v}</p>
                <p className="text-slate-400 text-xs mt-0.5">{s.l}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/ar-vr-walk">
              <Button className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-8">
                🥽 {isHi ? "AR/VR में देखें →" : "View in AR/VR →"}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ DIVINE GALLERY ═══════════════ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-950 to-amber-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-amber-100">
              {isHi ? "🖼️ दिव्य चित्रशाला" : "🖼️ Divya Chitrashala"}
            </h2>
            <p className="text-amber-400 text-sm sm:text-base">
              {isHi
                ? "राम की पवित्र जीवन-लीला के दुर्लभ चित्र — कलाकारों की भक्ति से रचित"
                : "Rare paintings depicting the sacred story of Shri Ram — crafted with devotion"}
            </p>
          </div>

          {/* Main gallery grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {GALLERY_PAINTINGS.map((painting, i) => (
              <button
                key={i}
                onClick={() => setActiveGalleryIdx(i)}
                className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <img
                  src={painting.src}
                  alt={painting.titleHi}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback if image not yet added
                    (e.target as HTMLImageElement).src = `https://placehold.co/300x400/78350f/fef3c7?text=${encodeURIComponent(painting.titleHi)}`;
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
                  <span className="inline-block text-xs bg-amber-500 text-white rounded-full px-2 py-0.5 mb-1 font-semibold">{painting.phase}</span>
                  <p className="text-white font-bold text-xs sm:text-sm leading-tight">{isHi ? painting.titleHi : painting.title}</p>
                </div>
                <div className="absolute top-2 right-2 w-7 h-7 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  🔍
                </div>
              </button>
            ))}
          </div>

          {/* Lightbox */}
          {activeGalleryIdx !== null && (
            <div
              className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4"
              onClick={() => setActiveGalleryIdx(null)}
            >
              <div
                className="relative max-w-2xl w-full bg-amber-950 rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-600"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Nav arrows */}
                <button
                  onClick={() => setActiveGalleryIdx((activeGalleryIdx - 1 + GALLERY_PAINTINGS.length) % GALLERY_PAINTINGS.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-black/50 backdrop-blur rounded-full text-white flex items-center justify-center hover:bg-black/80 transition text-lg"
                >‹</button>
                <button
                  onClick={() => setActiveGalleryIdx((activeGalleryIdx + 1) % GALLERY_PAINTINGS.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-black/50 backdrop-blur rounded-full text-white flex items-center justify-center hover:bg-black/80 transition text-lg"
                >›</button>

                <img
                  src={GALLERY_PAINTINGS[activeGalleryIdx].src}
                  alt={GALLERY_PAINTINGS[activeGalleryIdx].titleHi}
                  className="w-full max-h-[60vh] object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://placehold.co/600x400/78350f/fef3c7?text=${encodeURIComponent(GALLERY_PAINTINGS[activeGalleryIdx].titleHi)}`;
                  }}
                />
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">{GALLERY_PAINTINGS[activeGalleryIdx].phase}</span>
                    <span className="text-amber-400 text-xs">{activeGalleryIdx + 1} / {GALLERY_PAINTINGS.length}</span>
                  </div>
                  <h3 className="font-playfair font-bold text-xl text-amber-200">{GALLERY_PAINTINGS[activeGalleryIdx].titleHi}</h3>
                  <p className="text-amber-100/80 text-sm italic">{GALLERY_PAINTINGS[activeGalleryIdx].captionHi}</p>
                  {isHi ? null : <p className="text-amber-300/70 text-xs">{GALLERY_PAINTINGS[activeGalleryIdx].caption}</p>}
                </div>
                <button
                  onClick={() => setActiveGalleryIdx(null)}
                  className="absolute top-3 right-3 w-8 h-8 bg-black/60 text-white rounded-full flex items-center justify-center hover:bg-black/80 transition text-sm"
                >✕</button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════ TODAY IN RAMA'S JOURNEY ═══════════════ */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-50 to-orange-50 border-y border-amber-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="font-playfair font-bold text-2xl sm:text-3xl text-amber-950">
                {isHi ? "🌅 आज राम की यात्रा में" : "🌅 Today in Rama's Journey"}
              </h2>
              <p className="text-amber-800 text-sm">{isHi ? "हर दिन एक नया पवित्र स्थान खोजें" : "Discover a new sacred location every day"}</p>
              <Card className="border-2 border-amber-300 bg-white shadow-lg">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <CardTitle className="text-lg text-amber-900">📍 {dailyLocation.name}</CardTitle>
                      <p className="text-xs text-amber-700 mt-1">{dailyLocation.state}, {dailyLocation.country}</p>
                    </div>
                    <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full font-bold whitespace-nowrap">{dailyLocation.phase}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-amber-900 leading-relaxed">{dailyLocation.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {dailyLocation.highlights.slice(0, 3).map((h, i) => (
                      <span key={i} className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full border border-amber-200">{h}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-1">
                    <Link to={`/location/${dailyLocation.id}`}>
                      <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white font-bold">
                        {isHi ? "खोजें" : "Explore"} <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                    <ShareButtons compact title={`Today's Journey: ${dailyLocation.name} — ${dailyLocation.state}`} />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick action cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🎓", title: isHi ? "प्रश्नोत्तरी" : "Quiz & Badges", desc: isHi ? "ज्ञान परखें और बैज अर्जित करें" : "Test knowledge & earn badges", href: "/quiz", color: "from-purple-500 to-indigo-600" },
                { icon: "🗺️", title: isHi ? "नक्शा" : "Sacred Map", desc: isHi ? "50+ स्थान देखें" : "Explore 50+ locations", href: "/map", color: "from-emerald-500 to-teal-600" },
                { icon: "🙏", title: isHi ? "डिजिटल पूजा" : "Digital Pooja", desc: isHi ? "मंदिर पूजा बुक करें" : "Book temple ceremony", href: "/digital-pooja", color: "from-orange-500 to-amber-600" },
                { icon: "👥", title: isHi ? "समुदाय" : "Community", desc: isHi ? "कहानियाँ साझा करें" : "Share your stories", href: "/community", color: "from-cyan-500 to-blue-600" },
              ].map((a, i) => (
                <Link key={i} to={a.href}>
                  <div className="group rounded-2xl overflow-hidden border-2 border-transparent hover:border-amber-300 hover:shadow-lg transition-all duration-200 bg-white cursor-pointer">
                    <div className={`h-1 bg-gradient-to-r ${a.color}`} />
                    <div className="p-4 text-center space-y-1.5">
                      <span className="text-3xl group-hover:scale-110 transition-transform block">{a.icon}</span>
                      <p className="font-bold text-amber-950 text-sm">{a.title}</p>
                      <p className="text-xs text-amber-700">{a.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SACRED TEMPLES ═══════════════ */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 space-y-1">
            <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-amber-950">
              {isHi ? "🏛️ पवित्र मंदिर" : "🏛️ Sacred Temples"}
            </h2>
            <p className="text-amber-700">{isHi ? "श्री राम और सीता माता को समर्पित मुख्य मंदिर" : "The most hallowed temples of the Ramayana pilgrimage circuit"}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TEMPLES.map((temple, i) => (
              <Link key={i} to={temple.href}>
                <div className={`group rounded-2xl border-2 ${temple.color} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer text-center p-5 space-y-2`}>
                  <span className="text-5xl group-hover:scale-110 transition-transform block">{temple.icon}</span>
                  <h3 className="font-bold text-amber-950 text-sm sm:text-base">{isHi ? temple.nameHi : temple.name}</h3>
                  <p className="text-xs text-amber-700">📍 {isHi ? temple.locationHi : temple.location}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-amber-600 font-semibold group-hover:gap-2 transition-all">
                    {isHi ? "विस्तार से देखें" : "Explore"} <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ JOURNEY TIMELINE ═══════════════ */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-amber-950">
              {isHi ? "🕉️ पवित्र यात्रा" : "🕉️ The Sacred Journey"}
            </h2>
            <p className="text-amber-700">{isHi ? "राम की जीवन यात्रा के मुख्य क्षणों को देखें" : "Trace the divine path through the pivotal moments of Shri Ram's life"}</p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 to-amber-200 hidden sm:block" />
            <div className="space-y-4">
              {TIMELINE_PHASES.map((phase, i) => (
                <div key={i} className="flex items-center gap-4 sm:gap-5 group">
                  <div className={`w-12 h-12 ${phase.color} rounded-full flex items-center justify-center text-xl shadow-lg flex-shrink-0 z-10 group-hover:scale-110 transition-transform`}>
                    {phase.icon}
                  </div>
                  <div className="flex-1 bg-white border border-amber-200 rounded-xl px-4 py-3 hover:shadow-md hover:border-amber-400 transition">
                    <h3 className="font-bold text-amber-950 text-sm sm:text-base">{isHi ? phase.phaseHi : phase.phase}</h3>
                    <p className="text-xs text-amber-700 mt-0.5">{isHi ? phase.descHi : phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link to="/timeline">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-8">
                {isHi ? "पूर्ण समयरेखा देखें →" : "View Full Timeline →"}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ LIVE DARSHAN ═══════════════ */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 space-y-1">
            <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-white">
              {isHi ? "🔴 लाइव मंदिर दर्शन" : "🔴 Live Temple Darshan"}
            </h2>
            <p className="text-amber-300">{isHi ? "24/7 मंदिरों से सीधे प्रसारण" : "Sacred ceremonies streaming live 24/7 from temples across India"}</p>
          </div>
          <TempleStreams />
        </div>
      </section>

      {/* ═══════════════ WHY CHOOSE ═══════════════ */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-amber-950">
              {isHi ? "हमें क्यों चुनें?" : "Why Choose Shriram Journey?"}
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: "🆓", t: isHi ? "100% मुफ़्त" : "100% Free", d: isHi ? "कोई शुल्क नहीं" : "No cost ever" },
              { icon: "📜", t: isHi ? "प्रामाणिक" : "Authentic", d: isHi ? "वेद-शास्त्र सम्मत" : "Scripturally verified" },
              { icon: "📱", t: isHi ? "मोबाइल अनुकूल" : "Mobile First", d: isHi ? "सभी डिवाइस" : "Any device, anytime" },
              { icon: "🌐", t: isHi ? "वैश्विक समुदाय" : "Global Community", d: isHi ? "दुनियाभर के भक्त" : "Devotees worldwide" },
              { icon: "🔒", t: isHi ? "सुरक्षित" : "Secure & Private", d: isHi ? "डेटा सुरक्षित" : "Your data is safe" },
              { icon: "🗺️", t: isHi ? "50+ स्थान" : "50+ Locations", d: isHi ? "3 देश" : "India, Nepal & Sri Lanka" },
              { icon: "🥽", t: isHi ? "AR/VR" : "AR/VR Ready", d: isHi ? "इमर्सिव अनुभव" : "Immersive experience" },
              { icon: "🤝", t: isHi ? "समुदाय" : "Community", d: isHi ? "12K+ भक्त" : "12K+ devotees" },
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border-2 border-amber-200 text-center hover:shadow-lg hover:border-amber-400 transition">
                <p className="text-3xl mb-2">{item.icon}</p>
                <h3 className="font-bold text-amber-950 text-sm">{item.t}</h3>
                <p className="text-xs text-amber-700 mt-1">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-700 to-orange-800 text-white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-playfair font-bold text-3xl sm:text-5xl">
            {isHi ? "आज अपनी दिव्य यात्रा शुरू करें" : "Begin Your Divine Journey Today"}
          </h2>
          <p className="text-amber-100 text-base sm:text-lg">
            {isHi
              ? "लाखों भक्तों के साथ श्री राम की पवित्र विरासत को जानें — पूरी तरह निःशुल्क"
              : "Join millions of devotees exploring the sacred legacy of Shri Ram — completely free"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/map">
              <Button size="lg" className="bg-white text-amber-800 hover:bg-amber-50 font-bold px-10">
                {isHi ? "खोजना शुरू करें →" : "Start Exploring →"}
              </Button>
            </Link>
            <Link to="/ar-vr-walk">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/15 bg-transparent font-bold px-10">
                🥽 {isHi ? "3D/AR देखें" : "Try 3D / AR"}
              </Button>
            </Link>
          </div>
          <div className="flex justify-center pt-2">
            <ShareButtons compact />
          </div>
        </div>
      </section>

      <ScrollCTA />
      <Footer />
    </div>
  );
}
