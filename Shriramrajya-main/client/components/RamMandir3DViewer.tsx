import { Suspense, useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, Text, Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { Maximize, Minimize, RotateCcw, Sun, Moon, Box } from "lucide-react";
import { createXRStore, XR } from "@react-three/xr";

// ─── MATERIAL HELPERS ────────────────────────────────────────────────────────

const sandstone = new THREE.MeshStandardMaterial({
  color: "#d4a96a",
  roughness: 0.75,
  metalness: 0.05,
});
const darkStone = new THREE.MeshStandardMaterial({
  color: "#b8884a",
  roughness: 0.8,
  metalness: 0.02,
});
const goldMat = new THREE.MeshStandardMaterial({
  color: "#f5c842",
  roughness: 0.25,
  metalness: 0.85,
});
const whiteMat = new THREE.MeshStandardMaterial({
  color: "#fffdf5",
  roughness: 0.6,
  metalness: 0.0,
});
const redBrick = new THREE.MeshStandardMaterial({
  color: "#c87941",
  roughness: 0.85,
  metalness: 0.0,
});
const greenMat = new THREE.MeshStandardMaterial({
  color: "#3a7d44",
  roughness: 0.9,
  metalness: 0.0,
});

// ─── SHIKARA (CURVILINEAR SPIRE) ─────────────────────────────────────────────

function Shikhara({ height = 3.5, baseWidth = 1.2, color = "#d4a96a" }: {
  height?: number;
  baseWidth?: number;
  color?: string;
}) {
  const mat = useMemo(() => new THREE.MeshStandardMaterial({
    color, roughness: 0.7, metalness: 0.1
  }), [color]);

  // Stack reducing cylinders to make curvilinear shikhara
  const tiers = 12;
  return (
    <group>
      {Array.from({ length: tiers }).map((_, i) => {
        const t = i / tiers;
        // Exponential taper for nagara curve
        const r = baseWidth * 0.5 * Math.pow(1 - t, 0.55);
        const y = (i / tiers) * height;
        const tierH = height / tiers * 1.1;
        return (
          <mesh key={i} position={[0, y, 0]} material={mat} castShadow>
            <cylinderGeometry args={[r * 0.88, r, tierH, 8]} />
          </mesh>
        );
      })}
      {/* Amalaka (ribbed disk near top) */}
      <mesh position={[0, height * 0.88, 0]} material={mat} castShadow>
        <torusGeometry args={[baseWidth * 0.28, baseWidth * 0.08, 8, 16]} />
      </mesh>
      {/* Kalasha (golden finial) */}
      <mesh position={[0, height + 0.25, 0]} material={goldMat} castShadow>
        <sphereGeometry args={[baseWidth * 0.18, 10, 10]} />
      </mesh>
      {/* Flag pole */}
      <mesh position={[0, height + 0.25 + baseWidth * 0.18 + 0.3, 0]} castShadow>
        <cylinderGeometry args={[0.02, 0.02, 0.6, 6]} />
        <meshStandardMaterial color="#c8a030" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

// ─── SINGLE COLUMN ──────────────────────────────────────────────────────────

function Column({ height = 2, radius = 0.12 }: { height?: number; radius?: number }) {
  return (
    <group>
      {/* Base plinth */}
      <mesh position={[0, 0.05, 0]} material={darkStone} castShadow>
        <boxGeometry args={[radius * 3, 0.1, radius * 3]} />
      </mesh>
      {/* Shaft */}
      <mesh position={[0, height / 2 + 0.1, 0]} material={sandstone} castShadow>
        <cylinderGeometry args={[radius * 0.85, radius, height, 10]} />
      </mesh>
      {/* Capital */}
      <mesh position={[0, height + 0.1, 0]} material={darkStone} castShadow>
        <boxGeometry args={[radius * 2.4, 0.2, radius * 2.4]} />
      </mesh>
    </group>
  );
}

// ─── COLUMN ROW ──────────────────────────────────────────────────────────────

function ColumnRow({ count, spacing, z, height = 2 }: {
  count: number;
  spacing: number;
  z: number;
  height?: number;
}) {
  const total = (count - 1) * spacing;
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <Column
          key={i}
          height={height}
          radius={0.1}
        />
      ))}
    </>
  );
}

// ─── PLATFORM / JAGATI ───────────────────────────────────────────────────────

