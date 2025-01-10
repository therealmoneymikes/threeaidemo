import {
  RegisteredStyle,
  StyleSheet,
  Text,
  TextStyle,
  View,
  TextProps,
} from "react-native";
import React, { CSSProperties, ReactNode } from "react";
import colours from "@/config/colours";
// import { calculateX, calculateY } from "@/utils/screensizing";

interface Props {
  size?: number;
  alignCenter?: string;
  style?: TextProps["style"];
  children: ReactNode;
  lines?: number;
}
const BaseText = ({
  size,
  lines,
  alignCenter,
  style,
  children,
  ...props
}: Props) => {
  return (
    <Text
      style={[styles.default, style, { fontSize: size ? size : 14 }]}
      numberOfLines={lines}
      adjustsFontSizeToFit
      {...props}
    >
      {children}
    </Text>
  );
};

export default BaseText;

const styles = StyleSheet.create({
  default: {
    color: colours.black,
  },
});
