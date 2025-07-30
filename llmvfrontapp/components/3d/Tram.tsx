

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    pCube24_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface193_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface195_mecanismos_y_carteles_0: THREE.Mesh;
    pCylinder203_mecanismos_y_carteles_0: THREE.Mesh;
    pCylinder204_mecanismos_y_carteles_0: THREE.Mesh;
    pCylinder205_mecanismos_y_carteles_0: THREE.Mesh;
    pCylinder206_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface307_extras_0: THREE.Mesh;
    polySurface419_extras_0: THREE.Mesh;
    pCylinder149_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface153_extras_0: THREE.Mesh;
    polySurface349_extras_0: THREE.Mesh;
    polySurface173_extras_0: THREE.Mesh;
    polySurface449_extras_0: THREE.Mesh;
    polySurface335_extras_0: THREE.Mesh;
    pGear3_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface448_extras_0: THREE.Mesh;
    pCylinder86_tubos_0: THREE.Mesh;
    polySurface446_extras_0: THREE.Mesh;
    polySurface186_extras_0: THREE.Mesh;
    polySurface363_extras_0: THREE.Mesh;
    polySurface288_extras_0: THREE.Mesh;
    pCube84_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface130_abajo1_0: THREE.Mesh;
    polySurface265_extras_0: THREE.Mesh;
    pCylinder109_mecanismos_y_carteles_0: THREE.Mesh;
    pCylinder47_extras_0: THREE.Mesh;
    polySurface376_abajo1_0: THREE.Mesh;
    polySurface250_extras_0: THREE.Mesh;
    polySurface390_extras_0: THREE.Mesh;
    polySurface325_extras_0: THREE.Mesh;
    polySurface445_extras_0: THREE.Mesh;
    polySurface267_extras_0: THREE.Mesh;
    polySurface182_extras_0: THREE.Mesh;
    polySurface352_extras_0: THREE.Mesh;
    polySurface523_extras_0: THREE.Mesh;
    puerta_abajo1_0: THREE.Mesh;
    pCube80_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface160_extras_0: THREE.Mesh;
    polySurface361_extras_0: THREE.Mesh;
    polySurface171_extras_0: THREE.Mesh;
    polySurface280_extras_0: THREE.Mesh;
    polySurface313_extras_0: THREE.Mesh;
    polySurface337_extras_0: THREE.Mesh;
    polySurface166_extras_0: THREE.Mesh;
    pCylinder46_extras_0: THREE.Mesh;
    polySurface334_extras_0: THREE.Mesh;
    polySurface164_extras_0: THREE.Mesh;
    polySurface442_extras_0: THREE.Mesh;
    polySurface490_extras_0: THREE.Mesh;
    polySurface524_extras_0: THREE.Mesh;
    pCube74_mecanismos_y_carteles_0: THREE.Mesh;
    pCylinder157_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface264_extras_0: THREE.Mesh;
    pCylinder126_extras_0: THREE.Mesh;
    polySurface500_extras_0: THREE.Mesh;
    polySurface453_extras_0: THREE.Mesh;
    pCylinder110_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface327_extras_0: THREE.Mesh;
    polySurface385_abajo1_0: THREE.Mesh;
    polySurface282_extras_0: THREE.Mesh;
    polySurface417_extras_0: THREE.Mesh;
    polySurface450_extras_0: THREE.Mesh;
    polySurface310_extras_0: THREE.Mesh;
    polySurface339_extras_0: THREE.Mesh;
    polySurface192_extras_0: THREE.Mesh;
    pCylinder164_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface158_extras_0: THREE.Mesh;
    polySurface380_abajo1_0: THREE.Mesh;
    polySurface191_extras_0: THREE.Mesh;
    pCube52_principal_0: THREE.Mesh;
    polySurface525_extras_0: THREE.Mesh;
    polySurface248_extras_0: THREE.Mesh;
    pCube83_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface480_mecanismos_y_carteles_0: THREE.Mesh;
    pCube79_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface258_extras_0: THREE.Mesh;
    polySurface296_extras_0: THREE.Mesh;
    polySurface177_extras_0: THREE.Mesh;
    polySurface512_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface301_extras_0: THREE.Mesh;
    polySurface387_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface526_extras_0: THREE.Mesh;
    pCylinder188_tubos_0: THREE.Mesh;
    polySurface245_extras_0: THREE.Mesh;
    polySurface180_extras_0: THREE.Mesh;
    polySurface527_extras_0: THREE.Mesh;
    polySurface284_extras_0: THREE.Mesh;
    polySurface281_extras_0: THREE.Mesh;
    polySurface315_extras_0: THREE.Mesh;
    pCylinder107_mecanismos_y_carteles_0: THREE.Mesh;
    pCube73_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface262_extras_0: THREE.Mesh;
    polySurface303_extras_0: THREE.Mesh;
    pPipe7_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface298_extras_0: THREE.Mesh;
    pCylinder104_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface528_extras_0: THREE.Mesh;
    polySurface447_extras_0: THREE.Mesh;
    polySurface323_extras_0: THREE.Mesh;
    polySurface389_extras_0: THREE.Mesh;
    pCube82_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface360_extras_0: THREE.Mesh;
    pCylinder189_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface452_extras_0: THREE.Mesh;
    polySurface393_extras_0: THREE.Mesh;
    polySurface270_extras_0: THREE.Mesh;
    polySurface319_extras_0: THREE.Mesh;
    polySurface529_extras_0: THREE.Mesh;
    polySurface289_extras_0: THREE.Mesh;
    sweep6_tubos_0: THREE.Mesh;
    polySurface377_abajo1_0: THREE.Mesh;
    polySurface530_extras_0: THREE.Mesh;
    polySurface283_extras_0: THREE.Mesh;
    polySurface172_extras_0: THREE.Mesh;
    polySurface316_extras_0: THREE.Mesh;
    pCylinder190_mecanismos_y_carteles_0: THREE.Mesh;
    pPipe8_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface470_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface531_extras_0: THREE.Mesh;
    polySurface309_extras_0: THREE.Mesh;
    polySurface167_extras_0: THREE.Mesh;
    polySurface330_extras_0: THREE.Mesh;
    pCylinder191_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface384_abajo1_0: THREE.Mesh;
    pCylinder185_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface474_principal_0: THREE.Mesh;
    polySurface183_extras_0: THREE.Mesh;
    pCylinder113_tubos_0: THREE.Mesh;
    polySurface278_extras_0: THREE.Mesh;
    polySurface487_mecanismos_y_carteles_0: THREE.Mesh;
    sweep12_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface454_extras_0: THREE.Mesh;
    polySurface321_extras_0: THREE.Mesh;
    polySurface291_extras_0: THREE.Mesh;
    polySurface324_extras_0: THREE.Mesh;
    pCylinder192_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface532_extras_0: THREE.Mesh;
    polySurface326_extras_0: THREE.Mesh;
    polySurface169_extras_0: THREE.Mesh;
    pCube93_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface499_extras_0: THREE.Mesh;
    polySurface254_extras_0: THREE.Mesh;
    polySurface451_extras_0: THREE.Mesh;
    polySurface168_extras_0: THREE.Mesh;
    sweep1_tubos_0: THREE.Mesh;
    polySurface188_extras_0: THREE.Mesh;
    polySurface533_extras_0: THREE.Mesh;
    pCylinder133_tubos_0: THREE.Mesh;
    polySurface243_extras_0: THREE.Mesh;
    pCylinder124_extras_0: THREE.Mesh;
    polySurface155_extras_0: THREE.Mesh;
    pCylinder127_tubos_0: THREE.Mesh;
    polySurface497_extras_0: THREE.Mesh;
    polySurface266_extras_0: THREE.Mesh;
    polySurface297_extras_0: THREE.Mesh;
    polySurface1179_extras_0: THREE.Mesh;
    pCylinder159_extras_0: THREE.Mesh;
    polySurface179_extras_0: THREE.Mesh;
    polySurface534_extras_0: THREE.Mesh;
    pCube94_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface478_principal_0: THREE.Mesh;
    polySurface178_extras_0: THREE.Mesh;
    polySurface501_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface471_principal_0: THREE.Mesh;
    polySurface268_extras_0: THREE.Mesh;
    pCylinder125_extras_0: THREE.Mesh;
    pCube87_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface439_extras_0: THREE.Mesh;
    pCylinder183_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface263_extras_0: THREE.Mesh;
    pCube95_mecanismos_y_carteles_0: THREE.Mesh;
    pCylinder101_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface308_extras_0: THREE.Mesh;
    polySurface159_extras_0: THREE.Mesh;
    polySurface535_extras_0: THREE.Mesh;
    polySurface292_extras_0: THREE.Mesh;
    polySurface351_extras_0: THREE.Mesh;
    polySurface295_extras_0: THREE.Mesh;
    pPipe9_mecanismos_y_carteles_0: THREE.Mesh;
    pCylinder187_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface190_extras_0: THREE.Mesh;
    pCylinder186_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface317_extras_0: THREE.Mesh;
    polySurface388_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface189_extras_0: THREE.Mesh;
    polySurface536_extras_0: THREE.Mesh;
    pCube72_abajo1_0: THREE.Mesh;
    polySurface271_extras_0: THREE.Mesh;
    pCylinder59_extras_0: THREE.Mesh;
    polySurface392_extras_0: THREE.Mesh;
    polySurface257_extras_0: THREE.Mesh;
    polySurface184_extras_0: THREE.Mesh;
    polySurface381_abajo1_0: THREE.Mesh;
    polySurface356_extras_0: THREE.Mesh;
    pSphere2_extras_0: THREE.Mesh;
    polySurface489_extras_0: THREE.Mesh;
    polySurface537_extras_0: THREE.Mesh;
    polySurface273_extras_0: THREE.Mesh;
    polySurface391_extras_0: THREE.Mesh;
    pCylinder193_mecanismos_y_carteles_0: THREE.Mesh;
    pCylinder57_extras_0: THREE.Mesh;
    polySurface259_extras_0: THREE.Mesh;
    polySurface294_extras_0: THREE.Mesh;
    polySurface538_extras_0: THREE.Mesh;
    polySurface476_principal_0: THREE.Mesh;
    polySurface359_extras_0: THREE.Mesh;
    pSphere3_extras_0: THREE.Mesh;
    polySurface372_abajo1_0: THREE.Mesh;
    polySurface304_extras_0: THREE.Mesh;
    polySurface290_extras_0: THREE.Mesh;
    polySurface539_extras_0: THREE.Mesh;
    polySurface540_extras_0: THREE.Mesh;
    polySurface277_extras_0: THREE.Mesh;
    polySurface274_extras_0: THREE.Mesh;
    polySurface472_principal_0: THREE.Mesh;
    pCube96_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface146_extras_0: THREE.Mesh;
    polySurface441_extras_0: THREE.Mesh;
    polySurface279_extras_0: THREE.Mesh;
    polySurface161_extras_0: THREE.Mesh;
    pCylinder194_mecanismos_y_carteles_0: THREE.Mesh;
    sweep4_tubos_0: THREE.Mesh;
    polySurface312_extras_0: THREE.Mesh;
    polySurface50_extras_0: THREE.Mesh;
    pCylinder184_mecanismos_y_carteles_0: THREE.Mesh;
    pCylinder132_tubos_0: THREE.Mesh;
    polySurface157_extras_0: THREE.Mesh;
    polySurface362_extras_0: THREE.Mesh;
    polySurface541_extras_0: THREE.Mesh;
    polySurface413_extras_0: THREE.Mesh;
    polySurface244_extras_0: THREE.Mesh;
    sweep9_tubos_0: THREE.Mesh;
    polySurface154_extras_0: THREE.Mesh;
    polySurface165_extras_0: THREE.Mesh;
    pSphere4_extras_0: THREE.Mesh;
    polySurface542_extras_0: THREE.Mesh;
    polySurface285_extras_0: THREE.Mesh;
    polySurface331_extras_0: THREE.Mesh;
    pCube97_mecanismos_y_carteles_0: THREE.Mesh;
    sweep7_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface185_extras_0: THREE.Mesh;
    polySurface272_extras_0: THREE.Mesh;
    polySurface305_extras_0: THREE.Mesh;
    polySurface251_extras_0: THREE.Mesh;
    polySurface369_abajo1_0: THREE.Mesh;
    polySurface543_extras_0: THREE.Mesh;
    polySurface170_extras_0: THREE.Mesh;
    polySurface544_extras_0: THREE.Mesh;
    polySurface357_extras_0: THREE.Mesh;
    polySurface373_abajo1_0: THREE.Mesh;
    polySurface255_extras_0: THREE.Mesh;
    polySurface333_extras_0: THREE.Mesh;
    polySurface300_extras_0: THREE.Mesh;
    pCube98_mecanismos_y_carteles_0: THREE.Mesh;
    pPipe10_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface545_extras_0: THREE.Mesh;
    polySurface364_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface546_mecanismos_y_carteles_0: THREE.Mesh;
    pCylinder195_mecanismos_y_carteles_0: THREE.Mesh;
    pCylinder56_extras_0: THREE.Mesh;
    polySurface176_extras_0: THREE.Mesh;
    polySurface247_extras_0: THREE.Mesh;
    polySurface547_mecanismos_y_carteles_0: THREE.Mesh;
    sweep11_tubos_0: THREE.Mesh;
    polySurface246_extras_0: THREE.Mesh;
    polySurface261_extras_0: THREE.Mesh;
    pCylinder181_mecanismos_y_carteles_0: THREE.Mesh;
    pPipe11_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface332_extras_0: THREE.Mesh;
    sweep13_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface318_extras_0: THREE.Mesh;
    polySurface548_extras_0: THREE.Mesh;
    pGear4_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface320_extras_0: THREE.Mesh;
    pCylinder85_extras_0: THREE.Mesh;
    polySurface549_extras_0: THREE.Mesh;
    pGear1_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface484_mecanismos_y_carteles_0: THREE.Mesh;
    pSphere5_extras_0: THREE.Mesh;
    polySurface306_extras_0: THREE.Mesh;
    base_escalera1_abajo1_0: THREE.Mesh;
    polySurface550_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface174_extras_0: THREE.Mesh;
    polySurface311_extras_0: THREE.Mesh;
    parte_de_arriba1_principal_0: THREE.Mesh;
    polySurface256_extras_0: THREE.Mesh;
    polySurface187_extras_0: THREE.Mesh;
    polySurface286_extras_0: THREE.Mesh;
    pCylinder196_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface415_extras_0: THREE.Mesh;
    polySurface162_extras_0: THREE.Mesh;
    polySurface551_extras_0: THREE.Mesh;
    pCube10_principal_0: THREE.Mesh;
    pCylinder197_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface328_extras_0: THREE.Mesh;
    polySurface163_extras_0: THREE.Mesh;
    pGear2_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface358_extras_0: THREE.Mesh;
    pCylinder198_mecanismos_y_carteles_0: THREE.Mesh;
    pCylinder199_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface175_extras_0: THREE.Mesh;
    pCylinder88_tubos_0: THREE.Mesh;
    pCylinder200_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface151_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface181_extras_0: THREE.Mesh;
    pCylinder201_extras_0: THREE.Mesh;
    polySurface353_extras_0: THREE.Mesh;
    pCylinder182_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface152_mecanismos_y_carteles_0: THREE.Mesh;
    pSphere6_extras_0: THREE.Mesh;
    pSphere7_extras_0: THREE.Mesh;
    polySurface293_extras_0: THREE.Mesh;
    polySurface269_extras_0: THREE.Mesh;
    polySurface552_extras_0: THREE.Mesh;
    polySurface252_extras_0: THREE.Mesh;
    polySurface322_extras_0: THREE.Mesh;
    pGear5_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface553_extras_0: THREE.Mesh;
    polySurface554_extras_0: THREE.Mesh;
    polySurface287_extras_0: THREE.Mesh;
    polySurface302_extras_0: THREE.Mesh;
    polySurface299_extras_0: THREE.Mesh;
    polySurface314_extras_0: THREE.Mesh;
    polySurface344_extras_0: THREE.Mesh;
    polySurface275_extras_0: THREE.Mesh;
    polySurface253_extras_0: THREE.Mesh;
    sweep14_mecanismos_y_carteles_0: THREE.Mesh;
    pCube99_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface260_extras_0: THREE.Mesh;
    pCylinder39_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface368_abajo1_0: THREE.Mesh;
    polySurface112_tubos_0: THREE.Mesh;
    polySurface276_extras_0: THREE.Mesh;
    polySurface495_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface329_extras_0: THREE.Mesh;
    polySurface156_extras_0: THREE.Mesh;
    polySurface249_extras_0: THREE.Mesh;
    pCylinder202_mecanismos_y_carteles_0: THREE.Mesh;
    pCylinder270_tubos_0: THREE.Mesh;
    pCylinder271_tubos_0: THREE.Mesh;
    pCylinder272_tubos_0: THREE.Mesh;
    pCylinder273_tubos_0: THREE.Mesh;
    pCylinder274_tubos_0: THREE.Mesh;
    pCylinder276_tubos_0: THREE.Mesh;
    pCylinder277_tubos_0: THREE.Mesh;
    pCylinder278_tubos_0: THREE.Mesh;
    polySurface193_mecanismos_y_carteles_0_1: THREE.Mesh;
    polySurface195_mecanismos_y_carteles_0_1: THREE.Mesh;
    pCylinder203_mecanismos_y_carteles_0_1: THREE.Mesh;
    pCylinder204_mecanismos_y_carteles_0_1: THREE.Mesh;
    pCylinder205_mecanismos_y_carteles_0_1: THREE.Mesh;
    pCylinder206_mecanismos_y_carteles_0_1: THREE.Mesh;
    polySurface581_mecanismos_y_carteles_0: THREE.Mesh;
    polySurface583_extras_0: THREE.Mesh;
    polySurface584_extras_0: THREE.Mesh;
    polySurface585_extras_0: THREE.Mesh;
    polySurface586_extras_0: THREE.Mesh;
    polySurface587_extras_0: THREE.Mesh;
    polySurface588_extras_0: THREE.Mesh;
    polySurface589_extras_0: THREE.Mesh;
    polySurface590_extras_0: THREE.Mesh;
    polySurface591_extras_0: THREE.Mesh;
    polySurface592_extras_0: THREE.Mesh;
    polySurface593_extras_0: THREE.Mesh;
    polySurface594_extras_0: THREE.Mesh;
    polySurface877_abajo1_0: THREE.Mesh;
    polySurface889_abajo1_0: THREE.Mesh;
    polySurface890_abajo1_0: THREE.Mesh;
    polySurface893_abajo1_0: THREE.Mesh;
    polySurface894_abajo1_0: THREE.Mesh;
    polySurface899_abajo1_0: THREE.Mesh;
    polySurface900_abajo1_0: THREE.Mesh;
    polySurface901_abajo1_0: THREE.Mesh;
    polySurface902_abajo1_0: THREE.Mesh;
    polySurface891_abajo1_0: THREE.Mesh;
    polySurface892_abajo1_0: THREE.Mesh;
    polySurface895_abajo1_0: THREE.Mesh;
    polySurface896_abajo1_0: THREE.Mesh;
    sweep24_tubos_0: THREE.Mesh;
  };
  materials: {
    mecanismos_y_carteles: THREE.MeshStandardMaterial;
    extras: THREE.MeshStandardMaterial;
    tubos: THREE.MeshStandardMaterial;
    abajo1: THREE.MeshStandardMaterial;
    principal: THREE.MeshStandardMaterial;
  };
};

