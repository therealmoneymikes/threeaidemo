import { StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";
import React from "react";
import BaseText from "@/components/basecomponents/BaseText";
import { FormikErrors } from "formik";
import colours from "@/config/colours";

interface Props {
  error: FormikErrors<string> | string;
  visible: boolean;
  textColour?: string;
  style?: StyleProp<TextStyle>;
}
const ErrorMessage = ({ error, visible, textColour = "red", style }: Props) => {
  if (!error || !visible) return null;
  return (
    <BaseText
      style={[
        { color: textColour, fontWeight: 700, textAlign: "center" },
        style,
      ]}
    >
      {error}
    </BaseText>
  );
};

export default ErrorMessage;
