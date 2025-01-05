import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ screenType }) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf");

  // Adjust scale and position based on screen type
  const getScale = () => {
    if (screenType === "mobile") return 0.6;
    if (screenType === "tablet") return 0.7;
    return 0.75; // Default for desktop
  };

  const getPosition = () => {
    if (screenType === "mobile") return [0, -3, -2.5];
    if (screenType === "tablet") return [0, -3.2, -2];
    return [0, -3.25, -1.5]; // Default for desktop
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
        object={scene}
        scale={getScale()}
        position={getPosition()}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [screenType, setScreenType] = useState("desktop");

  useEffect(() => {
    // Define breakpoints for different screen types
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

    // Set initial screen type
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
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
      gl={{
        preserveDrawingBuffer: true,
        antialias: true,
        powerPreference: "high-performance", // Optimize GPU usage
        onContextLost: () => console.error("WebGL context lost"),
        onContextRestore: () => console.info("WebGL context restored"),
      }}
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
