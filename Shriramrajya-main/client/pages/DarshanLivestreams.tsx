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
import { Radio, Clock, Users, Volume2, Bell } from "lucide-react";
import { useState } from "react";

interface Livestream {
  id: string;
  temple: string;
  location: string;
  icon: string;
  isLive: boolean;
  viewers: number;
  ceremony: string;
  nextCeremony: string;
  youtubeChannelId: string;
  youtubePlaylistId: string;
  timings: CeremonyTiming[];
  image: string;
}

interface CeremonyTiming {
  ceremony: string;
  time: string;
  description: string;
  icon: string;
}

export default function DarshanLivestreams() {
  const [selectedTemple, setSelectedTemple] = useState<string>("ram-mandir");
  const [selectedView, setSelectedView] = useState<"live" | "schedule" | "previous">(
    "live"
  );
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const livestreams: Livestream[] = [
    {
      id: "ram-mandir",
      temple: "Ram Mandir, Ayodhya",
      location: "Ayodhya, Uttar Pradesh",
      icon: "🏰",
      isLive: true,
      viewers: 12500,
      ceremony: "Aarti & Darshan",
      nextCeremony: "Evening Aarti - 7:00 PM",
      youtubeChannelId: "UCXXXRam123",
      youtubePlaylistId: "PLXXXRam456",
      timings: [
        {
          ceremony: "Mangala Aarti",
          time: "5:00 AM",
          description: "Early morning prayers and rituals",
          icon: "🌅",
        },
        {
          ceremony: "Morning Darshan",
          time: "6:00 AM - 12:00 PM",
          description: "Divine viewing of Lord Rama idol",
          icon: "🙏",
        },
        {
          ceremony: "Afternoon Aarti",
          time: "12:30 PM",
          description: "Mid-day offerings and prayers",
          icon: "☀️",
        },
        {
          ceremony: "Evening Aarti",
          time: "7:00 PM",
          description: "Main evening ceremony with lamps",
          icon: "💡",
        },
        {
          ceremony: "Night Prayers",
          time: "9:00 PM",
          description: "Final prayers and closure",
          icon: "🌙",
        },
      ],
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fd90bbe9fa7e84f6aa0f8e85ef524c7ad%2Fe979eeb96fea4ee6953e61b1e2cdcae4?format=webp&width=800",
    },
    {
      id: "janaki-mandir",
      temple: "Janaki Mandir, Janakpur",
      location: "Janakpur, Nepal",
      icon: "👑",
      isLive: false,
      viewers: 8900,
      ceremony: "Sita's Puja",
      nextCeremony: "Morning Puja - 6:30 AM (Tomorrow)",
      youtubeChannelId: "UCXXXJanaki123",
      youtubePlaylistId: "PLXXXJanaki456",
      timings: [
        {
          ceremony: "Sita Navami Puja",
          time: "6:30 AM",
          description: "Special worship of Goddess Sita",
          icon: "👑",
        },
        {
          ceremony: "Maithili Songs",
          time: "8:00 AM",
          description: "Traditional folk songs dedicated to Sita",
          icon: "🎵",
        },
        {
          ceremony: "Midday Offerings",
          time: "12:00 PM",
          description: "Special food offerings",
          icon: "🍲",
        },
        {
          ceremony: "Evening Recitation",
          time: "6:00 PM",
          description: "Ramayana recitation in Maithili",
          icon: "📖",
        },
        {
          ceremony: "Night Aarti",
          time: "8:30 PM",
          description: "Closing ceremony with lamps",
          icon: "💡",
        },
      ],
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fd90bbe9fa7e84f6aa0f8e85ef524c7ad%2F53edc8ffe1d842dc993dac967c348eda?format=webp&width=800",
    },
    {
      id: "rameswaram",
      temple: "Ramanathaswamy Temple, Rameswaram",
      location: "Rameswaram, Tamil Nadu",
      icon: "🌉",
      isLive: true,
      viewers: 6750,
      ceremony: "Abhisheka Ceremony",
      nextCeremony: "Evening Abhisheka - 5:30 PM",
      youtubeChannelId: "UCXXXRameswaram123",
      youtubePlaylistId: "PLXXXRameswaram456",
      timings: [
        {
          ceremony: "Suprabhatam",
          time: "5:00 AM",
          description: "Awakening ceremony with sacred songs",
          icon: "🎶",
        },
        {
          ceremony: "Morning Abhisheka",
          time: "6:00 AM",
          description: "Sacred bath of the deity with holy waters",
          icon: "💦",
        },
        {
          ceremony: "Sandhya Puja",
          time: "12:00 PM",
          description: "Twilight worship ceremony",
          icon: "⛅",
        },
        {
          ceremony: "Evening Abhisheka",
          time: "5:30 PM",
          description: "Evening sacred bath with elaborate rituals",
          icon: "🌅",
        },
        {
          ceremony: "Deepa Aradhan",
          time: "7:30 PM",
          description: "Lamp worship ceremony",
          icon: "🕯️",
        },
      ],
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fd90bbe9fa7e84f6aa0f8e85ef524c7ad%2F7e979eeb96fea4ee6953e61b1e2cdcae4?format=webp&width=800",
    },
    {
      id: "panchavati",
      temple: "Panchavati Temples, Nashik",
      location: "Nashik, Maharashtra",
      icon: "🌊",
      isLive: false,
      viewers: 5200,
      ceremony: "Godavari Aarti",
      nextCeremony: "Morning Darshan - 7:00 AM (Tomorrow)",
      youtubeChannelId: "UCXXXPanchavati123",
      youtubePlaylistId: "PLXXXPanchavati456",
      timings: [
        {
          ceremony: "Godavari Puja",
          time: "6:00 AM",
          description: "Worship of sacred Godavari river",
          icon: "🌊",
        },
        {
          ceremony: "Temple Darshan",
          time: "7:00 AM - 1:00 PM",
          description: "Open darshan of all temples",
          icon: "🏛️",
        },
        {
          ceremony: "Afternoon Puja",
          time: "3:00 PM",
          description: "Mid-day rituals and offerings",
          icon: "🍻",
        },
        {
          ceremony: "Evening Aarti",
          time: "6:30 PM",
          description: "Godavari river aarti with thousands",
          icon: "🔥",
        },
        {
          ceremony: "Night Prayers",
          time: "8:00 PM",
          description: "Final prayers and blessings",
          icon: "🙏",
        },
      ],
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fd90bbe9fa7e84f6aa0f8e85ef524c7ad%2F53edc8ffe1d842dc993dac967c348eda?format=webp&width=800",
    },
  ];

  const currentLivestream = livestreams.find((l) => l.id === selectedTemple);

  const getLiveStatus = (isLive: boolean) => (
    <div className="flex items-center gap-2 text-sm font-semibold">
      {isLive ? (
        <>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-red-600">LIVE NOW</span>
        </>
      ) : (
        <>
          <div className="w-2 h-2 bg-gray-400 rounded-full" />
          <span className="text-gray-600">OFFLINE</span>
        </>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-700 to-amber-900 text-white">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <h1 className="font-playfair font-bold text-5xl sm:text-6xl">
            🔴 Temple Darshan Livestreams
          </h1>
          <p className="text-lg sm:text-xl text-amber-100 max-w-2xl mx-auto">
            Watch sacred ceremonies and aarti from famous Ramayana temples live
            from anywhere in the world
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Temple Selection */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-amber-950 mb-8">
              🏛️ Select a Temple
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {livestreams.map((stream) => (
                <button
                  key={stream.id}
                  onClick={() => setSelectedTemple(stream.id)}
                  className={`p-4 rounded-xl border-2 transition ${
                    selectedTemple === stream.id
                      ? "border-amber-700 bg-amber-50"
                      : "border-amber-200 bg-white hover:border-amber-400"
                  }`}
                >
                  <p className="text-3xl mb-2">{stream.icon}</p>
                  <h3 className="font-bold text-amber-950 text-sm mb-2">
                    {stream.temple}
                  </h3>
                  {getLiveStatus(stream.isLive)}
                  {stream.isLive && (
                    <p className="text-xs text-amber-800 mt-2">
                      👥 {stream.viewers.toLocaleString()} watching
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Main Livestream Section */}
          {currentLivestream && (
            <div className="space-y-12">
              {/* Video Player Area */}
              <div className="space-y-4">
                <div className="bg-black rounded-xl overflow-hidden border-4 border-amber-700">
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center relative">
                    {/* Placeholder for YouTube embed */}
                    <div className="text-center space-y-4">
                      <p className="text-6xl">📹</p>
                      <h3 className="text-white text-2xl font-bold">
                        Live Stream Player
                      </h3>
                      <p className="text-gray-300">
                        YouTube iframe will load here
                      </p>
                      {currentLivestream.isLive && (
                        <div className="flex items-center gap-2 justify-center text-red-500 font-bold">
                          <Radio className="w-5 h-5 animate-pulse" />
                          NOW PLAYING LIVE DARSHAN
                        </div>
                      )}
                    </div>

                    {/* Top bar overlay */}
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/60 to-transparent p-4 flex justify-between items-center">
                      <div>
                        <h3 className="text-white font-bold text-lg">
                          {currentLivestream.temple}
                        </h3>
                        <p className="text-sm text-gray-200">
                          {currentLivestream.location}
                        </p>
                      </div>
                      {getLiveStatus(currentLivestream.isLive)}
                    </div>

                    {/* Bottom info overlay */}
                    {currentLivestream.isLive && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <div className="flex items-center gap-4 text-white">
                          <Users className="w-5 h-5" />
                          <span>
                            {currentLivestream.viewers.toLocaleString()} people
                            watching
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Stream Info Card */}
                <Card className="border-2 border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
                  <CardHeader>
                    <CardTitle className="text-amber-950 flex items-center gap-2">
                      {currentLivestream.icon}
                      {currentLivestream.temple}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-amber-800 font-semibold">
                          Current Ceremony
                        </p>
                        <p className="text-lg font-bold text-amber-950">
                          {currentLivestream.ceremony}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-amber-800 font-semibold">
                          Next Ceremony
                        </p>
                        <p className="text-lg font-bold text-amber-950">
                          {currentLivestream.nextCeremony}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-amber-800 font-semibold">
                          Location
                        </p>
                        <p className="text-lg font-bold text-amber-950">
                          {currentLivestream.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold">
                        <Radio className="w-4 h-4 mr-2" />
                        Subscribe to Updates
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-amber-700 text-amber-700 font-bold"
                        onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                      >
                        <Bell className="w-4 h-4 mr-2" />
                        {notificationsEnabled ? "Notifications ON" : "Enable Notifications"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Tabs for Different Views */}
              <div className="space-y-6">
                <div className="flex gap-4 border-b-2 border-amber-200">
                  {[
                    { id: "live", label: "🔴 LIVE NOW", count: currentLivestream.isLive ? 1 : 0 },
                    { id: "schedule", label: "📅 Today's Schedule" },
                    { id: "previous", label: "🎬 Previous Broadcasts" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedView(tab.id as any)}
                      className={`pb-4 px-6 font-bold whitespace-nowrap transition ${
                        selectedView === tab.id
                          ? "text-amber-700 border-b-4 border-amber-700"
                          : "text-amber-900 hover:text-amber-700"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div>
                  {selectedView === "live" && (
                    <div className="space-y-4">
                      {currentLivestream.isLive ? (
                        <Card className="border-2 border-green-300 bg-green-50">
                          <CardHeader>
                            <CardTitle className="text-green-900">
                              ✅ Livestream is Currently Active
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-green-800">
                              You can watch the live darshan now. The ceremony is
                              being broadcast directly from {currentLivestream.temple}.
                            </p>
                          </CardContent>
                        </Card>
                      ) : (
                        <Card className="border-2 border-gray-300 bg-gray-50">
                          <CardHeader>
                            <CardTitle className="text-gray-900">
                              ⏰ Currently Offline
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-800 mb-4">
                              The next ceremony will be broadcast at{" "}
                              {currentLivestream.nextCeremony.split(" - ")[1]}
                            </p>
                            <Button
                              className="bg-amber-700 hover:bg-amber-800 text-white"
                              onClick={() =>
                                setNotificationsEnabled(!notificationsEnabled)
                              }
                            >
                              <Bell className="w-4 h-4 mr-2" />
                              Get notified when it starts
                            </Button>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  )}

                  {selectedView === "schedule" && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-amber-950 mb-6">
                        Today's Ceremony Schedule
                      </h3>
                      <div className="space-y-4">
                        {currentLivestream.timings.map((timing, idx) => (
                          <Card
                            key={idx}
                            className="border-2 border-amber-200 hover:shadow-lg transition"
                          >
                            <CardContent className="pt-6">
                              <div className="flex items-start gap-4">
                                <span className="text-4xl">{timing.icon}</span>
                                <div className="flex-grow">
                                  <h4 className="font-bold text-amber-950 text-lg">
                                    {timing.ceremony}
                                  </h4>
                                  <p className="text-amber-900 mt-1">
                                    {timing.description}
                                  </p>
                                </div>
                                <div className="flex items-center gap-2 text-amber-700 font-semibold whitespace-nowrap">
                                  <Clock className="w-4 h-4" />
                                  {timing.time}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedView === "previous" && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-amber-950 mb-6">
                        Recent Broadcasts
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          {
                            title: "Evening Aarti - Jan 15, 2024",
                            views: 5200,
                            duration: "45 min",
                          },
                          {
                            title: "Morning Darshan - Jan 14, 2024",
                            views: 8900,
                            duration: "60 min",
                          },
                          {
                            title: "Special Abhisheka - Jan 13, 2024",
                            views: 12300,
                            duration: "90 min",
                          },
                          {
                            title: "Night Prayers - Jan 12, 2024",
                            views: 3400,
                            duration: "30 min",
                          },
                        ].map((video, idx) => (
                          <Card
                            key={idx}
                            className="border-2 border-amber-200 hover:shadow-lg transition cursor-pointer"
                          >
                            <CardHeader>
                              <CardTitle className="text-amber-950">
                                {video.title}
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-2 text-sm text-amber-800">
                                <p>👁️ {video.views.toLocaleString()} views</p>
                                <p>⏱️ Duration: {video.duration}</p>
                              </div>
                              <Button
                                variant="outline"
                                className="w-full mt-4 border-amber-700 text-amber-700"
                              >
                                Watch Replay
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Audio Options */}
              <Card className="border-2 border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
                <CardHeader>
                  <CardTitle className="text-amber-950 flex items-center gap-2">
                    <Volume2 className="w-6 h-6" />
                    Audio & Language Options
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-amber-950 mb-3">
                        Select Audio Track
                      </label>
                      <select className="w-full px-4 py-2 border-2 border-amber-200 rounded-lg focus:border-amber-700 focus:outline-none">
                        <option>Hindi (Priest's Chanting)</option>
                        <option>Sanskrit (Vedic Verses)</option>
                        <option>English (Commentary)</option>
                        <option>Tamil (Regional Commentary)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-amber-950 mb-3">
                        Subtitles
                      </label>
                      <select className="w-full px-4 py-2 border-2 border-amber-200 rounded-lg focus:border-amber-700 focus:outline-none">
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Tamil</option>
                        <option>Telugu</option>
                        <option>Marathi</option>
                        <option>None</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
