import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import BaseText from "../basecomponents/BaseText";
import colours from "@/config/colours";
import { calculateX, calculateY } from "@/utils/screensizing";
import { spacingY, radius, spacingX } from "@/config/spacings";
const { width } = Dimensions.get("screen");

enum SelectorOptions {
  DESC = "Description",
  SPEC = "Specification",
  REV = "Reviews",
}
const detailsContainerWidth = width - 30;

interface Props {
  selected: string;
  setSelected: (textValue: SelectorOptions) => void;
}
const ProductDetailsSelector = ({ selected, setSelected }: Props) => {
  const [startRange, setStartRange] = useState(0);
  const [endRange, setEndRange] = useState(0);
  const animatedValue = new Animated.Value(0);

  const handleSelect = async (options: SelectorOptions) => {
    const range =
      options === SelectorOptions.DESC
        ? 0
        : options === SelectorOptions.SPEC
        ? detailsContainerWidth * (1 / 3)
        : options === SelectorOptions.REV
        ? detailsContainerWidth * (2 / 3)
        : 0;

    setStartRange(endRange);
    setEndRange(startRange);
    setSelected(options);
  };

  useEffect(() => {
    Animated.spring(animatedValue, {
      toValue: 1,
      friction: 10,
      useNativeDriver: false,
    }).start();
  }, [selected]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [startRange, endRange],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.selectedView,
          {
            transform: [{ translateX }],
          },
        ]}
      />
      <TouchableOpacity
        style={styles.textContainer}
        onPress={() => handleSelect(SelectorOptions.DESC)}
      >
        <BaseText
          size={12}
          style={{
            fontWeight: "500",
            color: selected == "Description" ? colours.white : colours.black,
          }}
        >
          Description
        </BaseText>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.textContainer}
        onPress={() => handleSelect(SelectorOptions.SPEC)}
      >
        <BaseText
          size={12}
          style={{
            fontWeight: "500",
            color: selected == "Specifications" ? colours.white : colours.black,
          }}
        >
          Specifications
        </BaseText>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.textContainer}
        onPress={() => handleSelect(SelectorOptions.REV)}
      >
        <BaseText
          size={12}
          style={{
            fontWeight: "500",
            color: selected == "Reviews" ? colours.white : colours.black,
          }}
        >
          Reviews
        </BaseText>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetailsSelector;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: spacingY._15,
    borderRadius: radius._20,
    overflow: "hidden",
    backgroundColor: colours.accentmid,
    marginTop: spacingY._20,
  },
  selectedView: {
    backgroundColor: colours.primary,
    width: calculateX(detailsContainerWidth / 3) - spacingX._10,
    height: "100%",
    position: "absolute",
    borderRadius: radius._30,
    marginStart: spacingX._3,
  },
  textContainer: {
    flex: 1,
    paddingVertical: calculateY(10),
    alignItems: "center",
  },
});
