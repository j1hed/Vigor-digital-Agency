import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text3D, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Animated floating geometry
const FloatingGeometry = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[1, 0]} />
      <MeshDistortMaterial
        color="#c0c0c0"
        metalness={1}
        roughness={0.2}
        distort={0.3}
        speed={2}
      />
    </mesh>
  );
};

// Chrome text
const ChromeText = () => {
  return (
    <Text3D
      font="/fonts/helvetiker_regular.typeface.json"
      size={1.5}
      height={0.2}
      position={[-2, 0, 0]}
    >
      VIGOR
      <meshStandardMaterial color="#c0c0c0" metalness={1} roughness={0.1} />
    </Text3D>
  );
};

export const ThreeDFallback = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4fc3f7" />
          
          {/* Floating geometries */}
          <FloatingGeometry position={[-3, 2, -2]} />
          <FloatingGeometry position={[3, -1, -1]} />
          <FloatingGeometry position={[0, 2, -3]} />
          
          {/* Chrome text (fallback if font doesn't load) */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[3, 0.5, 0.2]} />
            <meshStandardMaterial color="#c0c0c0" metalness={1} roughness={0.1} />
          </mesh>
          
          {/* Background sphere */}
          <mesh position={[0, 0, -10]} scale={20}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshBasicMaterial color="#000000" side={THREE.BackSide} />
          </mesh>
          
          {/* Controls */}
          <OrbitControls
            enableDamping
            dampingFactor={0.05}
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};