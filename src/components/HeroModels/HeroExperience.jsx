import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room';
import HeroLights from './HeroLights';
import Particles from './Particles';

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 786px)' });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <HeroLights />
      <Particles count={100} />
      <group scale={isMobile ? 0.7 : 1} position={[0, -3.5, 0]}>
        <RotatingRoom />
      </group>
    </Canvas>
  );
};

const RotatingRoom = () => {
  const ref = React.useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={ref} rotation={[0, -Math.PI / 4, 0]}>
      <Room />
    </group>
  );
};

export default HeroExperience;

