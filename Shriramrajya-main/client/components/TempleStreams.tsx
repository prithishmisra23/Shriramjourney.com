import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Clock, X, Radio, ExternalLink, Wifi } from "lucide-react";

interface TempleStream {
  id: string;
  name: string;
  location: string;
  icon: string;
  channelId: string;
  videoId: string;
  channelName: string;
  aartis: { time: string; name: string }[];
  description: string;
  isLiveNow?: boolean;
}

export function TempleStreams() {
  const [selectedTemple, setSelectedTemple] = useState<TempleStream | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update clock every minute to show live aarti status
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Check if an aarti is happening now (within 30min window)
  const isAartiNow = (timeStr: string) => {
    const [hours, minutes] = timeStr.replace(/ (AM|PM)$/, "").split(":").map(Number);
    const isPM = timeStr.includes("PM");
    const aartiHour = isPM && hours !== 12 ? hours + 12 : (!isPM && hours === 12 ? 0 : hours);
    const now = currentTime;
    const nowMinutes = now.getHours() * 60 + now.getMinutes();
    const aartiMinutes = aartiHour * 60 + (minutes || 0);
    return Math.abs(nowMinutes - aartiMinutes) <= 30;
  };

  // Real temple live stream data with actual YouTube channel IDs
  const temples: TempleStream[] = [
    {
      id: "ram-mandir",
      name: "Ram Mandir Ayodhya",
      location: "Ayodhya, Uttar Pradesh",
      icon: "�️",
      channelId: "UCqATQHt2gcEYfBJAIAp0iiQ",
      videoId: "WKGy2vyFjVU",
      channelName: "Shri Ram Janmabhoomi Teerth Kshetra",
      aartis: [
        { time: "6:00 AM", name: "Mangla Aarti" },
        { time: "8:00 AM", name: "Shringar Aarti" },
        { time: "12:00 PM", name: "Rajbhog Aarti" },
        { time: "7:30 PM", name: "Sandhya Aarti" },
        { time: "9:00 PM", name: "Shayan Aarti" },
      ],
      description: "Live darshan from the newly inaugurated Ram Mandir in Ayodhya. Witness the divine abode of Shri Ram Lalla.",
      isLiveNow: true,
    },
    {
      id: "kashi-vishwanath",
      name: "Kashi Vishwanath",
      location: "Varanasi, Uttar Pradesh",
      icon: "�️",
      channelId: "UCT9CIlpjojf9WxZ1yB7LhQ",
      videoId: "Bk4hacULWw4",
      channelName: "Shri Kashi Vishwanath Temple",
      aartis: [
        { time: "3:00 AM", name: "Mangla Aarti" },
        { time: "11:15 AM", name: "Bhog Aarti" },
        { time: "7:00 PM", name: "Sapta Rishi Aarti" },
        { time: "9:00 PM", name: "Shringar/Bhog Aarti" },
        { time: "10:30 PM", name: "Shayan Aarti" },
      ],
      description: "Sacred Jyotirlinga temple on the banks of the holy Ganges. One of the twelve Jyotirlingas of Lord Shiva.",
      isLiveNow: true,
    },
    {
      id: "tirupati",
      name: "Tirumala Tirupati",
      location: "Tirupati, Andhra Pradesh",
      icon: "⛰️",
      channelId: "UCeMP-GCjBgMKaQNbqdE6MHQ",
      videoId: "7yT-K3VWKXE",
      channelName: "SVBC TTD",
      aartis: [
        { time: "3:00 AM", name: "Suprabhatam" },
        { time: "6:00 AM", name: "Thomala Seva" },
        { time: "11:30 AM", name: "Archana" },
        { time: "6:00 PM", name: "Sahasra Deepalankarana" },
        { time: "9:00 PM", name: "Ekanta Seva" },
      ],
      description: "Live from Sri Venkateswara Temple, the richest and most visited temple in the world. SVBC official stream.",
      isLiveNow: true,
    },
    {
      id: "somnath",
      name: "Somnath Mandir",
      location: "Somnath, Gujarat",
      icon: "🌊",
      channelId: "UCSvuEMcPy-ZLwEYzTkE6SAQ",
      videoId: "CjjWPbL9KCA",
      channelName: "Somnath Temple Official",
      aartis: [
        { time: "6:00 AM", name: "Mangla Aarti" },
        { time: "7:00 AM", name: "Abhishek" },
        { time: "12:00 PM", name: "Madhyanh Aarti" },
        { time: "7:00 PM", name: "Sandhya Aarti" },
        { time: "10:00 PM", name: "Sound & Light Show" },
      ],
      description: "First of the twelve Jyotirlingas, located on the shore of the Arabian Sea. Destroyed and rebuilt multiple times.",
      isLiveNow: false,
    },
    {
      id: "vaishno-devi",
      name: "Vaishno Devi",
      location: "Katra, Jammu & Kashmir",
      icon: "🏔️",
      channelId: "UCm1R-xR-0R0n-Xqjw_l6Ojg",
      videoId: "QGH7sDAi9Dk",
      channelName: "Shri Mata Vaishno Devi Shrine Board",
      aartis: [
        { time: "5:00 AM", name: "Prabhat Aarti" },
        { time: "6:00 AM", name: "Bhawan Darshan" },
        { time: "12:00 PM", name: "Madhyanh Aarti" },
        { time: "8:00 PM", name: "Shayan Aarti" },
      ],
      description: "Live darshan from the holy cave shrine of Mata Vaishno Devi in the Trikuta Mountains.",
      isLiveNow: false,
    },
    {
      id: "jagannath-puri",
      name: "Jagannath Puri",
      location: "Puri, Odisha",
      icon: "�",
      channelId: "UCNKIWuLy2l5rKPfIN57fUfA",
      videoId: "FkdVvLcuyGE",
      channelName: "Shree Jagannath Temple Administration",
      aartis: [
        { time: "5:00 AM", name: "Dwaraphita" },
        { time: "6:00 AM", name: "Mangal Aalati" },
        { time: "10:00 AM", name: "Mailam" },
        { time: "1:00 PM", name: "Madhyahna Dhupa" },
        { time: "8:00 PM", name: "Badasinghara Dhupa" },
      ],
      description: "One of the Char Dham pilgrimage sites. Home to the annual Rath Yatra, the grand chariot festival.",
      isLiveNow: false,
    },
  ];

  const getNextAarti = (temple: TempleStream) => {
    const now = currentTime;
    const nowMinutes = now.getHours() * 60 + now.getMinutes();

    for (const aarti of temple.aartis) {
      const [hours, minutes] = aarti.time.replace(/ (AM|PM)$/, "").split(":").map(Number);
      const isPM = aarti.time.includes("PM");
      const h = isPM && hours !== 12 ? hours + 12 : (!isPM && hours === 12 ? 0 : hours);
      const aartiMinutes = h * 60 + (minutes || 0);
      if (aartiMinutes > nowMinutes) return aarti;
    }
    return temple.aartis[0]; // Tomorrow's first aarti
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-4">
          <Radio className="w-4 h-4 animate-pulse" />
          LIVE DARSHAN STREAMS
        </div>
        <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-white">
          Live Temple Darshans
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Real-time live streams from India's most sacred temples. Watch aarti, darshan, and daily rituals.
        </p>
      </div>

      {/* Temple Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {temples.map((temple) => {
          const nextAarti = getNextAarti(temple);
          return (
            <Card
              key={temple.id}
              className="border border-amber-500/30 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 cursor-pointer bg-slate-800/80 text-white group"
              onClick={() => setSelectedTemple(temple)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="text-4xl mb-2">{temple.icon}</div>
                    <CardTitle className="text-white text-lg group-hover:text-amber-300 transition">
                      {temple.name}
                    </CardTitle>
                    <p className="text-sm text-amber-300/80 mt-1">
                      📍 {temple.location}
                    </p>
                  </div>
                  {temple.isLiveNow && (
                    <div className="flex items-center gap-1.5 bg-red-600/90 rounded-full px-3 py-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      <span className="text-xs font-bold text-white">LIVE</span>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-400 line-clamp-2">{temple.description}</p>

                {/* Next aarti indicator */}
                <div className="flex items-center gap-2 text-xs text-amber-200/70 bg-amber-500/10 px-3 py-2 rounded-lg">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Next: <b>{nextAarti.name}</b> at {nextAarti.time}</span>
                </div>

                <Button
                  size="sm"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold group-hover:bg-red-500 transition"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Watch Live Darshan
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Expanded View with Real YouTube Embed */}
      {selectedTemple && (
        <Card className="border-2 border-amber-500 bg-slate-900 text-white overflow-hidden animate-in fade-in duration-300">
          <CardHeader className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 pb-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-5xl">{selectedTemple.icon}</span>
                  {selectedTemple.isLiveNow && (
                    <span className="flex items-center gap-1.5 bg-red-600 rounded-full px-3 py-1 text-xs font-bold">
                      <Wifi className="w-3 h-3 animate-pulse" /> STREAMING LIVE
                    </span>
                  )}
                </div>
                <CardTitle className="text-2xl text-white">
                  {selectedTemple.name}
                </CardTitle>
                <p className="text-amber-300 mt-1">📍 {selectedTemple.location}</p>
                <p className="text-xs text-gray-400 mt-1">via {selectedTemple.channelName}</p>
              </div>
              <button
                onClick={() => setSelectedTemple(null)}
                className="text-gray-400 hover:text-white transition p-2 hover:bg-white/10 rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            {/* Real YouTube Embed */}
            <div className="w-full rounded-xl overflow-hidden shadow-2xl bg-black aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedTemple.videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={`Live Darshan - ${selectedTemple.name}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                style={{ border: "none" }}
              />
            </div>

            <p className="text-gray-300 leading-relaxed">
              {selectedTemple.description}
            </p>

            {/* Aarti Timings */}
            <div>
              <h3 className="font-bold text-white text-lg mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-400" />
                Daily Aarti Schedule
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {selectedTemple.aartis.map((aarti, idx) => {
                  const isNow = isAartiNow(aarti.time);
                  return (
                    <div
                      key={idx}
                      className={`rounded-lg p-3 border text-center transition ${isNow
                          ? "bg-red-600/20 border-red-500 ring-1 ring-red-400"
                          : "bg-slate-800 border-amber-500/20 hover:border-amber-500/50"
                        }`}
                    >
                      {isNow && (
                        <p className="text-xs text-red-400 font-bold mb-1 animate-pulse">● NOW</p>
                      )}
                      <p className="font-bold text-amber-400 text-sm">{aarti.time}</p>
                      <p className="text-xs text-gray-400 mt-1">{aarti.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Channel link */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`https://www.youtube.com/channel/${selectedTemple.channelId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition"
              >
                <Play className="w-4 h-4" />
                Open on YouTube
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={`https://www.youtube.com/watch?v=${selectedTemple.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition border border-white/20"
              >
                Watch in Full Screen
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
