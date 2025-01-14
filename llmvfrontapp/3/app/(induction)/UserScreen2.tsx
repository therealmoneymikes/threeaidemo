import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import BaseScreen from "@/components/basecomponents/BaseScreen";
import Animated, {
  FadeInRight,
  FadeIn,
  FadeInDown,
  FadeInLeft,
} from "react-native-reanimated";
import { router, useLocalSearchParams } from "expo-router";
import { spacingY } from "@/config/spacings";
import { CollectBankAccountError } from "@stripe/stripe-react-native";
import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import colours from "@/config/colours";
import CustomPressable from "@/components/basecomponents/CustomPressable";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementProgress,
  resetProgress,
} from "../statemangement/signupProgressSlice";
import { RootState } from "../statemangement/store";
import ProgressBar from "@/components/basecomponents/ProgressBar";

const headerText =
  "At the 3AI enjoy award winning drinks and treats ANYTIME, ANYWHERE, on ANY device.";
const gIconSize = 50;
const areaOptions = [
  {
    title: "Holiday",
    icon: (
      <MaterialCommunityIcons
        name="palm-tree"
        color={"hsl(174 82% 66%)"}
        size={gIconSize}
      />
    ),
  },
  {
    title: "Cooking",
    icon: (
      <MaterialIcons
        name="soup-kitchen"
        color={"hsl(0 82% 69%)"}
        size={gIconSize}
      />
    ),
  },
  {
    title: "Commute",
    icon: (
      <MaterialCommunityIcons
        name="train-car-passenger-door"
        color={"hsl(153 72% 66%)"}
        size={gIconSize}
      />
    ),
  },
  {
    title: "Coffee Break",
    icon: (
      <MaterialCommunityIcons
        name="coffee"
        color={"hsl(331 82% 60%)"}
        size={gIconSize}
      />
    ),
  },
  {
    title: "Commercials",
    icon: <Entypo name="tv" color={"hsl(40 79% 52%)"} size={gIconSize} />,
  },
  {
    title: "Holiday",
    icon: (
      <MaterialCommunityIcons
        name="palm-tree"
        color={"hsl(204 72% 52%)"}
        size={gIconSize}
      />
    ),
  },
  {
    title: "Bed",
    icon: (
      <MaterialCommunityIcons
        name="bed"
        color={"hsl(331 82% 60%)"}
        size={gIconSize}
      />
    ),
  },
  {
    title: "Waiting",
    icon: (
      <MaterialCommunityIcons
        name="sofa"
        color={"hsl(23 72% 52%)"}
        size={gIconSize}
      />
    ),
  },
  {
    title: "Lunch Break",
    icon: (
      <MaterialIcons
        name="lunch-dining"
        color={"hsl(243 89% 92%)"}
        size={gIconSize}
      />
    ),
  },
];

const UserScreen2 = () => {
  

  const dispatch = useDispatch();
  const progress = useSelector(
    (state: RootState) => state.signupProgress.progress
  );
  const handleNextScreen = () => {
    router.push("/(induction)/UserScreen3");
    dispatch(incrementProgress(20));
  };

  useEffect(() => {
    if (progress !== 20) {
      router.navigate("/(induction)/UserScreen1");
      dispatch(resetProgress());
    }

    setTimeout(handleNextScreen, 10000);
  }, []);
  return (
    <BaseScreen animateBackground gradient>
      {/* <Text>Option 1 {params.title}</Text> */}
      <ProgressBar progress={progress} />
      <Animated.View
        entering={FadeInRight.delay(200).damping(12).dampingRatio(2)}
        style={{ width: "90%", paddingTop: spacingY._40, alignSelf: "center" }}
      >
        <Animated.Text
          style={{
            fontWeight: 700,
            fontSize: 32,
            textAlign: "center",
            color: "white",
            fontFamily: "CabinSketchRegular",
          }}
        >
          {headerText}
        </Animated.Text>
      </Animated.View>

      {/* Animated */}
      <Animated.View
        entering={FadeIn.delay(1000).damping(200).dampingRatio(0).springify()}
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: spacingY._60,
        }}
      >
        {areaOptions.map((item, index) => (
          <Animated.View
            key={index}
            style={{
              width: "33%",
              aspectRatio: 1,
              justifyContent: "center",
              alignItems: "center",

              marginTop: spacingY._10,
            }}
            entering={FadeInLeft.delay(index * 400)
              .springify()
              .damping(12)
              .duration(2000)}
          >
            <View
              style={{
                padding: 10,
                borderRadius: 55,
                borderWidth: 6,
                borderColor: item.icon["props"]["color"],
                width: 80,
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.2)",
              }}
            >
              {item.icon}
            </View>
            <Text
              style={{
                marginTop: spacingY._3,
                fontFamily: "Nunito",
                color: "white",
              }}
            >
              {item.title}
            </Text>
          </Animated.View>
        ))}
      </Animated.View>
    </BaseScreen>
  );
};

export default UserScreen2;

const styles = StyleSheet.create({});
