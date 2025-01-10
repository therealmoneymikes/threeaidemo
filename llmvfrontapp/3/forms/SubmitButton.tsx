import { ButtonProps, StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";
import BaseButton from "@/components/basecomponents/BaseButton";
import { useFormikContext, FormikValues } from "formik";
import { StyleProp } from "react-native";

interface Props {
  label: string;
  style?: StyleProp<ViewStyle>;
}
const SubmitButton = <T extends FormikValues>({ label, style }: Props) => {
  const { handleSubmit } = useFormikContext<T>();

  return <BaseButton style={style} btnLabel={label} onPress={handleSubmit} />;
};

export default React.memo(SubmitButton);
