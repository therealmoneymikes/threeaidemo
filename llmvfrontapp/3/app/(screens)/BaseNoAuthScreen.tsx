import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomPressable from "@/components/basecomponents/CustomPressable";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { SymbolView } from "expo-symbols";
import AppButton from "@/components/basecomponents/BaseButton";
import colours from "@/config/colours";
import { radius, btnHeight, spacingY } from "@/config/spacings";
import { calculateY } from "@/utils/screensizing";
import { ThemedText } from "@/components/ThemedText";
import { router } from "expo-router";

interface IBaseNoAuthScreenProps {
  headlineImg: number;
  headline: string;
  tagline: string;
  headlineColour?: string;
  taglineColour?: string;
}
const BaseNoAuthScreen = ({
  headlineImg,
  headline,
  tagline,
  headlineColour = colours.primary,
  taglineColour = colours.white,
}: IBaseNoAuthScreenProps) => {
  return (
    <View style={{ padding: spacingY._15, flex: 1 }}>
      <Pressable
        style={{ left: 0 }}
        onPress={() => router.replace("/(tabs)/chatbot")}
      >
        <Text
          style={{
            fontWeight: "800",
            color: "whitesmoke",
            alignSelf: "flex-end",
            fontSize: 16,
          }}
        >
          LOG IN
        </Text>
      </Pressable>

      {/* Center Image */}
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          flex: 1,
        }}
      >
        <Image source={headlineImg} style={{ width: 200, height: 200 }} />
        <Text
          style={{ fontWeight: "bold", fontSize: 20, color: headlineColour }}
        >
          {headline}
        </Text>
        <Text style={{ color: taglineColour }}>{tagline}</Text>
      </View>
      {/* Sign Up Button Sections  */}
      <View style={{ gap: 10, bottom: "10%" }}>
        <AppButton
          textSize={16}
          fontWeight={"bold"}
          style={{ borderRadius: 10, borderWidth: 3, borderColor: "white" }}
          btnLabel="SIGN UP WITH EMAIL"
          onPress={() => router.navigate("/(tabs)/explore")}
        />

        <CustomPressable
          onPress={() => console.log("Main")}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: radius._10,
            width: "100%",
            height: btnHeight,
            backgroundColor: colours.white,
            gap: 3,
          }}
        >
          <SymbolView
            name="apple.logo"
            size={16}
            shouldRasterizeIOS
            style={{ aspectRatio: 0.8, marginBottom: calculateY(1) }}
            fallback={<MaterialIcons name="apple" size={24} color="black" />}
          />
          <Text style={{ fontSize: 20, fontWeight: "200" }}>
            Sign up with Apple
          </Text>
        </CustomPressable>

        <ThemedText
          style={{
            textAlign: "center",
            fontWeight: "500",
            fontSize: 12,
            lineHeight: 17,
          }}
        >
          By signing up, you accept our Terms of Service{"\n"}
          You can delete your account in your profile settings
        </ThemedText>
      </View>
      {/* End of Sign Up Button Sections  */}
    </View>
  );
};

export default BaseNoAuthScreen;

const styles = StyleSheet.create({});
