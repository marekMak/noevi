"use client";
import { Cloud, Clouds, Environment } from "@react-three/drei";
import Propeller from "./Propeller";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TechnologyScene = () => {
  const group = useRef<THREE.Group>(null);
  const propeller = useRef<THREE.Group>(null);
  const cloud1 = useRef<THREE.Group>(null);
  const cloud2 = useRef<THREE.Group>(null);
  const clouds = useRef<THREE.Group>(null);

  useGSAP(() => {
    if (!clouds.current || !cloud1.current || !cloud2.current) return;

    const DISTANCE = 15;
    const DURATION = 80;

    const startX = DISTANCE;
    const endX = -DISTANCE;

    const animateCloud = (
      cloudRef: React.RefObject<THREE.Group | null>,
      delay = 0
    ) => {
      if (!cloudRef.current) return; // bezpečnostná kontrola

      const tl = gsap.timeline({ repeat: -1, delay });

      tl.set(cloudRef.current!.position, { x: startX, y: 2, z: 0 });

      tl.to(cloudRef.current!.position, {
        x: endX,
        duration: DURATION,
        ease: "none",
      });
    };

    animateCloud(cloud1, 0);
    animateCloud(cloud2, DURATION / 2);
  });

  return (
    <>
      <Environment preset="warehouse" environmentIntensity={0.75} />
      <directionalLight
        castShadow
        position={[4, 4, 1]}
        intensity={4.5}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={10}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
      />
      <ambientLight intensity={1.5} />
      <group ref={group}>
        <Propeller ref={propeller} />
      </group>

      <Clouds ref={clouds}>
        <Cloud ref={cloud1} bounds={[0, 10, 2]} />
        <Cloud ref={cloud2} bounds={[2, 10, 2]} />
      </Clouds>
    </>
  );
};

export default TechnologyScene;
