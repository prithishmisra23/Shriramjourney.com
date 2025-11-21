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
import { Download, MapPin, FileText, Wifi, WifiOff, AlertCircle } from "lucide-react";
import { useState } from "react";

interface DownloadItem {
  id: string;
  title: string;
  description: string;
  fileSize: string;
  lastUpdated: string;
  downloads: number;
  icon: string;
  category: string;
  content: string;
}

export default function OfflineMode() {
  const [downloadedItems, setDownloadedItems] = useState<Set<string>>(
    new Set()
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const downloadItems: DownloadItem[] = [
    {
      id: "complete-guide",
      title: "Complete Ramayana Journey Guide",
      description:
        "Comprehensive PDF guide covering all 50+ locations with maps, timings, and travel tips",
      fileSize: "45 MB",
      lastUpdated: "Jan 2024",
      downloads: 12500,
      icon: "📚",
      category: "guides",
      content: "Complete guide with all locations, descriptions, and travel information",
    },
    {
      id: "offline-map",
      title: "Interactive Offline Map",
      description:
        "Downloadable offline map with all sacred locations, routes, and navigation",
      fileSize: "85 MB",
      lastUpdated: "Jan 2024",
      downloads: 8900,
      icon: "🗺️",
      category: "maps",
      content: "Offline map data for navigation without internet",
    },
    {
      id: "pilgrimage-routes",
      title: "20 Pilgrimage Routes",
      description: "Pre-planned pilgrimage itineraries from 3 to 30 days",
      fileSize: "22 MB",
      lastUpdated: "Dec 2023",
      downloads: 6200,
      icon: "🚶",
      category: "itineraries",
      content: "Detailed pilgrimage routes with daily schedules",
    },
    {
      id: "temple-directory",
      title: "Temple Directory & Contact Info",
      description: "All temples with addresses, phone numbers, darshan timings",
      fileSize: "8 MB",
      lastUpdated: "Jan 2024",
      downloads: 9800,
      icon: "🏛️",
      category: "directories",
      content: "Complete temple information directory",
    },
    {
      id: "ramayana-summary",
      title: "Ramayana Story Summary",
      description:
        "Illustrated summary of Ramayana with key characters and events",
      fileSize: "32 MB",
      lastUpdated: "Nov 2023",
      downloads: 15300,
      icon: "📖",
      category: "guides",
      content: "Story summary with illustrations",
    },
    {
      id: "location-photos",
      title: "1000+ Location Photos & Images",
      description:
        "High-resolution photos of all sacred sites for visual reference",
      fileSize: "245 MB",
      lastUpdated: "Jan 2024",
      downloads: 4500,
      icon: "📷",
      category: "media",
      content: "Photo gallery of all locations",
    },
    {
      id: "travel-checklist",
      title: "Pilgrimage Travel Checklist",
      description: "Complete packing list and preparation guide for pilgrims",
      fileSize: "5 MB",
      lastUpdated: "Dec 2023",
      downloads: 7100,
      icon: "✅",
      category: "guides",
      content: "Travel checklist and preparation guide",
    },
    {
      id: "budget-guide",
      title: "Budget Planning Guide 2024",
      description: "Detailed cost breakdown for 2-week pilgrimage with various budget options",
      fileSize: "12 MB",
      lastUpdated: "Jan 2024",
      downloads: 8700,
      icon: "💰",
      category: "guides",
      content: "Budget information and cost planning",
    },
    {
      id: "languages",
      title: "Phrasebook in 12 Languages",
      description: "Essential phrases for pilgrims in Hindi, English, Tamil, Telugu and more",
      fileSize: "15 MB",
      lastUpdated: "Jan 2024",
      downloads: 5600,
      icon: "🗣️",
      category: "references",
      content: "Language phrasebook for pilgrims",
    },
    {
      id: "historical-timeline",
      title: "Historical Timeline of Ramayana",
      description: "Detailed timeline with historical context and significance of events",
      fileSize: "18 MB",
      lastUpdated: "Dec 2023",
      downloads: 4200,
      icon: "📅",
      category: "references",
      content: "Historical timeline and context",
    },
  ];

  const categories = [
    { id: "all", label: "All Downloads" },
    { id: "guides", label: "Guides & Checklists" },
    { id: "maps", label: "Maps & Navigation" },
    { id: "itineraries", label: "Itineraries" },
    { id: "directories", label: "Directories" },
    { id: "media", label: "Photos & Media" },
    { id: "references", label: "Reference Materials" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? downloadItems
      : downloadItems.filter((item) => item.category === selectedCategory);

  const handleDownload = (id: string) => {
    const newDownloaded = new Set(downloadedItems);
    newDownloaded.add(id);
    setDownloadedItems(newDownloaded);

    // Simulate download
    const item = downloadItems.find((i) => i.id === id);
    if (item) {
      const element = document.createElement("a");
      const file = new Blob([item.content], { type: "application/pdf" });
      element.href = URL.createObjectURL(file);
      element.download = `${item.title}.pdf`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  };

  const totalDownloads = downloadItems.reduce((sum) => sum + 1, 0);
  const totalSize = downloadItems.reduce(
    (sum, item) => sum + parseInt(item.fileSize),
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-700 to-amber-900 text-white">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <h1 className="font-playfair font-bold text-5xl sm:text-6xl">
            📱 Offline Mode for Pilgrims
          </h1>
          <p className="text-lg sm:text-xl text-amber-100 max-w-2xl mx-auto">
            Download complete guides, maps, and resources to explore sacred
            locations without internet connection
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-amber-950 text-lg">
                  Total Downloads
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-amber-700">
                  {downloadItems.length}
                </p>
                <p className="text-sm text-amber-800 mt-2">
                  Resources Available
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-amber-950 text-lg">
                  Total Size
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-amber-700">
                  {Math.round(totalSize / 1024)} GB
                </p>
                <p className="text-sm text-amber-800 mt-2">
                  All files combined
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-amber-950 text-lg">
                  Downloaded
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-amber-700">
                  {downloadedItems.size}
                </p>
                <p className="text-sm text-amber-800 mt-2">
                  Items saved locally
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Offline Features */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-amber-950 mb-8 flex items-center gap-2">
              <WifiOff className="w-6 h-6 text-amber-700" />
              Features & Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "🗺️",
                  title: "Complete Maps",
                  desc: "Full offline map navigation",
                },
                {
                  icon: "📍",
                  title: "GPS Tracking",
                  desc: "Navigate using coordinates",
                },
                {
                  icon: "🔍",
                  title: "Search Functionality",
                  desc: "Search locations offline",
                },
                {
                  icon: "📝",
                  title: "Detailed Info",
                  desc: "Temple timings & details",
                },
                {
                  icon: "📸",
                  title: "Photo Gallery",
                  desc: "1000+ reference photos",
                },
                {
                  icon: "🎯",
                  title: "Route Planning",
                  desc: "Pre-planned itineraries",
                },
                {
                  icon: "💬",
                  title: "Phrasebooks",
                  desc: "Languages in 12 scripts",
                },
                {
                  icon: "📊",
                  title: "Budget Tools",
                  desc: "Expense tracking offline",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-4 border border-amber-200 text-center"
                >
                  <p className="text-3xl mb-2">{feature.icon}</p>
                  <h3 className="font-bold text-amber-950 text-sm">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-amber-800 mt-1">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-amber-950 mb-6">
              📥 Available Downloads
            </h2>
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-semibold transition ${
                    selectedCategory === category.id
                      ? "bg-amber-700 text-white shadow-lg"
                      : "bg-white border-2 border-amber-200 text-amber-900 hover:border-amber-400"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Download Items */}
            <div className="space-y-4">
              {filteredItems.map((item) => (
                <Card
                  key={item.id}
                  className="border-2 border-amber-200 hover:shadow-lg transition"
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-grow">
                        <div className="flex items-start gap-4">
                          <span className="text-4xl">{item.icon}</span>
                          <div className="flex-grow">
                            <h3 className="text-lg font-bold text-amber-950 mb-2">
                              {item.title}
                            </h3>
                            <p className="text-sm text-amber-900 mb-4">
                              {item.description}
                            </p>
                            <div className="flex flex-wrap gap-4 text-xs text-amber-700">
                              <span className="flex items-center gap-1">
                                <FileText className="w-4 h-4" />
                                {item.fileSize}
                              </span>
                              <span>Updated: {item.lastUpdated}</span>
                              <span>
                                {item.downloads.toLocaleString()} downloads
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Button
                        className={`flex-shrink-0 ${
                          downloadedItems.has(item.id)
                            ? "bg-green-600 hover:bg-green-700"
                            : "bg-amber-700 hover:bg-amber-800"
                        } text-white font-semibold`}
                        onClick={() => handleDownload(item.id)}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        {downloadedItems.has(item.id) ? "Downloaded" : "Download"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Getting Started */}
          <div className="bg-white border-2 border-amber-200 rounded-xl p-8 space-y-8">
            <h2 className="text-2xl font-bold text-amber-950">
              🚀 Getting Started with Offline Mode
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: "1️⃣",
                  title: "Download Resources",
                  desc: "Click download on any resource above. Files will be saved to your device.",
                },
                {
                  step: "2️⃣",
                  title: "Access Without Internet",
                  desc: "Once downloaded, access resources anytime without internet connection.",
                },
                {
                  step: "3️⃣",
                  title: "Use Maps & Navigation",
                  desc: "Open offline maps for navigation and find locations using GPS.",
                },
                {
                  step: "4️⃣",
                  title: "Refer to Guides",
                  desc: "Check guides for temple timings, routes, and important information.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 pb-6 border-b border-amber-200 last:border-0">
                  <div className="text-3xl flex-shrink-0">{item.step}</div>
                  <div>
                    <h3 className="font-bold text-amber-950 text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-amber-900">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Storage Tip */}
          <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-xl p-6 flex gap-4">
            <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-blue-900 mb-2">💡 Storage Tip</h3>
              <p className="text-sm text-blue-800">
                Download the "Complete Guide" and "Offline Map" first for the best offline experience. You can download additional resources based on your interests. Total size of all resources is approximately {Math.round(totalSize / 1024)} GB.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
