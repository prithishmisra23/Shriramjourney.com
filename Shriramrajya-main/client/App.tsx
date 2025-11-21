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
import NotFound from "./pages/NotFound";
import { Chatbot } from "@/components/Chatbot";

const queryClient = new QueryClient();

const App = () => (
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Chatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const rootElement = document.getElementById("root");
if (rootElement && !rootElement.hasChildNodes()) {
  createRoot(rootElement).render(<App />);
}
