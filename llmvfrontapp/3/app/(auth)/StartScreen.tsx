import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Homescene from "@/components/3d/Homescene";
import BaseScreen from"@/components/basecomponents/BaseScreen";
import colours from "@/config/colours";

const StartScreen = () => {
  return (
    <BaseScreen
      gradient
      animateBackground
      animationSpeed={5500}
      gradientColours={colours.gradientColourSets.orangeToPink}
    >
      <View></View>
    </BaseScreen>
  );
};

export default StartScreen;

const styles = StyleSheet.create({});
