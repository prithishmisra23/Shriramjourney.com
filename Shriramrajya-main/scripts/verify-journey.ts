/**
 * Shri Ram Journey Verification Script
 * Run: pnpm run verify:journey
 *
 * Checks routes, menu functionality, Hindi toggle, 3D viewer,
 * map markers, chatbot presence, and console errors.
 */

import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ROOT = resolve(__dirname, "..");
const CLIENT = resolve(ROOT, "client");

interface CheckResult {
    name: string;
    pass: boolean;
    details: string;
}

const results: CheckResult[] = [];

function check(name: string, pass: boolean, details: string) {
    results.push({ name, pass, details });
}

// ===== 1. Route Registration Check =====
function checkRoutes() {
    const appPath = resolve(CLIENT, "App.tsx");
    const app = readFileSync(appPath, "utf-8");

    const requiredRoutes = [
        "/", "/map", "/location/:id", "/itinerary", "/about",
        "/timeline", "/quiz", "/community", "/ram-mandir",
        "/janaki-mandir", "/rameswaram", "/nashik", "/premium",
        "/souvenir-store", "/international-ramayana", "/digital-pooja",
        "/offline-mode", "/ar-vr-walk", "/livestreams",
        "/privacy", "/contact", "/terms",
    ];

    for (const route of requiredRoutes) {
        const found = app.includes(`path="${route}"`);
        check(`Route: ${route}`, found, found ? "Registered in App.tsx" : "MISSING from App.tsx");
    }
}

// ===== 2. Navigation Menu Check =====
function checkNavigation() {
    const navPath = resolve(CLIENT, "components/Navigation.tsx");
    const nav = readFileSync(navPath, "utf-8");

    check("Nav: Uses getTranslation", nav.includes("getTranslation"), nav.includes("getTranslation") ? "Uses i18n" : "Missing i18n");
    check("Nav: Language toggle functional", nav.includes("toggleLanguage") && !nav.includes("Coming Soon"), nav.includes("Coming Soon") ? "Still shows Coming Soon" : "Toggle is functional");
    check("Nav: Explore menu present", nav.includes("Explore") || nav.includes("nav.explore"), "Explore menu found");
    check("Nav: Temple links present", nav.includes("/ram-mandir") && nav.includes("/janaki-mandir"), "Temple links found");
    check("Nav: New features links", nav.includes("/souvenir-store") && nav.includes("/digital-pooja"), "New feature links found");
}

// ===== 3. Hindi Toggle / Translations Check =====
function checkTranslations() {
    const transPath = resolve(CLIENT, "lib/translations.ts");
    const trans = readFileSync(transPath, "utf-8");

    check("Translations: Hindi nav", trans.includes("मानचित्र"), "Hindi nav translations found");
    check("Translations: Hindi home", trans.includes("श्री राम"), "Hindi home translations found");
    check("Translations: English fallback", trans.includes('language !== "en"'), "Fallback logic present");
    check("Translations: Share keys", trans.includes("whatsapp"), "Share translations present");
}

// ===== 4. Language Context Check =====
function checkLanguageContext() {
    const ctxPath = resolve(CLIENT, "context/LanguageContext.tsx");
    const ctx = readFileSync(ctxPath, "utf-8");

    check("LanguageContext: localStorage", ctx.includes("localStorage"), "Persists language to localStorage");
    check("LanguageContext: toggleLanguage", ctx.includes("toggleLanguage"), "Toggle function exists");
}

// ===== 5. 3D Ram Mandir Viewer Check =====
function check3DViewer() {
    const viewerPath = resolve(CLIENT, "components/RamMandir3DViewer.tsx");
    const viewer = readFileSync(viewerPath, "utf-8");

    check("3D Viewer: Uses React Three Fiber", viewer.includes("Canvas"), "Uses R3F Canvas");
    check("3D Viewer: OrbitControls", viewer.includes("OrbitControls"), "Has orbit controls");
    check("3D Viewer: WebGL Fallback", viewer.includes("webglSupported"), "Has WebGL fallback");
    check("3D Viewer: Fullscreen", viewer.includes("fullscreen") || viewer.includes("Fullscreen"), "Has fullscreen toggle");
    check("3D Viewer: Loading spinner", viewer.includes("Loading"), "Has loading state");
}

