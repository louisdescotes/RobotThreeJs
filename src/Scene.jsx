import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { useRef } from "react";
import { Scroll, ScrollControls, useScroll } from "@react-three/drei";
import Interface from "./Interface";

export default function Scene() {
  const model = useLoader(GLTFLoader, "/test.glb", (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/");
    loader.setDRACOLoader(dracoLoader);
  });

  const headRef = useRef();
  const sceneRef = useRef();
  const scroll = useScroll();

  useFrame(({ mouse }) => {
    // const rotationSpeed = Math.PI;
    // const scrollFactor = scroll.offset;
    // headRef.current.scale.z = scrollFactor * rotationSpeed;
    // headRef.current.scale.y = scrollFactor * rotationSpeed;

    const xRotation = -(mouse.y * Math.PI) / 5;
    const yRotation = (mouse.x * Math.PI) / 5;
    headRef.current.rotation.x = xRotation;
    headRef.current.rotation.y = yRotation - Math.PI / 2;
  });

  return (
    <>
      <ScrollControls pages={7}>
        <Scroll html>
          <Interface /> 
        </Scroll>

        {/* 3D */}
        <group
          ref={headRef}
          scale={0.3}
          position={[0, -0.7, 0.1]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <primitive position={[0, 0, 0]} object={model.nodes.TETE} />
          <primitive object={model.nodes.ANTENNE} />
          <primitive
            position={[0, 1.9, 0]}
            scale={3}
            object={model.nodes.ANTENNEBOULE}
          />
          <primitive object={model.nodes.NOEIL} />
          <primitive object={model.nodes.NOEIL2} />
        </group>

        <primitive
          ref={sceneRef}
          object={model.scene}
          position={[0, -2, 0]}
          scale={0.3}
          rotation={[0, -Math.PI / 2, 0]}
        />
      </ScrollControls>

      {/* Lumières */}
      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <spotLight
        castShadow
        position={[0, 2, 0]}
        penumbra={1}
        distance={6}
        angle={0.35}
        intensity={100}
      />
      <spotLight
        castShadow
        position={[1, 2, 0]}
        penumbra={1}
        distance={6}
        angle={0.35}
        intensity={100}
      />
    </>
  );
}
