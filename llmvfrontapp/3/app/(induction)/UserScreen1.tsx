import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import colours from "@/config/colours";
import Animated from "react-native-reanimated";
import BaseScreen from "@/components/basecomponents/BaseScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { spacingY } from "@/config/spacings";
import CustomPressable from "@/components/basecomponents/CustomPressable";
import { router, useSegments } from "expo-router";

const UsersCareerOptions = [
  {
    title: "I'm an entrepreneur",
    icon: <MaterialCommunityIcons name="briefcase" size={24} color="white" />,
  },
  {
    title: "I study",
    icon: <MaterialCommunityIcons name="book" size={24} color="white" />,
  },
  {
    title: "I work",
    icon: <MaterialCommunityIcons name="train" size={24} color="white" />,
  },
  {
    title: "Other",
    icon: <MaterialCommunityIcons name="terrain" size={24} color="white" />,
  },
];
const UsersScreen1 = () => {
  const handleNextScreen = () => {
    console.log("Move to screen 2");
  };

  return (
    <BaseScreen animateBackground gradient>
      <View
        style={{
          alignSelf: "center",
          justifyContent: "center",
          width: "90%",
          flex: 1,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            color: "white",
            alignSelf: "flex-start",
            fontWeight: "600",
            paddingBottom: spacingY._10,
          }}
        >
          What best describes you at the moment?
        </Text>
        {UsersCareerOptions.map((item, index) => (
          <CustomPressable
            onPress={() => handleNextScreen()}
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              borderWidth: 1,
              padding: 10,
              height: "10%",
              maxHeight: 200,
              borderRadius: 10,
              borderColor: colours.csaGray,
              width: "100%",
              marginVertical: spacingY._10,
              gap: 10,
            }}
          >
            <View>{item.icon}</View>
            <Text
              style={{
                fontSize: 26,
                fontFamily: "Nunito",
                color: "white",
              }}
            >
              {item.title}
            </Text>
          </CustomPressable>
        ))}
      </View>
    </BaseScreen>
  );
};

export default UsersScreen1;

const styles = StyleSheet.create({});
