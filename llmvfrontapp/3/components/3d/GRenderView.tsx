import { SafeAreaView, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import Homescene from "@/components/3d/Homescene";
import { StatusBar } from "expo-status-bar";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Cappa } from "@/components/3d/Cappa";
import { Tram } from "@/components/3d/Tram";
import Starlink from "@/components/3d/Starlink";
import useControls from "r3f-native-orbitcontrols";
import { ChineseShop } from "@/components/3d/ChineseShop";

const GRenderView = () => {
  const [OrbitControls, event] = useControls();
  return (
    <SafeAreaView style={styles.container}>
      <Text>Sign Up</Text>
      <View style={{ flex: 1 }} {...event}>
        <Canvas>
          <OrbitControls /> {/* Orbit Controllers from R3F set  */}
          <directionalLight position={[1, 0, 0]} args={["white", 2]} />
          <directionalLight position={[-1, 0, 0]} args={["white", 2]} />
          <directionalLight position={[0, 0, 1]} args={["white", 2]} />
          <directionalLight position={[0, 0, -1]} args={["white", 2]} />
          <directionalLight position={[0, 1, 0]} args={["white", 2]} />{" "}
          {/* Light above */}
          <directionalLight position={[0, -1, 0]} args={["white", 2]} />{" "}
          {/* Light below */}
          {/* <Starlink /> */}
          {/* <Tram export default > */}
          {/* <ChineseShop /> */}
          <Cappa />
        </Canvas>
      </View>
    </SafeAreaView>
  );
};
export default GRenderView
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
