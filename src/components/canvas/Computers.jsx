import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ screenType }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  const getScale = () => {
    if (screenType === "mobile") return 0.6;
    if (screenType === "tablet") return 0.7;
    return 0.75;  
  };

  const getPosition = () => {
    if (screenType === "mobile") return [0, -3, -2.5];
    if (screenType === "tablet") return [0, -3.2, -2];
    return [0, -3.25, -1.5];  
  };

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
         position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={getScale()}
        position={getPosition()}
        rotation={[-0.01, -0.2, -0.1]}
        // width={0.3}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [screenType, setScreenType] = useState("desktop");

  useEffect(() => {
       const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 700) {
        setScreenType("mobile");
      } else if (width <= 1280) {
        setScreenType("tablet");
      } else {
        setScreenType("desktop");
      }
    };

 
    handleResize();
 
    window.addEventListener("resize", handleResize);

  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers screenType={screenType} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
