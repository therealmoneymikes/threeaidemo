import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import BaseScreen from "@/components/basecomponents/BaseScreen";
import CustomPressable from "@/components/basecomponents/CustomPressable";
import colours from "@/config/colours";
import { calculateY } from "@/utils/screensizing";
import { Video, ResizeMode } from "expo-av";
import { router } from "expo-router";
import { FadeIn, FadeInUp } from "react-native-reanimated";
import Animated from "react-native-reanimated";
const UsersAgeIntermidate = () => {
  return (
    <BaseScreen
      animateBackground
      gradient
      startRangeColour={colours.primary}
      endRangeColour={colours.maroon}
    >
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
          Amazing!
        </Animated.Text>
      </Animated.View>

      {/* Second Perfect for the effect */}
      <Animated.View
        entering={FadeIn.damping(12).springify()}
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
            fontSize: 50,
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
          Amazing!
        </Animated.Text>
      </Animated.View>

      {/* Video */}
      <Video
        source={require("@/assets/videos/ecomcoder.mov")}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
          flex: 2,
          //   opacity: 1,
        }}
        resizeMode={ResizeMode.COVER}
        isLooping
        // onPlaybackStatusUpdate={(status) => console.log(status)}
        useNativeControls={false}
      />
      <Animated.View
        entering={FadeInUp.delay(2200)
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
          onPress={() => router.push("/HomeScreen")}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>Explore</Text>
        </CustomPressable>
      </Animated.View>

      {/* Lets continue */}
      <Animated.View
        entering={FadeIn.delay(2000).damping(12).springify()}
        style={{
          width: "97%",
          paddingTop: calculateY(120),
          alignSelf: "center",
          zIndex: 10,
          position: "absolute",
          backgroundColor: "transparent",
          top: "10%",
        }}
      >
        <Animated.Text
          style={{
            fontWeight: 100,
            alignSelf: "center",
            justifyContent: "center",
            fontSize: 60,
            textAlign: "center",
            color: "white",
            width: "100%",
            fontFamily: "CabinSketchRegular",
            // fontFamily: "MuliRegular",
            //fontFamily:"LatoLight"
            // fontFamily: "CabinSketchRegular",
            //fontFamily: "CabinSketchBold"
            //fontFamily: "CabinCondensedBold"
            //fontFamily: "CabinRegular"
            //fontFamily: "MuliLight"
            //fontFamily: "MuliRegular"
          }}
        >
          Let's Continue
        </Animated.Text>
      </Animated.View>
    </BaseScreen>
  );
};

export default UsersAgeIntermidate;

const styles = StyleSheet.create({});