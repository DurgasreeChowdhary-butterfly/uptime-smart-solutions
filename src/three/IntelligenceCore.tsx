import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

import { THEME_COLORS } from "@/constants/theme";

const PRIMARY = new THREE.Color(THEME_COLORS.primary);
const ACCENT = new THREE.Color(THEME_COLORS.accent);

function useParticlePositions(count: number, minRadius: number, maxRadius: number) {
  return useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = THREE.MathUtils.lerp(minRadius, maxRadius, Math.random());
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, [count, minRadius, maxRadius]);
}

/** Vertices of a regular icosahedron, used as fixed anchor points for the node/line lattice. */
function useLatticePoints(radius: number) {
  return useMemo(() => {
    const geometry = new THREE.IcosahedronGeometry(radius, 0);
    const position = geometry.attributes.position;
    const unique: THREE.Vector3[] = [];
    const seen = new Set<string>();
    for (let i = 0; i < position.count; i++) {
      const v = new THREE.Vector3().fromBufferAttribute(position, i);
      const key = `${v.x.toFixed(2)}_${v.y.toFixed(2)}_${v.z.toFixed(2)}`;
      if (!seen.has(key)) {
        seen.add(key);
        unique.push(v);
      }
    }
    geometry.dispose();
    return unique;
  }, [radius]);
}

/** Thin polygonal line loop — reads as a circuit trace rather than a smooth orbit. */
function useCircuitLoop(radius: number, segments: number) {
  return useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= segments; i++) {
      const a = (i / segments) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius, 0));
    }
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [radius, segments]);
}

interface OrbitRingProps {
  radius: number;
  tube: number;
  speed: number;
  axis: [number, number, number];
  color: THREE.Color;
  opacity?: number;
  reducedMotion?: boolean;
}

function OrbitRing({ radius, tube, speed, axis, color, opacity = 0.4, reducedMotion = false }: OrbitRingProps) {
  const ref = useRef<THREE.Mesh>(null);
  const rotationAxis = useMemo(() => new THREE.Vector3(...axis).normalize(), [axis]);

  useFrame((_, delta) => {
    if (reducedMotion) return;
    ref.current?.rotateOnAxis(rotationAxis, delta * speed);
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, tube, 12, 160]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} toneMapped={false} />
    </mesh>
  );
}

interface CircuitRingProps {
  radius: number;
  segments: number;
  axis: [number, number, number];
  tilt: [number, number, number];
  speed: number;
  color: THREE.Color;
  opacity?: number;
  reducedMotion?: boolean;
}

function CircuitRing({ radius, segments, axis, tilt, speed, color, opacity = 0.35, reducedMotion = false }: CircuitRingProps) {
  const ref = useRef<THREE.LineLoop>(null);
  const geometry = useCircuitLoop(radius, segments);
  const rotationAxis = useMemo(() => new THREE.Vector3(...axis).normalize(), [axis]);

  useFrame((_, delta) => {
    if (reducedMotion) return;
    ref.current?.rotateOnAxis(rotationAxis, delta * speed);
  });

  return (
    <lineLoop ref={ref} geometry={geometry} rotation={tilt}>
      <lineBasicMaterial color={color} transparent opacity={opacity} toneMapped={false} />
    </lineLoop>
  );
}

interface EnergyPulseProps {
  offset: number;
  duration: number;
  maxScale: number;
  color: THREE.Color;
}

/** A thin shell that expands outward from the nucleus and fades — a heartbeat of energy. */
function EnergyPulse({ offset, duration, maxScale, color }: EnergyPulseProps) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const mesh = ref.current;
    if (!mesh) return;
    const t = ((state.clock.elapsedTime + offset) % duration) / duration;
    const scale = THREE.MathUtils.lerp(0.12, maxScale, t);
    mesh.scale.setScalar(scale);
    const material = mesh.material as THREE.MeshBasicMaterial;
    material.opacity = (1 - t) * 0.3;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1, 24, 24]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0}
        wireframe
        toneMapped={false}
        depthWrite={false}
      />
    </mesh>
  );
}

interface NodeLatticeProps {
  radius: number;
  reducedMotion: boolean;
}

