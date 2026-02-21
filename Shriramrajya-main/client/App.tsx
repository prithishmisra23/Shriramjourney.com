import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MapPage from "./pages/Map";
import LocationDetail from "./pages/LocationDetail";
import ItineraryPage from "./pages/Itinerary";
import AboutRamayana from "./pages/About";
import Timeline from "./pages/Timeline";
import Quiz from "./pages/Quiz";
import Community from "./pages/Community";
import RamMandir from "./pages/RamMandir";
import JanakiMandir from "./pages/JanakiMandir";
import RameswaramPage from "./pages/Rameswaram";
import NashikPage from "./pages/Nashik";
import Premium from "./pages/Premium";
import SouvenirStore from "./pages/SouvenirStore";
import InternationalRamayana from "./pages/InternationalRamayana";
import DigitalPooja from "./pages/DigitalPooja";
import OfflineMode from "./pages/OfflineMode";
import ARVRWalk from "./pages/ARVRWalk";
import DarshanLivestreams from "./pages/DarshanLivestreams";
import PrivacyPolicy from "./pages/Privacy";
import ContactPage from "./pages/Contact";
import TermsAndConditions from "./pages/Terms";
import NotFound from "./pages/NotFound";
import { Chatbot } from "@/components/Chatbot";
import { LanguageProvider } from "@/context/LanguageContext";
import { SplashScreen } from "@/components/SplashScreen";
import { useState, useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("splashScreenShown");
    if (hasSeenSplash) {
      setShowSplash(false);
    }
  }, []);

  const handleSplashComplete = () => {
    sessionStorage.setItem("splashScreenShown", "true");
    setShowSplash(false);
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <LanguageProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/map" element={<MapPage />} />
                <Route path="/location/:id" element={<LocationDetail />} />
                <Route path="/itinerary" element={<ItineraryPage />} />
                <Route path="/about" element={<AboutRamayana />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/community" element={<Community />} />
                <Route path="/ram-mandir" element={<RamMandir />} />
                <Route path="/janaki-mandir" element={<JanakiMandir />} />
                <Route path="/rameswaram" element={<RameswaramPage />} />
                <Route path="/nashik" element={<NashikPage />} />
                <Route path="/premium" element={<Premium />} />
                <Route path="/souvenir-store" element={<SouvenirStore />} />
                <Route path="/international-ramayana" element={<InternationalRamayana />} />
                <Route path="/digital-pooja" element={<DigitalPooja />} />
                <Route path="/offline-mode" element={<OfflineMode />} />
                <Route path="/ar-vr-walk" element={<ARVRWalk />} />
                <Route path="/livestreams" element={<DarshanLivestreams />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/terms" element={<TermsAndConditions />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Chatbot />
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </LanguageProvider>
    </>
  );
};

export default App;
