import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Clock, X } from "lucide-react";

interface TempleStream {
  id: string;
  name: string;
  location: string;
  icon: string;
  videoId: string;
  aartis: { time: string; name: string }[];
  description: string;
}

export function TempleStreams() {
  const [selectedTemple, setSelectedTemple] = useState<TempleStream | null>(
    null,
  );

  const temples: TempleStream[] = [
    {
      id: "ram-mandir",
      name: "Ram Mandir",
      location: "Ayodhya, Uttar Pradesh",
      icon: "🏰",
      videoId: "Bk4hacULWw4",
      aartis: [
        { time: "5:30 AM", name: "Mangal Aarti" },
        { time: "12:00 PM", name: "Bhog Aarti" },
        { time: "7:00 PM", name: "Sandhya Aarti" },
      ],
      description:
        "The newly inaugurated Ram Mandir with daily darshan and aartis",
    },
    {
      id: "kashi-vishwanath",
      name: "Kashi Vishwanath",
      location: "Varanasi, Uttar Pradesh",
      icon: "🕯️",
      videoId: "63LLdfW_ELM",
      aartis: [
        { time: "4:30 AM", name: "Mangal Aarti" },
        { time: "3:00 PM", name: "Bhairo Aarti" },
        { time: "7:00 PM", name: "Sandhya Aarti" },
      ],
      description: "Sacred temple on the banks of the Ganges River",
    },
    {
      id: "rameswaram",
      name: "Ramanatha Swamy Temple",
      location: "Rameswaram, Tamil Nadu",
      icon: "🌊",
      videoId: "dQw4w9WgXcQ",
      aartis: [
        { time: "6:00 AM", name: "Bhakara Aarti" },
        { time: "12:00 PM", name: "Noon Aarti" },
        { time: "6:00 PM", name: "Evening Aarti" },
      ],
      description:
        "Where Shri Ram performed penance and worship for Sita's rescue",
    },
    {
      id: "hanuman-chalisa",
      name: "Hanuman Chalisa Mandir",
      location: "Nashik, Maharashtra",
      icon: "🙏",
      videoId: "dQw4w9WgXcQ",
      aartis: [
        { time: "5:00 AM", name: "Morning Aarti" },
        { time: "1:00 PM", name: "Afternoon Aarti" },
        { time: "7:30 PM", name: "Evening Aarti" },
      ],
      description: "Dedicated to Hanuman, the loyal devotee of Lord Ram",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-3 mb-12">
        <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-white">
          🎬 Live Temple Darshans
        </h2>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          Experience the sacred aartis and darshans of temples dedicated to Shri
          Ram
        </p>
      </div>

      {/* Temple Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {temples.map((temple) => (
          <Card
            key={temple.id}
            className="border-2 border-amber-500 hover:shadow-xl transition cursor-pointer bg-slate-800 text-white hover:border-amber-400"
            onClick={() => setSelectedTemple(temple)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="text-4xl mb-2">{temple.icon}</div>
                  <CardTitle className="text-white text-xl">
                    {temple.name}
                  </CardTitle>
                  <p className="text-sm text-amber-300 mt-1">
                    📍 {temple.location}
                  </p>
                </div>
                <div className="bg-red-600 rounded-full p-2">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-300">{temple.description}</p>
              <Button
                size="sm"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch Live
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed View with YouTube Embed */}
      {selectedTemple && (
        <Card className="border-2 border-amber-500 bg-slate-800 text-white overflow-hidden">
          <CardHeader className="bg-slate-900 pb-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-6xl mb-3">{selectedTemple.icon}</div>
                <CardTitle className="text-3xl text-white">
                  {selectedTemple.name}
                </CardTitle>
                <p className="text-amber-300 mt-2">
                  📍 {selectedTemple.location}
                </p>
              </div>
              <button
                onClick={() => setSelectedTemple(null)}
                className="text-2xl text-gray-300 hover:text-white transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            {/* Video Darshan Coming Soon Banner */}
            <div className="w-full bg-gradient-to-br from-red-900 via-red-800 to-red-900 rounded-lg overflow-hidden shadow-lg p-8 text-center space-y-4 border-2 border-red-500">
              <div className="text-6xl">📌</div>
              <h3 className="text-2xl font-bold text-white">Video Darshan Coming Soon</h3>
              <p className="text-red-100 text-lg">
                🙏 We are working with the official temple channels to bring you live darshan experiences.
              </p>
              <p className="text-red-200 text-sm">
                Stay tuned for direct streaming from sacred temples across India.
              </p>
              <a
                href={`https://www.youtube.com/watch?v=${selectedTemple.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition"
              >
                <Play className="w-4 h-4 inline mr-2" />
                Visit Official Channel
              </a>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              {selectedTemple.description}
            </p>

            {/* Aarti Timings */}
            <div>
              <h3 className="font-bold text-white text-lg mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Daily Aarti Timings
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {selectedTemple.aartis.map((aarti, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-700 rounded-lg p-4 border border-amber-500 text-center hover:bg-slate-600 transition"
                  >
                    <p className="text-2xl font-bold text-amber-400">⏰</p>
                    <p className="font-bold text-white mt-2">{aarti.time}</p>
                    <p className="text-sm text-amber-300">{aarti.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-6 border border-red-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-white text-lg mb-1">
                    🔴 Live Now
                  </p>
                  <p className="text-red-100 text-sm">
                    Watch the sacred darshan live on YouTube
                  </p>
                </div>
                <a
                  href={`https://www.youtube.com/watch?v=${selectedTemple.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition flex items-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  Open YouTube
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