function Platform() {
  return (
    <group position={[0, 0, 0]}>
      {/* Main raised plinth (Jagati) - 3.5 tiers, total 2m high */}
      {[0.6, 0.5, 0.4, 0.3].map((h, i) => {
        const w = 14 - i * 0.6;
        const d = 11 - i * 0.5;
        const y = [0, 0.6, 1.1, 1.5][i];
        return (
          <mesh key={i} position={[0, y + h / 2, 0]} material={i % 2 === 0 ? sandstone : darkStone} receiveShadow castShadow>
            <boxGeometry args={[w, h, d]} />
          </mesh>
        );
      })}
      {/* Decorative border strip */}
      <mesh position={[0, 1.85, 0]} material={goldMat} castShadow>
        <boxGeometry args={[13.2, 0.08, 10.2]} />
      </mesh>
      {/* Steps - front */}
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh key={i} position={[0, i * 0.2, -5.5 - i * 0.38]} material={sandstone} receiveShadow>
          <boxGeometry args={[6, 0.2, 0.35]} />
        </mesh>
      ))}
    </group>
  );
}

// ─── GARBHAGRIHA (SANCTUM) + MAIN SHIKHARA ──────────────────────────────────

function GarbhagrihaBlock() {
  return (
    <group position={[0, 1.9, 0.8]}>
      {/* Square sanctum body */}
      <mesh position={[0, 1.5, 0]} material={sandstone} castShadow>
        <boxGeometry args={[5, 3, 5]} />
      </mesh>
      {/* Decorative horizontal bands */}
      {[0.5, 1.2, 2.0, 2.8].map((y, i) => (
        <mesh key={i} position={[0, y, 0]} material={i % 2 === 0 ? darkStone : goldMat} castShadow>
          <boxGeometry args={[5.2, 0.1, 5.2]} />
        </mesh>
      ))}
      {/* Door arch */}
      <mesh position={[0, 0.9, -2.51]} material={darkStone} castShadow>
        <boxGeometry args={[1.6, 2.2, 0.15]} />
      </mesh>
      {/* Main Shikhara on top */}
      <group position={[0, 3.1, 0]}>
        <Shikhara height={5.5} baseWidth={3.2} color="#d4a96a" />
      </group>
    </group>
  );
}

// ─── ANTARALA (VESTIBULE) ────────────────────────────────────────────────────

function AntaralaBlock() {
  return (
    <group position={[0, 1.9, -2.5]}>
      <mesh position={[0, 1.1, 0]} material={sandstone} castShadow>
        <boxGeometry args={[3.5, 2.2, 2]} />
      </mesh>
      {/* Bands */}
      {[0.3, 0.9, 1.7].map((y, i) => (
        <mesh key={i} position={[0, y, 0]} material={darkStone} castShadow>
          <boxGeometry args={[3.7, 0.08, 2.15]} />
        </mesh>
      ))}
      {/* Mini shikhara over antarala */}
      <group position={[0, 2.25, 0]}>
        <Shikhara height={2.5} baseWidth={1.8} color="#c8954a" />
      </group>
    </group>
  );
}

// ─── MAHA-MANDAPA (MAIN HALL) ────────────────────────────────────────────────

function MahaMandapa() {
  const colPositions: [number, number][] = [];
  // 4 rows x 4 columns = 16 columns in mandapa
  for (let x = -1.5; x <= 1.5; x += 1) {
    for (let z = -1; z <= 2; z += 1) {
      colPositions.push([x * 1.05, z * 1.05]);
    }
  }
  return (
    <group position={[0, 1.9, -5]}>
      {/* Floor */}
      <mesh position={[0, 0.05, 0]} material={whiteMat} receiveShadow>
        <boxGeometry args={[7.5, 0.1, 5]} />
      </mesh>
      {/* Columns */}
      {colPositions.map(([x, z], i) => (
        <group key={i} position={[x, 0.1, z]}>
          <Column height={2.2} radius={0.11} />
        </group>
      ))}
      {/* Flat roof/ceiling */}
      <mesh position={[0, 2.42, 0]} material={sandstone} castShadow>
        <boxGeometry args={[7.8, 0.2, 5.3]} />
      </mesh>
      {/* Decorative roof bands */}
      {[0.7, 1.4, 2.1].map((y, i) => (
        <mesh key={i} position={[0, 2.42 + y * 0.1, 0]} material={i % 2 === 0 ? darkStone : goldMat} castShadow>
          <boxGeometry args={[8, 0.06, 5.5]} />
        </mesh>
      ))}
      {/* Mandapa shikhara (smaller) */}
      <group position={[0, 2.65, 0]}>
        <Shikhara height={2.0} baseWidth={2.2} color="#c8954a" />
      </group>
    </group>
  );
}

