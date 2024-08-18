import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import CameraOrbitController from '../components/CameraOrbitController';
import Barrels from '../models/Barrels';
import Sky from '../models/Sky';

{/*<div className='absolute top-10 left-0 right-0 z-10 flex items-center justify-center'>
        POPUP
      </div>*/}

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);

  // Parameters for the 3d render - Adjust based on model
  const adjustBarrelForScreenSize = () =>{
    let screenScale =null; 
    let screenPosition = [-100, 90.5, -850];
    let rotation = [0.2, 4.7, 50];

    if(window.innerWidth < 768){
      screenScale = [0.9, 0.9, 0.9];
    }else{
      screenScale = [1, 1, 1];
    }
    return[screenScale,screenPosition, rotation]
  }

  const [barrelScale, barrelPos, barrelRotation] = adjustBarrelForScreenSize();

  // The different Lightings -
  // Directional: Distant Natural Light (Sun)
  // Ambient: Lights everything equally; no shadows
  // Point: Emits light form a single point
  // Spot: Emits light from one direction in a conical shape
  // Hemisphere: adds a gradient based on sky, ground color
  return (
    <section className='w-full h-screen relative'>
      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} 
        camera={{ position: [0, 3, 16], fov: 60 }}
        style={{ height: '100vh', width: '100vw' }} >
        <Suspense fallback={<Loader />}>
          <CameraOrbitController />
          <directionalLight position={[1, 1, 1]} intensity={2}/>
          <ambientLight intensity={0.5}/>
          <hemisphereLight skyColor='#b1e1ff' groundColor='#ff964f'/>

          <Barrels 
            position={barrelPos}
            scale={barrelScale}
            rotation={barrelRotation}
            isRotating={isRotating} 
            setIsRotating={setIsRotating}
          />

        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home
