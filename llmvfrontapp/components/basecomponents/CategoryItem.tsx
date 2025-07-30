import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageProps,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { calculateX, calculateY } from "@/utils/screensizing";
import Animated, { FadeInRight } from "react-native-reanimated";
import CustomPressable from "./CustomPressable";
import colours from "@/config/colours";
import { radius, spacingX, spacingY } from "@/config/spacings";
import BaseText from "./BaseText";

interface Item {
  name: string;
  image: ImageSourcePropType;
}
interface Props {
  item: Item;
  index: number;
  keyValue: number;
  onPress: (name: string) => void;
  isSelected: boolean;
}
const CategoryItem = ({
  item,
  index,
  keyValue,
  onPress,
  isSelected,
}: Props) => {
  return (
    <Animated.View
      key={`${index}`}
      style={styles.categoryMain}
      entering={FadeInRight.delay(100).duration(500).damping(10).springify()}
    >
      <CustomPressable
        style={{
          width: "100%",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          alignItems: "center",
        }}
        onPress={() => onPress(item.name)}
      >
        <View
          style={[
            styles.imageContainer,
            {
              borderColor: isSelected ? colours.primary : colours.white,
            },
          ]}
        >
          <Image source={item.image} style={[styles.categoryImage]} />
        </View>

        <BaseText
          size={12}
          style={[
            styles.categoryName,
            { color: isSelected ? colours.primary : colours.black },
          ]}
        >
          {item.name}
        </BaseText>
      </CustomPressable>
    </Animated.View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  categoryMain: {
    alignItems: "center",
    width: calculateX(70),
  },
  imageContainer: {
    height: calculateY(52),
    width: calculateY(52),
    padding: 9,
    marginBottom: spacingY._5,
    borderWidth: calculateY(2),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius._30,
    backgroundColor: colours.lighterGray,
  },
  categoryImage: {
    height: calculateY(52),
    width: calculateY(52),
    borderRadius: 50,
  },
  categoryName: {
    textAlign: "center",
    // fontWeight: "900",
    fontFamily: "CabinSketchRegular",
  },
});
