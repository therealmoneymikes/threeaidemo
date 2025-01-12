import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import BaseScreen from "@/components/basecomponents/BaseScreen";
import Animated, { FadeIn } from "react-native-reanimated";
import AppButton from "@/components/basecomponents/BaseButton";
import { router } from "expo-router";
import colours from "@/config/colours";
import { spacingX, spacingY } from "@/config/spacings";

const PreInductionScreen = () => {
  return (
    <BaseScreen
      style={{ padding: spacingX._20 }}
      gradient
      startRangeColour={colours.primary}
      endRangeColour={colours.blue}
      animateBackground
      animationSpeed={4500}
    >
      <Animated.View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Image
          source={require("@/assets/images/products/item10.png")}
          style={{ width: 250, height: 250 }}
        />
        <Animated.Text entering={FadeIn.springify().damping(12)}style={{ fontSize: 40, fontWeight: "bold" }}>
          Welcome
        </Animated.Text>
        <Animated.Text
          style={{
            fontFamily: "Nunito",
            fontSize: 16,
            textAlign: "center",
            marginTop: spacingY._10,
          }}
        >
          So that we can help the best, we'll ask you a few questions.
        </Animated.Text>
      </Animated.View>

      <AppButton
        style={{ bottom: "10%" }}
        btnLabel="LET'S GO"
        onPress={() => router.navigate("/(induction)/UserScreen1")}
      />
    </BaseScreen>
  );
};

export default PreInductionScreen;

const styles = StyleSheet.create({});