// ─── MUKHA-MANDAPA (ENTRANCE PORCH) ──────────────────────────────────────────

function MukhaMandapa() {
  const frontColX = [-1.6, -0.53, 0.53, 1.6];
  return (
    <group position={[0, 1.9, -8.2]}>
      {/* Floor */}
      <mesh position={[0, 0.05, 0]} material={whiteMat} receiveShadow>
        <boxGeometry args={[7, 0.1, 3]} />
      </mesh>
      {/* Front columns */}
      {frontColX.map((x, i) => (
        <group key={i} position={[x, 0.1, 0]}>
          <Column height={2.4} radius={0.12} />
        </group>
      ))}
      {/* Back wall with ornate archway */}
      <mesh position={[0, 1.1, 1.4]} material={sandstone} castShadow>
        <boxGeometry args={[7, 2.4, 0.3]} />
      </mesh>
      {/* Large arched entrance in back wall */}
      <mesh position={[0, 0.9, 1.41]} material={darkStone} castShadow>
        <boxGeometry args={[2.6, 2.0, 0.08]} />
      </mesh>
      {/* Architrave / roof beam */}
      <mesh position={[0, 2.55, 0]} material={sandstone} castShadow>
        <boxGeometry args={[7.3, 0.18, 3.3]} />
      </mesh>
    </group>
  );
}

// ─── COMPOUND WALL ────────────────────────────────────────────────────────────

function CompoundWall() {
  const wallH = 1.0;
  const wallT = 0.3;
  // North/South/East/West segments
  const walls: [number, number, number, number, number][] = [
    // x, y, z, w, d
    [0, wallH / 2, -10.8, 17, wallT],  // front
    [0, wallH / 2, 7.5, 17, wallT],    // back
    [-8.5, wallH / 2, -2.0, wallT, 18.3],  // left
    [8.5, wallH / 2, -2.0, wallT, 18.3],   // right
  ];
  // Corner turrets
  const turrets: [number, number][] = [
    [-8.5, -10.8], [8.5, -10.8], [-8.5, 7.5], [8.5, 7.5]
  ];
  return (
    <group position={[0, 1.9, 0]}>
      {walls.map(([x, y, z, w, d], i) => (
        <mesh key={i} position={[x, y, z]} material={sandstone} castShadow>
          <boxGeometry args={[w, wallH, d]} />
        </mesh>
      ))}
      {/* Golden top strip */}
      {walls.map(([x, _, z, w, d], i) => (
        <mesh key={`g${i}`} position={[x, wallH, z]} material={goldMat} castShadow>
          <boxGeometry args={[w, 0.08, d]} />
        </mesh>
      ))}
      {/* Corner turrets */}
      {turrets.map(([tx, tz], i) => (
        <group key={i} position={[tx, 0, tz]}>
          <mesh position={[0, wallH / 2, 0]} material={sandstone} castShadow>
            <boxGeometry args={[0.8, wallH + 0.4, 0.8]} />
          </mesh>
          <group position={[0, wallH + 0.5, 0]}>
            <Shikhara height={1.4} baseWidth={0.55} color="#c09040" />
          </group>
        </group>
      ))}
      {/* Front gopuram arch */}
      <group position={[0, 0, -10.8]}>
        <mesh position={[0, wallH + 0.6, 0]} material={sandstone} castShadow>
          <boxGeometry args={[3.5, 1.5, 0.5]} />
        </mesh>
        <group position={[0, wallH + 2.0, 0]}>
          <Shikhara height={2.8} baseWidth={1.6} color="#c8954a" />
        </group>
      </group>
    </group>
  );
}

// ─── FLAGPOLES ────────────────────────────────────────────────────────────────

function Flagpoles() {
  const positions: [number, number][] = [[-4.5, 1.9], [4.5, 1.9]];
  return (
    <>
      {positions.map(([x, z], i) => (
        <group key={i} position={[x, 1.9, z]}>
          {/* Pole */}
          <mesh castShadow>
            <cylinderGeometry args={[0.04, 0.06, 6, 8]} />
            <meshStandardMaterial color="#c8a030" metalness={0.85} roughness={0.15} />
          </mesh>
          {/* Flag */}
          <mesh position={[0.5, 2.7, 0]} castShadow>
            <planeGeometry args={[1.0, 0.6]} />
            <meshStandardMaterial color="#ff6600" side={THREE.DoubleSide} />
          </mesh>
        </group>
      ))}
    </>
  );
}

// ─── SACRED LAMPS ────────────────────────────────────────────────────────────

