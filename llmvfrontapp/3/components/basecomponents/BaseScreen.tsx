import {
  Animated,
  SafeAreaView,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import React, { ReactNode, useEffect, useState } from "react";
import Constants from "expo-constants";
import colours from "@/app/config/colours";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  backgroundColor?: ViewStyle["backgroundColor"];
  gradient?: boolean;
  gradientColours?: readonly [string, string];
  animateBackground?: boolean;
  startRangeColour?: string;
  endRangeColour?: string;
  animationSpeed?: number;
}

const BaseScreen = ({
  children,
  style,
  backgroundColor,
  gradient = false,
  gradientColours = ["rgb(151, 10, 222)", "hsl(231, 93%, 66%)"],
  animateBackground = false,
  startRangeColour = "rgb(151, 10, 222)",
  endRangeColour = "hsl(200, 93%, 66%)",
  animationSpeed = 3600,
  ...props
}: Props) => {
  const [animatedGradient, setAnimatedGradient] = useState(
    new Animated.Value(0)
  );
  const [interpolatedStartColor] = useState(new Animated.Value(0));
  const [interpolatedEndColor] = useState(new Animated.Value(0));

  useEffect(() => {
    if (animateBackground) {
      Animated.loop(
        Animated.sequence([
          // Note to Self: Use Parallel sequence
          Animated.parallel([
            Animated.timing(interpolatedStartColor, {
              toValue: 1,
              duration: animationSpeed,
              useNativeDriver: false,
            }),
            Animated.timing(interpolatedEndColor, {
              toValue: 1,
              duration: animationSpeed,
              useNativeDriver: false,
            }),
          ]),
          Animated.parallel([
            Animated.timing(interpolatedStartColor, {
              toValue: 0,
              duration: animationSpeed,
              useNativeDriver: false,
            }),
            Animated.timing(interpolatedEndColor, {
              toValue: 0,
              duration: animationSpeed,
              useNativeDriver: false,
            }),
          ]),
        ])
      ).start();
    }
  }, [animateBackground]);

  const startColor = interpolatedStartColor.interpolate({
    inputRange: [0, 1],
    outputRange: [startRangeColour, endRangeColour],
  });

  const endColor = interpolatedEndColor.interpolate({
    inputRange: [0, 1],
    outputRange: [endRangeColour, startRangeColour],
  });

  const AnimatedLinearGradient =
    Animated.createAnimatedComponent(LinearGradient);

  return gradient ? (
    <AnimatedLinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={
        animateBackground
          ? [startColor as any, endColor as any]
          : gradientColours
      }
      style={[styles.default, style]}
    >
      {children}
    </AnimatedLinearGradient>
  ) : (
    <SafeAreaView
      style={[
        styles.default,
        style,
        { backgroundColor: backgroundColor ?? colours.grayBG },
      ]}
    >
      {children}
    </SafeAreaView>
  );
};

export default BaseScreen;

const styles = StyleSheet.create({
  default: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
