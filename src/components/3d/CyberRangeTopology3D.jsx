import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 3D Topology Visualization of Architecture Blueprint:
// Control Plane (Secure, Auth, Orchestration)
// Isolated Lab Plane (Default-deny egress, sandboxed workloads)
// Security Boundary (Zero Trust barrier)

function TopologyObjects() {
  const groupRef = useRef();
  const boundaryRingRef = useRef();

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.1 + pointer.x * 0.2;
      groupRef.current.rotation.x = 0.2 + pointer.y * 0.1;
    }
    if (boundaryRingRef.current) {
      boundaryRingRef.current.rotation.z = -t * 0.25;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* 1. CONTROL PLANE NODE (Left / Top) */}
      <group position={[-2.4, 0, 0]}>
        <mesh>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshBasicMaterial color="#38BDF8" wireframe transparent opacity={0.4} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshBasicMaterial color="#0284C7" transparent opacity={0.6} />
        </mesh>
      </group>

      {/* 2. ZERO-TRUST ISOLATION BARRIER (Center) */}
      <group position={[0, 0, 0]}>
        <mesh ref={boundaryRingRef}>
          <ringGeometry args={[1.6, 1.7, 32]} />
          <meshBasicMaterial color="#E57A00" side={THREE.DoubleSide} transparent opacity={0.7} />
        </mesh>
        <mesh rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[0.02, 3]} />
          <meshBasicMaterial color="#FFA439" transparent opacity={0.4} />
        </mesh>
      </group>

      {/* 3. ISOLATED LAB PLANE (Right / Disposable Sandbox Containers) */}
      <group position={[2.4, 0, 0]}>
        <mesh>
          <octahedronGeometry args={[1.2, 0]} />
          <meshBasicMaterial color="#E57A00" wireframe transparent opacity={0.5} />
        </mesh>
        <mesh position={[0, 0.7, 0.5]}>
          <sphereGeometry args={[0.3, 12, 12]} />
          <meshBasicMaterial color="#EF4444" transparent opacity={0.8} />
        </mesh>
        <mesh position={[0.6, -0.6, -0.4]}>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshBasicMaterial color="#F97316" transparent opacity={0.8} />
        </mesh>
      </group>

      {/* Ground Cyber Grid Plane */}
      <gridHelper args={[10, 20, '#E57A00', '#ffffff']} position={[0, -1.6, 0]}>
        <meshBasicMaterial transparent opacity={0.15} />
      </gridHelper>
    </group>
  );
}

export default function CyberRangeTopology3D() {
  return (
    <div className="w-full h-80 relative rounded-2xl overflow-hidden border border-white/10 bg-[#07090e]">
      <div className="absolute top-3 left-4 z-10 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span className="text-[10px] font-mono text-gray-300 uppercase tracking-wider">
          Interactive 3D Range Topology: Control vs Lab Plane
        </span>
      </div>
      <div className="absolute bottom-3 right-4 z-10 text-[9px] font-mono text-gray-500">
        Drag to inspect isolated security boundary
      </div>
      <Canvas
        camera={{ position: [0, 2, 6.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.7} />
        <TopologyObjects />
      </Canvas>
    </div>
  );
}
