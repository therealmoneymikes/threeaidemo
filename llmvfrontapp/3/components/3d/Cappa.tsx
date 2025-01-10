

import * as THREE from "three";
import React, { useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei/native";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_5: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_9: THREE.Mesh;
    Object_11: THREE.Mesh;
    Object_13: THREE.Mesh;
    Object_15: THREE.Mesh;
    Object_17: THREE.Mesh;
    Object_19: THREE.Mesh;
    Object_21: THREE.Mesh;
    Object_23: THREE.Mesh;
    Object_25: THREE.Mesh;
    Object_27: THREE.Mesh;
    Object_29: THREE.Mesh;
    Object_31: THREE.Mesh;
    Object_33: THREE.Mesh;
    Object_35: THREE.Mesh;
  };
  materials: {
    Marshmallow: THREE.MeshStandardMaterial;
    Coffee: THREE.MeshStandardMaterial;
    material: THREE.MeshStandardMaterial;
    Plate: THREE.MeshStandardMaterial;
  };
};

type GLTFActions = Record<"Main", THREE.AnimationAction>;
export function Cappa(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials, animations } = useGLTF(
    require("../../assets/3d/cappa.glb")
  ) as GLTFResult;
  const group = useRef<THREE.Group>(null);
  const { actions } = useAnimations(animations, group);
  return (
    <group
      {...props}
      ref={group}
      dispose={null}
      scale={20}
      position={[0, -2, -3]}
    >
      <group name="Scene">
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group>
            <group rotation={[Math.PI / 2, 0, 0]}>
              <group scale={0.303}>
                <group
                  position={[-0.095, 0.299, 0.092]}
                  rotation={[-0.057, -0.653, 0.23]}
                  scale={3.304}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials.Marshmallow}
                  />
                </group>
                <group
                  position={[-0.111, 0.03, 0.112]}
                  rotation={[0.491, -0.957, -0.152]}
                  scale={3.304}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_7.geometry}
                    material={materials.Marshmallow}
                  />
                </group>
                <group
                  position={[-0.184, 0.03, 0.099]}
                  rotation={[-0.704, 0.788, 0.249]}
                  scale={3.304}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_9.geometry}
                    material={materials.Marshmallow}
                  />
                </group>
                <group
                  position={[-0.201, 0.031, 0.021]}
                  rotation={[-0.786, 0.589, 0.512]}
                  scale={3.304}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_11.geometry}
                    material={materials.Marshmallow}
                  />
                </group>
                <group
                  position={[0.035, 0.3, 0.144]}
                  rotation={[-1.391, 1.329, 1.736]}
                  scale={3.304}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_13.geometry}
                    material={materials.Marshmallow}
                  />
                </group>
                <group
                  position={[-0.14, 0.293, 0.009]}
                  rotation={[0.164, 0.274, 0.07]}
                  scale={3.304}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_15.geometry}
                    material={materials.Marshmallow}
                  />
                </group>
                <group
                  position={[-0.075, 0.305, 0.021]}
                  rotation={[3.128, -0.671, -2.402]}
                  scale={3.304}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_17.geometry}
                    material={materials.Marshmallow}
                  />
                </group>
                <group
                  position={[-0.126, 0.293, -0.076]}
                  rotation={[-0.482, -1.036, -0.421]}
                  scale={3.304}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_19.geometry}
                    material={materials.Marshmallow}
                  />
                </group>
                <group
                  position={[-0.079, 0.301, -0.05]}
                  rotation={[-2.432, 0.065, 3.128]}
                  scale={3.304}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_21.geometry}
                    material={materials.Marshmallow}
                  />
                </group>
                <group
                  position={[-0.031, 0.291, -0.149]}
                  rotation={[-1.424, 1.261, 0.864]}
                  scale={3.304}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_23.geometry}
                    material={materials.Marshmallow}
                  />
                </group>
                <group
                  position={[0.039, 0.031, 0.175]}
                  rotation={[-1.116, -0.397, 0.248]}
                  scale={3.304}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_25.geometry}
                    material={materials.Marshmallow}
                  />
                </group>
                <group
                  position={[-0.032, 0.03, 0.195]}
                  rotation={[-2.15, 1.329, 1.736]}
                  scale={3.304}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_27.geometry}
                    material={materials.Marshmallow}
                  />
                </group>
                <group
                  position={[-0.125, 0.033, 0.182]}
                  rotation={[-2.131, 1.329, 1.736]}
                  scale={3.304}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_29.geometry}
                    material={materials.Marshmallow}
                  />
                </group>
                <group
                  position={[0.002, 0.272, 0]}
                  rotation={[-Math.PI, 1.031, -Math.PI]}
                  scale={3.304}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_31.geometry}
                    material={materials.Coffee}
                  />
                </group>
                <group position={[0.001, 0.017, 0]} scale={3.304}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_33.geometry}
                    material={materials.material}
                  />
                </group>
                <group position={[0.002, 0, 0.001]} scale={3.304}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_35.geometry}
                    material={materials.Plate}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
