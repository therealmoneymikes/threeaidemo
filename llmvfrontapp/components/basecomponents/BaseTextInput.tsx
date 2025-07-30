import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import React from "react";
import Animated from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colours from "@/config/colours";

interface Props {
  onBlur: any;
  placeholder: string;
  placeholderTextColor: string;
  keyboardType: KeyboardTypeOptions;
  secureTextEntry: boolean;
  useIcon: boolean;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  onChangeText: (text: string) => void;
  value: any;
}
const BaseTextInput = ({
  placeholder,
  placeholderTextColor = colours.csaGray,
  onBlur,
  keyboardType,
  secureTextEntry,
  useIcon,
  icon,
  onChangeText,
  value,
  ...props
}: Props) => {
  return (
    <Animated.View style={[styles.container]}>
      {useIcon && (
        <MaterialCommunityIcons
          name={icon}
          size={24}
          color={colours.primary}
          style={{ marginRight: 10 }}
        />
      )}
      <TextInput
        style={{ fontFamily: "Nunito", fontSize: 20 }}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        {...props}
        onBlur={onBlur}
        secureTextEntry={secureTextEntry ?? "default"}
        keyboardType={keyboardType}
        value={value}
      />
    </Animated.View>
  );
};

export default BaseTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
});
