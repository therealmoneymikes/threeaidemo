import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import BaseScreen from "@/components/basecomponents/BaseScreen";
import CustomPressable from "@/components/basecomponents/CustomPressable";
import colours from "@/config/colours";
import { spacingY } from "@/config/spacings";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../statemangement/store";
import { incrementProgress } from "../statemangement/signupProgressSlice";
import { router } from "expo-router";



const ageRanges = ["18 or under", "19-24", "25-34", "35-44", "45-over"];

const UsersAge = () => {
  

      const progress = useSelector(
        (state: RootState) => state.signupProgress.progress
      );
      //Get dispatch function
      const dispatch = useDispatch();
      const handleNextScreen = () => {
        dispatch(incrementProgress(20));
        router.push("/(induction)/UserScreen5");
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
        {ageRanges.map((item, index) => (
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
            <Text
              style={{
                fontSize: 28,
                fontFamily: "Nunito",
                color: "white",
              }}
            >
              {item}
            </Text>
          </CustomPressable>
        ))}
      </View>
    </BaseScreen>
  );
};

export default UsersAge;

const styles = StyleSheet.create({});
