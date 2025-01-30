import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

// Custom hook to determine screen type
const useScreenType = () => {
  const [screenType, setScreenType] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenType(width <= 700 ? "mobile" : width <= 1280 ? "tablet" : "desktop");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenType;
};

const Computers = ({ screenType }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  const scaleMap = {
    mobile: 0.75, // Increased size for better visibility
    tablet: 0.85,
    desktop: 1,
  };

  const positionMap = {
    mobile: [0, -2.5, -1.5],  // Adjusted position
    tablet: [0, -2.7, -1.3],
    desktop: [0, -3.25, -1.5],
  };

  return (
    <mesh>
      <hemisphereLight intensity={0.35} groundColor="white" /> 
      <spotLight position={[-20, 50, 10]} angle={0.3} penumbra={1} intensity={1.5} castShadow shadow-mapSize={1024} />
      <pointLight intensity={1.2} />
      <primitive
        object={computer.scene}
        scale={scaleMap[screenType]}
        position={positionMap[screenType]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const screenType = useScreenType();

  console.log("Current Screen Type:", screenType);  // Debugging

  return (
    <Canvas frameloop="demand" shadows dpr={[1, 2]} camera={{ position: [5, 3, 5], fov: 40 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers screenType={screenType} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
