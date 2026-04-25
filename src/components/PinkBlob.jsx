import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, OrbitControls, Environment } from '@react-three/drei';

function Blob({ scale = 1.4, color = "#ff2e93", speed = 1.5, distort = 0.35 }) {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} scale={scale}>
      <icosahedronGeometry args={[1, 12]} />
      <MeshDistortMaterial
        color={color}
        metalness={0.85}
        roughness={0.1}
        distort={distort}
        speed={speed}
        envMapIntensity={1.5}
      />
    </mesh>
  );
}

export default function PinkBlob({ scale = 1.4, interactive = true }) {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} style={{ cursor: interactive ? 'grab' : 'none' }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="hsla(331, 61%, 73%, 1.00)" />
        <Environment preset="city" />
        <Blob scale={scale} />
        {interactive && (
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1}
          />
        )}
      </Canvas>
    </div>
  );
}

export function MiniBlob({ scale = 0.5 }) {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }} style={{ cursor: 'grab' }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} intensity={0.8} />
        <pointLight position={[-3, -3, -3]} intensity={0.4} color="#ff2e93" />
        <Environment preset="city" />
        <Blob scale={scale} speed={2} distort={0.45} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={2}
        />
      </Canvas>
    </div>
  );
}
