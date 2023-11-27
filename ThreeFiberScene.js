import React, { useEffect } from 'react';
import { useAnimations } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three'; // Update this import

const ThreeFiberScene = () => {
  const modelAnimations = useAnimations();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      'https://threejs.org/examples/models/gltf/Soldier.glb',
      (gltf) => {
        modelAnimations.createActions(gltf.animations);
        modelAnimations.playAnimation(modelAnimations.names);
      }
    );
  }, []);

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <primitive object={modelAnimations.group} />
    </Canvas>
  );
};

export default ThreeFiberScene;
