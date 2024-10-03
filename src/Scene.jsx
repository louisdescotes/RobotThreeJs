import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { OrbitControls } from '@react-three/drei';

export default function Scene() {

 const model = useLoader(
  GLTFLoader,
  '/public/robot4.glb',
  (loader) => {
   const dracoLoader = new DRACOLoader()
   dracoLoader.setDecoderPath('/public/draco/')
   loader.setDRACOLoader(dracoLoader)
  }
 )

  return (
    <Canvas className='w-screen h-screen'>

     <OrbitControls makeDefault />

     <directionalLight castShadow position={ [ 1, 2, 3] } intensity={ 1.5} />
     <ambientLight intensity={ .5} />
     
     <primitive object={ model.scene } scale={ .35} />
     </Canvas>
  )
}
