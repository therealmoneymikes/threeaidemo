import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  useColorScheme,
  View,
} from "react-native";
import React from "react";
import { TextProps } from "../Themed";

interface Props {
  text: string;
  colour?: string;
  fontSize?: number;
  darkModeColour?: string;
  lightModeColour?: string;
  textStyles?: StyleProp<TextStyle>;
}
const BaseText = ({
  fontSize = 12,
  colour,
  darkModeColour = "white",
  lightModeColour = "black",
  text,
  textStyles,
}: Props) => {
  const colourScheme = useColorScheme();
  const defaultColour =
    colour || (colourScheme === "dark" ? darkModeColour : lightModeColour);
  return (
    <Text style={[{ fontSize, color: defaultColour }, textStyles]}>{text}</Text>
  );
};

export default BaseText;