/** Small fixed nodes with thin connecting lines back to the nucleus — reads as a neural lattice. */
function NodeLattice({ radius, reducedMotion }: NodeLatticeProps) {
  const points = useLatticePoints(radius);
  const group = useRef<THREE.Group>(null);
  const nodeRefs = useRef<(THREE.Mesh | null)[]>([]);

  const lineGeometry = useMemo(() => {
    const positions = new Float32Array(points.length * 6);
    points.forEach((p, i) => {
      positions[i * 6] = 0;
      positions[i * 6 + 1] = 0;
      positions[i * 6 + 2] = 0;
      positions[i * 6 + 3] = p.x;
      positions[i * 6 + 4] = p.y;
      positions[i * 6 + 5] = p.z;
    });
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [points]);

  useFrame((state, delta) => {
    if (group.current && !reducedMotion) {
      group.current.rotation.y += delta * 0.05;
    }
    if (reducedMotion) return;
    const t = state.clock.elapsedTime;
    nodeRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const s = 1 + Math.sin(t * 1.6 + i * 1.3) * 0.22;
      mesh.scale.setScalar(s);
    });
  });

  return (
    <group ref={group}>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color={ACCENT} transparent opacity={0.16} toneMapped={false} />
      </lineSegments>
      {points.map((p, i) => (
        <mesh key={i} position={p} ref={(el) => (nodeRefs.current[i] = el)}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshBasicMaterial
            color={i % 3 === 0 ? ACCENT : PRIMARY}
            toneMapped={false}
            transparent
            opacity={0.85}
          />
        </mesh>
      ))}
    </group>
  );
}

interface IntelligenceCoreProps {
  reducedMotion?: boolean;
}

/**
 * The hero's centerpiece: a layered AI energy core inside a glass shell —
 * nucleus, wireframe lattice, node lines, circuit rings, orbit rings, energy
 * pulses, and a drifting particle field, each spinning at its own speed.
 */
