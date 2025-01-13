import { Animated, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { spacingY } from "@/config/spacings";
import colours from "@/config/colours";

interface Props {
  progress: number;
  allowAnimation?: boolean;
}
const ProgressBar = ({ progress, allowAnimation = true }: Props) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  //NICE PURPLE - "#6200ee"

  useEffect(() => {
    {
      Animated.timing(animatedValue, {
        toValue: progress,
        duration: allowAnimation ? 700 : 0, // Adjust for smoothness
        useNativeDriver: false, // Animates the width (which isn't supported by native driver)
      }).start();
    }
  }, [progress]);

  //   Interpolate --> Note to self 10 screens should be enough ;)
  const animatedWidth = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  return (
    <View
      style={{
        marginTop: spacingY._20,
        height: 25,
        width: "90%",
        alignSelf: "center",
        backgroundColor: "#e0e0df",
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <Animated.View style={[styles.bar, { width: animatedWidth }]} />
    </View>
  );
};

export default React.memo(ProgressBar);

const styles = StyleSheet.create({
  bar: {
    height: "100%",
    backgroundColor: colours.progressGreen,
  },
});
