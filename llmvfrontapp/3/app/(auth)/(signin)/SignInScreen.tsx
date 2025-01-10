import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  Image,
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
import AppForm from "@/forms/AppForm";
import AppFormField from "@/forms/AppFormField";
import { loginValidationSchema } from "@/validation/userAuthValidation";
import SubmitButton from "@/forms/SubmitButton";
import CustomPressable from "@/components/basecomponents/CustomPressable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SignUpScreen = () => {
  const [loginFailed, setLoginFailed] = useState(false);
  const [byEmail, setByEmail] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

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
      console.log("Login failed");
      setLoginFailed(true);
      return;
    }
    return result;
  };

  return (
    <BaseScreen
      gradient
      animateBackground
      animationSpeed={5500}
      gradientColours={colours.gradientColourSets.orangeToPink}
    >
      <Animated.View style={{ bottom: 0 }}>
        {loginFailed && (
          <Text style={{ color: "red", textAlign: "center" }}>
            Invalid email/username or password.
          </Text>
        )}
      </Animated.View>
      <Animated.View style={{ padding: spacingY._20 }}>
        <CustomPressable onPress={() => router.navigate("/(auth)/HomeScreen")}>
          <Text style={{ color: "white" }}>BACK</Text>
        </CustomPressable>
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
        <View style={{ alignItems: "center" }}>
          {/* <Image
            source={require("../../../assets/images/products/item12.png")}
            style={{ width: 200, height: 200 }}
          /> */}
          <Animated.Text
            style={{
              textAlign: "center",
              fontSize: 40,
              fontWeight: "200",
              marginBottom: spacingY._20,
            }}
          >
            Welcome Back!
          </Animated.Text>
        </View>
        <CustomPressable
          onPress={() => setByEmail(!byEmail)}
          style={{ alignSelf: "center" }}
        >
          <View style={{ flexDirection: "row" }}>
            <Animated.Text
              style={{
                fontWeight: 500,
                textDecorationLine: "underline",
                textDecorationStyle: "double",
                color: colours.primary,
              }}
            >
              {" "}
              Sign in with your
              <Animated.Text
                style={{
                  fontWeight: 600,
                  textDecorationLine: "underline",
                  color: colours.primary,
                }}
              >
                {" "}
                {`${byEmail ? "username" : "email"}`} instead
              </Animated.Text>
            </Animated.Text>
          </View>
        </CustomPressable>
        <AppForm
          initialValues={{ email: "", username: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={loginValidationSchema}
        >
          <>
            {/* Username/Email Field */}
            <Animated.View>
              {byEmail ? (
                <AppFormField
                  placeholder="Enter your email"
                  fieldName="email"
                  useIcon
                  icon="email"
                  keyboardType="email-address"
                  secureTextEntry={false}
                />
              ) : (
                <AppFormField
                  placeholder="Enter your username"
                  fieldName="username"
                  useIcon
                  icon="human"
                  keyboardType="default"
                  secureTextEntry={false}
                />
              )}
            </Animated.View>
            {/* End of Username/Email Field */}

            {/* Password Field */}
            <Animated.View
              style={{
                flexDirection: "row",
                alignItems: "center",
                position: "relative",
              }}
            >
              <AppFormField
                placeholder="Enter your password"
                fieldName="password"
                useIcon
                icon="key"
                keyboardType="default"
                secureTextEntry={showPassword ? false : true}
              />
              <Pressable
                style={{
                  position: "absolute",
                  right: 20,
                  bottom: "45%",
                  alignSelf: "center",
                }} //Eye
                onPress={() => setShowPassword(!showPassword)}
              >
                <MaterialCommunityIcons
                  name={showPassword ? "eye" : "eye-off"}
                  size={24}
                  color={showPassword ? "tomato" : "green"}
                />
              </Pressable>
            </Animated.View>
            {/* End of Password Field */}
            <SubmitButton style={{ marginTop: spacingY._10 }} label="Sign In" />
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
