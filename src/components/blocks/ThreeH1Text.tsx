import React from 'react';
import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';
import { colors } from '@/lib/color';
import { metalness } from 'three/tsl';

export const ThreeH1Text: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); //md breakpoint
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="h-[50px] md:h-[200px] w-full">
      <Canvas camera={{ position: [0, 0, 5] }} className="h-full w-full" shadows>
        <ambientLight intensity={3} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={2}
          castShadow
          shadow-mapSize={[1024, 1024]} // 影の解像度
        />
        <mesh position={[0, 0, -1]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <shadowMaterial opacity={0.3} />
        </mesh>

        {isMobile ? (
          // モバイル: 1行
          <Text3D font="/font/Inter_Bold.json" position={[-8, 0, 0]}>
            No Swig, All Swing
          </Text3D>
        ) : (
          // デスクトップ: 2行 + インデント
          <group position={[-8.5, 0, 0]}>
            <Text3D
              font="/font/Inter_Bold.json"
              position={[1, 0.8, 0]}
              size={1.6}
              height={0.25}
              curveSegments={32}
              bevelEnabled
              bevelSize={0.03}
              bevelThickness={0.1}
              letterSpacing={-0.03}
              rotation={[-0.1, -0.1, 0]}
            >
              No Swig,
              <meshStandardMaterial
                color={colors.flamingo}
                metalness={0.1}
                roughness={0.3}
              ></meshStandardMaterial>
            </Text3D>
            <Text3D
              font="/font/Inter_Bold.json"
              position={[2, -2, 0]}
              size={1.6}
              height={0.2}
              bevelEnabled={true}
              bevelSize={0.02}
              bevelThickness={0.01}
            >
              All Swing
              <meshStandardMaterial
                color={colors.flamingo}
                metalness={0.1}
                roughness={0.3}
              ></meshStandardMaterial>
            </Text3D>
          </group>
        )}
      </Canvas>
    </div>
  );
};
