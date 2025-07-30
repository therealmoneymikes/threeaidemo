import React, { Dispatch, SetStateAction } from "react";
import { View, Text, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useFormikContext } from "formik";
import { transformFileSync } from "@babel/core";

export type ItemsArray = Array<{ label: string; value: string | number }>;
interface AppDropdownFieldProps {
  name: string;
  items: ItemsArray; // Dropdown items
  setItems: Dispatch<SetStateAction<ItemsArray>>;
  placeholder: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  value: any;
  setValue: Dispatch<SetStateAction<any>>;
  multiple?: boolean;
}

const AppDropdownField = ({
  name,
  items,
  setItems,
  placeholder,
  open,
  setOpen,
  value,
  setValue,
  multiple = true,
}: AppDropdownFieldProps) => {
  const { setFieldValue, values, errors, touched } = useFormikContext<any>();

  return (
    <View style={styles.container}>
      <DropDownPicker
        multiple={multiple}
        open={open}
        setOpen={setOpen}
        items={items}
        value={values[name]} // Connects to Formik value
        placeholder={placeholder}
        setValue={(callback) => setFieldValue(name, callback(values[name]))}
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
      />
      {touched[name] && errors[name] && (
        <Text style={styles.error}>{errors[name]?.toString()}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ccc",
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
  },
  error: {
    color: "red",
    fontSize: 12,
  },
});

export default AppDropdownField;