export function Tram(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    require("../../assets/3d/tram.glb")
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[0, 108.256, 0]}>
          <group
            position={[0, -2.774, 7.999]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={0.879}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface193_mecanismos_y_carteles_0.geometry}
              material={materials.mecanismos_y_carteles}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface195_mecanismos_y_carteles_0.geometry}
              material={materials.mecanismos_y_carteles}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder203_mecanismos_y_carteles_0.geometry}
              material={materials.mecanismos_y_carteles}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder204_mecanismos_y_carteles_0.geometry}
              material={materials.mecanismos_y_carteles}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder205_mecanismos_y_carteles_0.geometry}
              material={materials.mecanismos_y_carteles}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder206_mecanismos_y_carteles_0.geometry}
              material={materials.mecanismos_y_carteles}
            />
          </group>
        </group>
        <group position={[0, 108.256, 0]} rotation={[-Math.PI, 0, -Math.PI]}>
          <group
            position={[0, -2.774, 7.999]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={0.879}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface193_mecanismos_y_carteles_0_1.geometry}
              material={materials.mecanismos_y_carteles}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface195_mecanismos_y_carteles_0_1.geometry}
              material={materials.mecanismos_y_carteles}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder203_mecanismos_y_carteles_0_1.geometry}
              material={materials.mecanismos_y_carteles}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder204_mecanismos_y_carteles_0_1.geometry}
              material={materials.mecanismos_y_carteles}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder205_mecanismos_y_carteles_0_1.geometry}
              material={materials.mecanismos_y_carteles}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder206_mecanismos_y_carteles_0_1.geometry}
              material={materials.mecanismos_y_carteles}
            />
          </group>
        </group>
        <group position={[3.778, 5.253, 14.079]} scale={0.834}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface877_abajo1_0.geometry}
            material={materials.abajo1}
            position={[-1.246, -6.414, -0.817]}
            scale={[1.039, 0.914, 1.039]}
          />
        </group>
        <group
          position={[-6.585, 93.228, 15.258]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.897, 0.897, 0.901]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface889_abajo1_0.geometry}
            material={materials.abajo1}
            position={[4.219, 0, 0]}
            scale={[0.854, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface890_abajo1_0.geometry}
            material={materials.abajo1}
            position={[-6.358, 0, 0]}
            scale={[0.854, 1, 1]}
          />
        </group>
        <group
          position={[-6.585, 84.559, 48.619]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.897, 0.897, 0.901]}
        >
          <group position={[-6.51, -93.371, 134.719]} scale={[1, 0.733, 0.733]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface899_abajo1_0.geometry}
              material={materials.abajo1}
              position={[4.219, 0, 0]}
              scale={[0.854, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface900_abajo1_0.geometry}
              material={materials.abajo1}
              position={[-4.462, 0, 0]}
              scale={[0.854, 1, 1]}
            />
          </group>
          <group position={[-6.51, -93.371, -78.836]} scale={[1, 0.733, 0.733]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface901_abajo1_0.geometry}
              material={materials.abajo1}
              position={[4.219, 0, 0]}
              scale={[0.854, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface902_abajo1_0.geometry}
              material={materials.abajo1}
              position={[-4.462, 0, 0]}
              scale={[0.854, 1, 1]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface893_abajo1_0.geometry}
            material={materials.abajo1}
            position={[4.219, 0, 0]}
            scale={[0.854, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface894_abajo1_0.geometry}
            material={materials.abajo1}
            position={[-6.358, 0, 0]}
            scale={[0.854, 1, 1]}
          />
        </group>
        <group
          position={[-6.585, 82.389, 80.199]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.897, 0.897, 0.872]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface891_abajo1_0.geometry}
            material={materials.abajo1}
            position={[4.219, 0, 0]}
            scale={[0.854, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface892_abajo1_0.geometry}
            material={materials.abajo1}
            position={[-6.358, 0, 0]}
            scale={[0.854, 1, 1]}
          />
        </group>
        <group
          position={[-6.585, 76.17, -18.36]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.897, 0.897, 0.872]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface895_abajo1_0.geometry}
            material={materials.abajo1}
            position={[4.219, 0, 0]}
            scale={[0.854, 1, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface896_abajo1_0.geometry}
            material={materials.abajo1}
            position={[-6.358, 0, 0]}
            scale={[0.854, 1, 1]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube24_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface307_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface419_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder149_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface153_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface349_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface173_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface449_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface335_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pGear3_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface448_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder86_tubos_0.geometry}
          material={materials.tubos}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface446_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface186_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface363_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface288_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube84_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface130_abajo1_0.geometry}
          material={materials.abajo1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface265_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder109_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder47_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface376_abajo1_0.geometry}
          material={materials.abajo1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface250_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface390_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface325_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface445_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface267_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface182_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface352_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface523_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.puerta_abajo1_0.geometry}
          material={materials.abajo1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube80_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface160_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface361_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface171_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface280_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface313_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface337_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface166_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder46_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface334_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface164_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface442_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface490_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface524_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube74_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder157_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface264_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder126_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface500_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface453_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder110_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface327_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface385_abajo1_0.geometry}
          material={materials.abajo1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface282_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface417_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface450_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface310_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface339_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface192_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder164_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface158_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface380_abajo1_0.geometry}
          material={materials.abajo1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface191_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube52_principal_0.geometry}
          material={materials.principal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface525_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface248_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube83_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface480_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube79_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface258_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface296_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface177_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface512_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface301_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface387_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface526_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder188_tubos_0.geometry}
          material={materials.tubos}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface245_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface180_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface527_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface284_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface281_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface315_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder107_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube73_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface262_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface303_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPipe7_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface298_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder104_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface528_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface447_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface323_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface389_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube82_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface360_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder189_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface452_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface393_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface270_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface319_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface529_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface289_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sweep6_tubos_0.geometry}
          material={materials.tubos}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface377_abajo1_0.geometry}
          material={materials.abajo1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface530_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface283_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface172_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface316_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder190_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPipe8_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface470_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface531_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface309_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface167_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface330_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder191_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface384_abajo1_0.geometry}
          material={materials.abajo1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder185_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface474_principal_0.geometry}
          material={materials.principal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface183_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder113_tubos_0.geometry}
          material={materials.tubos}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface278_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface487_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sweep12_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface454_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface321_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface291_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface324_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder192_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface532_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface326_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface169_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube93_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface499_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface254_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface451_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface168_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sweep1_tubos_0.geometry}
          material={materials.tubos}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface188_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface533_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder133_tubos_0.geometry}
          material={materials.tubos}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface243_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder124_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface155_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder127_tubos_0.geometry}
          material={materials.tubos}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface497_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface266_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface297_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1179_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder159_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface179_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface534_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube94_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface478_principal_0.geometry}
          material={materials.principal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface178_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface501_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface471_principal_0.geometry}
          material={materials.principal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface268_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder125_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube87_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface439_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder183_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface263_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube95_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder101_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface308_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface159_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface535_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface292_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface351_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface295_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPipe9_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder187_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface190_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder186_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface317_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface388_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface189_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface536_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube72_abajo1_0.geometry}
          material={materials.abajo1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface271_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder59_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface392_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface257_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface184_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface381_abajo1_0.geometry}
          material={materials.abajo1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface356_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pSphere2_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface489_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface537_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface273_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface391_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder193_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder57_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface259_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface294_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface538_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface476_principal_0.geometry}
          material={materials.principal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface359_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pSphere3_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface372_abajo1_0.geometry}
          material={materials.abajo1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface304_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface290_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface539_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface540_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface277_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface274_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface472_principal_0.geometry}
          material={materials.principal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube96_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface146_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface441_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface279_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface161_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder194_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sweep4_tubos_0.geometry}
          material={materials.tubos}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface312_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface50_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder184_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder132_tubos_0.geometry}
          material={materials.tubos}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface157_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface362_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface541_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface413_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface244_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sweep9_tubos_0.geometry}
          material={materials.tubos}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface154_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface165_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pSphere4_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface542_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface285_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface331_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube97_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sweep7_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface185_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface272_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface305_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface251_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface369_abajo1_0.geometry}
          material={materials.abajo1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface543_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface170_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface544_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface357_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface373_abajo1_0.geometry}
          material={materials.abajo1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface255_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface333_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface300_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube98_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPipe10_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface545_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface364_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface546_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder195_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder56_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface176_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface247_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface547_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sweep11_tubos_0.geometry}
          material={materials.tubos}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface246_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface261_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder181_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pPipe11_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface332_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sweep13_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface318_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface548_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pGear4_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface320_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder85_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface549_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pGear1_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface484_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pSphere5_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface306_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.base_escalera1_abajo1_0.geometry}
          material={materials.abajo1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface550_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface174_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface311_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.parte_de_arriba1_principal_0.geometry}
          material={materials.principal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface256_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface187_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface286_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder196_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface415_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface162_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface551_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube10_principal_0.geometry}
          material={materials.principal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder197_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface328_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface163_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pGear2_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface358_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder198_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder199_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface175_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder88_tubos_0.geometry}
          material={materials.tubos}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder200_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface151_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface181_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder201_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface353_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder182_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface152_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pSphere6_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pSphere7_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface293_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface269_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface552_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface252_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface322_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pGear5_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface553_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface554_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface287_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface302_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface299_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface314_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface344_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface275_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface253_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sweep14_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube99_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface260_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder39_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface368_abajo1_0.geometry}
          material={materials.abajo1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface112_tubos_0.geometry}
          material={materials.tubos}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface276_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface495_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface329_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface156_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface249_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder202_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder270_tubos_0.geometry}
          material={materials.tubos}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder271_tubos_0.geometry}
          material={materials.tubos}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder272_tubos_0.geometry}
          material={materials.tubos}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder273_tubos_0.geometry}
          material={materials.tubos}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder274_tubos_0.geometry}
          material={materials.tubos}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder276_tubos_0.geometry}
          material={materials.tubos}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder277_tubos_0.geometry}
          material={materials.tubos}
          position={[0, 1.289, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder278_tubos_0.geometry}
          material={materials.tubos}
          position={[-2.77, 26.131, -16.697]}
          scale={1.098}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface581_mecanismos_y_carteles_0.geometry}
          material={materials.mecanismos_y_carteles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface583_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface584_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface585_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface586_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface587_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface588_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface589_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface590_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface591_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface592_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface593_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface594_extras_0.geometry}
          material={materials.extras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sweep24_tubos_0.geometry}
          material={materials.tubos}
        />
      </group>
    </group>
  );
}
