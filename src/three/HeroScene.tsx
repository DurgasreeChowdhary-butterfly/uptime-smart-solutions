import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

import { THEME_COLORS } from "@/constants/theme";
import { useMediaQuery } from "@/hooks";

import { IntelligenceCore } from "./IntelligenceCore";

const PRIMARY = new THREE.Color(THEME_COLORS.primary);
const ACCENT = new THREE.Color(THEME_COLORS.accent);

interface StarfieldProps {
  reducedMotion?: boolean;
}

/** Sparse, distant points for ambient depth behind the core — fixed, not tied to the core's rotation. */
function Starfield({ reducedMotion = false }: StarfieldProps) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 180;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = THREE.MathUtils.lerp(4.2, 7.5, Math.random());
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current && !reducedMotion) ref.current.rotation.y += delta * 0.006;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.012}
        color="#ffffff"
        transparent
        opacity={0.35}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/** Canvas shell for the hero's 3D centerpiece — lighting, camera, and perf budget live here. */
export function HeroScene() {
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 7], fov: 42 }}
    >
      <Suspense fallback={null}>
        {/* Soft radial glow behind the core, layered for richness — additive, no texture needed */}
        <mesh position={[0, 0, -3]}>
          <sphereGeometry args={[3.1, 24, 24]} />
          <meshBasicMaterial
            color={PRIMARY}
            transparent
            opacity={0.05}
            toneMapped={false}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
        <mesh position={[0, 0, -2]}>
          <sphereGeometry args={[2.2, 24, 24]} />
          <meshBasicMaterial
            color={PRIMARY}
            transparent
            opacity={0.045}
            toneMapped={false}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        <Starfield reducedMotion={reducedMotion} />

        <ambientLight intensity={0.45} />
        <pointLight color={PRIMARY} intensity={3.5} distance={10} position={[3.5, 2, 4]} decay={2} />
        <pointLight color={ACCENT} intensity={0.8} distance={10} position={[-3.5, -1.5, -2]} decay={2} />
        <pointLight color="#ffffff" intensity={0.75} distance={8} position={[-2, 3, 5]} decay={2} />

        <IntelligenceCore reducedMotion={reducedMotion} />
      </Suspense>
    </Canvas>
  );
}
