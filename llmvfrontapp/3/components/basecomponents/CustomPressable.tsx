import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import React, { ReactNode } from "react";


interface Props {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  onPress: () => void;
}
const CustomPressable = ({ style, children, onPress, ...props }: Props) => {
  return (
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }, style]}
      onPress={onPress}
      {...props}
    >
      {children}
    </Pressable>
  );
};

export default CustomPressable;

const styles = StyleSheet.create({});
