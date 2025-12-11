import React from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './Scene';

const CanvasContainer = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
};

export default CanvasContainer;