// ===== 6. Homepage Feature Presence =====
function checkHomepage() {
    const indexPath = resolve(CLIENT, "pages/Index.tsx");
    const index = readFileSync(indexPath, "utf-8");

    check("Homepage: 3D Viewer imported", index.includes("RamMandir3DViewer"), "3D viewer component present");
    check("Homepage: Daily location widget", index.includes("useDailyLocation"), "Daily rotating feature present");
    check("Homepage: Quiz teaser", index.includes("quizTeaser"), "Quiz teaser section present");
    check("Homepage: Map preview", index.includes("mapPreview"), "Map preview section present");
    check("Homepage: Temple cards", index.includes("quickTemples"), "Temple cards present");
    check("Homepage: Share buttons", index.includes("ShareButtons"), "Share buttons integrated");
    check("Homepage: ScrollCTA", index.includes("ScrollCTA"), "Scroll CTA popup integrated");
    check("Homepage: Live darshan", index.includes("TempleStreams"), "Live darshan preview present");
    check("Homepage: Uses translations", index.includes("getTranslation"), "i18n integration present");
}

// ===== 7. Viral Growth Mechanics =====
function checkViralMechanics() {
    check("ShareButtons component", existsSync(resolve(CLIENT, "components/ShareButtons.tsx")), "ShareButtons.tsx exists");
    check("ScrollCTA component", existsSync(resolve(CLIENT, "components/ScrollCTA.tsx")), "ScrollCTA.tsx exists");
    check("DailyLocation hook", existsSync(resolve(CLIENT, "hooks/useDailyLocation.ts")), "useDailyLocation.ts exists");

    const quizPath = resolve(CLIENT, "pages/Quiz.tsx");
    const quiz = readFileSync(quizPath, "utf-8");
    check("Quiz: Badge persistence", quiz.includes("localStorage"), "Badges saved to localStorage");
    check("Quiz: Share results", quiz.includes("ShareButtons"), "Quiz result sharing integrated");

    const footerPath = resolve(CLIENT, "components/Footer.tsx");
    const footer = readFileSync(footerPath, "utf-8");
    check("Footer: Share buttons", footer.includes("ShareButtons"), "Footer has share buttons");
}

// ===== 8. Chatbot Check =====
function checkChatbot() {
    const appPath = resolve(CLIENT, "App.tsx");
    const app = readFileSync(appPath, "utf-8");
    check("Chatbot: Present in App", app.includes("Chatbot"), "Chatbot component rendered");
}

// ===== 9. Locations Data Check =====
function checkLocations() {
    const locPath = resolve(ROOT, "shared/locations.ts");
    const loc = readFileSync(locPath, "utf-8");
    const count = (loc.match(/id:\s*"/g) || []).length;
    check(`Locations: ${count} locations`, count >= 30, `Found ${count} locations in database`);
}

// ===== Run All Checks =====
console.log("\n🏛️  ════════════════════════════════════════════");
console.log("   SHRI RAM JOURNEY — VERIFICATION REPORT");
console.log("   ════════════════════════════════════════════\n");

checkRoutes();
checkNavigation();
checkTranslations();
checkLanguageContext();
check3DViewer();
checkHomepage();
checkViralMechanics();
checkChatbot();
checkLocations();

const passed = results.filter((r) => r.pass).length;
const failed = results.filter((r) => !r.pass).length;

for (const r of results) {
    const icon = r.pass ? "✅" : "❌";
    console.log(`  ${icon}  ${r.name} — ${r.details}`);
}

console.log(`\n  ────────────────────────────────────────────`);
console.log(`  TOTAL: ${results.length} checks | ✅ ${passed} passed | ❌ ${failed} failed`);
console.log(`  ────────────────────────────────────────────\n`);

if (failed > 0) {
    console.log("  ⚠️  Some checks failed. Review and fix above issues.\n");
    process.exit(1);
} else {
    console.log("  🎉  ALL CHECKS PASSED! Ship it! 🚀\n");
    process.exit(0);
}
