import * as THREE from "three";
import React, { useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei/native";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber/native";

type GLTFResult = GLTF & {
  nodes: {
    ["Sphere014_Material_#2_0"]: THREE.Mesh;
    ["Cylinder024_Material_#2_0"]: THREE.Mesh;
    ["Object006_Material_#2_0"]: THREE.Mesh;
    ["Wood001_Material_#2_0"]: THREE.Mesh;
    ["Wood002_Material_#2_0"]: THREE.Mesh;
    ["Wood003_Material_#2_0"]: THREE.Mesh;
    ["Wood004_Material_#2_0"]: THREE.Mesh;
    ["Wood005_Material_#2_0"]: THREE.Mesh;
    ["Wood006_Material_#2_0"]: THREE.Mesh;
    ["Wood008_Material_#2_0"]: THREE.Mesh;
    ["Wood009_Material_#2_0"]: THREE.Mesh;
    ["Wood010_Material_#2_0"]: THREE.Mesh;
    ["Wood011_Material_#2_0"]: THREE.Mesh;
    ["Wood012_Material_#2_0"]: THREE.Mesh;
    ["Wood013_Material_#2_0"]: THREE.Mesh;
    ["Wood014_Material_#2_0"]: THREE.Mesh;
    ["Wood015_Material_#2_0"]: THREE.Mesh;
    ["Wood016_Material_#2_0"]: THREE.Mesh;
    ["Wood017_Material_#2_0"]: THREE.Mesh;
    ["Wood018_Material_#2_0"]: THREE.Mesh;
    ["Wood019_Material_#2_0"]: THREE.Mesh;
    ["Wood020_Material_#2_0"]: THREE.Mesh;
    ["Wood021_Material_#2_0"]: THREE.Mesh;
    ["Wood022_Material_#2_0"]: THREE.Mesh;
    ["Wood023_Material_#2_0"]: THREE.Mesh;
    ["Wood024_Material_#2_0"]: THREE.Mesh;
    ["Wood025_Material_#2_0"]: THREE.Mesh;
    ["Counter_Material_#2_0"]: THREE.Mesh;
    ["Shelf_Material_#2_0"]: THREE.Mesh;
    ["Wood026_Material_#2_0"]: THREE.Mesh;
    ["Shelf001_Material_#2_0"]: THREE.Mesh;
    ["Shelf002_Material_#2_0"]: THREE.Mesh;
    ["Shelf003_Material_#2_0"]: THREE.Mesh;
    ["Shelf004_Material_#2_0"]: THREE.Mesh;
    ["Shelf005_Material_#2_0"]: THREE.Mesh;
    ["Wood027_Material_#2_0"]: THREE.Mesh;
    ["Shelf006_Material_#2_0"]: THREE.Mesh;
    ["Shelf007_Material_#2_0"]: THREE.Mesh;
    ["Shelf008_Material_#2_0"]: THREE.Mesh;
    ["Wood028_Material_#2_0"]: THREE.Mesh;
    ["Shelf009_Material_#2_0"]: THREE.Mesh;
    ["Shelf010_Material_#2_0"]: THREE.Mesh;
    ["Shelf011_Material_#2_0"]: THREE.Mesh;
    ["Wood029_Material_#2_0"]: THREE.Mesh;
    ["Wood030_Material_#2_0"]: THREE.Mesh;
    ["Wood031_Material_#2_0"]: THREE.Mesh;
    ["Wood032_Material_#2_0"]: THREE.Mesh;
    ["Wood033_Material_#2_0"]: THREE.Mesh;
    ["Wood034_Material_#2_0"]: THREE.Mesh;
    ["Wood035_Material_#2_0"]: THREE.Mesh;
    ["Wood036_Material_#2_0"]: THREE.Mesh;
    ["Wood037_Material_#2_0"]: THREE.Mesh;
    ["Wood038_Material_#2_0"]: THREE.Mesh;
    ["Wood039_Material_#2_0"]: THREE.Mesh;
    ["Wood040_Material_#2_0"]: THREE.Mesh;
    ["Wood042_Material_#2_0"]: THREE.Mesh;
    ["Wood043_Material_#2_0"]: THREE.Mesh;
    ["Wood044_Material_#2_0"]: THREE.Mesh;
    ["Wood045_Material_#2_0"]: THREE.Mesh;
    ["Wood046_Material_#2_0"]: THREE.Mesh;
    ["Wall_Material_#2_0"]: THREE.Mesh;
    ["Wall001_Material_#2_0"]: THREE.Mesh;
    ["Wall002_Material_#2_0"]: THREE.Mesh;
    ["Wall003_Material_#2_0"]: THREE.Mesh;
    ["Wood047_Material_#2_0"]: THREE.Mesh;
    ["Wall004_Material_#2_0"]: THREE.Mesh;
    ["Wall005_Material_#2_0"]: THREE.Mesh;
    ["Wall006_Material_#2_0"]: THREE.Mesh;
    ["Wood048_Material_#2_0"]: THREE.Mesh;
    ["Wood049_Material_#2_0"]: THREE.Mesh;
    ["Wood050_Material_#2_0"]: THREE.Mesh;
    ["Wood051_Material_#2_0"]: THREE.Mesh;
    ["Wood052_Material_#2_0"]: THREE.Mesh;
    ["Window_Material_#2_0"]: THREE.Mesh;
    ["Wood053_Material_#2_0"]: THREE.Mesh;
    ["Wood054_Material_#2_0"]: THREE.Mesh;
    ["Wood055_Material_#2_0"]: THREE.Mesh;
    ["Shelf013_Material_#2_0"]: THREE.Mesh;
    ["Shelf014_Material_#2_0"]: THREE.Mesh;
    ["Wood056_Material_#2_0"]: THREE.Mesh;
    ["Wood057_Material_#2_0"]: THREE.Mesh;
    ["Wood058_Material_#2_0"]: THREE.Mesh;
    ["Wood059_Material_#2_0"]: THREE.Mesh;
    ["Wood060_Material_#2_0"]: THREE.Mesh;
    ["Wood061_Material_#2_0"]: THREE.Mesh;
    ["Wood062_Material_#2_0"]: THREE.Mesh;
    ["Wall007_Material_#2_0"]: THREE.Mesh;
    ["Wall008_Material_#2_0"]: THREE.Mesh;
    ["Wall009_Material_#2_0"]: THREE.Mesh;
    ["Wall010_Material_#2_0"]: THREE.Mesh;
    ["Wood063_Material_#2_0"]: THREE.Mesh;
    ["Wood064_Material_#2_0"]: THREE.Mesh;
    ["Wood065_Material_#2_0"]: THREE.Mesh;
    ["Wood066_Material_#2_0"]: THREE.Mesh;
    ["Wood067_Material_#2_0"]: THREE.Mesh;
    ["Handle_Material_#2_0"]: THREE.Mesh;
    ["Handle001_Material_#2_0"]: THREE.Mesh;
    ["Handle002_Material_#2_0"]: THREE.Mesh;
    ["Handle003_Material_#2_0"]: THREE.Mesh;
    ["Handle004_Material_#2_0"]: THREE.Mesh;
    ["Handle005_Material_#2_0"]: THREE.Mesh;
    ["Handle006_Material_#2_0"]: THREE.Mesh;
    ["Handle007_Material_#2_0"]: THREE.Mesh;
    ["Handle008_Material_#2_0"]: THREE.Mesh;
    ["Handle009_Material_#2_0"]: THREE.Mesh;
    ["Handle010_Material_#2_0"]: THREE.Mesh;
    ["Handle011_Material_#2_0"]: THREE.Mesh;
    ["Barrel01_Material_#2_0"]: THREE.Mesh;
    ["Ladder_Material_#2_0"]: THREE.Mesh;
    ["Wood068_Material_#2_0"]: THREE.Mesh;
    ["Wood069_Material_#2_0"]: THREE.Mesh;
    ["Wood070_Material_#2_0"]: THREE.Mesh;
    ["Wood071_Material_#2_0"]: THREE.Mesh;
    ["Wood072_Material_#2_0"]: THREE.Mesh;
    ["Wood073_Material_#2_0"]: THREE.Mesh;
    ["Wood074_Material_#2_0"]: THREE.Mesh;
    ["Wood075_Material_#2_0"]: THREE.Mesh;
    ["Wood076_Material_#2_0"]: THREE.Mesh;
    ["Wood077_Material_#2_0"]: THREE.Mesh;
    ["Wood078_Material_#2_0"]: THREE.Mesh;
    ["Wood079_Material_#2_0"]: THREE.Mesh;
    ["Wood080_Material_#2_0"]: THREE.Mesh;
    ["Wood081_Material_#2_0"]: THREE.Mesh;
    ["Roof_tiles002_Material_#2_0"]: THREE.Mesh;
    ["Roof_tiles003_Material_#2_0"]: THREE.Mesh;
    ["Roof_tiles004_Material_#2_0"]: THREE.Mesh;
    ["Roof_tiles005_Material_#2_0"]: THREE.Mesh;
    ["Roof_tiles006_Material_#2_0"]: THREE.Mesh;
    ["Roof_tiles007_Material_#2_0"]: THREE.Mesh;
    ["Wood082_Material_#2_0"]: THREE.Mesh;
    ["Wood083_Material_#2_0"]: THREE.Mesh;
    ["Wood084_Material_#2_0"]: THREE.Mesh;
    ["Wood085_Material_#2_0"]: THREE.Mesh;
    ["Wood086_Material_#2_0"]: THREE.Mesh;
    ["Wood087_Material_#2_0"]: THREE.Mesh;
    ["Wood088_Material_#2_0"]: THREE.Mesh;
    ["Wood089_Material_#2_0"]: THREE.Mesh;
    ["Wood_panel_Material_#2_0"]: THREE.Mesh;
    ["Wood_panel001_Material_#2_0"]: THREE.Mesh;
    ["Wood_panel003_Material_#2_0"]: THREE.Mesh;
    ["Wood_panel004_Material_#2_0"]: THREE.Mesh;
    ["Wall011_Material_#2_0"]: THREE.Mesh;
    ["Wood_panel005_Material_#2_0"]: THREE.Mesh;
    ["Wood_panel006_Material_#2_0"]: THREE.Mesh;
    ["Wood_panel007_Material_#2_0"]: THREE.Mesh;
    ["Wall012_Material_#2_0"]: THREE.Mesh;
    ["Wall013_Material_#2_0"]: THREE.Mesh;
    ["CeilingPanel_Material_#2_0"]: THREE.Mesh;
    ["CeilingPanel001_Material_#2_0"]: THREE.Mesh;
    ["Roof_tiles008_Material_#2_0"]: THREE.Mesh;
    ["Wood090_Material_#2_0"]: THREE.Mesh;
    ["Wood091_Material_#2_0"]: THREE.Mesh;
    ["Shelf015_Material_#2_0"]: THREE.Mesh;
    ["Shelf016_Material_#2_0"]: THREE.Mesh;
    ["Shelf017_Material_#2_0"]: THREE.Mesh;
    ["Shelf018_Material_#2_0"]: THREE.Mesh;
    ["Shelf_thing_Material_#2_0"]: THREE.Mesh;
    ["Shelf019_Material_#2_0"]: THREE.Mesh;
    ["Shelf_thing001_Material_#2_0"]: THREE.Mesh;
    ["Shelf020_Material_#2_0"]: THREE.Mesh;
    ["Shelf021_Material_#2_0"]: THREE.Mesh;
    ["Shelf022_Material_#2_0"]: THREE.Mesh;
    ["Shelf023_Material_#2_0"]: THREE.Mesh;
    ["Shelf024_Material_#2_0"]: THREE.Mesh;
    ["Shelf025_Material_#2_0"]: THREE.Mesh;
    ["Shelf026_Material_#2_0"]: THREE.Mesh;
    ["NewYearPocket_Material_#2_0"]: THREE.Mesh;
    ["NewYearPocket002_Material_#2_0"]: THREE.Mesh;
    ["NewYearPocket003_Material_#2_0"]: THREE.Mesh;
    ["NewYearPocket004_Material_#2_0"]: THREE.Mesh;
    ["NewYearPocket005_Material_#2_0"]: THREE.Mesh;
    ["NewYearPocket006_Material_#2_0"]: THREE.Mesh;
    ["NewYearPocket007_Material_#2_0"]: THREE.Mesh;
    ["NewYearPocket008_Material_#2_0"]: THREE.Mesh;
    ["NewYearPocket009_Material_#2_0"]: THREE.Mesh;
    ["NewYearPocket010_Material_#2_0"]: THREE.Mesh;
    ["Fireworks001_Material_#2_0"]: THREE.Mesh;
    ["Fireworks002_Material_#2_0"]: THREE.Mesh;
    ["Fireworks003_Material_#2_0"]: THREE.Mesh;
    ["Fireworks004_Material_#2_0"]: THREE.Mesh;
    ["Fireworks005_Material_#2_0"]: THREE.Mesh;
    ["Fireworks006_Material_#2_0"]: THREE.Mesh;
    ["Fireworks007_Material_#2_0"]: THREE.Mesh;
    ["Fireworks008_Material_#2_0"]: THREE.Mesh;
    ["Fireworks009_Material_#2_0"]: THREE.Mesh;
    ["String_Material_#2_0"]: THREE.Mesh;
    ["String001_Material_#2_0"]: THREE.Mesh;
    ["String002_Material_#2_0"]: THREE.Mesh;
    ["String003_Material_#2_0"]: THREE.Mesh;
    ["String004_Material_#2_0"]: THREE.Mesh;
    ["String005_Material_#2_0"]: THREE.Mesh;
    ["String006_Material_#2_0"]: THREE.Mesh;
    ["Fireworks010_Material_#2_0"]: THREE.Mesh;
    ["String007_Material_#2_0"]: THREE.Mesh;
    ["String008_Material_#2_0"]: THREE.Mesh;
    ["Fireworks011_Material_#2_0"]: THREE.Mesh;
    ["Fireworks012_Material_#2_0"]: THREE.Mesh;
    ["Fireworks013_Material_#2_0"]: THREE.Mesh;
    ["Shop_divider_Material_#2_0"]: THREE.Mesh;
    ["Shop_divider001_Material_#2_0"]: THREE.Mesh;
    ["Cylinder028_Material_#2_0"]: THREE.Mesh;
    ["Wood092_Material_#2_0"]: THREE.Mesh;
    ["Wood093_Material_#2_0"]: THREE.Mesh;
    ["Wood094_Material_#2_0"]: THREE.Mesh;
    ["Wood095_Material_#2_0"]: THREE.Mesh;
    ["Object007_Material_#2_0"]: THREE.Mesh;
    ["UmbrellaWhite001_Material_#2_0"]: THREE.Mesh;
    ["Cylinder029_Material_#2_0"]: THREE.Mesh;
    ["Object008_Material_#2_0"]: THREE.Mesh;
    ["Object009_Material_#2_0"]: THREE.Mesh;
    ["UmbrellaWhite002_Material_#2_0"]: THREE.Mesh;
    ["String013_Material_#2_0"]: THREE.Mesh;
    ["Sphere029_Material_#2_0"]: THREE.Mesh;
    ["Sphere030_Material_#2_0"]: THREE.Mesh;
    ["Sphere031_Material_#2_0"]: THREE.Mesh;
    ["Sphere032_Material_#2_0"]: THREE.Mesh;
    ["Sphere033_Material_#2_0"]: THREE.Mesh;
    ["Cylinder042_Material_#2_0"]: THREE.Mesh;
    ["Cylinder044_Material_#2_0"]: THREE.Mesh;
    ["Cylinder045_Material_#2_0"]: THREE.Mesh;
    ["Cylinder046_Material_#2_0"]: THREE.Mesh;
    ["Cylinder047_Material_#2_0"]: THREE.Mesh;
    ["Cylinder048_Material_#2_0"]: THREE.Mesh;
    ["Cylinder049_Material_#2_0"]: THREE.Mesh;
    ["Cylinder050_Material_#2_0"]: THREE.Mesh;
    ["Cylinder051_Material_#2_0"]: THREE.Mesh;
    ["Cylinder052_Material_#2_0"]: THREE.Mesh;
    ["Cylinder053_Material_#2_0"]: THREE.Mesh;
    ["Cylinder054_Material_#2_0"]: THREE.Mesh;
    ["Cylinder055_Material_#2_0"]: THREE.Mesh;
    ["Sphere034_Material_#2_0"]: THREE.Mesh;
    ["Sphere035_Material_#2_0"]: THREE.Mesh;
    ["Sphere036_Material_#2_0"]: THREE.Mesh;
    ["Sphere037_Material_#2_0"]: THREE.Mesh;
    ["Sphere038_Material_#2_0"]: THREE.Mesh;
    ["Sphere039_Material_#2_0"]: THREE.Mesh;
    ["Sphere040_Material_#2_0"]: THREE.Mesh;
    ["Sphere041_Material_#2_0"]: THREE.Mesh;
    ["Wood096_Material_#2_0"]: THREE.Mesh;
    ["Wood097_Material_#2_0"]: THREE.Mesh;
    ["FireworksSticks002_Material_#2_0"]: THREE.Mesh;
    ["Shelf027_Material_#2_0"]: THREE.Mesh;
    ["Shelf028_Material_#2_0"]: THREE.Mesh;
    ["Wood098_Material_#2_0"]: THREE.Mesh;
    ["Wood100_Material_#2_0"]: THREE.Mesh;
    ["Wood101_Material_#2_0"]: THREE.Mesh;
    ["Wood102_Material_#2_0"]: THREE.Mesh;
    ["Wood103_Material_#2_0"]: THREE.Mesh;
    ["Wood104_Material_#2_0"]: THREE.Mesh;
    ["Wood105_Material_#2_0"]: THREE.Mesh;
    ["Sphere042_Material_#2_0"]: THREE.Mesh;
    ["Wood106_Material_#2_0"]: THREE.Mesh;
    ["Shoe001_Material_#2_0"]: THREE.Mesh;
    ["Coin001_Material_#2_0"]: THREE.Mesh;
    ["Coin002_Material_#2_0"]: THREE.Mesh;
    ["Coin003_Material_#2_0"]: THREE.Mesh;
    ["Coin004_Material_#2_0"]: THREE.Mesh;
    ["Coin005_Material_#2_0"]: THREE.Mesh;
    ["Coin006_Material_#2_0"]: THREE.Mesh;
    ["Coin007_Material_#2_0"]: THREE.Mesh;
    ["Hammer_Material_#2_0"]: THREE.Mesh;
    ["Moss001_Material_#2_0"]: THREE.Mesh;
    ["Moss002_Material_#2_0"]: THREE.Mesh;
    ["Moss003_Material_#2_0"]: THREE.Mesh;
    ["Moss004_Material_#2_0"]: THREE.Mesh;
    ["Moss005_Material_#2_0"]: THREE.Mesh;
    ["Moss006_Material_#2_0"]: THREE.Mesh;
    ["Moss007_Material_#2_0"]: THREE.Mesh;
    ["Moss008_Material_#2_0"]: THREE.Mesh;
    ["Moss009_Material_#2_0"]: THREE.Mesh;
    ["Moss010_Material_#2_0"]: THREE.Mesh;
    ["Moss011_Material_#2_0"]: THREE.Mesh;
    ["Moss012_Material_#2_0"]: THREE.Mesh;
    ["Moss013_Material_#2_0"]: THREE.Mesh;
    ["Moss014_Material_#2_0"]: THREE.Mesh;
    ["Moss015_Material_#2_0"]: THREE.Mesh;
    ["Chair_Material_#2_0"]: THREE.Mesh;
    ["Sphere043_Material_#2_0"]: THREE.Mesh;
    ["Sphere044_Material_#2_0"]: THREE.Mesh;
    ["Sphere045_Material_#2_0"]: THREE.Mesh;
    ["Cylinder057_Material_#2_0"]: THREE.Mesh;
    ["Cylinder058_Material_#2_0"]: THREE.Mesh;
    ["Shoe002_Material_#2_0"]: THREE.Mesh;
    ["Leaf001_Material_#2_0"]: THREE.Mesh;
    ["Leaf002_Material_#2_0"]: THREE.Mesh;
    ["Leaf003_Material_#2_0"]: THREE.Mesh;
    ["Leaf004_Material_#2_0"]: THREE.Mesh;
    ["Leaf005_Material_#2_0"]: THREE.Mesh;
    ["Leaf006_Material_#2_0"]: THREE.Mesh;
    ["Leaf007_Material_#2_0"]: THREE.Mesh;
    ["Leaf010_Material_#2_0"]: THREE.Mesh;
    ["Leaf011_Material_#2_0"]: THREE.Mesh;
    ["Leaf012_Material_#2_0"]: THREE.Mesh;
    ["Leaf013_Material_#2_0"]: THREE.Mesh;
    ["Leaf014_Material_#2_0"]: THREE.Mesh;
    ["Leaf015_Material_#2_0"]: THREE.Mesh;
    ["Leaf016_Material_#2_0"]: THREE.Mesh;
    ["Leaf017_Material_#2_0"]: THREE.Mesh;
    ["Leaf018_Material_#2_0"]: THREE.Mesh;
    ["Leaf019_Material_#2_0"]: THREE.Mesh;
    ["Leaf020_Material_#2_0"]: THREE.Mesh;
    ["Leaf021_Material_#2_0"]: THREE.Mesh;
    ["Leaf022_Material_#2_0"]: THREE.Mesh;
    ["Leaf023_Material_#2_0"]: THREE.Mesh;
    ["Leaf024_Material_#2_0"]: THREE.Mesh;
    ["Leaf025_Material_#2_0"]: THREE.Mesh;
    ["Leaf026_Material_#2_0"]: THREE.Mesh;
    ["Leaf027_Material_#2_0"]: THREE.Mesh;
    ["Leaf028_Material_#2_0"]: THREE.Mesh;
    ["Leaf029_Material_#2_0"]: THREE.Mesh;
    ["Leaf030_Material_#2_0"]: THREE.Mesh;
    ["Leaf031_Material_#2_0"]: THREE.Mesh;
    ["Leaf032_Material_#2_0"]: THREE.Mesh;
    ["Leaf033_Material_#2_0"]: THREE.Mesh;
    ["Leaf034_Material_#2_0"]: THREE.Mesh;
    ["Leaf035_Material_#2_0"]: THREE.Mesh;
    ["Leaf036_Material_#2_0"]: THREE.Mesh;
    ["Coin008_Material_#2_0"]: THREE.Mesh;
    ["Coin009_Material_#2_0"]: THREE.Mesh;
    ["Coin010_Material_#2_0"]: THREE.Mesh;
    ["Coin011_Material_#2_0"]: THREE.Mesh;
    ["Coin012_Material_#2_0"]: THREE.Mesh;
    ["Coin013_Material_#2_0"]: THREE.Mesh;
    ["String014_Material_#2_0"]: THREE.Mesh;
    ["String015_Material_#2_0"]: THREE.Mesh;
    ["String016_Material_#2_0"]: THREE.Mesh;
    ["String017_Material_#2_0"]: THREE.Mesh;
    ["String018_Material_#2_0"]: THREE.Mesh;
    ["Lantern_Material_#2_0"]: THREE.Mesh;
    ["Lantern001_Material_#2_0"]: THREE.Mesh;
    ["Lantern002_Material_#2_0"]: THREE.Mesh;
    ["Lantern003_Material_#2_0"]: THREE.Mesh;
    ["Lantern004_Material_#2_0"]: THREE.Mesh;
    ["Lantern005_Material_#2_0"]: THREE.Mesh;
    ["Fireworks015_Material_#2_0"]: THREE.Mesh;
    ["Fireworks016_Material_#2_0"]: THREE.Mesh;
    ["Fireworks017_Material_#2_0"]: THREE.Mesh;
    ["Stone002_Material_#2_0"]: THREE.Mesh;
    ["Stone004_Material_#2_0"]: THREE.Mesh;
    ["Stone005_Material_#2_0"]: THREE.Mesh;
    ["Stone006_Material_#2_0"]: THREE.Mesh;
    ["Stone007_Material_#2_0"]: THREE.Mesh;
    ["Stone008_Material_#2_0"]: THREE.Mesh;
    ["Stone009_Material_#2_0"]: THREE.Mesh;
    ["Stone010_Material_#2_0"]: THREE.Mesh;
    ["Stone011_Material_#2_0"]: THREE.Mesh;
    ["Stone012_Material_#2_0"]: THREE.Mesh;
    ["Stone013_Material_#2_0"]: THREE.Mesh;
    ["Stone014_Material_#2_0"]: THREE.Mesh;
    ["Stone015_Material_#2_0"]: THREE.Mesh;
    ["Stone016_Material_#2_0"]: THREE.Mesh;
    ["Stone017_Material_#2_0"]: THREE.Mesh;
    ["Stone018_Material_#2_0"]: THREE.Mesh;
    ["Stone019_Material_#2_0"]: THREE.Mesh;
    ["Stone020_Material_#2_0"]: THREE.Mesh;
    ["Stone021_Material_#2_0"]: THREE.Mesh;
    ["Stone022_Material_#2_0"]: THREE.Mesh;
    ["Leaf037_Material_#2_0"]: THREE.Mesh;
    ["Leaf038_Material_#2_0"]: THREE.Mesh;
    ["Leaf039_Material_#2_0"]: THREE.Mesh;
    ["Leaf040_Material_#2_0"]: THREE.Mesh;
    ["Leaf041_Material_#2_0"]: THREE.Mesh;
    ["Leaf042_Material_#2_0"]: THREE.Mesh;
    ["Leaf043_Material_#2_0"]: THREE.Mesh;
    ["Leaf044_Material_#2_0"]: THREE.Mesh;
    ["Leaf045_Material_#2_0"]: THREE.Mesh;
    ["Leaf046_Material_#2_0"]: THREE.Mesh;
    ["Leaf047_Material_#2_0"]: THREE.Mesh;
    ["Moss016_Material_#2_0"]: THREE.Mesh;
    ["Moss017_Material_#2_0"]: THREE.Mesh;
    ["Leaf048_Material_#2_0"]: THREE.Mesh;
    ["Leaf049_Material_#2_0"]: THREE.Mesh;
    ["Fireworks018_Material_#2_0"]: THREE.Mesh;
    ["Fireworks019_Material_#2_0"]: THREE.Mesh;
    ["Fireworks020_Material_#2_0"]: THREE.Mesh;
    ["Leaf050_Material_#2_0"]: THREE.Mesh;
    ["Leaf051_Material_#2_0"]: THREE.Mesh;
    ["Leaf052_Material_#2_0"]: THREE.Mesh;
    ["Leaf053_Material_#2_0"]: THREE.Mesh;
    ["Moss018_Material_#2_0"]: THREE.Mesh;
    ["Barrel_Material_#2_0"]: THREE.Mesh;
    ["Barrel004_Material_#2_0"]: THREE.Mesh;
    ["Stone033_Material_#2_0"]: THREE.Mesh;
    ["Stone034_Material_#2_0"]: THREE.Mesh;
    ["Stone035_Material_#2_0"]: THREE.Mesh;
    ["Stone036_Material_#2_0"]: THREE.Mesh;
    ["Stone037_Material_#2_0"]: THREE.Mesh;
    ["Stone038_Material_#2_0"]: THREE.Mesh;
    ["Stone039_Material_#2_0"]: THREE.Mesh;
    ["Stone040_Material_#2_0"]: THREE.Mesh;
    ["Stone041_Material_#2_0"]: THREE.Mesh;
    ["Stone042_Material_#2_0"]: THREE.Mesh;
    ["Stone043_Material_#2_0"]: THREE.Mesh;
    ["Stone044_Material_#2_0"]: THREE.Mesh;
    ["Stone045_Material_#2_0"]: THREE.Mesh;
    ["Leaf054_Material_#2_0"]: THREE.Mesh;
    ["Leaf055_Material_#2_0"]: THREE.Mesh;
    ["Leaf056_Material_#2_0"]: THREE.Mesh;
    ["Leaf057_Material_#2_0"]: THREE.Mesh;
    ["Leaf058_Material_#2_0"]: THREE.Mesh;
    ["Moss019_Material_#2_0"]: THREE.Mesh;
    ["Leaf059_Material_#2_0"]: THREE.Mesh;
    ["Leaf060_Material_#2_0"]: THREE.Mesh;
    ["CurvedWood_Material_#2_0"]: THREE.Mesh;
    ["CurvedWood001_Material_#2_0"]: THREE.Mesh;
    ["CurvedWood002_Material_#2_0"]: THREE.Mesh;
    ["CurvedWood003_Material_#2_0"]: THREE.Mesh;
    ["Sphere046_Material_#2_0"]: THREE.Mesh;
    ["Sphere047_Material_#2_0"]: THREE.Mesh;
    ["Sphere048_Material_#2_0"]: THREE.Mesh;
    ["Sphere049_Material_#2_0"]: THREE.Mesh;
    ["Leaf061_Material_#2_0"]: THREE.Mesh;
    ["Leaf062_Material_#2_0"]: THREE.Mesh;
    ["Leaf063_Material_#2_0"]: THREE.Mesh;
    ["Leaf064_Material_#2_0"]: THREE.Mesh;
    ["Leaf065_Material_#2_0"]: THREE.Mesh;
    ["Leaf066_Material_#2_0"]: THREE.Mesh;
    ["Leaf068_Material_#2_0"]: THREE.Mesh;
    ["Leaf069_Material_#2_0"]: THREE.Mesh;
    ["Leaf070_Material_#2_0"]: THREE.Mesh;
    ["Leaf071_Material_#2_0"]: THREE.Mesh;
    ["Leaf072_Material_#2_0"]: THREE.Mesh;
    ["Leaf073_Material_#2_0"]: THREE.Mesh;
    ["Leaf074_Material_#2_0"]: THREE.Mesh;
    ["Leaf076_Material_#2_0"]: THREE.Mesh;
    ["Leaf077_Material_#2_0"]: THREE.Mesh;
    ["Leaf078_Material_#2_0"]: THREE.Mesh;
    ["Leaf079_Material_#2_0"]: THREE.Mesh;
    ["Leaf080_Material_#2_0"]: THREE.Mesh;
    ["Leaf081_Material_#2_0"]: THREE.Mesh;
    ["Leaf082_Material_#2_0"]: THREE.Mesh;
    ["Leaf083_Material_#2_0"]: THREE.Mesh;
    ["Leaf084_Material_#2_0"]: THREE.Mesh;
    ["Leaf085_Material_#2_0"]: THREE.Mesh;
    ["Leaf086_Material_#2_0"]: THREE.Mesh;
    ["Leaf087_Material_#2_0"]: THREE.Mesh;
    ["Leaf088_Material_#2_0"]: THREE.Mesh;
    ["Leaf089_Material_#2_0"]: THREE.Mesh;
    ["Leaf090_Material_#2_0"]: THREE.Mesh;
    ["Leaf091_Material_#2_0"]: THREE.Mesh;
    ["Leaf092_Material_#2_0"]: THREE.Mesh;
    ["Leaf093_Material_#2_0"]: THREE.Mesh;
    ["Leaf094_Material_#2_0"]: THREE.Mesh;
    ["Leaf095_Material_#2_0"]: THREE.Mesh;
    ["Leaf096_Material_#2_0"]: THREE.Mesh;
    ["Leaf097_Material_#2_0"]: THREE.Mesh;
    ["Leaf098_Material_#2_0"]: THREE.Mesh;
    ["Leaf099_Material_#2_0"]: THREE.Mesh;
    ["Leaf100_Material_#2_0"]: THREE.Mesh;
    ["Leaf101_Material_#2_0"]: THREE.Mesh;
    ["Leaf102_Material_#2_0"]: THREE.Mesh;
    ["Leaf103_Material_#2_0"]: THREE.Mesh;
    ["Leaf104_Material_#2_0"]: THREE.Mesh;
    ["Leaf105_Material_#2_0"]: THREE.Mesh;
    ["Leaf106_Material_#2_0"]: THREE.Mesh;
    ["Leaf107_Material_#2_0"]: THREE.Mesh;
    ["Leaf108_Material_#2_0"]: THREE.Mesh;
    ["Leaf109_Material_#2_0"]: THREE.Mesh;
    ["Leaf110_Material_#2_0"]: THREE.Mesh;
    ["Leaf111_Material_#2_0"]: THREE.Mesh;
    ["Leaf112_Material_#2_0"]: THREE.Mesh;
    ["Leaf113_Material_#2_0"]: THREE.Mesh;
    ["Leaf114_Material_#2_0"]: THREE.Mesh;
    ["Leaf115_Material_#2_0"]: THREE.Mesh;
    ["Leaf116_Material_#2_0"]: THREE.Mesh;
    ["Leaf117_Material_#2_0"]: THREE.Mesh;
    ["Leaf118_Material_#2_0"]: THREE.Mesh;
    ["Leaf119_Material_#2_0"]: THREE.Mesh;
    ["Leaf120_Material_#2_0"]: THREE.Mesh;
    ["Leaf121_Material_#2_0"]: THREE.Mesh;
    ["Leaf122_Material_#2_0"]: THREE.Mesh;
    ["Leaf123_Material_#2_0"]: THREE.Mesh;
    ["Leaf124_Material_#2_0"]: THREE.Mesh;
    ["Leaf125_Material_#2_0"]: THREE.Mesh;
    ["Leaf126_Material_#2_0"]: THREE.Mesh;
    ["Leaf127_Material_#2_0"]: THREE.Mesh;
    ["Leaf128_Material_#2_0"]: THREE.Mesh;
    ["Leaf129_Material_#2_0"]: THREE.Mesh;
    ["Leaf130_Material_#2_0"]: THREE.Mesh;
    ["Leaf131_Material_#2_0"]: THREE.Mesh;
    ["Leaf132_Material_#2_0"]: THREE.Mesh;
    ["Leaf133_Material_#2_0"]: THREE.Mesh;
    ["Leaf134_Material_#2_0"]: THREE.Mesh;
    ["Leaf135_Material_#2_0"]: THREE.Mesh;
    ["Leaf136_Material_#2_0"]: THREE.Mesh;
    ["Leaf137_Material_#2_0"]: THREE.Mesh;
    ["Leaf138_Material_#2_0"]: THREE.Mesh;
    ["Leaf139_Material_#2_0"]: THREE.Mesh;
    ["Leaf140_Material_#2_0"]: THREE.Mesh;
    ["Leaf141_Material_#2_0"]: THREE.Mesh;
    ["Leaf142_Material_#2_0"]: THREE.Mesh;
    ["Leaf143_Material_#2_0"]: THREE.Mesh;
    ["Leaf144_Material_#2_0"]: THREE.Mesh;
    ["Leaf145_Material_#2_0"]: THREE.Mesh;
    ["Leaf146_Material_#2_0"]: THREE.Mesh;
    ["Leaf147_Material_#2_0"]: THREE.Mesh;
    ["Leaf148_Material_#2_0"]: THREE.Mesh;
    ["Leaf149_Material_#2_0"]: THREE.Mesh;
    ["Leaf150_Material_#2_0"]: THREE.Mesh;
    ["Leaf151_Material_#2_0"]: THREE.Mesh;
    ["Leaf152_Material_#2_0"]: THREE.Mesh;
    ["Leaf153_Material_#2_0"]: THREE.Mesh;
    ["Leaf154_Material_#2_0"]: THREE.Mesh;
    ["Leaf155_Material_#2_0"]: THREE.Mesh;
    ["Leaf156_Material_#2_0"]: THREE.Mesh;
    ["Leaf157_Material_#2_0"]: THREE.Mesh;
    ["Leaf158_Material_#2_0"]: THREE.Mesh;
    ["Leaf159_Material_#2_0"]: THREE.Mesh;
    ["Leaf160_Material_#2_0"]: THREE.Mesh;
    ["Leaf161_Material_#2_0"]: THREE.Mesh;
    ["Leaf162_Material_#2_0"]: THREE.Mesh;
    ["Leaf163_Material_#2_0"]: THREE.Mesh;
    ["Leaf164_Material_#2_0"]: THREE.Mesh;
    ["Leaf165_Material_#2_0"]: THREE.Mesh;
    ["Leaf166_Material_#2_0"]: THREE.Mesh;
    ["Leaf167_Material_#2_0"]: THREE.Mesh;
    ["Leaf168_Material_#2_0"]: THREE.Mesh;
    ["Leaf169_Material_#2_0"]: THREE.Mesh;
    ["Leaf170_Material_#2_0"]: THREE.Mesh;
    ["Leaf171_Material_#2_0"]: THREE.Mesh;
    ["Leaf172_Material_#2_0"]: THREE.Mesh;
    ["Leaf173_Material_#2_0"]: THREE.Mesh;
    ["Leaf174_Material_#2_0"]: THREE.Mesh;
    ["Leaf175_Material_#2_0"]: THREE.Mesh;
    ["Leaf176_Material_#2_0"]: THREE.Mesh;
    ["Leaf177_Material_#2_0"]: THREE.Mesh;
    ["Leaf178_Material_#2_0"]: THREE.Mesh;
    ["Leaf179_Material_#2_0"]: THREE.Mesh;
    ["Leaf180_Material_#2_0"]: THREE.Mesh;
    ["Leaf181_Material_#2_0"]: THREE.Mesh;
    ["Leaf182_Material_#2_0"]: THREE.Mesh;
    ["Leaf183_Material_#2_0"]: THREE.Mesh;
    ["Leaf184_Material_#2_0"]: THREE.Mesh;
    ["Leaf185_Material_#2_0"]: THREE.Mesh;
    ["Leaf186_Material_#2_0"]: THREE.Mesh;
    ["Leaf187_Material_#2_0"]: THREE.Mesh;
    ["Leaf188_Material_#2_0"]: THREE.Mesh;
    ["Leaf189_Material_#2_0"]: THREE.Mesh;
    ["Leaf190_Material_#2_0"]: THREE.Mesh;
    ["Leaf191_Material_#2_0"]: THREE.Mesh;
    ["Leaf192_Material_#2_0"]: THREE.Mesh;
    ["Leaf193_Material_#2_0"]: THREE.Mesh;
    ["Leaf194_Material_#2_0"]: THREE.Mesh;
    ["Leaf195_Material_#2_0"]: THREE.Mesh;
    ["Leaf196_Material_#2_0"]: THREE.Mesh;
    ["Leaf197_Material_#2_0"]: THREE.Mesh;
    ["Leaf198_Material_#2_0"]: THREE.Mesh;
    ["Leaf199_Material_#2_0"]: THREE.Mesh;
    ["Leaf200_Material_#2_0"]: THREE.Mesh;
    ["Leaf201_Material_#2_0"]: THREE.Mesh;
    ["Leaf202_Material_#2_0"]: THREE.Mesh;
    ["Leaf203_Material_#2_0"]: THREE.Mesh;
    ["Leaf204_Material_#2_0"]: THREE.Mesh;
    ["Leaf205_Material_#2_0"]: THREE.Mesh;
    ["Leaf206_Material_#2_0"]: THREE.Mesh;
    ["Leaf207_Material_#2_0"]: THREE.Mesh;
    ["Leaf208_Material_#2_0"]: THREE.Mesh;
    ["Leaf209_Material_#2_0"]: THREE.Mesh;
    ["Leaf210_Material_#2_0"]: THREE.Mesh;
    ["Leaf211_Material_#2_0"]: THREE.Mesh;
    ["Leaf212_Material_#2_0"]: THREE.Mesh;
    ["Leaf213_Material_#2_0"]: THREE.Mesh;
    ["Leaf214_Material_#2_0"]: THREE.Mesh;
    ["Leaf215_Material_#2_0"]: THREE.Mesh;
    ["Leaf216_Material_#2_0"]: THREE.Mesh;
    ["Leaf217_Material_#2_0"]: THREE.Mesh;
    ["Leaf218_Material_#2_0"]: THREE.Mesh;
    ["Leaf219_Material_#2_0"]: THREE.Mesh;
    ["Leaf220_Material_#2_0"]: THREE.Mesh;
    ["Leaf221_Material_#2_0"]: THREE.Mesh;
    ["Leaf222_Material_#2_0"]: THREE.Mesh;
    ["Leaf223_Material_#2_0"]: THREE.Mesh;
    ["Leaf224_Material_#2_0"]: THREE.Mesh;
    ["Leaf225_Material_#2_0"]: THREE.Mesh;
    ["Leaf226_Material_#2_0"]: THREE.Mesh;
    ["Leaf227_Material_#2_0"]: THREE.Mesh;
    ["Leaf228_Material_#2_0"]: THREE.Mesh;
    ["Leaf229_Material_#2_0"]: THREE.Mesh;
    ["Leaf230_Material_#2_0"]: THREE.Mesh;
    ["Leaf231_Material_#2_0"]: THREE.Mesh;
    ["Leaf232_Material_#2_0"]: THREE.Mesh;
    ["Leaf233_Material_#2_0"]: THREE.Mesh;
    ["Leaf234_Material_#2_0"]: THREE.Mesh;
    ["Leaf235_Material_#2_0"]: THREE.Mesh;
    ["Leaf236_Material_#2_0"]: THREE.Mesh;
    ["Leaf237_Material_#2_0"]: THREE.Mesh;
    ["Leaf238_Material_#2_0"]: THREE.Mesh;
    ["Leaf239_Material_#2_0"]: THREE.Mesh;
    ["Leaf240_Material_#2_0"]: THREE.Mesh;
    ["Leaf241_Material_#2_0"]: THREE.Mesh;
    ["Leaf242_Material_#2_0"]: THREE.Mesh;
    ["Leaf243_Material_#2_0"]: THREE.Mesh;
    ["Leaf244_Material_#2_0"]: THREE.Mesh;
    ["Leaf245_Material_#2_0"]: THREE.Mesh;
    ["Leaf246_Material_#2_0"]: THREE.Mesh;
    ["Leaf247_Material_#2_0"]: THREE.Mesh;
    ["Leaf248_Material_#2_0"]: THREE.Mesh;
    ["Leaf249_Material_#2_0"]: THREE.Mesh;
    ["Leaf250_Material_#2_0"]: THREE.Mesh;
    ["Leaf251_Material_#2_0"]: THREE.Mesh;
    ["Leaf252_Material_#2_0"]: THREE.Mesh;
    ["Leaf253_Material_#2_0"]: THREE.Mesh;
    ["Leaf254_Material_#2_0"]: THREE.Mesh;
    ["Leaf255_Material_#2_0"]: THREE.Mesh;
    ["Leaf256_Material_#2_0"]: THREE.Mesh;
    ["Leaf257_Material_#2_0"]: THREE.Mesh;
    ["Leaf258_Material_#2_0"]: THREE.Mesh;
    ["Leaf259_Material_#2_0"]: THREE.Mesh;
    ["Leaf260_Material_#2_0"]: THREE.Mesh;
    ["Leaf261_Material_#2_0"]: THREE.Mesh;
    ["Leaf262_Material_#2_0"]: THREE.Mesh;
    ["Leaf263_Material_#2_0"]: THREE.Mesh;
    ["Leaf264_Material_#2_0"]: THREE.Mesh;
    ["Leaf265_Material_#2_0"]: THREE.Mesh;
    ["Leaf266_Material_#2_0"]: THREE.Mesh;
    ["Leaf267_Material_#2_0"]: THREE.Mesh;
    ["Leaf268_Material_#2_0"]: THREE.Mesh;
    ["Leaf269_Material_#2_0"]: THREE.Mesh;
    ["Leaf270_Material_#2_0"]: THREE.Mesh;
    ["Leaf271_Material_#2_0"]: THREE.Mesh;
    ["Leaf272_Material_#2_0"]: THREE.Mesh;
    ["Leaf273_Material_#2_0"]: THREE.Mesh;
    ["Leaf274_Material_#2_0"]: THREE.Mesh;
    ["Leaf275_Material_#2_0"]: THREE.Mesh;
    ["CurvedWood004_Material_#2_0"]: THREE.Mesh;
    ["CurvedWood005_Material_#2_0"]: THREE.Mesh;
    ["Barrel005_Material_#2_0"]: THREE.Mesh;
    ["Barrel006_Material_#2_0"]: THREE.Mesh;
    ["Barrel007_Material_#2_0"]: THREE.Mesh;
    ["Barrel008_Material_#2_0"]: THREE.Mesh;
    ["Barrel009_Material_#2_0"]: THREE.Mesh;
    ["Bolt013_Material_#2_0"]: THREE.Mesh;
    ["Leaf277_Material_#2_0"]: THREE.Mesh;
    ["Leaf278_Material_#2_0"]: THREE.Mesh;
    ["Leaf279_Material_#2_0"]: THREE.Mesh;
    ["Leaf280_Material_#2_0"]: THREE.Mesh;
    ["Mushroom_Material_#2_0"]: THREE.Mesh;
    ["Mushroom001_Material_#2_0"]: THREE.Mesh;
    ["Mushroom002_Material_#2_0"]: THREE.Mesh;
    ["Mushroom003_Material_#2_0"]: THREE.Mesh;
    ["Mushroom004_Material_#2_0"]: THREE.Mesh;
    ["Mushroom005_Material_#2_0"]: THREE.Mesh;
    ["Mushroom006_Material_#2_0"]: THREE.Mesh;
    ["Mushroom007_Material_#2_0"]: THREE.Mesh;
    ["Mushroom008_Material_#2_0"]: THREE.Mesh;
    ["Mushroom009_Material_#2_0"]: THREE.Mesh;
    ["Mushroom010_Material_#2_0"]: THREE.Mesh;
    ["Mushroom011_Material_#2_0"]: THREE.Mesh;
    ["Mushroom012_Material_#2_0"]: THREE.Mesh;
    ["Mushroom013_Material_#2_0"]: THREE.Mesh;
    ["Mushroom014_Material_#2_0"]: THREE.Mesh;
    ["Mushroom015_Material_#2_0"]: THREE.Mesh;
    ["Mushroom016_Material_#2_0"]: THREE.Mesh;
    ["Mushroom017_Material_#2_0"]: THREE.Mesh;
    ["Mushroom018_Material_#2_0"]: THREE.Mesh;
    ["Mushroom019_Material_#2_0"]: THREE.Mesh;
    ["Mushroom020_Material_#2_0"]: THREE.Mesh;
    ["Mushroom021_Material_#2_0"]: THREE.Mesh;
    ["Mushroom022_Material_#2_0"]: THREE.Mesh;
    ["Mushroom023_Material_#2_0"]: THREE.Mesh;
    ["Mushroom024_Material_#2_0"]: THREE.Mesh;
    ["Mushroom025_Material_#2_0"]: THREE.Mesh;
    ["Mushroom026_Material_#2_0"]: THREE.Mesh;
    ["Mushroom027_Material_#2_0"]: THREE.Mesh;
    ["Mushroom029_Material_#2_0"]: THREE.Mesh;
    ["Mushroom030_Material_#2_0"]: THREE.Mesh;
    ["Mushroom031_Material_#2_0"]: THREE.Mesh;
    ["Leaf281_Material_#2_0"]: THREE.Mesh;
    ["Leaf282_Material_#2_0"]: THREE.Mesh;
    ["Leaf283_Material_#2_0"]: THREE.Mesh;
    ["Leaf284_Material_#2_0"]: THREE.Mesh;
    ["Moss020_Material_#2_0"]: THREE.Mesh;
    ["Mushroom032_Material_#2_0"]: THREE.Mesh;
    ["Mushroom033_Material_#2_0"]: THREE.Mesh;
    ["Mushroom034_Material_#2_0"]: THREE.Mesh;
    ["Mushroom035_Material_#2_0"]: THREE.Mesh;
    ["Mushroom036_Material_#2_0"]: THREE.Mesh;
    ["Mushroom037_Material_#2_0"]: THREE.Mesh;
    ["Mushroom_Material_#2_0_1"]: THREE.Mesh;
    ["Mushroom038_Material_#2_0"]: THREE.Mesh;
    ["Mushroom039_Material_#2_0"]: THREE.Mesh;
    ["Mushroom040_Material_#2_0"]: THREE.Mesh;
    ["Mushroom041_Material_#2_0"]: THREE.Mesh;
    ["Mushroom042_Material_#2_0"]: THREE.Mesh;
    ["Mushroom043_Material_#2_0"]: THREE.Mesh;
    ["Mushroom044_Material_#2_0"]: THREE.Mesh;
    ["Mushroom045_Material_#2_0"]: THREE.Mesh;
    ["Mushroom046_Material_#2_0"]: THREE.Mesh;
    ["Mushroom047_Material_#2_0"]: THREE.Mesh;
    ["Mushroom049_Material_#2_0"]: THREE.Mesh;
    ["Mushroom050_Material_#2_0"]: THREE.Mesh;
    ["Mushroom051_Material_#2_0"]: THREE.Mesh;
    ["Mushroom052_Material_#2_0"]: THREE.Mesh;
    ["Mushroom053_Material_#2_0"]: THREE.Mesh;
    ["Mushroom054_Material_#2_0"]: THREE.Mesh;
    ["Mushroom055_Material_#2_0"]: THREE.Mesh;
    ["Mushroom056_Material_#2_0"]: THREE.Mesh;
    ["Mushroom057_Material_#2_0"]: THREE.Mesh;
    ["Cylinder059_Material_#2_0"]: THREE.Mesh;
    ["Cylinder060_Material_#2_0"]: THREE.Mesh;
    ["Cylinder061_Material_#2_0"]: THREE.Mesh;
    ["Cylinder062_Material_#2_0"]: THREE.Mesh;
    ["Cylinder063_Material_#2_0"]: THREE.Mesh;
    ["Cylinder064_Material_#2_0"]: THREE.Mesh;
    ["Cylinder065_Material_#2_0"]: THREE.Mesh;
    ["Cylinder066_Material_#2_0"]: THREE.Mesh;
    ["Cylinder067_Material_#2_0"]: THREE.Mesh;
    ["Cylinder068_Material_#2_0"]: THREE.Mesh;
    ["Cylinder069_Material_#2_0"]: THREE.Mesh;
    ["Cylinder070_Material_#2_0"]: THREE.Mesh;
    ["Cylinder071_Material_#2_0"]: THREE.Mesh;
    ["Cylinder072_Material_#2_0"]: THREE.Mesh;
    ["Cylinder073_Material_#2_0"]: THREE.Mesh;
    ["Leaf285_Material_#2_0"]: THREE.Mesh;
    ["Leaf286_Material_#2_0"]: THREE.Mesh;
    ["Leaf287_Material_#2_0"]: THREE.Mesh;
    ["Leaf288_Material_#2_0"]: THREE.Mesh;
    ["Leaf289_Material_#2_0"]: THREE.Mesh;
    ["Leaf290_Material_#2_0"]: THREE.Mesh;
    ["Leaf291_Material_#2_0"]: THREE.Mesh;
    ["Leaf292_Material_#2_0"]: THREE.Mesh;
    ["Grass001_Material_#28_0"]: THREE.Mesh;
    ["Grass002_Material_#28_0"]: THREE.Mesh;
    ["Grass003_Material_#28_0"]: THREE.Mesh;
    ["Grass004_Material_#28_0"]: THREE.Mesh;
    ["Grass005_Material_#28_0"]: THREE.Mesh;
    ["Grass006_Material_#28_0"]: THREE.Mesh;
    ["Grass007_Material_#28_0"]: THREE.Mesh;
    ["Grass008_Material_#28_0"]: THREE.Mesh;
    ["Grass009_Material_#28_0"]: THREE.Mesh;
    ["Grass010_Material_#28_0"]: THREE.Mesh;
    ["Grass011_Material_#28_0"]: THREE.Mesh;
    ["Grass012_Material_#28_0"]: THREE.Mesh;
    ["Grass013_Material_#28_0"]: THREE.Mesh;
    ["Grass014_Material_#28_0"]: THREE.Mesh;
    ["Grass015_Material_#28_0"]: THREE.Mesh;
    ["Grass016_Material_#28_0"]: THREE.Mesh;
    ["Grass017_Material_#28_0"]: THREE.Mesh;
    ["Grass018_Material_#28_0"]: THREE.Mesh;
    ["Grass019_Material_#28_0"]: THREE.Mesh;
    ["Grass020_Material_#28_0"]: THREE.Mesh;
    ["Grass021_Material_#28_0"]: THREE.Mesh;
    ["Grass022_Material_#28_0"]: THREE.Mesh;
    ["Grass023_Material_#28_0"]: THREE.Mesh;
    ["Grass024_Material_#28_0"]: THREE.Mesh;
    ["Grass025_Material_#28_0"]: THREE.Mesh;
    ["Grass026_Material_#28_0"]: THREE.Mesh;
    ["Grass027_Material_#28_0"]: THREE.Mesh;
    ["Grass028_Material_#28_0"]: THREE.Mesh;
    ["Grass029_Material_#28_0"]: THREE.Mesh;
    ["Grass030_Material_#28_0"]: THREE.Mesh;
    ["Grass031_Material_#28_0"]: THREE.Mesh;
    ["Grass032_Material_#28_0"]: THREE.Mesh;
    ["Grass033_Material_#28_0"]: THREE.Mesh;
    ["Grass034_Material_#28_0"]: THREE.Mesh;
    ["Grass035_Material_#28_0"]: THREE.Mesh;
    ["Grass036_Material_#28_0"]: THREE.Mesh;
    ["Grass037_Material_#28_0"]: THREE.Mesh;
    ["Grass038_Material_#28_0"]: THREE.Mesh;
    ["Grass039_Material_#28_0"]: THREE.Mesh;
    ["Grass040_Material_#28_0"]: THREE.Mesh;
    ["Grass041_Material_#28_0"]: THREE.Mesh;
    ["Grass042_Material_#28_0"]: THREE.Mesh;
    ["Grass043_Material_#28_0"]: THREE.Mesh;
    ["Grass044_Material_#28_0"]: THREE.Mesh;
    ["Grass045_Material_#28_0"]: THREE.Mesh;
    ["Grass046_Material_#28_0"]: THREE.Mesh;
    ["Grass047_Material_#28_0"]: THREE.Mesh;
    ["Grass048_Material_#28_0"]: THREE.Mesh;
    ["Grass049_Material_#28_0"]: THREE.Mesh;
    ["Grass050_Material_#28_0"]: THREE.Mesh;
    ["Grass051_Material_#28_0"]: THREE.Mesh;
    ["Grass052_Material_#28_0"]: THREE.Mesh;
    ["Grass053_Material_#28_0"]: THREE.Mesh;
    ["Grass054_Material_#28_0"]: THREE.Mesh;
    ["Grass055_Material_#28_0"]: THREE.Mesh;
    ["Grass056_Material_#28_0"]: THREE.Mesh;
    ["Grass057_Material_#28_0"]: THREE.Mesh;
    ["Grass058_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink001_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink002_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink003_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink004_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink005_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink006_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink007_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink008_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink009_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink010_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink011_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink012_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink013_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink014_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink015_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink016_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink017_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink018_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink019_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink020_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink021_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink022_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink023_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink024_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink025_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink026_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink027_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink028_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink029_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink030_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink031_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink032_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink033_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink034_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink035_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink036_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink037_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink038_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink039_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink040_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink041_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink042_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink043_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink044_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink045_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink046_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink047_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink048_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink049_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink050_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink051_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink052_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink053_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink054_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink055_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink056_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink057_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink058_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink059_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink060_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink061_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink062_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink063_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink064_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink065_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink066_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink067_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink068_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink069_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink070_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink071_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink072_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink073_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink074_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink075_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink076_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink077_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink078_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink079_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink080_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink081_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink082_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink083_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink084_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink085_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink086_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink087_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink088_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink089_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink090_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink091_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink092_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink093_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink094_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink095_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink096_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink097_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink098_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink099_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink100_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink101_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink102_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink103_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue001_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue002_Material_#28_0"]: THREE.Mesh;
    ["FlowerPink104_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue003_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue004_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue005_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue006_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue007_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue008_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue009_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue010_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue011_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue012_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue013_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue014_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue015_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue016_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue017_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue018_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue019_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue020_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue021_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue022_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue023_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue024_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue025_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue026_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue027_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue028_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue029_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue030_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue031_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue032_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue033_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue034_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue035_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue036_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue037_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue038_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue039_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue040_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue041_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue042_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue043_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue044_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue045_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue046_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue047_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue048_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue049_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue050_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue051_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue052_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue053_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue054_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue055_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue056_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue057_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue058_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue059_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue060_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue061_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue062_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue063_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue064_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue065_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue066_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue067_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue068_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue069_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue070_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue071_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue072_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue073_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue075_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue076_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue077_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue078_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue079_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue080_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue081_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue082_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue083_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue084_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue085_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue086_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue087_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue088_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue089_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue090_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue091_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue092_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue093_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue094_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue095_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue096_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue097_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue098_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue099_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue100_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue101_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue102_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue103_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue104_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue105_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue106_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue108_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue109_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue110_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue111_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue112_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue113_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue114_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue115_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue116_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue117_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue118_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue119_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue120_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue121_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue122_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue123_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue124_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue125_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue126_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue127_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue128_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue129_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue130_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue131_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue132_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue133_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue134_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue135_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue136_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue137_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue138_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue139_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue140_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue141_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue142_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue143_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue144_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue145_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue146_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue147_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue148_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue149_Material_#28_0"]: THREE.Mesh;
    ["PancakePlantv1001_Material_#28_0"]: THREE.Mesh;
    ["PlantRoot_Material_#2_0"]: THREE.Mesh;
    ["PlantRoot001_Material_#2_0"]: THREE.Mesh;
    ["PlantRoot002_Material_#2_0"]: THREE.Mesh;
    ["PlantRoot003_Material_#2_0"]: THREE.Mesh;
    ["PancakePlantv3002_Material_#28_0"]: THREE.Mesh;
    ["PlantRoot004_Material_#2_0"]: THREE.Mesh;
    ["PlantRoot005_Material_#2_0"]: THREE.Mesh;
    ["PlantRoot006_Material_#2_0"]: THREE.Mesh;
    ["PlantRoot007_Material_#2_0"]: THREE.Mesh;
    ["PancakePlantv3003_Material_#28_0"]: THREE.Mesh;
    ["PlantRoot008_Material_#2_0"]: THREE.Mesh;
    ["PlantRoot009_Material_#2_0"]: THREE.Mesh;
    ["PlantRoot010_Material_#2_0"]: THREE.Mesh;
    ["PlantRoot011_Material_#2_0"]: THREE.Mesh;
    ["PancakePlantv3004_Material_#28_0"]: THREE.Mesh;
    ["PlantRoot012_Material_#2_0"]: THREE.Mesh;
    ["PlantRoot013_Material_#2_0"]: THREE.Mesh;
    ["PlantRoot014_Material_#2_0"]: THREE.Mesh;
    ["PlantRoot015_Material_#2_0"]: THREE.Mesh;
    ["PancakePlantv3005_Material_#28_0"]: THREE.Mesh;
    ["PlantRoot016_Material_#2_0"]: THREE.Mesh;
    ["PlantRoot017_Material_#2_0"]: THREE.Mesh;
    ["PlantRoot018_Material_#2_0"]: THREE.Mesh;
    ["PlantRoot019_Material_#2_0"]: THREE.Mesh;
    ["PancakePlantv3006_Material_#28_0"]: THREE.Mesh;
    ["PlantRoot020_Material_#2_0"]: THREE.Mesh;
    ["PlantRoot021_Material_#2_0"]: THREE.Mesh;
    ["PlantRoot022_Material_#2_0"]: THREE.Mesh;
    ["PlantRoot023_Material_#2_0"]: THREE.Mesh;
    ["PancakePlantv3007_Material_#28_0"]: THREE.Mesh;
    ["PancakePlantv3007_Material_#2_0"]: THREE.Mesh;
    ["PancakePlantv3008_Material_#28_0"]: THREE.Mesh;
    ["PancakePlantv3008_Material_#2_0"]: THREE.Mesh;
    ["PancakePlantv3009_Material_#28_0"]: THREE.Mesh;
    ["PancakePlantv3009_Material_#2_0"]: THREE.Mesh;
    ["PancakePlantv3010_Material_#28_0"]: THREE.Mesh;
    ["PancakePlantv3010_Material_#2_0"]: THREE.Mesh;
    ["PancakePlantv3011_Material_#28_0"]: THREE.Mesh;
    ["PancakePlantv3011_Material_#2_0"]: THREE.Mesh;
    ["PancakePlantv3012_Material_#28_0"]: THREE.Mesh;
    ["PancakePlantv3012_Material_#2_0"]: THREE.Mesh;
    ["PancakePlantv3013_Material_#28_0"]: THREE.Mesh;
    ["PancakePlantv3013_Material_#2_0"]: THREE.Mesh;
    ["PancakePlantv3014_Material_#28_0"]: THREE.Mesh;
    ["PancakePlantv3014_Material_#2_0"]: THREE.Mesh;
    ["PancakePlantv3015_Material_#28_0"]: THREE.Mesh;
    ["PancakePlantv3015_Material_#2_0"]: THREE.Mesh;
    ["PancakePlantv3016_Material_#28_0"]: THREE.Mesh;
    ["PancakePlantv3016_Material_#2_0"]: THREE.Mesh;
    ["PancakePlantv3017_Material_#28_0"]: THREE.Mesh;
    ["PancakePlantv3017_Material_#2_0"]: THREE.Mesh;
    ["Moss021_Material_#2_0"]: THREE.Mesh;
    ["FlowerBlue150_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue151_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue152_Material_#28_0"]: THREE.Mesh;
    ["Mushroom058_Material_#2_0"]: THREE.Mesh;
    ["Mushroom059_Material_#2_0"]: THREE.Mesh;
    ["Mushroom060_Material_#2_0"]: THREE.Mesh;
    ["Mushroom061_Material_#2_0"]: THREE.Mesh;
    ["Mushroom062_Material_#2_0"]: THREE.Mesh;
    ["Mushroom063_Material_#2_0"]: THREE.Mesh;
    ["Mushroom064_Material_#2_0"]: THREE.Mesh;
    ["Mushroom066_Material_#2_0"]: THREE.Mesh;
    ["Mushroom067_Material_#2_0"]: THREE.Mesh;
    ["FlowerRed001_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed002_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed003_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed004_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed005_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed006_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed007_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed008_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed009_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed010_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed011_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed012_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed013_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed014_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed015_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed016_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed017_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed018_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed019_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed020_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed021_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed022_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed023_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed024_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed025_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed026_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed027_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed028_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed029_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed030_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed031_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed032_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed033_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed034_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed035_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed036_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed037_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed038_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed039_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed040_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed041_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed042_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed043_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed044_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed045_Material_#28_0"]: THREE.Mesh;
    ["FlowerRed046_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue153_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue154_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue155_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue156_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue157_Material_#28_0"]: THREE.Mesh;
    ["FlowerBlue158_Material_#28_0"]: THREE.Mesh;
    ["Kite001_Material_#2_0"]: THREE.Mesh;
    ["Kite002_Material_#2_0"]: THREE.Mesh;
    ["Kite003_Material_#2_0"]: THREE.Mesh;
    ["Kite004_Material_#2_0"]: THREE.Mesh;
    ["Barrel010_Material_#2_0"]: THREE.Mesh;
    ["Cylinder074_Material_#2_0"]: THREE.Mesh;
    ["Cylinder075_Material_#2_0"]: THREE.Mesh;
    ["Cylinder076_Material_#2_0"]: THREE.Mesh;
    ["Cylinder077_Material_#2_0"]: THREE.Mesh;
    ["Cylinder078_Material_#2_0"]: THREE.Mesh;
    ["Cylinder079_Material_#2_0"]: THREE.Mesh;
    ["Cylinder080_Material_#2_0"]: THREE.Mesh;
    ["Cylinder081_Material_#2_0"]: THREE.Mesh;
    ["Cylinder082_Material_#2_0"]: THREE.Mesh;
    ["Cylinder083_Material_#2_0"]: THREE.Mesh;
    ["Cylinder084_Material_#2_0"]: THREE.Mesh;
    ["FireworksSticks043_Material_#2_0"]: THREE.Mesh;
    ["FireworksSticks044_Material_#2_0"]: THREE.Mesh;
    ["FireworksSticks045_Material_#2_0"]: THREE.Mesh;
    ["FireworksSticks046_Material_#2_0"]: THREE.Mesh;
    ["FireworksSticks047_Material_#2_0"]: THREE.Mesh;
    ["FireworksSticks048_Material_#2_0"]: THREE.Mesh;
    ["FireworksSticks049_Material_#2_0"]: THREE.Mesh;
    ["FireworksSticks050_Material_#2_0"]: THREE.Mesh;
    ["FireworksSticks051_Material_#2_0"]: THREE.Mesh;
    ["FireworksSticks052_Material_#2_0"]: THREE.Mesh;
    ["Barrel011_Material_#2_0"]: THREE.Mesh;
    ["FireworksSticks053_Material_#2_0"]: THREE.Mesh;
    ["FireworksSticks054_Material_#2_0"]: THREE.Mesh;
    ["FireworksSticks055_Material_#2_0"]: THREE.Mesh;
    ["FireworksSticks056_Material_#2_0"]: THREE.Mesh;
    ["FireworksSticks057_Material_#2_0"]: THREE.Mesh;
    ["FireworksSticks058_Material_#2_0"]: THREE.Mesh;
    ["FireworksSticks059_Material_#2_0"]: THREE.Mesh;
    ["FireworksSticks060_Material_#2_0"]: THREE.Mesh;
    ["FireworksSticks061_Material_#2_0"]: THREE.Mesh;
    ["FireworksSticks062_Material_#2_0"]: THREE.Mesh;
    ["FireworksSticks063_Material_#2_0"]: THREE.Mesh;
    Plane001_Environment_0: THREE.Mesh;
    ["PancakePlantv3018_Material_#28_0"]: THREE.Mesh;
    ["PancakePlantv3018_Material_#2_0"]: THREE.Mesh;
  };
  materials: {
    Material_2: THREE.MeshStandardMaterial;
    Material_28: THREE.MeshStandardMaterial;
    Environment: THREE.MeshStandardMaterial;
  };
};

export function ChineseShop(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(
    require("../../assets/3d/chinese_shop.glb")
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);
  return (
    <group {...props} ref={group} dispose={null} scale={1}>
      <group
        position={[27.45319, -170.75212, 27.02355]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            position={[-90.07022, 7.10068, 88.22059]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["PancakePlantv3007_Material_#28_0"].geometry}
              material={materials.Material_28}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["PancakePlantv3007_Material_#2_0"].geometry}
              material={materials.Material_2}
            />
          </group>
          <group
            position={[-37.13439, 5.00085, 107.39183]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["PancakePlantv3008_Material_#28_0"].geometry}
              material={materials.Material_28}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["PancakePlantv3008_Material_#2_0"].geometry}
              material={materials.Material_2}
            />
          </group>
          <group
            position={[52.27912, 8.76134, 100.01915]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["PancakePlantv3009_Material_#28_0"].geometry}
              material={materials.Material_28}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["PancakePlantv3009_Material_#2_0"].geometry}
              material={materials.Material_2}
            />
          </group>
          <group
            position={[148.91849, 5.00085, 6.80168]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["PancakePlantv3010_Material_#28_0"].geometry}
              material={materials.Material_28}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["PancakePlantv3010_Material_#2_0"].geometry}
              material={materials.Material_2}
            />
          </group>
          <group
            position={[113.06157, 5.32953, -77.53664]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["PancakePlantv3011_Material_#28_0"].geometry}
              material={materials.Material_28}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["PancakePlantv3011_Material_#2_0"].geometry}
              material={materials.Material_2}
            />
          </group>
          <group
            position={[103.40462, 12.36221, -72.80871]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["PancakePlantv3012_Material_#28_0"].geometry}
              material={materials.Material_28}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["PancakePlantv3012_Material_#2_0"].geometry}
              material={materials.Material_2}
            />
          </group>
          <group
            position={[53.61654, 8.77263, -95.65587]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["PancakePlantv3013_Material_#28_0"].geometry}
              material={materials.Material_28}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["PancakePlantv3013_Material_#2_0"].geometry}
              material={materials.Material_2}
            />
          </group>
          <group
            position={[-50.22544, 6.53173, -101.58595]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["PancakePlantv3014_Material_#28_0"].geometry}
              material={materials.Material_28}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["PancakePlantv3014_Material_#2_0"].geometry}
              material={materials.Material_2}
            />
          </group>
          <group
            position={[-99.9595, 5.26304, 16.42721]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["PancakePlantv3015_Material_#28_0"].geometry}
              material={materials.Material_28}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["PancakePlantv3015_Material_#2_0"].geometry}
              material={materials.Material_2}
            />
          </group>
          <group
            position={[48.8531, 119.31508, -0.94115]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["PancakePlantv3016_Material_#28_0"].geometry}
              material={materials.Material_28}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["PancakePlantv3016_Material_#2_0"].geometry}
              material={materials.Material_2}
            />
          </group>
          <group
            position={[51.84151, 73.89922, 56.09123]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["PancakePlantv3017_Material_#28_0"].geometry}
              material={materials.Material_28}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["PancakePlantv3017_Material_#2_0"].geometry}
              material={materials.Material_2}
            />
          </group>
          <group
            position={[122.06398, 8.76134, 58.75876]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["PancakePlantv3018_Material_#28_0"].geometry}
              material={materials.Material_28}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["PancakePlantv3018_Material_#2_0"].geometry}
              material={materials.Material_2}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Sphere014_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[11.73977, 0, 53.09751]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder024_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-24.6987, 40.39896, -67.75105]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Object006_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-10.93685, 20.18092, -66.5687]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood001_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-4.42122, 43.62885, -68.32359]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood002_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-69.29362, 43.62885, 35.6328]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood003_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[33.02991, 43.62885, 79.72882]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood004_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-66.90425, 43.62885, -67.3569]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood005_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-6.32012, 20.5026, 79.72882]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood006_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[76.27295, 48.92224, -47.97771]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood008_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-25.65686, 4.12735, -10.85806]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood009_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-25.54353, 4.12735, -80.47064]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood010_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-25.95627, 4.12735, 38.79934]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood011_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-25.95627, 4.12735, 25.95435]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood012_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-25.54353, 4.12735, -67.77309]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood013_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-25.95627, 4.12735, 14.829]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood014_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-68.74057, 4.12735, -56.22934]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood015_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-1.89172, 4.12735, -56.85384]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood016_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-69.15331, 4.12735, 2.93535]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood017_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[2.61742, 4.12735, 2.02405]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood018_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-69.15331, 4.12735, -23.65395]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood019_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-1.89172, 4.12735, -24.27845]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood020_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-25.54353, 4.12735, -33.18728]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood021_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-25.24413, 4.12735, -44.14928]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood022_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[45.99731, 50.34275, -50.25348]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood023_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-21.49678, 50.34275, -53.19127]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood024_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[16.43973, 50.34275, -43.84858]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood025_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[16.43973, 50.34275, 4.65461]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Counter_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-51.02167, 8.18054, -18.25993]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shelf_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[17.14951, 38.5567, -5.69152]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood026_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[14.89423, 29.33197, -10.45711]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shelf001_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[17.14951, 38.5567, -19.29422]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shelf002_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[17.14951, 38.5567, -32.88041]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shelf003_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[8.43954, 53.27731, -6.14006]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shelf004_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[17.14951, 53.27731, -19.74277]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shelf005_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[17.14951, 53.27731, -33.32895]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood027_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[14.89423, 44.05259, -24.24435]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shelf006_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[17.14951, 68.92879, -6.26631]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shelf007_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[11.37556, 68.92879, -19.86902]}
            rotation={[1.65806, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shelf008_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[17.14951, 68.92879, -33.4552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood028_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[14.89423, 62.77991, -12.93966]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shelf009_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[17.14951, 83.98713, -6.26631]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shelf010_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[17.14951, 83.98713, -19.86902]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shelf011_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[17.14951, 83.98713, -33.4552]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood029_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[14.89423, 74.7624, -11.0319]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood030_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[14.89423, 93.25053, -25.18061]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood031_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-22.24553, 70.62888, 46.11335]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood032_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[80.22318, 50.34275, 44.6888]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood033_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[75.50079, 43.62885, 1.55953]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood034_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[47.92187, 48.92224, -2.09119]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood035_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[16.07108, 69.04504, 85.97893]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood036_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[13.47538, 138.17566, 95.18289]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood037_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-17.26945, 69.04504, 67.70503]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood038_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[46.23656, 69.04504, 72.30256]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood039_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-21.16568, 105.98109, 90.85818]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood040_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[49.47588, 105.98109, 91.97037]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood042_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-66.07185, 97.68066, -17.83309]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood043_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-45.2711, 98.93947, 47.07639]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood044_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-32.26488, 96.05281, -68.73116]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood045_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-16.5718, 138.06964, 63.87973]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood046_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[44.05196, 136.88589, 72.30256]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wall_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[76.70923, 0, -2.87067]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wall001_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[43.70632, 0, -51.70702]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wall002_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-11.08057, 0, -51.00206]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wall003_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[50.71805, 60.27695, 39.90355]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood047_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[49.47588, 105.98109, 41.27165]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wall004_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-22.07594, 60.27695, 90.05624]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wall005_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[72.27213, 0, 46.88498]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wall006_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[50.71805, 60.27695, 92.12401]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood048_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[16.07108, 69.04504, 71.06331]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood049_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[11.52917, 70.24847, 82.46152]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood050_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[11.52917, 70.24847, 66.67281]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood051_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[16.07108, 69.04504, 55.53843]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood052_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[16.07108, 69.04504, 48.04375]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Window_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-23.18475, 151.39999, 96.10027]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood053_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-62.04759, 0, -9.00626]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood054_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-19.58357, 31.46412, 71.21791]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood055_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[44.17331, 32.13363, 61.84569]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shelf013_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[13.90776, 33.97167, 52.91307]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shelf014_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[13.90776, 33.97167, 66.18562]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood056_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[69.69321, 3.56358, -23.26374]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood057_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[57.90784, 3.56358, -23.26374]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood058_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[47.19339, 3.56358, -51.87349]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood059_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[47.77303, 3.56358, -7.59896]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood060_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[66.43317, 2.10406, -9.65264]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood061_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[66.43317, 4.16351, -41.60339]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood062_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[49.63718, 0, -25.83751]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wall007_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[16.65594, 0, 7.31082]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wall008_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[16.65594, 0, -42.08872]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wall009_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[46.03002, 146.51935, 37.43111]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wall010_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[72.27213, 0, 43.18699]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood063_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[37.04094, 3.56358, -16.49443]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood064_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[28.65482, 3.56358, -23.26374]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood065_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[21.03073, 3.56358, -45.10417]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood066_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[21.44319, 3.56358, -1.13208]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood067_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-31.44006, 0, -31.61528]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Handle_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[14.53691, 38.72897, -19.59079]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Handle001_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[14.53691, 38.94624, -33.05941]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Handle002_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[14.53691, 39.06753, -5.79264]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Handle003_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[14.53691, 53.84983, -19.59079]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Handle004_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[14.53691, 53.62762, -33.05941]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Handle005_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[5.82694, 53.74892, -5.79264]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Handle006_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[8.76296, 69.36577, -19.59079]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Handle007_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[14.53691, 69.58304, -33.05941]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Handle008_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[14.53691, 69.05331, -5.79264]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Handle009_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[14.53691, 84.38121, -19.59079]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Handle010_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[14.53691, 84.59848, -33.05941]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Handle011_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[14.53691, 84.27606, -5.79264]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Barrel01_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-40.99076, 8.34946, 29.19704]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Ladder_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[41.09711, 47.593, 0.25602]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood068_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-14.43185, 99.20653, -8.85928]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood069_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-14.73126, 99.20654, -58.51667]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood070_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-14.73126, 100.49767, -49.06865]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood071_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-14.73126, 99.20654, -34.54633]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood072_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-57.51556, 99.20653, 36.51201]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood073_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-57.9283, 99.20654, -22.65269]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood074_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[13.84242, 99.20654, -21.74138]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood075_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-57.9283, 99.20653, 3.93661]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood076_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[9.33328, 99.20653, 4.56112]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood077_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-14.31853, 99.20653, 13.46994]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood078_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-14.01912, 99.20653, 24.43195]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood079_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-2.06403, 99.21334, -46.59937]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood080_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[60.6745, 96.66856, 49.52906]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood081_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[73.5153, 97.68066, -14.50275]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Roof_tiles002_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[75.14439, 113.41891, -96.71839]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Roof_tiles003_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-65.36512, 113.4189, 74.35184]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Roof_tiles004_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[15.61489, 164.60318, 24.16757]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Roof_tiles005_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[10.59099, 164.60318, 115.94371]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Roof_tiles006_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[6.79047, 139.95367, -57.44896]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Roof_tiles007_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[14.86985, 161.00977, 117.74139]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood082_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[97.19434, 106.17159, 12.07748]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood083_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-78.95179, 106.7717, 13.04072]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood084_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-19.24021, 144.88278, -48.19049]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood085_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-19.24021, 144.88278, 48.48419]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood086_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-1.75145, 165.75906, 107.72428]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood087_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-1.75145, 165.75906, 30.69454]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood088_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-31.65427, 138.87573, 76.26624]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood089_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[58.302, 139.08636, 62.2362]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood_panel_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-36.19824, 138.15483, 55.52193]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood_panel001_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[64.65718, 135.76581, 83.32423]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood_panel003_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-17.64438, 143.80438, 105.43098]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood_panel004_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[44.1538, 144.67325, 105.43098]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wall011_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-17.2111, 159.54663, 93.37602]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood_panel005_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[47.28874, 143.67966, 27.74896]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood_panel006_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[94.22376, 100.39995, 19.68005]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood_panel007_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-85.27094, 100.39995, -18.96264]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wall012_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[61.07506, 128.05988, -54.66801]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wall013_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-50.22733, 128.05988, 48.54288]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["CeilingPanel_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-12.07321, 136.79062, -18.25993]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["CeilingPanel001_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[11.88409, 81.23553, 65.71951]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Roof_tiles008_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-77.59605, 107.62426, -46.77142]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood090_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[86.35543, 100.95537, 43.72083]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood091_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[83.58298, 101.88648, -50.26902]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shelf015_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[16.89717, 68.21167, -16.25864]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shelf016_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[16.89717, 68.21167, -25.99963]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shelf017_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[16.65105, 66.29298, -20.06643]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shelf018_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[16.89717, 68.21167, -12.74601]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shelf_thing_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[16.89717, 68.21167, -12.74601]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shelf019_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[17.9829, 71.81383, -20.10171]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shelf_thing001_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[16.01503, 53.44656, 1.18922]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shelf020_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[13.81317, 52.20759, -2.32341]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shelf021_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[13.81317, 52.20759, -12.0644]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shelf022_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[13.56705, 50.2889, -6.1312]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shelf023_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[16.01503, 53.44656, 1.18922]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shelf024_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[17.10076, 55.91163, -6.16648]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shelf025_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[18.39855, 52.30231, -6.1312]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shelf026_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[18.39855, 68.52727, -20.2209]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["NewYearPocket_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[10.39344, 57.53059, -9.21449]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["NewYearPocket002_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[6.4973, 47.20846, 1.77919]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["NewYearPocket003_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[6.4973, 54.77108, 1.20937]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["NewYearPocket004_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[9.66662, 57.53059, -6.03167]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["NewYearPocket005_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[11.16766, 58.66124, -7.01382]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["NewYearPocket006_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[9.96437, 57.37422, -2.48037]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["NewYearPocket007_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[9.57298, 57.57533, -3.96258]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["NewYearPocket008_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-21.82084, 37.53037, 0.93526]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["NewYearPocket009_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-19.38673, 36.62131, -0.68178]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["NewYearPocket010_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-11.6892, 36.62131, -2.44111]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Fireworks001_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[12.60268, 72.04507, -20.63062]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Fireworks002_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[12.87321, 72.04507, -28.16333]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Fireworks003_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[12.02778, 70.33661, -27.50936]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Fireworks004_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[13.5254, 68.06823, -27.73167]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Fireworks005_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[11.8377, 66.33329, -28.23135]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Fireworks006_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[10.16134, 63.28212, -30.38247]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Fireworks007_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[9.2601, 63.28212, -28.68965]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Fireworks008_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[12.08792, 66.33329, -30.65899]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Fireworks009_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[10.0992, 60.28048, -28.68965]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["String_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[10.40787, 62.64064, -30.82023]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["String001_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[9.4235, 62.64064, -29.05843]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["String002_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[11.95493, 65.74892, -30.81014]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["String003_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[12.12772, 70.20667, -27.90884]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["String004_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[13.24558, 72.03992, -28.29924]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["String005_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[10.3906, 60.04021, -28.62899]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["String006_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[13.75407, 68.20508, -28.34506]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Fireworks010_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[12.55006, 68.43502, -30.92058]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["String007_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[13.19433, 67.87526, -31.24342]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["String008_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[12.09469, 68.59109, -29.36848]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Fireworks011_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[12.61185, 72.04507, -17.68591]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Fireworks012_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[12.61185, 75.13289, -17.68591]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Fireworks013_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[12.367, 75.13289, -24.45119]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shop_divider_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[15.66951, 75.53036, 24.503]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shop_divider001_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[61.32251, 75.53036, -2.5983]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder028_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[13.71023, 108.99106, 88.2139]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood092_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[3.57524, 104.04582, 92.0265]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood093_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[20.26561, 104.04582, 92.0265]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood094_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[18.55682, 98.62186, 91.17777]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood095_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[18.55682, 114.00342, 91.17777]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Object007_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-11.84629, 18.81305, -64.44307]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["UmbrellaWhite001_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-13.48269, 41.66407, -83.38734]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder029_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-20.72477, 10.47124, -97.43681]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Object008_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-6.69956, -2.03653, -81.73951]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Object009_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-45.8969, 3.7431, 46.94798]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["UmbrellaWhite002_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-59.64844, 16.1095, 72.49865]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["String013_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-67.86327, 100.77221, -33.70828]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Sphere029_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[31.78627, 36.61591, 55.53285]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Sphere030_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[26.43631, 37.65005, 52.68664]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Sphere031_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-25.85518, 8.47194, -58.83129]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Sphere032_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-32.15086, 8.47194, -71.68519]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Sphere033_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-8.94366, 36.81683, -8.23213]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder042_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-30.97097, 5.73541, 58.13892]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder044_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-35.47397, 5.73541, 61.55572]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder045_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-33.24081, 5.73541, 59.73944]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder046_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-32.18243, 13.6347, 55.10918]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder047_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-26.45238, 16.96821, 61.67392]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder048_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-33.7139, 5.73541, 54.08029]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder049_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-32.51409, 5.73541, 61.1965]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder050_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-30.70777, 8.33087, 56.14714]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder051_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-37.62579, 0.57382, 55.54787]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder052_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-36.99266, 9.93839, 62.60563]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder053_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-30.90149, 5.73541, 62.201]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder054_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-30.22394, 9.93839, 60.60954]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder055_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-26.83806, 4.05595, 55.47702]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Sphere034_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[6.66192, 37.65005, 52.68664]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Sphere035_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[6.66192, 0.01862, 52.68664]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Sphere036_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[25.06153, 0.01862, 64.29176]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Sphere037_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-3.8122, 37.65005, 65.68072]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Sphere038_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[9.87164, 36.61591, 59.19215]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Sphere039_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-31.47942, 37.65005, -44.82059]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Sphere040_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-39.20144, 8.74425, -75.83336]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Sphere041_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[2.86365, 0, 63.37328]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood096_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-71.61681, 103.43749, 45.25373]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood097_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-79.47005, 101.1363, -45.8211]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FireworksSticks002_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-43.39207, 10.41111, 27.73302]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shelf027_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[134.976, 21.88967, -15.57337]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shelf028_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[145.00133, 21.91693, -25.47574]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood098_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[158.64728, 19.86073, 3.85455]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood100_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[135.78935, 6.88951, 1.63074]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood101_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[154.11653, 6.42257, -1.60083]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood102_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[145.30315, 10.89452, -0.3396]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood103_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[145.75513, 6.88951, -42.74396]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood104_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[127.42796, 6.42257, -39.51238]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood105_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[136.96854, 10.10285, -37.6293]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Sphere042_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[150.35474, 24.75842, -5.78093]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Wood106_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[149.11871, 18.24117, -49.88194]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shoe001_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[83.75756, 0.39316, -12.23448]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Coin001_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-48.31718, 36.97391, -10.12996]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Coin002_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-48.31718, 37.84729, -12.68655]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Coin003_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-42.19335, 36.97391, -9.13987]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Coin004_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-45.27552, 36.97391, -4.04199]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Coin005_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-47.94451, 37.84729, -6.19586]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Coin006_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-35.48835, 36.97391, -3.85281]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Coin007_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-42.45553, 37.77592, -4.22205]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Hammer_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[141.66037, 26.01522, -39.51197]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Moss001_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[57.8252, 126.37447, -35.54958]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Moss002_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[52.2641, 120.42815, -1.45089]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Moss003_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-47.13277, 120.76335, 12.29407]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Moss004_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-19.32043, 139.03448, -44.82607]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Moss005_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-60.20531, 122.50241, 35.5802]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Moss006_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-32.17294, 131.49257, 35.54069]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Moss007_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[78.47879, 117.21158, 20.27275]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Moss008_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[35.67002, 130.07906, 11.8603]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Moss009_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[50.20941, 150.77448, 57.94785]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Moss010_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[48.96089, 152.2173, 99.44488]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Moss011_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[25.55499, 168.54651, 37.43916]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Moss012_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[13.59964, 168.02144, 76.33128]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Moss013_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-21.41928, 152.97656, 93.57566]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Moss014_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-51.75615, 109.45081, -50.52487]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Moss015_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-10.42424, 103.84882, -77.27121]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Chair_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-7.50866, 24.57487, -28.25838]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Sphere043_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[152.11964, 24.10282, -13.3874]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Sphere044_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-49.00192, 8.62199, 23.49734]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Sphere045_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-51.29243, 8.62199, 41.09392]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder057_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[149.91931, 26.08325, -61.91607]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder058_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[148.70648, 25.5309, -16.95822]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Shoe002_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[85.58707, 0.39316, -6.61554]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf001_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[72.95816, 113.5235, 17.27986]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf002_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[72.25559, 113.5235, 16.53495]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf003_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[72.00973, 114.44424, 16.4088]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf004_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[55.06939, 122.18424, -37.75156]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf005_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[54.09074, 122.44647, -37.60331]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf006_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[54.09302, 123.39908, -37.47426]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf007_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[30.5341, 127.02045, 14.1411]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf010_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[30.81113, 127.17003, 14.76278]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf011_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[48.90244, 146.93265, 54.93547]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf012_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[48.19987, 147.5631, 55.65958]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf013_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[47.95401, 148.19174, 55.08088]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf014_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-19.88876, 149.93315, 94.26807]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf015_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-20.75706, 149.56285, 94.99218]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf016_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-20.7889, 150.38054, 94.13067]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf017_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-21.80608, 135.5869, -48.7225]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf018_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-22.57481, 135.98619, -49.53798]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf019_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-21.13993, 136.48759, -48.57666]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf020_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[12.14246, 165.01886, 76.4537]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf021_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[11.97298, 164.54041, 76.44452]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf022_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-64.78593, 117.66402, 37.96017]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf023_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-65.48189, 118.33319, 37.74136]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf024_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-65.04032, 117.78818, 37.63874]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf025_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-44.89694, 118.31051, 12.08117]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf026_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-43.41576, 118.68017, 12.94463]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf027_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-58.00254, 113.4062, 14.57855]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf028_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-55.90905, 114.20141, 14.71994]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf029_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-47.53723, 106.49693, -48.72128]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf030_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-48.79808, 105.83148, -49.74279]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf031_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-10.68594, 101.62579, -68.2811]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf032_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-10.8142, 100.96034, -70.2645]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf033_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-11.05129, 101.74478, -71.51375]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf034_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[21.87729, 165.0584, 35.74232]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf035_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[22.42187, 165.31679, 35.00105]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf036_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[22.70874, 164.71361, 34.95418]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Coin008_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-69.69365, 60.94056, 8.41026]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Coin009_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-69.67842, 80.02435, 20.33237]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Coin010_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-69.66676, 84.28837, -3.42288]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Coin011_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-69.67567, 84.03756, -43.22657]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Coin012_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-69.48151, 69.1774, -32.75745]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Coin013_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-69.48194, 74.05936, -55.02724]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["String014_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-68.08967, 95.60046, -44.2137]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["String015_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-67.82703, 100.18537, -55.68307]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["String016_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-68.21361, 94.72619, -4.10455]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["String017_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-67.9795, 96.89857, 19.98211]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["String018_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-68.02296, 98.9071, 7.79555]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Lantern_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-69.44994, 68.44298, -54.99512]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Lantern001_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-69.45021, 63.90699, -32.89362]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Lantern002_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-69.44203, 56.38486, 8.62802]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Lantern003_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-69.79441, 79.14365, -43.14427]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Lantern004_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-69.78761, 79.30734, -3.293]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Lantern005_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-69.80562, 74.59956, 20.08357]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Fireworks015_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-48.11389, 38.41716, -39.78824]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Fireworks016_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-46.17697, 38.41716, -41.65699]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Fireworks017_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-44.9679, 40.4062, -43.06592]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone002_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-83.48607, -1.041, 16.15409]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone004_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-84.24636, 0.45813, 26.95739]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone005_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-92.74883, -1.53549, 22.0736]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone006_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-83.46717, -0.18246, 39.69348]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone007_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-98.44375, -0.86293, 31.75793]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone008_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-95.10443, -1.25222, 41.25871]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone009_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-97.71843, -0.46539, 55.11397]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone010_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-83.35701, -0.86716, 56.04982]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone011_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-103.41547, -1.46445, 47.7463]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone012_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-91.53281, -0.75569, 13.33765]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone013_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-95.66817, -1.53549, 4.13859]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone014_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-84.01879, -1.46445, 4.79736]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone015_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-84.4325, -0.86716, -7.33247]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone016_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-86.59176, -1.21884, -16.23956]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone017_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-102.05693, -0.42025, 38.98396]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone018_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-113.95653, -1.90125, 52.77324]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone019_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-105.10822, -2.31237, 62.1973]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone020_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-116.9826, -0.31236, 60.04184]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone021_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-112.79164, -0.46696, 70.12248]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone022_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-101.77234, -0.25156, 71.36897]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf037_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-93.05277, -1.43019, -7.69457]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf038_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-92.93007, -1.04815, -8.58999]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf039_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-92.87509, -1.34225, -8.22812]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf040_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-88.84805, -0.86677, 22.23403]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf041_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-88.53274, -1.12019, 22.24152]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf042_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-88.68891, -1.13711, 36.96257]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf043_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-89.2896, -1.13711, 35.09197]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf044_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-69.06848, 0.66685, -29.67374]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf045_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-69.72003, 0.16118, -27.86111]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf046_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-74.18307, 0.85131, -45.03086]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf047_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-74.00026, 0.72419, -42.77867]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Moss016_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-70.31468, 4.06397, -30.75378]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Moss017_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-100.78352, 2.24152, 32.56439]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf048_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-101.26932, 0.19699, 29.51032]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf049_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-101.85655, -0.2754, 29.22868]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Fireworks018_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[140.12529, 25.96562, 1.16267]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Fireworks019_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[142.36205, 25.96562, -0.99536]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Fireworks020_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[143.75827, 28.26256, -2.62239]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf050_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[6.56742, 0.72754, -69.16206]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf051_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[6.60027, 0.28067, -70.79881]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf052_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[15.48962, 0.82535, -58.17827]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf053_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[14.77674, 0.68221, -60.10077]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Moss018_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[7.72749, 4.18432, -69.15931]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Barrel_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-16.93099, 8.34946, -71.90021]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Barrel004_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-32.54935, 0, 60.60258]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone033_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-92.20258, -0.59062, 55.56328]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone034_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[110.69041, -1.041, -3.7989]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone035_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[105.11668, 0.45813, -13.08453]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone036_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[114.88274, -1.53549, -13.96077]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone037_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[97.17329, -0.18246, -23.0704]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone038_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[105.8082, -1.53549, -31.02742]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone039_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[100.00243, -0.46539, -43.87631]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone040_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[87.70145, -0.86716, -36.40555]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone041_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[109.07526, -1.46445, -41.26284]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone042_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[118.89737, -0.75569, -6.10722]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone043_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[112.80811, -0.8537, -33.15184]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone044_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[95.22638, -0.86716, -41.0806]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Stone045_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[111.73299, -1.46445, -25.24784]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf054_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[100.77388, -0.9967, -37.21265]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf055_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[100.86621, -0.70923, -37.88643]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf056_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[100.90758, -0.93053, -37.61414]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf057_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[107.43257, -0.9967, -13.20328]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf058_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[107.5249, -0.70923, -13.87707]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Moss019_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[92.06994, 2.02046, -18.81858]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf059_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[90.93613, -0.75387, -18.83781]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf060_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[90.60659, -0.4616, -19.20444]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["CurvedWood_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-18.80761, 63.76788, 70.40849]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["CurvedWood001_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-18.80761, 144.04735, 70.40849]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["CurvedWood002_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[46.88258, 62.33442, 70.40849]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["CurvedWood003_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[46.88258, 142.61389, 70.40849]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Sphere046_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[28.17778, 0, 53.09751]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Sphere047_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[18.97628, 12.12674, 55.62596]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Sphere048_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[1.27232, 13.08645, 54.57193]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Sphere049_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-1.70783, 13.08645, 54.47493]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf061_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[42.66325, 33.92821, 75.81508]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf062_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[42.66325, 35.95418, 75.81508]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf063_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[41.81154, 34.70156, 75.81508]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf064_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[40.60476, 36.88197, 76.06472]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf065_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[40.87268, 38.87326, 75.80478]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf066_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[40.19598, 37.62193, 75.28445]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf068_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[43.14355, 40.76094, 74.91748]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf069_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[42.74863, 39.50961, 75.67426]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf070_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[45.11306, 42.80219, 74.83545]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf071_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[44.26074, 44.63534, 74.70248]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf072_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[44.40534, 43.37862, 75.53569]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf073_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[45.07372, 41.54366, 75.99115]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf074_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[45.11306, 46.01096, 74.83545]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf076_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[44.40534, 46.58739, 75.53569]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf077_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[45.07372, 44.75243, 75.99115]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf078_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[46.46988, 50.16774, 72.91046]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf079_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[45.66527, 52.00089, 73.22147]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf080_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[46.2071, 50.74417, 73.87075]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf081_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[47.01367, 48.90922, 73.931]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf082_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[44.10043, 54.591, 71.6771]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf083_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[43.68398, 56.42415, 72.43255]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf084_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[44.5164, 55.16743, 72.58164]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf085_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[45.17299, 53.33248, 72.10934]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf086_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[46.2071, 50.74417, 73.87075]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf087_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[44.0353, 58.16594, 71.19645]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf088_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[44.20187, 59.9991, 72.04285]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf089_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[44.93537, 58.74237, 71.62199]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf090_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[45.13476, 56.90742, 70.83815]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf091_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[44.93537, 59.28852, 71.62199]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf092_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[45.17299, 56.68744, 72.10934]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf093_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[42.49577, 60.93356, 72.90445]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf094_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[43.45606, 61.50999, 73.16723]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf095_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[42.0857, 64.50851, 72.64539]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf096_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[42.84115, 66.34166, 73.06184]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf097_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[42.99024, 65.08494, 72.22942]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf098_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[42.51795, 63.24998, 71.57284]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf099_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[42.99024, 65.63108, 72.22942]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf100_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[43.51631, 63.03, 72.36066]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf101_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[44.07532, 10.49378, 72.77818]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf102_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[43.3974, 12.40289, 72.79594]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf103_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[43.29798, 11.03234, 73.43329]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf104_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[46.05598, 14.72609, 71.78322]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf105_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[45.34544, 16.5673, 72.24113]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf106_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[45.66866, 15.18335, 72.76525]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf107_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[46.31456, 13.28736, 72.66881]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf108_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[44.27652, 19.49359, 70.88589]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf109_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[43.86731, 21.23291, 71.84082]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf110_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[44.56511, 19.89117, 71.92616]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf111_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[45.15914, 18.08588, 71.28642]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf112_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[45.66866, 15.18335, 72.76525]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf113_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[44.56096, 23.08908, 70.96979]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf114_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[44.70749, 24.7574, 72.10989]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf115_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[45.41022, 23.50657, 71.62398]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf116_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[45.61142, 21.79114, 70.60515]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf117_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[45.45029, 24.04442, 71.70992]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf118_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[45.40535, 21.38987, 71.81441]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf119_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[42.94802, 25.72504, 72.81297]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf120_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[43.88548, 26.15969, 73.31868]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf121_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[43.85836, 30.73051, 74.01517]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf122_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[43.05715, 32.58073, 73.81688]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf123_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[42.85418, 31.17869, 74.35315]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf124_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[43.37801, 28.19347, 71.88483]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf125_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[43.89867, 30.39796, 72.97705]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf126_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[44.20044, 27.76533, 72.78267]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf127_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[40.40253, 39.44048, 72.68375]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf128_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[40.92345, 40.28108, 72.09596]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf129_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[41.12464, 39.44048, 68.84985]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf130_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[36.0271, 38.4362, 70.30785]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf131_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[34.87877, 38.25652, 71.02097]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf132_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[31.92987, 37.17562, 72.29021]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf133_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[74.76142, 61.42698, -46.09067]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf134_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[74.76142, 63.45295, -46.09067]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf135_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[73.90971, 62.20032, -46.09067]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf136_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[72.70292, 64.38074, -45.84103]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf137_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[72.97085, 66.37201, -46.10097]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf138_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[75.54424, 66.26842, -46.76955]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf139_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[75.24171, 68.25969, -46.98827]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf140_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[74.84679, 67.00838, -46.23149]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf141_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[77.21122, 70.30095, -47.0703]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf142_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[76.35891, 72.13409, -47.20327]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf143_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[76.5035, 70.87738, -46.37006]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf144_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[77.17189, 69.04242, -45.9146]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf145_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[77.21122, 73.50972, -47.0703]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf146_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[76.5035, 74.08615, -46.37006]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf147_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[77.17189, 72.25119, -45.9146]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf148_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[78.56805, 77.6665, -48.99529]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf149_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[77.76344, 79.49965, -48.68428]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf150_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[78.30527, 78.24294, -48.035]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf151_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[79.11184, 76.40797, -47.97475]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf152_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[76.1986, 82.08975, -50.22865]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf153_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[76.61456, 82.66618, -49.32411]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf154_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[77.27116, 80.83124, -49.79641]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf155_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[78.30527, 78.24294, -48.035]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf156_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[76.13346, 85.6647, -50.7093]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf157_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[76.30004, 87.49785, -49.8629]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf158_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[77.03354, 86.24113, -50.28376]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf159_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[77.23293, 84.40617, -51.0676]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf160_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[77.03354, 86.78728, -50.28376]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf161_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[77.27116, 84.18619, -49.79641]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf162_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[75.55423, 89.00876, -48.73852]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf163_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[74.18386, 92.00726, -49.26036]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf164_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[74.93932, 93.84042, -48.84391]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf165_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[75.08841, 92.58369, -49.67633]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf166_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[74.61611, 90.74875, -50.33291]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf167_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[75.08841, 93.12984, -49.67633]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf168_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[75.61448, 90.52876, -49.54509]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf169_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[74.72741, 26.02698, -50.98888]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf170_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[74.72741, 28.05295, -50.98888]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf171_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[75.57911, 26.80032, -50.98888]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf172_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[76.78591, 28.98074, -51.23854]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf173_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[76.51798, 30.97201, -50.97858]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf174_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[73.94459, 30.86842, -50.31]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf175_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[74.24711, 32.85969, -50.09129]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf176_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[74.64203, 31.60838, -50.84807]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf177_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[72.2776, 34.90095, -50.00924]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf178_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[73.12992, 36.7341, -49.87629]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf179_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[72.98533, 35.47738, -50.7095]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf180_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[72.31694, 33.64242, -51.16494]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf181_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[72.2776, 38.10972, -50.00924]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf182_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[72.98533, 38.68615, -50.7095]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf183_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[72.31694, 36.85119, -51.16494]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf184_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[70.92078, 42.26651, -48.08426]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf185_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[71.72539, 44.09965, -48.39529]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf186_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[71.18356, 42.84294, -49.04456]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf187_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[70.37699, 41.00798, -49.10481]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf188_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[73.29022, 46.68975, -46.85091]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf189_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[72.87426, 47.26619, -47.75546]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf190_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[72.21767, 45.43124, -47.28314]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf191_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[71.18356, 42.84294, -49.04456]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf192_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[73.35536, 50.26471, -46.37025]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf193_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[73.18879, 52.09785, -47.21665]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf194_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[72.45529, 50.84114, -46.7958]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf195_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[72.2559, 49.00618, -46.01195]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf196_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[72.45529, 51.38728, -46.7958]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf197_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[72.21767, 48.78619, -47.28314]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf198_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[73.93459, 53.60876, -48.34103]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf199_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[75.30496, 56.60727, -47.81919]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf200_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[74.54951, 58.44043, -48.23565]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf201_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[74.40042, 57.1837, -47.40324]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf202_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[74.87272, 55.34875, -46.74665]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf203_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[74.40042, 57.72984, -47.40324]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf204_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[73.87434, 55.12877, -47.53446]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf205_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[75.81873, 10.07048, -47.47496]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf206_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[75.81873, 12.09645, -47.47496]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf207_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[75.5983, 10.84383, -46.65228]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf208_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[75.5271, 13.02424, -45.42199]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf209_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[75.34535, 15.01552, -45.74807]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf210_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[75.3656, 14.91192, -48.40681]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf211_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[75.07603, 16.9032, -48.17121]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf212_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[75.70482, 15.65188, -47.59388]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf213_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[75.50653, 18.94446, -50.09485]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf214_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[75.15751, 20.7776, -49.30598]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf215_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[75.99976, 19.52089, -49.22999]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf216_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[76.61267, 17.68593, -49.75772]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf217_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[75.50653, 22.15323, -50.09485]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf218_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[75.99976, 22.72966, -49.22999]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf219_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[76.61267, 20.8947, -49.75772]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf220_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[75.12483, 25.05148, -52.16477]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf221_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-22.62481, 118.24159, 53.57176]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf222_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-21.05997, 120.8317, 55.11613]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf223_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-21.47594, 121.40813, 54.21159]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf224_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-22.13253, 119.57318, 54.68388]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf225_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-21.89491, 124.98308, 55.17123]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf226_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-22.09431, 123.14812, 55.95507]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf227_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-21.89491, 125.52922, 55.17123]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf228_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-22.13253, 122.92813, 54.68388]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf229_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-21.36066, 127.7507, 53.626]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf230_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-19.47749, 129.49069, 55.22039]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf231_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-19.94978, 131.87178, 54.56381]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf232_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-21.18996, 129.27071, 54.43257]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf233_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-22.77637, 114.47943, 51.71072]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf234_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-21.86021, 115.81102, 52.5106]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf235_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-22.77637, 112.84347, 51.71072]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf236_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-24.3151, 109.33144, 48.82418]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf237_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-23.73456, 112.23116, 49.43603]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf238_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-22.77637, 111.09797, 51.86503]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf239_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-22.62481, 105.45351, 57.02948]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf240_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-21.05997, 107.14825, 59.52378]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf241_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-21.47594, 108.05296, 58.9476]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf242_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-22.13253, 106.19033, 58.60016]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf243_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-21.89491, 110.88741, 61.32817]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf244_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-21.89491, 111.38238, 61.55898]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf245_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-21.36066, 114.04876, 61.09737]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf246_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-19.47749, 114.95191, 63.27773]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf247_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-19.94978, 117.38739, 63.68895]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf248_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-21.18996, 115.08549, 62.47075]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf249_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-22.77637, 102.83034, 53.75285]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf250_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-21.86021, 103.69913, 55.04054]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf251_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-22.77637, 101.34766, 53.06147]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf252_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-24.3151, 99.38457, 48.96112]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf253_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-23.73456, 101.75405, 50.74113]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf254_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-22.77637, 99.70049, 52.46364]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf255_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-21.53795, 119.13856, 58.2178]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf256_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-20.95495, 121.72866, 60.33768]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf257_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-22.62481, 115.55682, 56.04451]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf258_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-21.89491, 120.45921, 63.29559]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf259_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-21.36066, 123.22683, 61.75036]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf260_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-19.47749, 124.96682, 63.34475]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf261_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-20.50242, 126.55304, 56.13232]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf262_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-21.26715, 124.96863, 59.23398]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf263_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-20.24323, 127.41814, 61.35387]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf264_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-19.47749, 126.71387, 65.59879]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf265_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-19.94978, 129.09497, 64.9422]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf266_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-22.62481, 132.84985, 57.03659]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf267_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-21.05997, 135.43997, 58.58097]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf268_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-21.53795, 133.74683, 61.68264]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf269_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-20.24323, 129.78371, 59.55572]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf270_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-22.23896, 134.65233, 57.03659]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf271_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-21.622, 130.09488, 63.59994]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf272_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-24.39855, 94.55093, 51.58039]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf273_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-24.44208, 92.58785, 47.20104]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf274_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-24.50534, 94.95733, 49.07226]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf275_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-24.19408, 92.90376, 51.01861]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["CurvedWood004_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[25.02593, 106.02272, -49.11125]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["CurvedWood005_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-0.46791, 106.02272, -49.08908]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Barrel005_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[87.99217, 0, 5.90948]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Barrel006_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[60.50838, 0, 58.48131]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Barrel007_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[75.02474, 0, 59.19558]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Barrel008_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[87.99217, 24.34668, 5.90948]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Barrel009_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-59.93633, 8.62006, -43.99884]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Bolt013_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[70.77679, 23.347, 34.26244]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf277_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[38.93446, 39.1432, 76.56148]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf278_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[44.55495, 47.70625, 76.56148]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf279_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[47.00695, 47.22739, 73.60493]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf280_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[43.94625, 38.15087, 76.65735]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[77.2654, 19.22942, 48.01761]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom001_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[76.44257, 20.66316, 48.27227]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom002_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[77.91278, 21.76267, 48.26699]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom003_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[78.79023, 22.78192, 48.2907]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom004_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[76.94891, 23.40519, 48.27227]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom005_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[81.60384, 100.18093, 36.04465]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom006_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[82.06386, 97.63478, 35.07299]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom007_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[81.94261, 96.28789, 37.08875]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom008_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[82.08185, 95.603, 38.51767]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom009_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[81.57136, 94.80027, 36.10453]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom010_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[78.45512, 24.87267, 48.59493]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom011_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[79.66045, 23.96211, 45.4566]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom012_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[79.79912, 25.97584, 45.87656]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom013_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[79.79384, 27.07535, 44.40635]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom014_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[79.81755, 28.0946, 43.5289]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom015_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[79.79912, 28.71786, 45.37022]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom016_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[79.95248, 30.18534, 43.86401]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom017_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-74.26, 94.74216, 36.43715]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom018_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-74.97871, 97.11697, 32.10906]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom019_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-75.14284, 96.64348, 40.29276]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom020_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-74.45029, 98.92961, 37.35586]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom021_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-74.56718, 99.58437, 34.12334]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom022_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[50.02687, 127.81362, 42.65091]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom023_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[50.18835, 130.15855, 43.13995]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom024_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[49.159, 131.43889, 41.31994]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom025_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[50.78415, 132.91005, 41.56687]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom026_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[50.18835, 134.04533, 42.55033]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom027_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[50.80376, 135.76718, 41.78156]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom029_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-72.79429, 95.24404, 19.08455]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom030_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-73.09619, 98.72312, 18.90423]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom031_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-72.79429, 96.49982, 16.44988]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf281_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[48.18055, 0.72754, -48.01236]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf282_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[46.94783, 0.28067, -49.0896]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf283_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[62.3297, 0.82535, -47.78692]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf284_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[60.39875, 0.68221, -48.47658]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Moss020_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[48.92833, 4.18432, -48.89925]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom032_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[73.89386, 23.92035, -45.93795]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom033_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[73.52219, 25.94415, -45.70958]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom034_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[74.90046, 27.04255, -46.20916]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom035_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[75.72457, 28.08238, -46.51019]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom036_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[74.00005, 28.69711, -45.88032]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom037_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[75.45205, 30.16789, -46.26792]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom_Material_#2_0_1"].geometry}
            material={materials.Material_2}
            position={[-74.99854, -0.04044, -34.95016]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom038_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-75.14217, -0.0958, -37.67063]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom039_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-11.76882, -0.0947, 74.35582]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom040_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-15.24595, -0.05435, 74.10452]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom041_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-14.13365, -0.09648, 75.74461]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom042_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[82.20535, -0.0947, 42.60067]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom043_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[83.44708, -0.02135, 45.85823]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom044_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[84.46344, -0.10658, 44.15701]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom045_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[54.0048, 0.3978, -51.30339]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom046_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[67.19798, 0.7095, -47.04491]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom047_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[65.32454, 0.56396, -49.2789]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom049_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[8.89487, -0.11815, -75.37009]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom050_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[10.91174, 0.0506, -71.18046]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom051_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-71.5286, 0.81091, -33.76394]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom052_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-50.29994, 106.27997, -49.75486]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom053_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-47.49494, 106.74639, -49.10763]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom054_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-51.28667, 105.18951, -50.95076]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom055_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-27.42779, 129.98466, 38.41013]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom056_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-27.45443, 130.52242, 35.71974]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom057_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-29.87453, 129.91679, 39.76433]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder059_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[131.30942, -1.55886, 49.02635]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder060_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[134.41808, -1.55886, 54.84354]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder061_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[139.74013, -1.55886, 51.29791]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder062_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-1.87461, -1.34177, -94.04441]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder063_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[3.37972, -1.34177, -95.26904]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder064_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[1.70502, -1.34177, -100.22467]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder065_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[109.01884, -3.81868, -89.17838]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder066_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[115.27313, -0.92213, -90.58907]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder067_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[113.24449, 0.63864, -96.38082]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder068_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[104.92755, -0.06143, -97.62006]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder069_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[98.74019, 0.63556, -98.33774]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder070_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[98.47042, -0.52725, -92.33807]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder071_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[53.47278, -1.34177, 75.57655]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder072_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[56.01559, -1.34177, 80.3349]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder073_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[60.36893, -1.34177, 77.43465]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf285_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[56.63926, 35.31778, 80.49729]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf286_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[56.17077, 36.22579, 80.56866]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf287_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[135.20062, 18.55654, 54.74865]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf288_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[134.78149, 19.66661, 55.14861]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf289_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[115.77293, 22.05123, -90.09747]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf290_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[115.3737, 23.10859, -89.7165]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf291_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[99.54771, 15.1122, -96.37604]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Leaf292_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[99.25167, 16.02021, -96.74608]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass001_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-78.59531, 4.98599, -58.30245]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass002_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-88.13171, 3.2712, 52.19757]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass003_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[95.60969, 4.98599, -96.77649]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass004_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[110.01396, 3.01624, -103.49013]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass005_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[74.93684, 3.19586, -52.70388]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass006_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[47.93993, 3.19586, -58.19904]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass007_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[39.82356, 3.19586, -78.16364]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass008_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[5.77184, 3.19586, -98.43887]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass009_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-61.90244, 3.19586, -89.94159]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass010_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-77.72954, 3.19586, -71.41959]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass011_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-78.59531, 4.98599, 22.98824]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass012_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-67.5088, 4.98599, 49.41227]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass013_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-35.49061, 4.98599, 71.37918]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass014_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-12.21445, 4.98599, 49.40371]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass015_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[33.23133, 4.98599, 71.4836]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass016_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[74.13631, 3.07075, 67.9755]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass017_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[60.33127, 3.07075, 80.95487]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass018_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[80.75595, 3.07075, 41.24735]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass019_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[80.75595, 4.1585, 15.66932]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass020_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[98.60486, 3.46371, 27.79304]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass021_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[97.29201, 3.46371, -0.68918]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass022_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[76.243, 3.46371, -34.15169]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass023_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[92.22949, 2.44317, -36.4873]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass024_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[102.06879, 2.44317, -27.97992]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass025_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[152.72318, 2.44317, -43.19008]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass026_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[156.57884, 2.44317, -7.9035]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass027_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[118.71934, 2.44317, -14.35036]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass028_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[111.16714, 2.44317, 0.18964]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass029_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[135.17317, 2.44317, 4.12445]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass030_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[162.64381, 2.44317, -2.59112]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass031_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[122.66243, 2.44317, -39.07447]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass032_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[17.43869, 3.19586, -73.98991]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass033_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[26.04449, 4.23564, -52.48493]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass034_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-119.82698, 4.03057, 50.03889]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass035_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-118.66057, 1.75259, 74.16939]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass036_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-59.55664, 4.07352, 75.68691]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass037_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-101.71909, 4.51645, -29.61285]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass038_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-104.27778, 2.72631, -42.50711]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass039_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-36.93819, 4.51645, -92.74004]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass040_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-30.60999, 2.72631, -104.26231]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass041_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[16.9906, 4.51645, -86.86509]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass042_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[27.24634, 2.72631, -77.62949]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass043_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[68.96172, 4.51645, -65.06667]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass044_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[144.37822, 4.31597, 53.9975]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass045_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[137.37219, 5.18914, 59.89157]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass046_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[103.21135, 2.44317, -47.65813]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass047_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-19.14484, 137.71428, -42.50711]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass048_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-51.77316, 118.62482, 14.00392]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass049_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-60.41275, 120.09521, 36.08183]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass050_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-33.67459, 129.06769, 35.58908]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass051_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-24.67505, 149.18144, 94.58603]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass052_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[9.3156, 165.19464, 81.15581]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass053_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[26.79838, 161.46523, 34.48197]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass054_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[18.6943, 168.81589, 33.32205]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass055_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[51.83846, 146.37955, 55.60514]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass056_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[49.95483, 151.05916, 103.7775]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass057_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[44.81699, 121.79993, -4.49392]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Grass058_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-44.64378, 108.04842, -48.94589]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink001_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-102.80322, 0.87548, 31.65762]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink002_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-107.72221, 0.16951, -8.80522]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink003_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-106.2054, 0.16951, -6.91867]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink004_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-104.85658, 0.16951, -8.65162]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink005_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-107.05153, 0.16951, -5.10747]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink006_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-75.31094, 0.8829, -40.53502]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink007_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-80.92229, 0.16951, -74.54651]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink008_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-80.4521, 0.16951, -76.9211]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink009_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-82.64661, 0.16951, -76.84045]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink010_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-78.52075, 0.16951, -77.43715]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink011_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-2.7676, 0.16951, -99.76468]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink012_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-2.29741, 0.16951, -102.13927]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink013_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-4.49193, 0.16951, -102.05862]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink014_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-0.36607, 0.16951, -102.65532]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink015_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[90.69341, 0.16951, -42.48871]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink016_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[91.30917, 0.16951, -45.59848]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink017_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[88.43523, 0.16951, -45.49285]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink018_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[93.83846, 0.16951, -46.27429]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink019_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[63.0272, 0.40378, -50.41591]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink020_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[61.41032, 0.89747, -49.8401]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink021_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[78.39781, 113.26953, 17.34266]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink022_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[77.54997, 113.76321, 15.85033]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink023_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[76.30034, 114.06136, 17.1235]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink024_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[79.51422, 112.95825, 15.85033]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink025_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[47.70863, 119.22179, -3.59014]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink026_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[47.22992, 119.85519, -5.1899]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink027_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[48.99729, 118.72137, -4.87827]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink028_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-10.50714, 102.66112, -65.87138]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink029_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-9.76087, 102.25861, -70.32047]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink030_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-11.61026, 102.9303, -67.91824]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink031_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-66.30249, 0.16951, 77.78312]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink032_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-64.78568, 0.16951, 79.66967]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink033_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-63.43685, 0.16951, 77.93672]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink034_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-65.63181, 0.16951, 81.48087]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink035_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-62.77952, 0.2094, 83.12578]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink036_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-65.69299, 0.2094, 85.25075]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink037_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-64.36819, 0.2094, 87.00214]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink038_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-68.12277, 0.2094, 80.35188]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink039_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-4.43552, 0.16951, 77.55518]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink040_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-6.5568, 0.16951, 78.72134]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink041_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-5.0844, 0.16951, 80.3506]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink042_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-8.19355, 0.16951, 77.57356]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink043_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-10.30877, 0.2094, 80.09688]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink044_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-11.89553, 0.2094, 76.85867]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink045_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-13.85036, 0.2094, 77.85922]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink046_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-6.64917, 0.2094, 75.31648]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink047_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[42.67822, 0.16951, 78.9637]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink048_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[44.10791, 0.16951, 77.0103]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink049_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[42.0849, 0.16951, 76.15595]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink050_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[46.07638, 0.16951, 77.35882]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink051_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[46.92702, 0.2094, 74.17799]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink052_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[49.73364, 0.2094, 76.44221]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink053_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[51.08247, 0.2094, 74.70925]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink054_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[45.63058, 0.2094, 80.05711]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink055_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[89.06103, 0.16951, 42.92941]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink056_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[90.49072, 0.16951, 40.97601]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink057_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[88.46771, 0.16951, 40.12166]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink058_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[92.45919, 0.16951, 41.32452]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink059_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[93.30983, 0.2094, 38.1437]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink060_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[96.11646, 0.2094, 40.40791]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink061_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[97.46528, 0.2094, 38.67496]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink062_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[92.01338, 0.2094, 44.02282]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink063_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[142.50153, 0.16951, 0.40323]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink064_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[142.24008, 0.16951, 2.80977]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink065_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[144.41925, 0.16951, 2.53815]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink066_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[140.36108, 0.16951, 3.49218]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink067_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[141.21481, 0.2094, 6.67217]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink068_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[137.6521, 0.2094, 6.11462]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink069_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[137.35046, 0.2094, 8.28981]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink070_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[139.39801, 0.2094, 0.93248]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink071_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[22.08503, 0.16951, -79.52097]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink072_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[19.87019, 0.16951, -78.54413]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink073_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[21.195, 0.16951, -76.79272]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink074_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[18.33971, 0.16951, -79.83018]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink075_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[16.01262, 0.2094, -77.50083]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink076_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[14.71412, 0.2094, -80.86501]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink077_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[12.67953, 0.2094, -80.03864]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink078_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[20.07494, 0.2094, -81.94408]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink079_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[98.09007, 0.16951, -103.6063]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink080_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[100.48227, 0.16951, -103.97662]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink081_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[99.65589, 0.16951, -106.01124]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink082_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[101.62775, 0.16951, -102.33826]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink083_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[104.47842, 0.2094, -103.98595]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink084_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[104.86197, 0.2094, -100.40032]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink085_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[107.04111, 0.2094, -100.67194]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink086_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[99.40453, 0.2094, -100.74551]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink087_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-24.92393, 134.06662, -46.20273]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink088_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-23.70539, 134.09033, -40.80507]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink089_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-23.30492, 135.21896, -44.56534]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink090_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-35.83249, 128.21242, 38.24805]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink091_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-33.99688, 129.41422, 39.86538]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink092_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-47.06672, 118.20914, 16.9936]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink093_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-49.58471, 117.50603, 16.51501]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink094_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-56.48723, 115.1768, 15.89884]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink095_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-67.66985, 118.16721, 38.88221]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink096_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-69.88966, 117.49106, 38.03851]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink097_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-67.483, 118.22412, 36.26874]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink098_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[9.10609, 162.50911, 74.32817]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink099_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[9.77679, 163.54115, 76.31915]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink100_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[51.73708, 147.94516, 101.67087]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink101_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[51.71315, 148.96808, 103.13466]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink102_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[53.00148, 147.76038, 103.52601]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink103_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[50.3794, 149.24908, 101.50729]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue001_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-76.2379, 0.66417, -44.21323]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue002_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-76.2379, 0.66417, -42.46472]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerPink104_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-74.63198, 1.2573, -42.14185]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue003_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-74.77111, 1.27951, -43.14957]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue004_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-103.29702, 0.30404, -72.84319]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue005_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-103.61294, 0.20131, -70.61086]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue006_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-102.21313, 0.14654, -71.214]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue007_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-104.95161, 0.14654, -72.2466]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue008_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-35.76888, 0.20131, -100.24844]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue009_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-35.76888, 0.20131, -98.7085]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue010_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-34.36907, 0.14654, -99.31165]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue011_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-37.10756, 0.14654, -100.34425]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue012_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-90.08205, 0.20131, 60.51711]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue013_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-90.55562, 0.11574, 62.9402]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue014_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-89.15581, 0.14654, 62.36217]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue015_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-91.89429, 0.14654, 61.32957]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue016_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-20.45421, 0.20131, 76.21766]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue017_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-19.92187, 0.11574, 79.91286]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue018_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-18.68663, 0.14653, 78.72126]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue019_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-23.32712, 0.14653, 76.95834]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue020_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-22.33943, 0.20131, 80.65492]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue021_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-24.33378, 0.11574, 79.78417]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue022_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-24.58688, 0.14654, 81.5873]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue023_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-22.51516, 0.14654, 78.74551]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue024_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[15.80178, 0.20131, 69.83395]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue025_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[13.80586, 0.11574, 68.38071]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue026_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[13.73815, 0.14654, 69.89365]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue027_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[15.83133, 0.14654, 67.84813]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue028_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[12.43125, 0.20131, 66.52384]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue029_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[14.209, 0.11574, 64.81059]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue030_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[12.7308, 0.14654, 64.48119]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue031_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[14.38176, 0.14654, 66.89777]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue032_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[130.74899, 0.3276, 65.13062]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue033_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[128.30891, 0.22299, 63.35399]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue034_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[128.22614, 0.26064, 65.20361]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue035_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[130.78511, 0.26064, 62.7029]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue036_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[126.62843, 0.32761, 61.08393]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue037_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[128.80176, 0.223, 58.98944]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue038_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[126.99464, 0.26064, 58.58674]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue039_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[129.01297, 0.26064, 61.54107]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue040_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[79.03852, 0.20131, 74.48968]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue041_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[77.95395, 0.11574, 76.70763]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue042_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[79.45567, 0.14654, 76.5116]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue043_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[77.07774, 0.14654, 74.80542]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue044_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[76.36399, 0.20131, 78.3838]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue045_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[74.36806, 0.11574, 76.93056]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue046_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[74.30035, 0.14654, 78.4435]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue047_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[76.39354, 0.14654, 76.39799]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue048_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[81.22371, 0.22681, -54.71754]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue049_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[77.51123, 0.09571, -55.44311]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue050_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[74.77599, 0.14654, -52.58588]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue051_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[79.9789, 0.14289, -57.49413]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue052_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[74.40015, 0.22682, -57.13144]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue053_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[75.75935, 0.09571, -60.66153]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue054_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[73.49347, 0.14289, -60.16178]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue055_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[77.35071, 0.14289, -57.87517]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue056_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[164.02982, 0.20131, -10.28762]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue057_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[161.60674, 0.11574, -10.76118]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue058_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[162.18475, 0.14654, -9.36137]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue059_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[163.21735, 0.14654, -12.09986]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue060_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[159.57617, 0.20131, -11.86314]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue061_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[160.4633, 0.11574, -14.16718]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue062_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[158.98439, 0.14654, -13.84101]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue063_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[161.50195, 0.14654, -12.34856]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue064_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[97.05004, 0.4835, -34.72548]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue065_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[95.47384, 0.37061, -37.57589]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue066_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[94.54932, 0.41124, -35.80468]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue067_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[98.19256, 0.41124, -37.08339]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue068_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[96.98923, 0.41124, -39.02791]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue069_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[10.51582, 0.46754, -94.18326]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue070_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[9.32107, 0.38197, -96.34386]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue071_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[8.62029, 0.41277, -95.00128]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue072_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[11.38184, 0.41277, -95.97054]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue073_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[10.46972, 0.41277, -97.44447]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue075_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-24.06824, 147.63391, 97.01127]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue076_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-23.32407, 148.65536, 96.17616]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue077_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-25.71961, 146.99847, 95.89043]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue078_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[46.61536, 150.02406, 102.70174]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue079_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[45.16248, 149.64331, 102.89854]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue080_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[47.59375, 149.70782, 104.5265]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue081_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[47.53511, 148.90875, 100.92786]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue082_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[44.91978, 149.15727, 55.88418]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue083_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[45.37314, 148.94856, 57.31437]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue084_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[46.62365, 149.60287, 54.75047]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue085_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[29.30002, 130.18643, 18.42428]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue086_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[30.62976, 129.97772, 17.72946]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue087_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[27.88766, 130.63203, 16.94316]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue088_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[31.71431, 130.18643, 19.01223]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue089_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[50.28283, 125.36258, -38.06259]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue090_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[49.98167, 124.87418, -39.46449]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue091_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[51.32979, 125.4444, -40.31462]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue092_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-86.63015, 0.36568, -2.88509]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue093_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-87.13251, 0.20232, 0.66471]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue094_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-84.90657, 0.11522, -0.29441]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue095_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-89.26124, 0.11521, -1.93642]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue096_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-76.45564, 0.20131, -95.85476]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue097_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-77.84222, 0.11574, -92.38846]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue098_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-76.17667, 0.14653, -92.8028]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue099_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-79.31399, 0.14653, -96.64977]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue100_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-80.30692, 0.20131, -92.95459]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue101_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-81.59869, 0.11574, -94.70586]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue102_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-82.71945, 0.14654, -93.27086]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue103_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-79.50439, 0.14654, -94.69605]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue104_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-84.38506, 0.20131, -97.66387]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue105_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-82.70164, 0.11574, -100.99613]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue106_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-84.39697, 0.14653, -100.72853]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue108_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-80.29566, 0.20131, -100.21734]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue109_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-81.34221, 0.11574, -96.60656]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue110_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-77.91988, 0.14654, -99.69201]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue111_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-81.24691, 0.14654, -98.55245]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue112_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[60.15108, 0.20131, -113.72486]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue113_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[63.61739, 0.11574, -112.33828]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue114_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[63.20305, 0.14653, -114.00383]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue115_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[59.35608, 0.14653, -110.86651]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue116_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[63.05125, 0.20131, -109.87358]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue117_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[61.29999, 0.11574, -108.5818]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue118_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[62.73499, 0.14654, -107.46104]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue119_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[61.30979, 0.14654, -110.6761]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue120_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[58.34197, 0.20131, -105.79543]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue121_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[55.00971, 0.11574, -107.47885]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue122_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[55.27731, 0.14653, -105.78352]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue123_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[55.78851, 0.20131, -109.88483]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue124_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[59.39928, 0.11574, -108.83829]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue125_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[56.31384, 0.14654, -112.26062]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue126_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[57.45339, 0.14654, -108.93359]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue127_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[119.87662, 0.20131, -98.1979]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue128_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[123.34293, 0.11574, -96.81132]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue129_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[122.92859, 0.14653, -98.47687]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue130_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[119.0816, 0.14653, -95.33955]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue131_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[122.77679, 0.20131, -94.34662]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue132_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[121.02551, 0.11574, -93.05484]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue133_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[122.46051, 0.14654, -91.93408]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue134_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[121.03532, 0.14654, -95.14914]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue135_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[118.0675, 0.20131, -90.26847]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue136_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[114.73524, 0.11574, -91.95189]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue137_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[115.00284, 0.14653, -90.25656]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue138_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[115.51404, 0.20131, -94.35787]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue139_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[119.12482, 0.11574, -93.31133]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue140_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[116.03937, 0.14654, -96.73366]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue141_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[117.17892, 0.14654, -93.40662]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue142_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[94.25784, 0.20131, 19.15817]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue143_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[91.83475, 0.11574, 18.6846]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue144_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[92.41277, 0.14654, 20.08441]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue145_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[93.44537, 0.14654, 17.34592]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue146_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[89.80418, 0.20131, 17.58265]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue147_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[90.69132, 0.11574, 15.2786]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue148_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[89.21241, 0.14654, 15.60478]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue149_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[91.72998, 0.14654, 17.09722]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["PancakePlantv1001_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-37.83965, 10.40389, 91.67078]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["PlantRoot_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-38.07755, -0.00356, 96.00353]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["PlantRoot001_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-30.44483, -0.00356, 104.81356]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["PlantRoot002_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-46.0269, -0.00356, 100.97363]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["PlantRoot003_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-43.49599, -0.00356, 105.40362]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["PancakePlantv3002_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-90.90237, 10.40389, -62.88216]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["PlantRoot004_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-94.37438, -0.00356, -60.27936]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["PlantRoot005_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-96.21703, -0.00356, -48.76937]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["PlantRoot006_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-103.29144, -0.00356, -63.1742]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["PlantRoot007_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-105.05817, -0.00356, -58.38787]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["PancakePlantv3003_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[42.77653, 10.40389, -104.8428]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["PlantRoot008_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[39.30452, -0.00356, -102.24001]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["PlantRoot009_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[37.46187, -0.00356, -90.73003]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["PlantRoot010_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[30.38747, -0.00356, -105.13485]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["PlantRoot011_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[28.62074, -0.00356, -100.34851]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["PancakePlantv3004_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[62.6911, 5.0303, -66.38378]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["PlantRoot012_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[60.12117, -1.04361, -64.14945]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["PlantRoot013_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[58.94292, -1.22938, -57.73405]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["PlantRoot014_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[54.94572, -1.09015, -66.55299]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["PlantRoot015_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[53.4166, -0.92904, -63.22586]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["PancakePlantv3005_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[110.10529, 4.63887, 16.92505]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["PlantRoot016_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[107.24672, -0.66528, 17.74496]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["PlantRoot017_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[103.94653, -0.82751, 22.38758]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["PlantRoot018_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[104.03765, -0.70592, 13.93263]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["PlantRoot019_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[101.59953, -0.56523, 16.00156]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["PancakePlantv3006_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[38.13968, 5.68269, 84.40801]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["PlantRoot020_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[34.17484, -1.67417, 85.54523]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["PlantRoot021_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[29.59748, -1.89917, 91.98454]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["PlantRoot022_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[29.72387, -1.73053, 80.25753]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["PlantRoot023_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[26.3422, -1.53539, 83.12713]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Moss021_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[53.51525, 76.26096, 51.38276]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue150_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[51.73642, 74.0498, 51.48065]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue151_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[50.12453, 74.40865, 53.31803]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue152_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[51.60836, 74.19653, 53.53668]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom058_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[51.96503, 69.14157, 49.77369]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom059_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[52.11017, 67.69541, 54.43711]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom060_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[52.30977, 67.74271, 52.55579]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom061_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[52.18561, 68.68379, 51.63984]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom062_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[52.31394, 69.47713, 53.42619]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom063_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[52.25171, 70.78744, 51.757]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom064_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[52.25171, 70.40023, 53.93841]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom066_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[49.91327, 72.79842, 49.44917]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mushroom067_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[51.3353, 72.79842, 48.06896]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed001_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-109.07336, -1.2228, 4.34407]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed002_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-106.93568, -0.84587, 7.91636]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed003_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-105.49038, -0.59103, 4.98956]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed004_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-106.81902, -0.8253, 3.18487]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed005_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-71.7786, 0.6677, 93.38406]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed006_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-69.6162, 0.85688, 96.95636]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed007_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-68.1542, 0.98479, 94.02956]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed008_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-69.4982, 0.86721, 92.22486]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed009_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-71.69616, 0.98479, 99.70535]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed010_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-72.61118, 0.86721, 97.93757]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed011_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-5.38885, 0.6677, 86.48997]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed012_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-6.02859, 0.85688, 90.61647]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed013_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-3.02731, 0.98479, 89.31417]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed014_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-2.89684, 0.86721, 87.06779]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed015_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-9.38895, 0.98479, 91.38535]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed016_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-8.95358, 0.86721, 89.44299]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed017_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[87.68638, 0.6677, 51.97929]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed018_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[87.04665, 0.85688, 56.10579]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed019_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[90.04792, 0.98479, 54.80349]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed020_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[90.17839, 0.86721, 52.55711]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed021_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[83.68629, 0.98479, 56.87467]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed022_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[84.12166, 0.86721, 54.93231]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed023_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[41.93894, 0.6677, 98.0575]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed024_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[45.19273, 0.85688, 100.67477]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed025_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[45.56554, 0.98479, 97.42444]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed026_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[43.68535, 0.86721, 96.18826]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed027_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[44.17842, 0.98479, 103.96937]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed028_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[42.71397, 0.86721, 102.62114]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed029_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[133.72444, 0.14113, 38.83424]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed030_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[137.68283, 0.30441, 42.0621]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed031_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[138.18073, 0.07518, 38.09709]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed032_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[135.88991, 0.00012, 36.56912]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed033_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[136.43069, 0.91656, 46.04232]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed034_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[134.64723, 0.78565, 44.38559]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed035_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[49.26339, 0.6677, -75.11785]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed036_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[52.51717, 0.85688, -72.50058]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed037_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[52.88999, 0.98479, -75.75091]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed038_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[51.0098, 0.86721, -76.98709]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed039_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[51.50288, 0.98479, -69.20598]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed040_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[50.03843, 0.86721, -70.55421]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed041_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-26.95005, 0.6677, -110.48643]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed042_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-24.62632, 0.85688, -113.95594]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed043_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-27.89677, 0.98479, -114.04405]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed044_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-28.96439, 0.86721, -112.06328]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed045_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-21.25586, 0.98479, -113.23264]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerRed046_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-22.47132, 0.86721, -111.65627]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue153_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-98.34016, 0.20131, -52.30846]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue154_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-96.65674, 0.11574, -55.64072]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue155_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-98.35207, 0.14653, -55.37312]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue156_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-94.25076, 0.20131, -54.86193]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue157_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-95.2973, 0.11574, -51.25115]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FlowerBlue158_Material_#28_0"].geometry}
            material={materials.Material_28}
            position={[-95.202, 0.14654, -53.19704]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Kite001_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[55.12319, 17.87452, -10.35063]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Kite002_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[49.42747, 17.87452, -20.87918]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Kite003_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[52.99115, 9.02005, -26.80918]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Kite004_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[56.09692, 10.11391, -34.83959]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Barrel010_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[91.53437, 0, 29.67785]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder074_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[89.75912, 5.73541, 27.35203]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder075_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[91.42975, 5.73541, 32.75208]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder076_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[90.48679, 5.73541, 30.03239]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder077_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[86.49776, 13.6347, 27.4542]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder078_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[94.62639, 16.96821, 24.31498]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder079_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[85.00713, 5.73541, 28.5414]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder080_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[92.10453, 5.73541, 29.84784]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder081_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[87.97749, 8.33087, 26.42348]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder082_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[91.89692, 9.93839, 34.53828]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder083_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[92.33625, 9.93839, 27.49505]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cylinder084_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[88.6713, 4.05595, 22.55794]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FireworksSticks043_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-45.53643, 2.99711, 30.85251]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FireworksSticks044_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-46.10817, 14.76244, 28.57067]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FireworksSticks045_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-42.63445, 5.05324, 18.28216]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FireworksSticks046_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-37.99058, 10.41111, 29.1703]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FireworksSticks047_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-35.84621, 2.99711, 26.0508]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FireworksSticks048_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-35.27448, 18.72393, 28.33264]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FireworksSticks049_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-38.74819, 5.05324, 38.62115]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FireworksSticks050_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-37.7409, 10.40278, 32.02832]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FireworksSticks051_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-43.76061, 5.69538, 24.26927]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FireworksSticks052_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[-46.40434, 7.20903, 36.67451]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Barrel011_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[34.89241, -0.75474, -65.86637]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FireworksSticks053_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[32.08081, 1.30692, -65.93359]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FireworksSticks054_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[31.78349, -6.10708, -62.15986]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FireworksSticks055_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[30.14743, 5.65824, -63.85011]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FireworksSticks056_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[28.0115, -4.05095, -74.49709]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FireworksSticks057_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[37.47728, 1.30692, -67.38962]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FireworksSticks058_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[37.7746, -6.10708, -71.16337]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FireworksSticks059_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[39.41067, 9.61973, -69.47311]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FireworksSticks060_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[41.5466, -4.05095, -58.82613]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FireworksSticks061_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[39.12251, 1.29858, -65.03934]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FireworksSticks062_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[30.02977, -3.40882, -68.74902]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["FireworksSticks063_Material_#2_0"].geometry}
            material={materials.Material_2}
            position={[33.94286, -1.89517, -56.6839]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_Environment_0.geometry}
            material={materials.Environment}
            position={[-25.87347, -0.03359, -7.40852]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
    </group>
  );
}
