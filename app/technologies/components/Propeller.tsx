import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { forwardRef, useRef } from "react";
import { Group } from "three";
import * as THREE from "three";

const Propeller = forwardRef<Group>((_, ref) => {
  const { nodes, materials } = useGLTF("/models/propeller.gltf") as any;
  const propeller = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (propeller.current) {
      propeller.current.rotation.z += 0.02;
    }
  });

  return (
    <group
      ref={ref}
      dispose={null}
      scale={0.5}
      rotation={[0, -Math.PI * 0.25, 0]}
      position={[1.5, 0, 0]}
      receiveShadow
      castShadow
    >
      <mesh
        ref={propeller}
        position={[0, 0, 0.5]}
        geometry={nodes.Circle.geometry}
        material={materials["windmill"]}
      />

      <mesh
        geometry={nodes.Circle001.geometry}
        material={materials["windmill"]}
      ></mesh>
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials["windmill"]}
      />
      <mesh geometry={nodes.Cube.geometry} material={materials["windmill"]} />
      <mesh
        geometry={nodes.Cube001_1.geometry}
        material={materials["windmillGreen"]}
      />
    </group>
  );
});

export default Propeller;
