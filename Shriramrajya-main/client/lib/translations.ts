export const translations = {
  en: {
    // Navigation
    nav: {
      map: "Map",
      timeline: "Timeline",
      itinerary: "Itinerary",
      explore: "Explore",
      temples: "Sacred Temples",
      learn: "Learn & Engage",
      newFeatures: "New Features",
      ramMandir: "Ram Mandir",
      janakiMandir: "Janaki Mandir",
      nashik: "Nashik & Panchavati",
      rameswaram: "Rameswaram",
      quiz: "Quiz & Learning",
      stories: "Stories",
      international: "International Ramayana",
      store: "Souvenir Store",
      pooja: "Digital Pooja",
      livestreams: "Live Darshan",
      offline: "Offline Mode",
      vrar: "VR/AR Experience",
      kids: "Kids Learning",
    },
    // Home Page
    home: {
      heroTitle: "The Journey of",
      heroTitleHighlight: "Shri Ram",
      heroSubtitle:
        "From the sacred city of Ayodhya to the distant shores of Lanka, follow the divine path of Lord Rama through his epic journey.",
      exploreButton: "Explore the Journey →",
      ramMandirTitle: "🏰 Ram Mandir in 3D",
      ramMandirDesc: "Explore the newly inaugurated Ram Mandir - drag to rotate, scroll to zoom",
      mandirHeight: "49m",
      mandirHeightLabel: "Height",
      mandirInauguration: "Inaugurated Jan 2024",
      mandirSeismic: "Seismic Design",
      sacredMandirs: "🏛️ Sacred Mandirs",
      sacredMandirDesc: "Explore the divine temples dedicated to Shri Ram and Sita Mata",
      livedarshan: "Live Darshan",
      journeyTimeline: "🕉️ The Sacred Journey",
      journeyTimelineDesc:
        "Trace the divine path of Lord Rama through the pivotal moments of his life",
      whyChoose: "Why Choose Bhagwan Shri Ram Journey?",
      whyChooseDesc: "Everything you need for a meaningful spiritual journey",
      beginJourney: "Begin Your Divine Journey Today",
      beginJourneyDesc: "Join millions of devotees exploring the sacred legacy of Shri Ram",
      startExploring: "Start Exploring →",
    },
    // Common
    common: {
      loading: "Loading...",
      error: "Error",
      success: "Success",
      save: "Save",
      cancel: "Cancel",
      close: "Close",
      learnMore: "Learn More →",
      explore: "Explore",
      bookNow: "Book Now",
      download: "Download",
      subscribe: "Subscribe",
      viewMore: "View More",
    },
  },
  hi: {
    // Navigation
    nav: {
      map: "मानचित्र",
      timeline: "समयरेखा",
      itinerary: "यात्रा योजना",
      explore: "खोजें",
      temples: "पवित्र मंदिर",
      learn: "सीखें और जुड़ें",
      newFeatures: "नई सुविधाएं",
      ramMandir: "राम मंदिर",
      janakiMandir: "जनकी मंदिर",
      nashik: "नाशिक और पंचवटी",
      rameswaram: "रामेश्वरम",
      quiz: "प्रश्नोत्तरी और शिक्षा",
      stories: "कहानियां",
      international: "भारत से परे रामायण",
      store: "स्मृति चिन्ह की दुकान",
      pooja: "डिजिटल पूजा",
      livestreams: "लाइव दर्शन",
      offline: "ऑफ़लाइन मोड",
      vrar: "VR/AR अनुभव",
      kids: "बच्चों के लिए सीखना",
    },
    // Home Page
    home: {
      heroTitle: "की यात्रा",
      heroTitleHighlight: "श्री राम",
      heroSubtitle:
        "अयोध्या के पवित्र शहर से लेकर लंका के दूर तटों तक, भगवान राम के महान जीवन पथ को जानें।",
      exploreButton: "यात्रा शुरू करें →",
      ramMandirTitle: "🏰 3D में राम मंदिर",
      ramMandirDesc: "नव निर्मित राम मंदिर को देखें - घुमाने के लिए खींचें, ज़ूम के लिए स्क्र��ल करें",
      mandirHeight: "49मी",
      mandirHeightLabel: "ऊंचाई",
      mandirInauguration: "जनवरी 2024 को उद्घाटित",
      mandirSeismic: "भूकंप सहन क्षमता",
      sacredMandirs: "🏛️ पवित्र मंदिर",
      sacredMandirDesc: "श्री राम और सीता माता को समर्पित मंदिरों को जानें",
      livedarshan: "लाइव दर्शन",
      journeyTimeline: "🕉️ पवित्र यात्रा",
      journeyTimelineDesc: "राम की जीवन यात्रा के मुख्य क्षणों को देखें",
      whyChoose: "भगवान श्री राम यात्रा क्यों चुनें?",
      whyChooseDesc: "अर्थपूर्ण आध्यात्मिक यात्रा के लिए जो कुछ भी चाहिए",
      beginJourney: "आज अपनी दिव्य यात्रा शुरू करें",
      beginJourneyDesc: "लाखों भक्तों के साथ श्री राम की पवित्र विरासत को जानें",
      startExploring: "खोजना शुरू करें →",
    },
    // Common
    common: {
      loading: "लोड हो रहा है...",
      error: "त्रुटि",
      success: "सफल",
      save: "सहेजें",
      cancel: "रद्द करें",
      close: "बंद करें",
      learnMore: "और जानें →",
      explore: "खोजें",
      bookNow: "अभी बुक करें",
      download: "डाउनलोड करें",
      subscribe: "सदस्य बनें",
      viewMore: "और देखें",
    },
  },
};

export type Language = "en" | "hi";

export function getTranslation(
  path: string,
  language: Language
): string {
  const keys = path.split(".");
  let value: any = translations[language];

  for (const key of keys) {
    value = value?.[key];
  }

  return value || path;
}
