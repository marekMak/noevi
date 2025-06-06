import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { forwardRef, useRef } from "react";
import { Group } from "three";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Circle: THREE.Mesh;
    Circle001: THREE.Mesh;
    Cube: THREE.Mesh;
    Cube001: THREE.Mesh;
    Cube001_1: THREE.Mesh;
  };
  materials: {
    windmill: THREE.Material;
    windmillGreen: THREE.Material;
  };
};

const Propeller = forwardRef<Group>((_, ref) => {
  const { nodes, materials } = useGLTF("/models/propeller.gltf") as GLTFResult;
  const propeller = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (propeller.current) {
      propeller.current.rotation.z += 0.02;
    }
  });

  return (
    <group
      ref={ref}
      scale={0.5}
      rotation={[0, -Math.PI * 0.25, 0]}
      position={[1.5, 0, 0]}
    >
      <mesh
        ref={propeller}
        geometry={nodes.Circle.geometry}
        material={materials.windmill}
        position={[0, 0, 0.5]}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Circle001.geometry}
        material={materials.windmill}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials.windmill}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.windmill}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Cube001_1.geometry}
        material={materials.windmillGreen}
        castShadow
        receiveShadow
      />
    </group>
  );
});

useGLTF.preload("/models/propeller.gltf");
Propeller.displayName = "Propeller";

export default Propeller;
