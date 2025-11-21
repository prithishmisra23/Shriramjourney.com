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
import {
  Headphones,
  Eye,
  Smartphone,
  Zap,
  AlertCircle,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

interface Experience {
  id: string;
  title: string;
  description: string;
  location: string;
  icon: string;
  duration: string;
  difficulty: string;
  features: string[];
}

export default function ARVRWalk() {
  const [selectedExperience, setSelectedExperience] = useState<string | null>(
    null
  );
  const [isARSupported] = useState(
    typeof navigator !== "undefined" &&
      (navigator as any).xr &&
      (navigator as any).xr.isSessionSupported
  );

  const experiences: Experience[] = [
    {
      id: "ayodhya-walk",
      title: "Walk with Ram in Ayodhya",
      description:
        "Experience Shri Ram's childhood in the divine city of Ayodhya. Visit key locations and listen to divine stories.",
      location: "Ayodhya, Uttar Pradesh",
      icon: "🏰",
      duration: "30 minutes",
      difficulty: "Easy",
      features: [
        "3D recreation of ancient Ayodhya",
        "Ram's birth story narration",
        "Interactive temple tours",
        "Character encounters with Lakshman and Hanuman",
      ],
    },
    {
      id: "forest-exile",
      title: "Journey Through the Forest Exile",
      description:
        "Walk alongside Ram, Sita, and Lakshman through the sacred forests during their 14-year exile.",
      location: "Chitrakoot to Panchavati",
      icon: "🌲",
      duration: "45 minutes",
      difficulty: "Medium",
      features: [
        "Scenic forest environments",
        "Sacred mountain encounters",
        "Wildlife interactions",
        "Sita's perspectives and stories",
      ],
    },
    {
      id: "bridge-of-faith",
      title: "The Bridge of Faith - Ram Setu",
      description:
        "Cross the legendary bridge built by Hanuman's army to Lanka. Experience the epic military campaign.",
      location: "Rameswaram & Lanka",
      icon: "🌉",
      duration: "40 minutes",
      difficulty: "Medium",
      features: [
        "Bridge construction visualization",
        "Army formations and strategy",
        "Ocean crossing experience",
        "Historical context narration",
      ],
    },
    {
      id: "ravana-palace",
      title: "Ravana's Golden Palace",
      description:
        "Explore the magnificent palace of Ravana and understand the antagonist's perspective in the epic.",
      location: "Lanka",
      icon: "🏯",
      duration: "35 minutes",
      difficulty: "Medium",
      features: [
        "Opulent palace interiors",
        "Ravana's character depth",
        "Sita's captivity experience",
        "Conflict understanding",
      ],
    },
    {
      id: "coronation",
      title: "Royal Coronation Ceremony",
      description:
        "Witness Ram's coronation as king of Ayodhya with grand celebrations and divine blessings.",
      location: "Ayodhya Palace",
      icon: "👑",
      duration: "25 minutes",
      difficulty: "Easy",
      features: [
        "Coronation ceremony visualization",
        "Royal processions",
        "Character interactions",
        "Victory celebrations",
      ],
    },
    {
      id: "heaven-tour",
      title: "Celestial Realms of the Gods",
      description:
        "Journey through the divine realms and experience interactions between mortals and celestial beings.",
      location: "Heavenly Planes",
      icon: "✨",
      duration: "50 minutes",
      difficulty: "Hard",
      features: [
        "Divine realm visualization",
        "God character interactions",
        "Celestial music and effects",
        "Spiritual transcendence experience",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-700 to-amber-900 text-white">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <h1 className="font-playfair font-bold text-5xl sm:text-6xl">
            �� Walk with Shri Ram - AR/VR Experience
          </h1>
          <p className="text-lg sm:text-xl text-amber-100 max-w-2xl mx-auto">
            Immerse yourself in the divine journey using cutting-edge 3D
            visualization and WebXR technology
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* System Requirements */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-amber-950 mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6 text-amber-700" />
              System Requirements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "📱",
                  title: "Device",
                  items: ["Smartphone or VR Headset", "Modern GPU", "4GB+ RAM"],
                },
                {
                  icon: "🌐",
                  title: "Browser",
                  items: ["Chrome 79+", "Firefox 55+", "Safari 15+"],
                },
                {
                  icon: "⚙️",
                  title: "Features",
                  items: [
                    "WebXR API Support",
                    "WebGL 2.0",
                    "JavaScript enabled",
                  ],
                },
                {
                  icon: "🎮",
                  title: "Optional",
                  items: ["VR Headset (Quest, HTC)", "AR-capable phone", "Controller support"],
                },
              ].map((req, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-6 border-2 border-amber-200"
                >
                  <p className="text-3xl mb-3">{req.icon}</p>
                  <h3 className="font-bold text-amber-950 mb-3">{req.title}</h3>
                  <ul className="space-y-2">
                    {req.items.map((item, i) => (
                      <li key={i} className="text-sm text-amber-900 flex gap-2">
                        <span>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Experiences Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-amber-950 mb-8">
              🌍 Available Experiences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiences.map((exp) => (
                <Card
                  key={exp.id}
                  className="border-2 border-amber-200 hover:shadow-xl transition cursor-pointer flex flex-col"
                  onClick={() => setSelectedExperience(exp.id)}
                >
                  <CardHeader>
                    <div className="text-5xl mb-4">{exp.icon}</div>
                    <CardTitle className="text-amber-950">
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-amber-700">
                      {exp.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4">
                    <p className="text-sm text-amber-900">{exp.description}</p>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2 text-amber-800">
                        <Clock className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-amber-800">
                        <Zap className="w-4 h-4" />
                        <span>Difficulty: {exp.difficulty}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white">
                      Launch Experience
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience Details */}
          {selectedExperience && (
            <div className="bg-white border-2 border-amber-200 rounded-xl p-8 mb-16">
              {experiences.map((exp) => {
                if (exp.id !== selectedExperience) return null;
                return (
                  <div key={exp.id} className="space-y-8">
                    <div className="flex items-start gap-6">
                      <div className="text-6xl">{exp.icon}</div>
                      <div>
                        <h3 className="text-3xl font-bold text-amber-950 mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-amber-900 mb-4">
                          {exp.description}
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border border-amber-200">
                      <h4 className="font-bold text-amber-950 mb-4">
                        ✨ What You'll Experience
                      </h4>
                      <ul className="space-y-3">
                        {exp.features.map((feature, idx) => (
                          <li key={idx} className="flex gap-3 text-amber-900">
                            <span className="text-amber-700">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-bold text-amber-950">
                        🎮 How to Launch
                      </h4>
                      <div className="space-y-3">
                        {[
                          {
                            step: "1",
                            title: "Select VR/AR Mode",
                            desc: "Choose between VR headset or AR on your smartphone",
                          },
                          {
                            step: "2",
                            title: "Prepare Your Space",
                            desc: "Clear at least 2m x 2m space for safe movement",
                          },
                          {
                            step: "3",
                            title: "Calibrate Device",
                            desc: "Follow on-screen calibration instructions",
                          },
                          {
                            step: "4",
                            title: "Begin Experience",
                            desc: "Step into the divine journey and explore",
                          },
                        ].map((step) => (
                          <div
                            key={step.step}
                            className="flex gap-4 p-4 bg-amber-50 rounded-lg border border-amber-200"
                          >
                            <div className="w-8 h-8 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                              {step.step}
                            </div>
                            <div>
                              <h5 className="font-semibold text-amber-950">
                                {step.title}
                              </h5>
                              <p className="text-sm text-amber-900">
                                {step.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="flex-1 bg-amber-700 hover:bg-amber-800 text-white font-bold py-3">
                        <Eye className="w-5 h-5 mr-2" />
                        Start VR Experience
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-amber-700 text-amber-700 font-bold py-3"
                      >
                        <Smartphone className="w-5 h-5 mr-2" />
                        Start AR Experience
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Features & Controls */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-blue-950 mb-8">
              🎮 Interactive Controls & Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-bold text-blue-950 text-lg mb-4">
                  📱 Smartphone AR Controls
                </h3>
                <div className="space-y-3">
                  {[
                    { control: "Move Forward", action: "Walk/Tap forward arrow" },
                    { control: "Look Around", action: "Rotate device or touch" },
                    { control: "Interact", action: "Double-tap on objects" },
                    { control: "Info", action: "Point at characters/locations" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between p-3 bg-white rounded-lg border border-blue-200"
                    >
                      <span className="font-semibold text-blue-950">
                        {item.control}
                      </span>
                      <span className="text-sm text-blue-800">{item.action}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-blue-950 text-lg mb-4">
                  🥽 VR Headset Controls
                </h3>
                <div className="space-y-3">
                  {[
                    { control: "Locomotion", action: "Left controller joystick" },
                    { control: "Look Around", action: "Head movement" },
                    { control: "Grab Objects", action: "Trigger button" },
                    { control: "Menu", action: "Application button" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between p-3 bg-white rounded-lg border border-blue-200"
                    >
                      <span className="font-semibold text-blue-950">
                        {item.control}
                      </span>
                      <span className="text-sm text-blue-800">{item.action}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Supported VR Platforms */}
          <div className="bg-white border-2 border-amber-200 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-amber-950 mb-8">
              🎯 Supported Platforms
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Meta Quest 3",
                  icon: "🎮",
                  support: "Full Support",
                },
                {
                  name: "HTC Vive Focus",
                  icon: "🎮",
                  support: "Full Support",
                },
                {
                  name: "Apple Vision Pro",
                  icon: "🎮",
                  support: "Full Support",
                },
                {
                  name: "Windows Mixed Reality",
                  icon: "🎮",
                  support: "Full Support",
                },
                {
                  name: "iPhone AR",
                  icon: "📱",
                  support: "Partial Support",
                },
                {
                  name: "Android AR",
                  icon: "📱",
                  support: "Full Support",
                },
                {
                  name: "Samsung GearVR",
                  icon: "🎮",
                  support: "Limited",
                },
                {
                  name: "Google Cardboard",
                  icon: "📦",
                  support: "Basic Support",
                },
              ].map((platform, idx) => (
                <Card key={idx} className="border-2 border-amber-200">
                  <CardHeader className="text-center">
                    <p className="text-4xl mb-2">{platform.icon}</p>
                    <CardTitle className="text-amber-950">
                      {platform.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="inline-block px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-sm font-semibold">
                      {platform.support}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Browser Compatibility Note */}
          <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 flex gap-4">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-amber-950 mb-2">
                ⚠️ Browser Compatibility
              </h3>
              <p className="text-sm text-amber-900">
                WebXR experiences work best in Chrome, Edge, and Firefox on Windows/Linux with compatible headsets. Mobile AR works on most modern iOS and Android devices. Make sure to enable XR permissions in your browser settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Clock({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
