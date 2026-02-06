import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';

const MovingGrid = () => {
    const gridRef = useRef();

    useFrame((state) => {
        if(gridRef.current) {
             // Move the grid towards the camera
             gridRef.current.position.z = (state.clock.getElapsedTime() * 10) % 10;
        }
    });

    return (
        <group position={[0, -2, 0]}>
             <gridHelper
                ref={gridRef}
                args={[100, 50, 0xff00ff, 0x00f3ff]}
             />
             {/* Duplicate grid to make it look infinite/seamless if needed,
                 but modulo on position z handles the loop reasonably well for a simple effect.
                 To make it seamless, we might need two grids.
             */}
             <gridHelper
                args={[100, 50, 0xff00ff, 0x00f3ff]}
                position={[0, 0, -50]}
             />
        </group>
    );
}


const FloatingCubes = () => {
    const groupRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        groupRef.current.children.forEach((child, i) => {
            child.position.y = Math.sin(t + i * 100) * 1 + i * 0.5;
            child.rotation.x = t * 0.5;
            child.rotation.z = t * 0.2;
        });
    });

    return (
        <group ref={groupRef}>
             {[...Array(20)].map((_, i) => (
                <mesh key={i} position={[
                    (Math.random() - 0.5) * 30,
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 30
                ]}>
                    <boxGeometry args={[0.5, 0.5, 0.5]} />
                    <meshStandardMaterial
                        color="#00f3ff"
                        emissive="#00f3ff"
                        emissiveIntensity={2}
                    />
                </mesh>
            ))}
        </group>
    )
}

const Scene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2, 10]} />
      <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />

      <color attach="background" args={['#050505']} />
      <fog attach="fog" args={['#050505', 5, 30]} />

      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />
      <pointLight position={[-10, 10, -10]} intensity={1} color="#ff00ff" />

      <MovingGrid />
      <FloatingCubes />
    </>
  );
};

export default Scene;
