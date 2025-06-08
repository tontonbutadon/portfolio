'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import dynamic from 'next/dynamic';
import * as THREE from 'three';
import { Stars } from '@react-three/drei';

const OrbitControls = dynamic(() => import('@react-three/drei').then((mod) => mod.OrbitControls), {
  ssr: false,
});

const HeroSection: React.FC = () => {
  return (
    <section className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <mesh>
          <torusKnotGeometry></torusKnotGeometry>
          <meshNormalMaterial></meshNormalMaterial>
        </mesh>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {/* <OrbitControls /> */}
      </Canvas>
    </section>
  );
};

export default HeroSection;