export function IntelligenceCore({ reducedMotion = false }: IntelligenceCoreProps) {
  const group = useRef<THREE.Group>(null);
  const wireOuter = useRef<THREE.Mesh>(null);
  const nucleus = useRef<THREE.Mesh>(null);
  const halo = useRef<THREE.Mesh>(null);
  const particles = useRef<THREE.Points>(null);
  const particlesInner = useRef<THREE.Points>(null);
  const targetTilt = useRef({ x: 0, z: 0 });

  const particlePositions = useParticlePositions(200, 2.05, 2.75);
  const particlePositionsInner = useParticlePositions(60, 1.15, 1.9);

  useFrame((state, delta) => {
    const autoSpeed = reducedMotion ? 0.015 : 0.09;

    if (group.current) {
      group.current.rotation.y += delta * autoSpeed;

      targetTilt.current.x = state.pointer.y * 0.08;
      targetTilt.current.z = -state.pointer.x * 0.1;

      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        targetTilt.current.x,
        0.05,
      );
      group.current.rotation.z = THREE.MathUtils.lerp(
        group.current.rotation.z,
        targetTilt.current.z,
        0.05,
      );
    }

    if (!reducedMotion) {
      if (wireOuter.current) {
        wireOuter.current.rotation.y -= delta * 0.22;
        wireOuter.current.rotation.x += delta * 0.1;
      }
      if (particles.current) {
        particles.current.rotation.y += delta * 0.02;
      }
      if (particlesInner.current) {
        particlesInner.current.rotation.y -= delta * 0.035;
      }
      if (nucleus.current) {
        const pulse = 1 + Math.sin(state.clock.elapsedTime * 2.2) * 0.1;
        nucleus.current.scale.setScalar(pulse);
      }
      if (halo.current) {
        const pulse = 1 + Math.sin(state.clock.elapsedTime * 2.2 + 0.4) * 0.14;
        halo.current.scale.setScalar(pulse);
      }
    }
  });

  return (
    <group ref={group}>
      {/* Outer glass shell — thin alpha transparency so inner layers stay legible on any GPU */}
      <mesh>
        <sphereGeometry args={[1.6, 64, 64]} />
        <meshPhysicalMaterial
          color={PRIMARY}
          transparent
          opacity={0.07}
          roughness={0.05}
          metalness={0}
          clearcoat={1}
          clearcoatRoughness={0.08}
          iridescence={0.3}
          iridescenceIOR={1.2}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* Fresnel-style rim glow — cheap fake, no extra render pass */}
      <mesh scale={1.015}>
        <sphereGeometry args={[1.6, 48, 48]} />
        <meshBasicMaterial
          color={PRIMARY}
          transparent
          opacity={0.16}
          side={THREE.BackSide}
          toneMapped={false}
          depthWrite={false}
        />
      </mesh>

      {/* Mid-depth glow shell — a second, softer layer between the rim and the nucleus */}
      <mesh scale={0.7}>
        <sphereGeometry args={[1.6, 32, 32]} />
        <meshBasicMaterial
          color={PRIMARY}
          transparent
          opacity={0.05}
          side={THREE.BackSide}
          toneMapped={false}
          depthWrite={false}
        />
      </mesh>

      {/* Layer 2 — animated wireframe geometry, a single low-poly shell to keep the core legible */}
      <mesh ref={wireOuter}>
        <icosahedronGeometry args={[0.95, 0]} />
        <meshBasicMaterial color={PRIMARY} wireframe transparent opacity={0.22} toneMapped={false} />
      </mesh>

      {/* Node lattice — floating nodes with thin connecting lines to the nucleus */}
      <NodeLattice radius={1.15} reducedMotion={reducedMotion} />

      {/* Soft blue halo behind the nucleus — additive, no extra render pass, reads as bloom */}
      <mesh ref={halo}>
        <sphereGeometry args={[0.32, 20, 20]} />
        <meshBasicMaterial
          color={PRIMARY}
          transparent
          opacity={0.35}
          toneMapped={false}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Layer 1 — glowing intelligence nucleus, the object's visual focus */}
      <mesh ref={nucleus}>
        <sphereGeometry args={[0.16, 24, 24]} />
        <meshBasicMaterial color={PRIMARY} toneMapped={false} />
      </mesh>
      <pointLight color={PRIMARY} intensity={6} distance={4.6} decay={2} />

      {/* Layer 5 — subtle energy pulses emanating from the nucleus */}
      {!reducedMotion && (
        <>
          <EnergyPulse offset={0} duration={3.2} maxScale={1.3} color={PRIMARY} />
          <EnergyPulse offset={1.6} duration={3.2} maxScale={1.3} color={ACCENT} />
        </>
      )}

      {/* Layer 3 — thin circuit-like rings, close to the core */}
      <CircuitRing
        radius={1.32}
        segments={6}
        axis={[0.4, 1, 0]}
        tilt={[0.5, 0, 0]}
        speed={0.18}
        color={ACCENT}
        opacity={0.4}
        reducedMotion={reducedMotion}
      />
      <CircuitRing
        radius={1.48}
        segments={8}
        axis={[1, 0.2, 0.3]}
        tilt={[-0.35, 0.6, 0]}
        speed={-0.14}
        color={PRIMARY}
        opacity={0.3}
        reducedMotion={reducedMotion}
      />

      {/* Orbit rings — smooth, elegant, varied axes/speeds/opacity */}
      <OrbitRing
        radius={1.95}
        tube={0.008}
        speed={0.2}
        axis={[1, 0.25, 0]}
        color={PRIMARY}
        opacity={0.4}
        reducedMotion={reducedMotion}
      />
      <OrbitRing
        radius={2.18}
        tube={0.006}
        speed={-0.15}
        axis={[0.2, 1, 0.35]}
        color={PRIMARY}
        opacity={0.28}
        reducedMotion={reducedMotion}
      />
      <OrbitRing
        radius={2.4}
        tube={0.005}
        speed={0.11}
        axis={[0.5, 0.1, 1]}
        color={ACCENT}
        opacity={0.22}
        reducedMotion={reducedMotion}
      />
      <OrbitRing
        radius={2.6}
        tube={0.004}
        speed={-0.08}
        axis={[0.8, 0.6, 0.1]}
        color={PRIMARY}
        opacity={0.14}
        reducedMotion={reducedMotion}
      />

      {/* Layer 4 — floating particle field, two tones for depth */}
      <points ref={particles}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particlePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.017}
          color={PRIMARY}
          transparent
          opacity={0.5}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
      <points ref={particlesInner}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particlePositionsInner, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.014}
          color={ACCENT}
          transparent
          opacity={0.45}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </group>
  );
}
