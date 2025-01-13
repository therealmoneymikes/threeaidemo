import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomPressable from "../basecomponents/CustomPressable";
import colours from "@/config/colours";
import { radius, spacingX, spacingY } from "@/config/spacings";

interface Props {
  onPress: () => void;
  filter: boolean;
}
const SearchBarInput = ({ onPress, filter }: Props) => {
  return (
    <Animated.View style={styles.searchbar}>
      <MaterialCommunityIcons name="magnify" size={24} color="black" />
      <TextInput
        cursorColor="blue"
        placeholder="Search..."
        style={styles.inputField}
      />
      <CustomPressable onPress={onPress}>
        {!filter ? (
          <MaterialCommunityIcons
            name="filter-outline"
            size={26}
            color="black"
          />
        ) : (
          <MaterialCommunityIcons name="filter-menu" size={26} color="black" />
        )}
      </CustomPressable>
    </Animated.View>
  );
};

export default SearchBarInput;

const styles = StyleSheet.create({
  searchbar: {
    backgroundColor: colours.lighterGray,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: spacingY._20,
    marginVertical: spacingY._5,
    paddingHorizontal: spacingX._20,
    padding: spacingY._15,
    borderRadius: radius._15,
    gap: spacingX._10,
  },
  inputField: {
    flex: 1,
    borderRightWidth: 1.5,
    paddingRight: spacingX._15,
  },
});
