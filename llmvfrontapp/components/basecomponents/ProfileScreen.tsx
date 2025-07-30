import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useState } from "react";
import { Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { useFocusEffect } from "expo-router";
import Animated, { FadeInDown } from "react-native-reanimated";
import CustomPressable from "@/components/basecomponents/CustomPressable";
import { radius, spacingY } from "@/config/spacings";
import BaseText from "@/components/basecomponents/BaseText";
import BaseScreen from "@/components/basecomponents/BaseScreen";
import colours from "@/config/colours";
import { BlurView } from "expo-blur";

const ProfileScreen = () => {
  const [key, setKey] = useState(0);

  useFocusEffect(
    useCallback(() => {
      setKey((prev) => prev + 1);
    }, [])
  );

  interface Props {
    icon: any;
    title: string;
    iconColor: string;
    index: number;
    onPress: () => void;
  }
  const Row = ({ icon, title, iconColor, index, onPress }: Props) => {
    return (
      <CustomPressable onPress={onPress}>
        <Animated.View
          style={{}}
          key={`${index}`}
          entering={FadeInDown.delay(index * 80)
            .duration(200)
            .damping(12)
            .dampingRatio(2)
            .springify()}
        >
          <View
            style={{
              backgroundColor: iconColor,
              padding: spacingY._10,
              borderRadius: radius._10,
            }}
          >
            {icon}
          </View>
          <BaseText size={16} style={{ fontWeight: "600", flex: 1 }}>
            {title}
          </BaseText>
          <MaterialCommunityIcons
            name="chevron-right"
            size={24}
            color="black"
          />
        </Animated.View>
      </CustomPressable>
    );
  };
  return (
    <BaseScreen
      gradient
      gradientColours={[colours.csablack, "Light Orange - hsl(17 65.4% 63.7%)"]}
    >
      <BlurView intensity={100} tint="extraLight" style={{}} />
      <MaterialCommunityIcons
        name="camera-plus"
        size={24}
        color={colours.csablack}
        style={{ alignSelf: "flex-end" }}
      />
    </BaseScreen>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
