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

  useFrame(({ mouse, camera }) => {
    const xRotation = -(mouse.y * Math.PI) / 5;
    const yRotation = (mouse.x * Math.PI) / 5;

    headRef.current.rotation.x = xRotation;
    headRef.current.rotation.y = yRotation - Math.PI / 2;

    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ScrollControls pages={7} damping={0.3}>
        <Scroll html>
          <Interface /> 
        </Scroll>

        {/* 3D */}
        <Scroll>
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
        </Scroll>

        <ScrollTrigger headRef={headRef} />

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

function ScrollTrigger({ headRef }) {
  const scroll = useScroll();

  useFrame(() => {
    if (scroll && headRef.current) {
      const scrollOffset = scroll.offset;

      // Position
      const defaultY = -.7;

      headRef.current.position.y = defaultY - scrollOffset * 45;

      // Scale
      const defaultScale = 0.3;
      const maxScale = 0.8;

      const newScale = defaultScale + scrollOffset * 2;

      const finalScale = Math.min(newScale, maxScale);

      headRef.current.scale.set(finalScale, finalScale, finalScale);
    }
  });
  return null;
}
