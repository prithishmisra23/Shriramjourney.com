import { useState } from "react";
import { Share2, MessageCircle, Twitter, Link, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/translations";

interface ShareButtonsProps {
    title?: string;
    url?: string;
    compact?: boolean;
}

export function ShareButtons({ title, url, compact = false }: ShareButtonsProps) {
    const [copied, setCopied] = useState(false);
    const { language } = useLanguage();
    const t = (key: string) => getTranslation(key, language);

    const shareUrl = url || window.location.href;
    const shareTitle = title || t("share.shareTitle") + " – " + document.title;

    const handleWhatsApp = () => {
        const waUrl = `https://wa.me/?text=${encodeURIComponent(shareTitle + "\n" + shareUrl)}`;
        window.open(waUrl, "_blank");
    };

    const handleTwitter = () => {
        const twUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`;
        window.open(twUrl, "_blank");
    };

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Fallback
            const input = document.createElement("input");
            input.value = shareUrl;
            document.body.appendChild(input);
            input.select();
            document.execCommand("copy");
            document.body.removeChild(input);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    if (compact) {
        return (
            <div className="flex items-center gap-2">
                <button
                    onClick={handleWhatsApp}
                    className="p-2 rounded-full bg-green-500 hover:bg-green-600 text-white transition"
                    title={t("share.whatsapp")}
                >
                    <MessageCircle className="w-4 h-4" />
                </button>
                <button
                    onClick={handleTwitter}
                    className="p-2 rounded-full bg-sky-500 hover:bg-sky-600 text-white transition"
                    title={t("share.twitter")}
                >
                    <Twitter className="w-4 h-4" />
                </button>
                <button
                    onClick={handleCopyLink}
                    className="p-2 rounded-full bg-gray-600 hover:bg-gray-700 text-white transition"
                    title={t("share.copyLink")}
                >
                    {copied ? <Check className="w-4 h-4" /> : <Link className="w-4 h-4" />}
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-amber-800">
                <Share2 className="w-4 h-4" />
                <span>{t("share.sharePage")}</span>
            </div>
            <div className="flex gap-2">
                <button
                    onClick={handleWhatsApp}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white text-sm font-medium transition"
                >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                </button>
                <button
                    onClick={handleTwitter}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium transition"
                >
                    <Twitter className="w-4 h-4" />
                    Twitter
                </button>
                <button
                    onClick={handleCopyLink}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-medium transition ${copied ? "bg-green-500" : "bg-gray-600 hover:bg-gray-700"
                        }`}
                >
                    {copied ? <Check className="w-4 h-4" /> : <Link className="w-4 h-4" />}
                    {copied ? t("share.copied") : t("share.copyLink")}
                </button>
            </div>
        </div>
    );
}
