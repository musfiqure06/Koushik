
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Defining intrinsic elements as components to resolve JSX type errors in environments without global R3F types.
// These aliases allow the renderer to still use the 'group' and 'ambientLight' tags at runtime while satisfying the TS compiler.
const Group = 'group' as any;
const AmbientLight = 'ambientLight' as any;

const ParticleField = () => {
  const ref = useRef<THREE.Points>(null!);
  const sphere = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    // Replaced intrinsic <group> with alias <Group> to resolve TS error
    <Group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </Group>
  );
};

const Background3D: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-slate-950">
      <Canvas camera={{ position: [0, 0, 1] }}>
        {/* Replaced intrinsic <ambientLight> with alias <AmbientLight> to resolve TS error */}
        <AmbientLight intensity={0.5} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <ParticleField />
        </Float>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950"></div>
    </div>
  );
};

export default Background3D;
