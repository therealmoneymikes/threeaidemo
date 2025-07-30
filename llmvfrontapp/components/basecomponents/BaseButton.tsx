import {
  Pressable,
  PressableProps,
  RegisteredStyle,
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import BaseText from "./BaseText";
import colours from "@/config/colours";
import { btnHeight, radius } from "@/config/spacings";
import { MaterialIcons } from "@expo/vector-icons";
import { TextStyle } from "react-native";

interface Props {
  btnLabel: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  icon?: boolean;
  textSize?: number;
  fontWeight?: TextStyle["fontWeight"];
}
const AppButton = ({
  btnLabel,
  onPress,
  style,
  icon,
  textSize = 18,
  fontWeight = "500",
}: Props) => {
  return (
    <Pressable onPress={onPress} style={[styles.btnContainer, style]}>
      <BaseText
        style={{
          color: colours.white,
          fontWeight,
          alignItems: "center",
          justifyContent: "center",
        }}
        size={textSize}
      >
        {btnLabel}
      </BaseText>
    </Pressable>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius._30,
    width: "100%",
    height: btnHeight,
    backgroundColor: colours.primary,
  },
});