function SacredLamps() {
  const lampRef = useRef<THREE.PointLight>(null!);
  useFrame(({ clock }) => {
    if (lampRef.current) {
      lampRef.current.intensity = 1.2 + Math.sin(clock.getElapsedTime() * 3) * 0.3;
    }
  });
  const positions: [number, number, number][] = [
    [-2.5, 2.3, -9], [2.5, 2.3, -9],
    [-2.5, 2.3, 4], [2.5, 2.3, 4],
  ];
  return (
    <>
      {positions.map(([x, y, z], i) => (
        <group key={i} position={[x, y, z]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.1, 0.14, 0.22, 8]} />
            <meshStandardMaterial color="#c8902a" metalness={0.7} roughness={0.3} />
          </mesh>
          <mesh position={[0, 0.18, 0]}>
            <sphereGeometry args={[0.08, 8, 8]} />
            <meshStandardMaterial color="#ffcc44" emissive="#ff8800" emissiveIntensity={3} />
          </mesh>
        </group>
      ))}
      <pointLight ref={lampRef} position={[0, 3.5, -5]} color="#ff9933" intensity={1.5} distance={15} />
    </>
  );
}

// ─── GROUND & PAVING ─────────────────────────────────────────────────────────

function Ground({ isDark }: { isDark: boolean }) {
  return (
    <group>
      {/* Paved courtyard */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial
          color={isDark ? "#2a1f10" : "#e8d5a0"}
          roughness={0.9}
          metalness={0.0}
        />
      </mesh>
      {/* Sacred Yatra path */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, -3]} receiveShadow>
        <planeGeometry args={[5.5, 20]} />
        <meshStandardMaterial color={isDark ? "#3a2a15" : "#d4b87a"} roughness={0.8} />
      </mesh>
    </group>
  );
}

// ─── FULL TEMPLE ASSEMBLY ─────────────────────────────────────────────────────

function RamMandirModel({ isDark }: { isDark: boolean }) {
  return (
    <group>
      <Ground isDark={isDark} />
      <Platform />
      <GarbhagrihaBlock />
      <AntaralaBlock />
      <MahaMandapa />
      <MukhaMandapa />
      <CompoundWall />
      <Flagpoles />
      <SacredLamps />

      {/* Floating divine text */}
      <Float speed={1.2} floatIntensity={0.3}>
        <Text
          position={[0, 11, -8]}
          fontSize={0.55}
          color="#FFD700"
          font={undefined}
          anchorX="center"
          anchorY="middle"
        >
          🕉 श्री राम मंदिर, अयोध्या
        </Text>
      </Float>

      {/* Sparkles for divine atmosphere */}
      <Sparkles
        count={60}
        scale={[16, 10, 14]}
        size={1.5}
        speed={0.4}
        color="#FFD700"
        position={[0, 5, -2]}
      />

      {/* Ambient contact shadows */}
      <ContactShadows
        position={[0, 0.01, 0]}
        opacity={isDark ? 0.5 : 0.35}
        scale={28}
        blur={2.5}
        far={10}
      />
    </group>
  );
}

// ─── CAMERA TOUR POINTS ───────────────────────────────────────────────────────

const TOUR_POINTS = [
  { position: [0, 8, 22] as [number, number, number], target: [0, 4, 0] as [number, number, number], label: "Front View" },
  { position: [18, 7, -2] as [number, number, number], target: [0, 5, 0] as [number, number, number], label: "Side View" },
  { position: [0, 18, 2] as [number, number, number], target: [0, 0, 0] as [number, number, number], label: "Aerial View" },
  { position: [-14, 6, -5] as [number, number, number], target: [0, 5, -2] as [number, number, number], label: "Sanctum View" },
  { position: [0, 4, -7] as [number, number, number], target: [0, 7, 0] as [number, number, number], label: "Close-Up Spire" },
];

// ─── MAIN EXPORTED COMPONENT ─────────────────────────────────────────────────

