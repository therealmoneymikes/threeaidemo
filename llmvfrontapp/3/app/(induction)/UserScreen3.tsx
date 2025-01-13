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
import { incrementProgress } from "../statemangement/signupProgressSlice";
import { router } from "expo-router";

const headerText =
  "At the 3AI enjoy award drinks and treats FAST and AFFORDABLY!";

const colourTest = "hsl(301, 69%, 27%)";
//startRangeColour={colours.primary}
//endRangeColour={colours.maroon}

const UserCareerIntermidateBenefit = () => {
  const videoSource = require("@/assets/videos/cafeset.mp4");
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

  return (
    <BaseScreen
      animateBackground
      gradient
      startRangeColour={colours.primary}
      endRangeColour={colours.maroon}
    >
      <ProgressBar progress={progress} />
      <Animated.View
        entering={FadeIn.delay(200).damping(12).dampingRatio(2)}
        style={{
          width: "94%",
          paddingTop: calculateY(155),
          alignSelf: "center",
          alignItems: "center",
          zIndex: 10,
          position: "absolute",
          backgroundColor: "transparent",
        }}
      >
        <Animated.Text
          style={{
            fontWeight: 200,
            fontSize: 32,
            textAlign: "center",
            color: "white",
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
          //   opacity: 1,
        }}
        allowsFullscreen
      />
      <Animated.View
        entering={FadeInUp.delay(3000)
          .damping(200)
          .springify()
          .dampingRatio(1.8)}
        style={{ bottom: "15%" }}
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
    </BaseScreen>
  );
};

export default UserCareerIntermidateBenefit;

const styles = StyleSheet.create({});
