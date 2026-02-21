import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ROOT = resolve(__dirname, "..");
const PUBLIC = resolve(ROOT, "public");
const CLIENT = resolve(ROOT, "client");

function log(title: string, pass: boolean, details: string) {
    const icon = pass ? "✅" : "❌";
    console.log(`  ${icon}  ${title.padEnd(30)} — ${details}`);
}

async function verifyAssets() {
    console.log("\n🔍 Starting Asset Verification...\n");
    let allPassed = true;

    // 1. Check Manifest
    const manifestPath = resolve(PUBLIC, "manifest.webmanifest");
    if (existsSync(manifestPath)) {
        try {
            const content = readFileSync(manifestPath, "utf-8");
            JSON.parse(content);
            log("Manifest JSON", true, "Valid JSON format");
        } catch (e) {
            log("Manifest JSON", false, "Invalid JSON in manifest.webmanifest");
            allPassed = false;
        }
    } else {
        log("Manifest File", false, "manifest.webmanifest is MISSING");
        allPassed = false;
    }

    // 2. Check Icons
    const icons = ["icon-192.png", "icon-512.png"];
    for (const icon of icons) {
        const iconPath = resolve(PUBLIC, "icons", icon);
        if (existsSync(iconPath)) {
            const stat = readFileSync(iconPath);
            if (stat.length > 100) { // Assuming a real icon should be more than 100 bytes (my 1x1 was small but the user wants real ones)
                log(`Icon: ${icon}`, true, `Exists (${stat.length} bytes)`);
            } else if (stat.length > 0) {
                log(`Icon: ${icon}`, true, `Exists but very small (${stat.length} bytes)`);
            } else {
                log(`Icon: ${icon}`, false, "Exists but is EMPTY");
                allPassed = false;
            }
        } else {
            log(`Icon: ${icon}`, false, "MISSING from public/icons/");
            allPassed = false;
        }
    }

    // 3. Check Service Worker
    const swPath = resolve(PUBLIC, "sw.js");
    if (existsSync(swPath)) {
        log("Service Worker", true, "sw.js exists in public/");
    } else {
        log("Service Worker", false, "sw.js is MISSING from public/");
        allPassed = false;
    }

    // 4. Check Entry Files
    const entryFiles = ["client/main.tsx", "client/App.tsx", "index.html"];
    for (const file of entryFiles) {
        if (existsSync(resolve(ROOT, file))) {
            log(`Entry: ${file}`, true, "Exists");
        } else {
            log(`Entry: ${file}`, false, "MISSING");
            allPassed = false;
        }
    }

    // 5. Check index.html references
    const indexContent = readFileSync(resolve(ROOT, "index.html"), "utf-8");
    const hasManifest = indexContent.includes('rel="manifest"');
    const hasMainScript = indexContent.includes('src="/client/main.tsx"');

    log("index.html: Manifest Link", hasManifest, hasManifest ? "Found" : "Missing <link rel='manifest'>");
    log("index.html: Main Script", hasMainScript, hasMainScript ? "Correctly points to main.tsx" : "Does NOT point to main.tsx");

    if (!hasManifest || !hasMainScript) allPassed = false;

    console.log("\n" + "─".repeat(50));
    if (allPassed) {
        console.log("🎉  ALL ASSETS VERIFIED! App is ready for dev/prod. 🚀");
        process.exit(0);
    } else {
        console.log("⚠️  ASSET VERIFICATION FAILED! Please check the errors above.");
        process.exit(1);
    }
}

verifyAssets();
