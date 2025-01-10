import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import BaseScreen from "@/components/basecomponents/BaseScreen";
import colours from "@/config/colours";
import { Controller, useForm } from "react-hook-form";
import { calculateY } from "@/utils/screensizing";
import { spacingY } from "@/config/spacings";
import Animated from "react-native-reanimated";
import { Button } from "react-native";
import { router } from "expo-router";
import * as Yup from "yup";

import SubmitButton from "@/forms/SubmitButton";
import AppDropdownField, { ItemsArray } from "@/forms/AppDropdownField";
import CustomPressable from "@/components/basecomponents/CustomPressable";
import AppForm from "@/forms/AppForm";
import AppFormField from "@/forms/AppFormField";
import { signupValidationSchema } from "@/validation/userAuthValidation";

const areaCodes = [
  { label: "+1 (USA)", value: "+1" },
  { label: "+44 (UK)", value: "+44" },
  { label: "+91 (India)", value: "+91" },
];
const SignUpScreen = () => {
  const [loginFailed, setLoginFailed] = useState(false);
  const [byEmail, setByEmail] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<any | null>(null);
  const [items, setItems] = useState<ItemsArray>(areaCodes);

  const handleSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const result = await fetch("", {
      body: JSON.stringify({ email, password }),
    });
    if (!result.ok) {
      setLoginFailed(true);
      console.log("Login failed");
      return;
    }
    // return result.data?.token!;
  };

  return (
    <BaseScreen
      gradient
      animateBackground
      animationSpeed={5500}
      gradientColours={colours.gradientColourSets.orangeToPink}
    >
      <Animated.View style={{ padding: spacingY._20 }}>
        <CustomPressable onPress={() => router.back()}>
          <Text style={{ color: "white" }}>BACK</Text>
        </CustomPressable>
      </Animated.View>
      <Animated.View style={{ alignSelf: "center" }}>
        <Text style={{ fontSize: 40, color: "white" }}>Sign Up Today!</Text>
      </Animated.View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          width: "90%",
          alignSelf: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <AppForm
          initialValues={{
            firstname: "",
            surname: "",
            email: "",
            username: "",
            password: "",
            phone: "",
            areacode: "",
            country: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={signupValidationSchema}
        >
          <>
            <View
              style={{
                flexDirection: "row",
                width: 188,
                gap: 10,
                marginBottom: spacingY._10,
                alignItems: "center",
              }}
            >
              <AppFormField
                placeholder="First name"
                fieldName="firstname"
                useIcon
                icon="id-card"
                keyboardType="default"
                secureTextEntry={false}
              />
              <AppFormField
                placeholder="Surname"
                fieldName="surname"
                useIcon
                icon="id-card"
                keyboardType="default"
                secureTextEntry={false}
              />
            </View>
            <Animated.View>
              <AppFormField
                placeholder="Enter your email"
                fieldName="email"
                useIcon
                icon="email"
                keyboardType="email-address"
                secureTextEntry={false}
              />
            </Animated.View>

            <AppFormField
              placeholder="Enter your username"
              fieldName="username"
              useIcon
              icon="human"
              keyboardType="email-address"
              secureTextEntry={false}
            />
            <AppFormField
              placeholder="Enter your password"
              fieldName="password"
              useIcon
              icon="key"
              keyboardType="email-address"
              secureTextEntry={true}
            />
            <View
              style={{
                width: "65.5%",
                gap: 10,
                flexDirection: "row",
                alignItems: "center",
                marginBottom: spacingY._10,
              }}
            >
              <AppFormField
                placeholder="+44"
                fieldName="areacode"
                useIcon
                icon="flag"
                keyboardType="name-phone-pad"
                secureTextEntry={false}
                formFieldStyle={{ width: "50%" }}
              />
              <AppFormField
                placeholder="Phone number"
                fieldName="phone"
                useIcon
                icon="phone"
                keyboardType="name-phone-pad"
                secureTextEntry={false}
                formFieldStyle={{ width: "100%" }}
              />
            </View>

            <AppFormField
              placeholder="Country"
              fieldName="country"
              useIcon
              icon="human"
              keyboardType="email-address"
              secureTextEntry={false}
            />
            <Animated.View style={{ bottom: "0%", marginTop: 10 }}>
              <SubmitButton label="Sign Up" />
            </Animated.View>
          </>
        </AppForm>
      </KeyboardAvoidingView>
    </BaseScreen>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  input: {
    padding: calculateY(10),
    marginBottom: spacingY._5,
    borderRadius: 5,
    borderColor: "#ccc",
    borderWidth: 1,
    backgroundColor: colours.csaGray,
    width: "80%",
    alignSelf: "center",
  },
});
