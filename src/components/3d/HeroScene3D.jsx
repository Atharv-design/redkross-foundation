import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Ultra-clean, hyper-modern Cybernetic 3D Mesh
// Deep ambient neural constellation + flowing orbital horizon lines
// Completely eliminates noisy overlapping balls and jagged torus rings.

function CyberHorizonMesh() {
  const pointsRef = useRef();
  const waveLinesRef = useRef();

  // Create subtle, distributed cybernetic particle starfield
  const { positions, colors } = useMemo(() => {
    const count = 1200;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const orangeColor = new THREE.Color('#E57A00');
    const cyanColor = new THREE.Color('#0FB7B7');
    const deepBlue = new THREE.Color('#1E293B');

    for (let i = 0; i < count; i++) {
      // Wide atmospheric distribution in depth
      const x = (Math.random() - 0.5) * 28;
      const y = (Math.random() - 0.5) * 16;
      const z = -4 - Math.random() * 12;

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      // Color gradation: left side amber/orange, right side cyan/teal, center deep subtle
      const mixRatio = (x + 14) / 28;
      const mixedColor = new THREE.Color().lerpColors(orangeColor, cyanColor, mixRatio);
      if (Math.random() > 0.6) {
        mixedColor.lerp(deepBlue, 0.4);
      }

      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }

    return { positions: pos, colors: col };
  }, []);

  // Subtle floating cyber matrix grid at the bottom horizon
  const gridLines = useMemo(() => {
    const lines = [];
    const size = 30;
    const divisions = 25;
    for (let i = -size / 2; i <= size / 2; i += size / divisions) {
      lines.push(new THREE.Vector3(i, -3.8, -15), new THREE.Vector3(i, -3.8, 5));
      lines.push(new THREE.Vector3(-size / 2, -3.8, i), new THREE.Vector3(size / 2, -3.8, i));
    }
    return lines;
  }, []);

  const gridGeometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(gridLines);
  }, [gridLines]);

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.02 + pointer.x * 0.08;
      pointsRef.current.rotation.x = Math.sin(t * 0.03) * 0.04 - pointer.y * 0.06;
    }
    if (waveLinesRef.current) {
      waveLinesRef.current.position.y = -3.8 + Math.sin(t * 0.4) * 0.08;
      waveLinesRef.current.rotation.y = pointer.x * 0.05;
    }
  });

  return (
    <>
      {/* 1. Deep Atmospheric Micro-Starfield */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.065}
          vertexColors
          transparent
          opacity={0.65}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* 2. Cybernetic Horizon Grid (Subtle, sleek, non-intrusive) */}
      <lineSegments ref={waveLinesRef} geometry={gridGeometry}>
        <lineBasicMaterial
          color="#E57A00"
          transparent
          opacity={0.09}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* 3. Soft Ambient Vignette Rings (Deep in the background behind text) */}
      <group position={[0, 0, -6]}>
        <mesh rotation={[Math.PI / 2.2, 0, 0]}>
          <ringGeometry args={[4.5, 4.52, 64]} />
          <meshBasicMaterial color="#E57A00" transparent opacity={0.12} side={THREE.DoubleSide} />
        </mesh>
        <mesh rotation={[Math.PI / 2.2, 0, 0]}>
          <ringGeometry args={[6.5, 6.52, 64]} />
          <meshBasicMaterial color="#0FB7B7" transparent opacity={0.1} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </>
  );
}

export default function HeroScene3D() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="w-full h-full"
      >
        <CyberHorizonMesh />
      </Canvas>
    </div>
  );
}