export function RamMandir3DViewer({ showXR = false }: { showXR?: boolean }) {
  const [isDark, setIsDark] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [tourIndex, setTourIndex] = useState(0);
  const [showTour, setShowTour] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const xrStore = useMemo(() => createXRStore(), []);

  // Auto-tour cycle
  useEffect(() => {
    if (!showTour) return;
    const interval = setInterval(() => {
      setTourIndex((i) => (i + 1) % TOUR_POINTS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [showTour]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && containerRef.current) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const currentPoint = TOUR_POINTS[tourIndex];

  return (
    <div
      ref={containerRef}
      className={`relative w-full rounded-2xl overflow-hidden border-4 border-amber-400 shadow-2xl ${isFullscreen ? "h-screen" : "h-[520px] md:h-[600px]"}`}
      style={{ background: isDark ? "#0d0a05" : "#f5e8c0" }}
    >
      {/* 3D Canvas */}
      <Canvas
        shadows
        camera={{
          position: showTour ? currentPoint.position : [0, 8, 22],
          fov: 50,
          near: 0.1,
          far: 500,
        }}
        dpr={[1, 2]}
        gl={{ antialias: true }}
      >
        <XR store={xrStore}>
          {/* Lighting */}
          <ambientLight intensity={isDark ? 0.3 : 0.7} color={isDark ? "#4a3a2a" : "#fff8f0"} />
          <directionalLight
            position={isDark ? [5, 8, 5] : [10, 15, 8]}
            intensity={isDark ? 0.6 : 1.8}
            color={isDark ? "#ff9944" : "#fff5e0"}
            castShadow
            shadow-mapSize={[2048, 2048]}
            shadow-camera-far={80}
            shadow-camera-left={-20}
            shadow-camera-right={20}
            shadow-camera-top={20}
            shadow-camera-bottom={-20}
          />
          {isDark && (
            <>
              <pointLight position={[0, 6, 0]} color="#ff6600" intensity={1.5} distance={30} />
              <pointLight position={[0, 3, -10]} color="#ff9933" intensity={0.8} distance={20} />
            </>
          )}

          <Suspense fallback={null}>
            <Environment preset={isDark ? "night" : "dawn"} />
            <RamMandirModel isDark={isDark} />
          </Suspense>

          <OrbitControls
            enableDamping
            dampingFactor={0.06}
            minDistance={5}
            maxDistance={55}
            maxPolarAngle={Math.PI / 2.1}
            target={showTour ? currentPoint.target : [0, 4, 0]}
            autoRotate={!showTour}
            autoRotateSpeed={0.6}
            touches={{ ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN }}
          />
        </XR>
      </Canvas>

      {/* Controls Overlay */}
      <div className="absolute top-3 right-3 flex flex-col gap-2">
        <button
          onClick={() => setIsDark(!isDark)}
          className="w-9 h-9 rounded-full bg-black/50 backdrop-blur text-white flex items-center justify-center hover:bg-black/70 transition"
          title={isDark ? "Switch to day" : "Switch to night"}
        >
          {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-blue-300" />}
        </button>
        <button
          onClick={toggleFullscreen}
          className="w-9 h-9 rounded-full bg-black/50 backdrop-blur text-white flex items-center justify-center hover:bg-black/70 transition"
          title="Toggle fullscreen"
        >
          {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
        </button>
        <button
          onClick={() => setShowTour(!showTour)}
          className={`w-9 h-9 rounded-full backdrop-blur text-white flex items-center justify-center transition text-xs font-bold ${showTour ? "bg-amber-600" : "bg-black/50 hover:bg-black/70"}`}
          title="Auto tour"
        >
          {showTour ? "⏸" : "▶"}
        </button>
      </div>

      {/* Bottom info bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-white text-xs sm:text-sm font-semibold">
            🏰 Ram Mandir, Ayodhya &nbsp;·&nbsp;
            <span className="text-amber-300">Inaugurated Jan 22, 2024</span>
          </div>
          <div className="text-white/70 text-xs hidden sm:block">
            🖱 Drag to rotate · Scroll to zoom · Pinch on mobile
          </div>
        </div>
        {showTour && (
          <div className="flex gap-1 mt-2">
            {TOUR_POINTS.map((p, i) => (
              <button
                key={i}
                onClick={() => setTourIndex(i)}
                className={`text-xs px-2 py-0.5 rounded-full transition ${i === tourIndex ? "bg-amber-500 text-white" : "bg-white/20 text-white/70 hover:bg-white/40"}`}
              >
                {p.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* XR Buttons */}
      {showXR && (
        <div className="absolute top-3 left-3 flex gap-2">
          <button
            onClick={() => xrStore.enterAR()}
            className="px-3 py-1.5 bg-orange-600 text-white text-xs font-bold rounded-lg hover:bg-orange-700 transition shadow-lg"
          >
            📱 AR
          </button>
          <button
            onClick={() => xrStore.enterVR()}
            className="px-3 py-1.5 bg-blue-700 text-white text-xs font-bold rounded-lg hover:bg-blue-800 transition shadow-lg"
          >
            🥽 VR
          </button>
        </div>
      )}
    </div>
  );
}

export default RamMandir3DViewer;
