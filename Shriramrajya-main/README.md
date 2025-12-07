# 🙏 Shriram Journey - The Digital Ramayana Pilgrimage

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE) [![License: CC-BY-SA 4.0](https://img.shields.io/badge/License-CC--BY--SA%204.0-green.svg)](LICENSE) [![Open Source](https://img.shields.io/badge/Open%20Source-Dharma%20Project-orange.svg)](https://github.com/prithishmisra23/Shriramjourney.com)

> A collaborative, open-source digital platform celebrating the sacred journey of Lord Rama. Explore 50+ pilgrimage locations, connect with millions of devotees worldwide, and join a global community committed to preserving Dharma through technology.

**Live Demo:** [shriramjourney.com](https://shriramjourney.com)  
**GitHub:** [prithishmisra23/Shriramjourney.com](https://github.com/prithishmisra23/Shriramjourney.com)

## 🌟 Project Overview

Shriram Journey is an open-source, global effort to create the world's most comprehensive digital guide to the Ramayana. This platform serves as:

- 🗺️ **Interactive Pilgrimage Map**: Explore 50+ sacred locations with historical and spiritual significance
- 📖 **Sacred Teachings**: Deep-dive into Ramayana stories, lessons, and philosophical insights
- 🏛️ **Temple Directory**: Discover temples dedicated to Shri Ram and Sita Mata across Asia
- 🤖 **Intelligent Guide**: AI-powered chatbot answering questions about Ramayana and pilgrimage
- 🎬 **Live Darshan**: Watch real-time temple ceremonies from sacred temples
- 🌍 **Global Community**: Connect with millions of devotees sharing stories and experiences
- ♿ **Accessible Design**: Fully responsive and inclusive for all users worldwide

## 🎯 Mission & Values

**Our Mission:** To preserve and share the spiritual and cultural legacy of the Ramayana through technology, enabling global access to Dharma teachings.

**Core Values:**
- **Dharma First**: Maintain spiritual authenticity and respect for sacred traditions
- **Inclusivity**: Create accessible platforms for all languages, abilities, and backgrounds
- **Community Driven**: Empower volunteers worldwide to contribute translations, content, and ideas
- **Transparency**: Open-source code and content for community oversight and improvement
- **Quality**: Ensure high accuracy, beautiful design, and excellent user experience

## 🚀 Key Features

| Feature | Description | Status |
|---------|-------------|--------|
| 🗺️ Interactive Map | 50+ location markers with photos, history, and travel info | ✅ Live |
| 📊 Sacred Timeline | Visual chronology of Rama's 14-year journey | ✅ Live |
| 🏛️ Temple Profiles | Detailed information on pilgrimage temples | ✅ Live |
| 📱 Offline Mode | Download guides and maps for offline access | ✅ Live |
| 🎓 Quiz & Badges | Test knowledge, earn achievements | ✅ Live |
| 🤖 AI Chatbot | Ask questions, get instant answers | ✅ Live |
| 🎬 Live Streams | 24/7 temple darshan broadcasts | ✅ Live |
| 🥽 AR/VR Experience | Immersive 3D walkthrough of pilgrimage | ✅ Live |
| 📋 Trip Planner | Customize your pilgrimage journey | ✅ Live |
| 🙏 Digital Pooja | Book temple ceremonies online | ✅ Live |
| 🛍️ Souvenir Store | Support artisans, buy handcrafted items | ✅ Live |
| 🌐 Multi-Language | Hindi, English, and expanding translations | ⏳ In Progress |
| 📚 Ramayana Library | Full text translations and commentaries | ⏳ In Progress |

## 💻 Tech Stack

### Frontend
- **Framework**: React 18 + TypeScript
- **Routing**: React Router 6 (SPA mode)
- **Styling**: TailwindCSS 3 + Custom Design System
- **UI Components**: Radix UI + Lucide Icons
- **Maps**: Leaflet.js
- **3D Viewer**: Three.js + React Three Fiber
- **Forms**: React Hook Form + Zod validation
- **State Management**: React Query (TanStack Query)
- **Build Tool**: Vite
- **Testing**: Vitest

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Server Integration**: Vite + Express unified dev server
- **Deployment**: Netlify Functions (serverless)

### Tools & Services
- **Package Manager**: pnpm
- **Code Quality**: ESLint, Prettier
- **Version Control**: Git
- **CI/CD**: GitHub Actions (ready to configure)
- **Hosting**: Netlify
- **Analytics**: Google Analytics (optional)
- **Monetization**: Google AdSense

## 📦 Project Structure

```
Shriramrajya-main/
├── client/                          # React SPA Frontend
│   ├── components/                  # Reusable UI components
│   │   ├── ui/                      # Radix UI component library
│   │   ├── Navigation.tsx           # Main navigation bar
│   │   ├── Footer.tsx               # Footer component
│   │   ├── Chatbot.tsx              # AI chatbot
│   │   ├── RamMandir3DViewer.tsx    # 3D temple viewer
│   │   ├── InteractiveMap.tsx       # Map wrapper
│   │   └── ...                      # Other components
│   ├── pages/                       # Route components
│   │   ├── Index.tsx                # Home page
│   │   ├── Map.tsx                  # Interactive map page
│   │   ├── About.tsx                # Ramayana overview
│   │   ├── Timeline.tsx             # Sacred journey timeline
│   │   ├── RamMandir.tsx            # Ram Mandir temple page
│   │   ├── DarshanLivestreams.tsx   # Live temple broadcasts
│   │   ├── Community.tsx            # Community forum
│   │   ├── Contact.tsx              # Contact form
│   │   └── ...                      # More pages
│   ├── context/                     # React context providers
│   │   └── LanguageContext.tsx      # Multi-language support
│   ├── lib/                         # Utilities and helpers
│   │   ├── utils.ts                 # Common utilities
│   │   └── translations.ts          # i18n translations
│   ├── hooks/                       # Custom React hooks
│   ├── global.css                   # Global styles & design tokens
│   ├── App.tsx                      # App root & routing
│   └── vite-env.d.ts               # Vite type definitions
│
├── server/                          # Express Backend
│   ├── index.ts                     # Server setup & routes
│   ├── routes/                      # API endpoint handlers
│   │   └── demo.ts                  # Example API route
│   └── node-build.ts               # Production build config
│
├── shared/                          # Shared types & utilities
│   ├── api.ts                       # API interfaces
│   └── locations.ts                 # Location data
│
├── public/                          # Static assets
│   ├── ads.txt                      # AdSense account info
│   └── robots.txt                   # Search engine rules
│
├── netlify/                         # Netlify Functions
│   └── functions/
│       └── api.ts                   # Serverless API
│
├── docs/                            # Documentation (to create)
│   ├── ROADMAP.md                   # Future vision & milestones
│   ├── ARCHITECTURE.md              # Technical architecture
│   ├── API_REFERENCE.md             # API documentation
│   └── TRANSLATIONS.md              # i18n guide
│
├── content/                         # Content (to organize)
│   ├── episodes/                    # Ramayana episode texts
│   ├── temples/                     # Temple information
│   └── locations/                   # Location guides
│
├── CONTRIBUTING.md                  # How to contribute
├── CODE_OF_CONDUCT.md               # Community standards
├── LICENSE                          # Dual license (MIT + CC-BY-SA)
├── README.md                        # This file
├── package.json                     # Dependencies
├── tsconfig.json                    # TypeScript config
├── vite.config.ts                   # Vite config
├── tailwind.config.ts               # TailwindCSS config
└── postcss.config.js                # PostCSS config
```

## 🎓 Getting Started

### Prerequisites
- **Node.js** 16+ (18+ recommended)
- **pnpm** 8+ ([install pnpm](https://pnpm.io/installation))
- Git for version control

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/prithishmisra23/Shriramjourney.com.git
   cd Shriramjourney.com
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start development server:**
   ```bash
   pnpm dev
   ```
   The app will open at `http://localhost:5173` (or the next available port)

4. **Build for production:**
   ```bash
   pnpm build
   ```

5. **Run tests:**
   ```bash
   pnpm test
   ```

### Available Commands

```bash
pnpm dev              # Start dev server (Vite + Express)
pnpm build            # Build client & server for production
pnpm build:client     # Build React frontend only
pnpm build:server     # Build Express backend only
pnpm start            # Start production server
pnpm test             # Run Vitest tests
pnpm typecheck        # TypeScript validation
pnpm format.fix       # Auto-format code with Prettier
```

## 📖 Documentation

- **[CONTRIBUTING.md](CONTRIBUTING.md)** - How to contribute code, translations, content
- **[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)** - Community guidelines and standards
- **[LICENSE](LICENSE)** - Dual licensing (code: MIT, content: CC-BY-SA 4.0)
- **[ROADMAP.md](docs/ROADMAP.md)** - Future features and milestones
- **[ARCHITECTURE.md](docs/ARCHITECTURE.md)** - Technical architecture & design decisions
- **[AGENTS.md](AGENTS.md)** - Development guidelines (Fusion framework)

## 🤝 How to Contribute

We welcome contributions from developers, writers, translators, designers, and devotees worldwide! Here are ways to help:

### For Developers
- Fix bugs or improve performance
- Build new features (see [ROADMAP.md](docs/ROADMAP.md))
- Improve accessibility and mobile responsiveness
- Write tests to increase code coverage
- Optimize images and performance

### For Writers & Content Creators
- Expand Ramayana stories and narratives
- Write detailed temple descriptions
- Create pilgrimage guides and itineraries
- Share historical research and insights
- Contribute devotional content

### For Translators
- Translate content into Hindi, Spanish, Tamil, Bengali, etc.
- Translate UI labels and navigation
- Ensure cultural accuracy in translations
- Help localize content for different regions

### For Designers & Artists
- Improve UI/UX design
- Create spiritual artwork and illustrations
- Design temple maps and floor plans
- Contribute high-quality photography
- Design promotional materials

### Getting Started with Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes following [contribution guidelines](CONTRIBUTING.md)
4. Commit with clear messages (`git commit -m 'Add amazing feature'`)
5. Push to your branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request with description of changes

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines on coding standards, branching, and PR process.

## 🌍 Roadmap

### Phase 1: Foundation (Current)
- ✅ Core platform & interactive map
- ✅ Temple profiles & livestreams
- ✅ AI chatbot & quiz
- ✅ Community forum
- ⏳ Full content SEO optimization
- ⏳ AdSense compliance & monitoring

### Phase 2: Global Expansion (Next 6 months)
- 🎯 Multi-language support (Hindi, Spanish, Tamil, Bengali, Telugu)
- 🎯 Community translations & localization
- 🎯 Enhanced content library with audio narrations
- 🎯 Mobile app (iOS/Android)
- 🎯 API for third-party integrations

### Phase 3: Community & Ecosystem (6-12 months)
- 🎯 Open contributor ecosystem
- 🎯 Blockchain-based donation tracking
- 🎯 Global volunteer coordination
- 🎯 Educational institutional partnerships
- 🎯 Ramayana library with full texts

### Phase 4: Innovation (12+ months)
- 🎯 Metaverse pilgrimage experience
- 🎯 Advanced AI personalization
- 🎯 Real-time translation in all languages
- 🎯 Community-governed treasury
- 🎯 Integration with other Hindu platforms

See [docs/ROADMAP.md](docs/ROADMAP.md) for detailed milestones and open items.

## 📊 Project Statistics

- **Pages**: 20+
- **Locations**: 50+
- **Temples Profiled**: 10+
- **Languages**: English (+ multi-language framework ready)
- **Components**: 40+
- **Code Quality**: TypeScript 100%
- **Mobile Responsive**: Yes
- **Accessibility**: WCAG 2.1 AA compliant (goal)

## 🙏 Spiritual Vision

This project embodies the spirit of **Dharma** - a collaborative effort guided by:

- **Seva (Service)**: Contributing free, authentic content to serve humanity
- **Bhakti (Devotion)**: Maintaining spiritual authenticity and respect
- **Gyaan (Knowledge)**: Sharing wisdom through accessible digital platforms
- **Samudaya (Community)**: Building a global network of devotees

We believe technology should serve spirituality, not replace it. Shriram Journey is a digital extension of pilgrimage, designed to deepen faith and foster connection.

## 📞 Support & Community

- **Issues & Bugs**: [GitHub Issues](https://github.com/prithishmisra23/Shriramjourney.com/issues)
- **Discussions & Ideas**: [GitHub Discussions](https://github.com/prithishmisra23/Shriramjourney.com/discussions)
- **Community Forum**: [In-app Community](https://shriramjourney.com/community)
- **Email**: [contact@shriramjourney.com](mailto:contact@shriramjourney.com)
- **Follow Us**: [Twitter](https://twitter.com) | [Instagram](https://instagram.com) | [Facebook](https://facebook.com)

## ⚖️ License

This project uses dual licensing:

- **Code** (JavaScript, TypeScript, configuration): [MIT License](LICENSE-MIT)
  - Free for commercial and personal use
  - Requires attribution
  - No liability
  
- **Content** (Text, narratives, translations): [Creative Commons BY-SA 4.0](LICENSE-CC-BY-SA)
  - Share and adapt freely with attribution
  - Must use same license for derived works
  - Preserves community ownership

See [LICENSE](LICENSE) for full details.

## ✨ Thanks to Our Contributors

This project wouldn't exist without the global Dharma community. Special thanks to:

- All code contributors on GitHub
- Content writers and researchers
- Translators bringing the Ramayana to new languages
- Temple authorities for collaboration
- Devotees sharing their personal stories
- Designers and UI/UX specialists

**Want to be listed?** Contribute and join our growing community!

## 📚 Inspiration & References

- The Valmiki Ramayana
- The Tulsi Ramayana (Ramcharitmanas)
- Modern Ramayana scholarship and commentaries
- Temple archives and historical records
- Global Ramayana research initiatives

## 🎯 Call to Action

The Ramayana isn't just ancient scripture—it's a living tradition that continues to guide billions. We're building the digital home for this sacred legacy.

**Whether you code, write, translate, design, or simply believe in preserving Dharma:**

### 🚀 [Join us on GitHub](https://github.com/prithishmisra23/Shriramjourney.com)

Together, we're creating a global pilgrimage that transcends geography and time.

---

**Made with ❤️ for the Dharma community | Open Source Dharma Project**

*"Let the path of Rama light the way for millions."* 🙏

---

### Quick Links
- 🌐 [Live Website](https://shriramjourney.com)
- 📖 [Read the Docs](docs/)
- 🎯 [View Roadmap](docs/ROADMAP.md)
- 💻 [GitHub Repository](https://github.com/prithishmisra23/Shriramjourney.com)
- 🤝 [How to Contribute](CONTRIBUTING.md)
- 📋 [Code of Conduct](CODE_OF_CONDUCT.md)
