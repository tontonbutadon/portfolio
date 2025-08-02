import React from 'react';
import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';
import { colors } from '@/lib/color';
import * as THREE from 'three';

export const ThreeH1Text: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const frontMaterial = new THREE.MeshStandardMaterial({
    color: colors.flamingo,
    metalness: 0.3,
    roughness: 0.25,
  });

  const sideMaterial = new THREE.MeshStandardMaterial({
    color: colors.accent2,
    metalness: 0.1,
    roughness: 0.4,
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); //md breakpoint
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 7.5], fov: 50 }} className="h-full w-full" shadows>
        <ambientLight intensity={3} />
        <directionalLight
          position={[-5, 2.4, 10]}
          intensity={1.5}
          castShadow
          shadow-mapSize={[1024, 1024]} // 影の解像度
        />
        <directionalLight
          position={[-3, -1, 10]}
          intensity={1.5}
          castShadow
          shadow-mapSize={[1024, 1024]} // 影の解像度
        />
        <mesh position={[0, 0, -1]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <shadowMaterial opacity={0.3} />
        </mesh>

        {isMobile ? (
          // モバイル: 1行
          <Center>
            <Text3D
              font="/font/Reggae One_Regular.json"
              position={[-2, 2.2, 0]}
              size={1.2}
              height={0.3}
              curveSegments={32}
              bevelEnabled
              bevelSize={0.3}
              bevelThickness={0.3}
              letterSpacing={0.25}
              rotation={[0, 0.01, 0]}
              material={[frontMaterial, sideMaterial]}
            >
              ここに何を
            </Text3D>
            <Text3D
              font="/font/Reggae One_Regular.json"
              position={[-1, 0, 0]}
              size={1.2}
              height={0.3}
              curveSegments={32}
              bevelEnabled
              bevelSize={0.3}
              bevelThickness={0.3}
              letterSpacing={0.25}
              rotation={[0, 0.01, 0]}
              material={[frontMaterial, sideMaterial]}
            >
              いれるか
            </Text3D>
            <Text3D
              font="/font/Reggae One_Regular.json"
              position={[-1, -2.2, 0]}
              size={1.2}
              height={0.3}
              curveSegments={32}
              bevelEnabled
              bevelSize={0.3}
              bevelThickness={0.3}
              letterSpacing={0.25}
              rotation={[0, 0.01, 0]}
              material={[frontMaterial, sideMaterial]}
            >
              考え中！
            </Text3D>
          </Center>
        ) : (
          // デスクトップ: 3行 + インデント
          <Center>
            <group position={[-8.5, 0, 0]}>
              <Text3D
                font="/font/Reggae One_Regular.json"
                position={[3.5, 1.5, 0]}
                size={1.2}
                height={0.3}
                curveSegments={32}
                bevelEnabled
                bevelSize={0.3}
                bevelThickness={0.3}
                letterSpacing={0.25}
                rotation={[0, 0.01, 0]}
                material={[frontMaterial, sideMaterial]}
              >
                ここに何を
              </Text3D>
              <Text3D
                font="/font/Reggae One_Regular.json"
                position={[3.5, -0.6, 0]}
                size={1.2}
                height={0.3}
                curveSegments={32}
                bevelEnabled
                bevelSize={0.3}
                bevelThickness={0.3}
                letterSpacing={0.25}
                rotation={[0, 0.01, 0]}
                material={[frontMaterial, sideMaterial]}
              >
                いれるか
              </Text3D>
              <Text3D
                font="/font/Reggae One_Regular.json"
                position={[3.5, -2.7, 0]}
                size={1.2}
                height={0.4}
                curveSegments={32}
                bevelEnabled
                bevelSize={0.3}
                bevelThickness={0.3}
                letterSpacing={0.25}
                rotation={[0, 0.01, 0]}
                material={[frontMaterial, sideMaterial]}
              >
                考え中！
              </Text3D>
            </group>
          </Center>
        )}
      </Canvas>
    </div>
  );
};
