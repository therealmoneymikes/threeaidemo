import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import BaseTextInput from "@/components/basecomponents/BaseTextInput";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface FormValues {
  [key: string]: any;
}
interface Props {
  placeholder: string;
  placeholderTextColor?: string;
  fieldName: keyof FormValues;
  keyboardType: KeyboardTypeOptions;
  useIcon: boolean;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  secureTextEntry: boolean;
  errorMessageColour?: string;
  errorMessageTextStyling?: StyleProp<TextStyle>;
  formFieldStyle?: StyleProp<ViewStyle>;
}
const AppFormField = ({
  placeholder,
  placeholderTextColor,
  fieldName,
  useIcon,
  keyboardType,
  icon = "home",
  secureTextEntry,
  errorMessageColour,
  errorMessageTextStyling,
  formFieldStyle,

  ...props
}: Props) => {
  const { setFieldValue, setFieldTouched, errors, touched, values } =
    useFormikContext<FormValues>();

  const showError =
    (errors as FormValues)[fieldName] && (touched as FormValues)[fieldName];
  return (
    <View
      style={[
        { width: "100%", alignContent: "center", flexGrow: 0, height: 95 },
        formFieldStyle,
      ]}
    >
      <BaseTextInput
        placeholder={placeholder}
        placeholderTextColor={"black"}
        onChangeText={(text: string) =>
          setFieldValue(fieldName as string, text)
        }
        onBlur={() => setFieldTouched(fieldName as string)}
        value={values[fieldName]}
        useIcon={useIcon}
        keyboardType={keyboardType}
        icon={useIcon ? icon : "blank"}
        secureTextEntry={false}
        {...props}
      />
      <ErrorMessage
        error={(errors as any)[fieldName]}
        visible={showError}
        textColour={errorMessageColour}
        style={errorMessageTextStyling}
      />
    </View>
  );
};

export default AppFormField;

const styles = StyleSheet.create({});
