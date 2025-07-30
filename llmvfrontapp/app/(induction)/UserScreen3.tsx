import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useVideoPlayer, VideoView } from "expo-video";
import BaseScreen from "@/components/basecomponents/BaseScreen";
import CustomPressable from "@/components/basecomponents/CustomPressable";
import colours from "@/config/colours";
import Animated, {
  FadeIn,
  FadeInRight,
  FadeInUp,
} from "react-native-reanimated";
import { spacingY } from "@/config/spacings";
import { calculateY } from "@/utils/screensizing";
import ProgressBar from "@/components/basecomponents/ProgressBar";
import { RootState } from "../statemangement/store";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementProgress,
  resetProgress,
} from "../statemangement/signupProgressSlice";
import { router } from "expo-router";

const headerText =
  "At the 3AI enjoy award winning drinks and treats FAST and AFFORDABLY!";

const colourTest = "hsl(301, 69%, 27%)";
//startRangeColour={colours.primary}
//endRangeColour={colours.maroon}

const UserScreen3 = () => {
  const videoSource = require("@/assets/videos/1.mov");
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });

  const progress = useSelector(
    (state: RootState) => state.signupProgress.progress
  );
  //Get dispatch function
  const dispatch = useDispatch();
  const handleNextScreen = () => {
    dispatch(incrementProgress(20));
    router.push("/(induction)/UserScreen4");
  };

  useEffect(() => {
    if (progress !== 40) {
      router.navigate("/(induction)/UserScreen1");
      dispatch(resetProgress());
    }
  }, []);
  return (
    <BaseScreen
      animateBackground
      gradient
      startRangeColour={colours.primary}
      endRangeColour={colours.maroon}
    >
      <ProgressBar progress={progress} />
      <Animated.View
        entering={FadeInUp.damping(12).dampingRatio(1).springify()}
        style={{
          width: "97%",
          paddingTop: calculateY(120),
          alignSelf: "center",
          zIndex: 10,
          position: "absolute",
          backgroundColor: "transparent",
        }}
      >
        <Animated.Text
          style={{
            fontWeight: 200,
            fontSize: 52,
            textAlign: "center",
            color: "hsl(201, 94%, 10%)",
            width: "100%",
            // fontFamily: "MuliRegular",
            //fontFamily:"LatoLight"
            fontFamily: "CabinSketchRegular",
            //fontFamily: "CabinSketchBold"
            //fontFamily: "CabinCondensedBold"
            //fontFamily: "CabinRegular"
            //fontFamily: "MuliLight"
            //fontFamily: "MuliRegular"
          }}
        >
          {headerText}
        </Animated.Text>
      </Animated.View>

      {/* Video */}
      <VideoView
        player={player}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
          flex: 2,
        }}
        nativeControls={false}
      />

      <Animated.View
        entering={FadeInUp.delay(2200)
          .damping(200)
          .springify()
          .dampingRatio(1.8)}
        style={{ alignSelf: "center", bottom: "15%" }}
      >
        <CustomPressable
          style={{
            backgroundColor: colours.primary,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            borderRadius: 10,
            height: 50,
            width: "90%",

            zIndex: 1000,
            position: "absolute",
          }}
          onPress={() => handleNextScreen()}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>Next</Text>
        </CustomPressable>
      </Animated.View>

      {/* Lets continue */}
    </BaseScreen>
  );
};

export default UserScreen3;

const styles = StyleSheet.create({});
