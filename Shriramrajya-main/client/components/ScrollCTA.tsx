import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, ArrowRight } from "lucide-react";
import { useNextSuggestion } from "@/hooks/useDailyLocation";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/translations";

export function ScrollCTA() {
    const [visible, setVisible] = useState(false);
    const [dismissed, setDismissed] = useState(false);
    const nextLocation = useNextSuggestion();
    const { language } = useLanguage();
    const t = (key: string) => getTranslation(key, language);

    useEffect(() => {
        if (dismissed) return;
        const alreadyShown = sessionStorage.getItem("scrollCTADismissed");
        if (alreadyShown) { setDismissed(true); return; }

        const handleScroll = () => {
            const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
            if (scrollPercent > 0.4 && !dismissed) {
                setVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [dismissed]);

    const handleDismiss = () => {
        setDismissed(true);
        setVisible(false);
        sessionStorage.setItem("scrollCTADismissed", "true");
    };

    if (!visible || dismissed) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50 animate-slideUp">
            <div className="bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-2xl shadow-2xl p-5 max-w-xs border-2 border-amber-400/50 backdrop-blur">
                <button
                    onClick={handleDismiss}
                    className="absolute top-2 right-2 p-1 hover:bg-white/20 rounded-full transition"
                >
                    <X className="w-4 h-4" />
                </button>
                <p className="font-bold text-sm mb-1">🙏 {t("share.continueJourney")}</p>
                <p className="text-xs text-amber-100 mb-3">{nextLocation.name} — {nextLocation.state}</p>
                <Link
                    to={`/location/${nextLocation.id}`}
                    onClick={handleDismiss}
                    className="flex items-center gap-2 text-xs font-bold bg-white text-amber-800 px-4 py-2 rounded-lg hover:bg-amber-50 transition"
                >
                    {t("share.visitNext")}
                    <ArrowRight className="w-3 h-3" />
                </Link>
            </div>
        </div>
    );
}
