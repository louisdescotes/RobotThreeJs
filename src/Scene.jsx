import { useFrame, useLoader } from "@react-three/fiber";
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

  return (
    <>
      <ScrollControls pages={7.3} damping={0.3}>
        <Scroll html>
          <Interface /> 
        </Scroll>

        {/* 3D */}
        <Scroll>
          <group
          ref={sceneRef}
          position={[ 0, 0, -5]}
          >
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
            object={model.scene}
            position={[0, -2, 0]}
            scale={0.3}
            rotation={[0, -Math.PI / 2, 0]}
          />
          </group>
        </Scroll>

        <ScrollTrigger sceneRef={sceneRef} headRef={headRef}/>

      </ScrollControls>

      {/* Lumières */}
      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <spotLight
        castShadow
        position={[0, 3, 0]}
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

function ScrollTrigger({ sceneRef, headRef }) {
  const scroll = useScroll();

  useFrame(({ mouse }) => {
    const xRotation = -(mouse.y * Math.PI) / 5;
    const yRotation = (mouse.x * Math.PI) / 5;

    if (headRef.current && scroll.offset < 0.01) {
      headRef.current.rotation.x = xRotation;
      headRef.current.rotation.y = yRotation - Math.PI / 2;
    }

    if (scroll && sceneRef.current) {
      const scrollOffset = scroll.offset;

      // Position
      const defaultY = -.5;
      sceneRef.current.position.y = defaultY - scrollOffset * 40;

      const defaultZ = -6;
      const maxZ = -2;
      const newPositionZ = defaultZ + scrollOffset * 25;
      const finalPositionZ = Math.min(newPositionZ, maxZ);
      sceneRef.current.position.z = finalPositionZ;

      // Rotation
      const rotationBase = scrollOffset * Math.PI * 5;
      sceneRef.current.rotation.set(0, rotationBase, 0);

      // Scale
      const defaultScale = 2.5;
      const maxScale = 6;

      const newScale = defaultScale + scrollOffset * 8;
      const finalScale = Math.min(newScale, maxScale);

      sceneRef.current.scale.set(finalScale, finalScale, finalScale);
    }
  });
  return null;
}