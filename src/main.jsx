import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Scene from "./Scene.jsx";
import "./index.css";
import Menu from "./Menu.jsx";
import { Canvas } from "@react-three/fiber";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <Menu />
      <Canvas className="absolute z-0 w-screen h-[50svh]  bg-black"> 
        <Scene />
      </Canvas>
  </StrictMode>
);
