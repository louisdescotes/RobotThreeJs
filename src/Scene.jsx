import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { useRef } from "react";
import {
  Box,
  GradientTexture,
  MeshRefractionMaterial,
  MeshWobbleMaterial,
  PerspectiveCamera,
  Scroll,
  ScrollControls,
  useScroll,
} from "@react-three/drei";
import Interface from "./Interface";
import {
  DirectionalLightHelper,
} from "three";
import { useHelper } from "@react-three/drei";

export default function Scene() {
  const model = useLoader(GLTFLoader, "/test.glb", (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/");
    loader.setDRACOLoader(dracoLoader);
  });

  const headRef = useRef();
  const sceneRef = useRef();
  const directionalLightRef = useRef();
  const directionalLightRef2 = useRef();
  const directionalLightRef3 = useRef();

  // useHelper(directionalLightRef, DirectionalLightHelper);
  // useHelper(directionalLightRef2, DirectionalLightHelper);
  // useHelper(directionalLightRef3, DirectionalLightHelper);

  return (
    <>
      <ScrollControls pages={7.3} damping={0.3}>
        <Scroll html>
          <Interface />
        </Scroll>

        {/* Mesh */}

        {/* 3D */}
        <Scroll>
          <group ref={sceneRef} position={[0, 0, -5]}>
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

        <ScrollTrigger
          sceneRef={sceneRef}
          headRef={headRef}
          box1Ref={box1Ref}
          box2Ref={box2Ref}
          box3Ref={box3Ref}
        />
      </ScrollControls>

      {/* Lumières */}
      <directionalLight
        ref={directionalLightRef}
        castShadow
        position={[0.3, 0.3, 1]}
        color={"#FAFAFA"}
        intensity={4}
      />

      <ambientLight intensity={0.5} />

      <directionalLight
        castShadow
        position={[0, 1, 0]}
        intensity={2}
        color={"#1B80FF"}
      />

      <directionalLight
        ref={directionalLightRef2}
        castShadow
        position={[2, 0.2, 0.2]}
        intensity={10}
        color={"#1B80FF"}
      />

      <directionalLight
        ref={directionalLightRef3}
        castShadow
        position={[-4, 1, -2]}
        intensity={12}
        color={"#6644FF"}
      />
    </>
  );
}

function ScrollTrigger({ sceneRef, headRef, box1Ref, box2Ref, box3Ref }) {
  const scroll = useScroll();

  useFrame(({ mouse }) => {
    const xRotation = -(mouse.y * Math.PI) / 5;
    const yRotation = (mouse.x * Math.PI) / 5;

    if (headRef.current && scroll.offset < 0.01) {
      headRef.current.rotation.x = xRotation;
      headRef.current.rotation.y = yRotation - Math.PI / 2;
    }


    if (box1Ref.current && box2Ref.current && box3Ref.current) {
      box1Ref.current.rotation.x += 0.003;
      box1Ref.current.rotation.y += 0.003;

      box2Ref.current.rotation.x -= 0.005;
      box2Ref.current.rotation.y += 0.005;

      box3Ref.current.rotation.x += 0.004;
      box3Ref.current.rotation.y -= 0.004;

      const rotationSpeed = Math.PI * 5 * scroll.offset;
      box1Ref.current.rotation.x += scroll.offset *  0.001; 
      box1Ref.current.rotation.y += 0.001; 

      box2Ref.current.rotation.x += 0.001; 
      box2Ref.current.rotation.y += 0.001; 

      box3Ref.current.rotation.x += 0.001; 
      box3Ref.current.rotation.y += 0.001; 
    }

    if (scroll && sceneRef.current) {
      const scrollOffset = scroll.offset;

      // Position
      const defaultY = -0.5;
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
