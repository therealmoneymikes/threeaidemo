//@ts-ignore
//@ts-nocheck
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomPressable from "./CustomPressable";
import { router, useLocalSearchParams, useRouter } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import BaseText from "./BaseText";
import { radius, spacingX, spacingY } from "@/config/spacings";
import colours from "@/config/colours";
import Animated from "react-native-reanimated";
import { calculateX, calculateY } from "@/utils/screensizing";
import { useDispatch, useSelector } from "react-redux";
import { addItemToFavourite } from "@/app/statemangement/BasketSlice";
import { RootState } from "@/app/statemangement/store";
import LikeIcon from "./LikeIcon";
const { width, height } = Dimensions.get("screen");

interface Item {
  id: number;
  category: string;
  url: string;
  name: string;
  price: number;
}
interface Props {
  item: Item;
}
const ItemCard = ({ item }: Props) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const router = useRouter();
  const itemPath = useLocalSearchParams();

  const dispatch = useDispatch(); //Get Dispatchers from the shopping basket store
  const items = useSelector((state: RootState) => state.basket.items);

  const handleItemSelection = () => {
    // Pass in data via params object
    //Raw path name ProductDetails
    router.navigate({
      pathname: `/(screens)/ProductDetails`,
      params: { ...item },
    });
  };
  const handleAddFavoriteItem = () => {
    addItemToFavourite({
      id: Number(itemPath.url),
      name: String(itemPath.name),
      price: Number(itemPath.price),
      category: String(itemPath.category),
      url: Number(itemPath.url),
      quantity: 0,
      isLiked: itemPath.isLiked as boolean,
    });
  };

  return (
    <Pressable style={styles.container} onPress={handleItemSelection}>
      <View style={styles.favoriteIcon}>
        <LikeIcon
          itemId={item.id}
          size={20}
          isLiked={isLiked}
          setIsLiked={() => setIsLiked(!isLiked)}
        />
      </View>
      <Animated.Image source={item.url} style={styles.img} />

      <Animated.View>
        <BaseText
          size={14}
          style={{
            fontWeight: "700",
            marginStart: 10,
            fontFamily: "CabinMedium",
          }}
        >
          {item.name}
        </BaseText>
        <BaseText size={12} style={{ fontWeight: "200", marginStart: 10 }}>
          £{item.price.toFixed(2)}
        </BaseText>
      </Animated.View>
    </Pressable>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    width: width / 2.0 - spacingX._30,
    height: height * 0.18,
    backgroundColor: colours.lighterGray,
    borderRadius: radius._12,
    paddingBottom: spacingY._15,
    justifyContent: "space-between",
  },
  favoriteIcon: {
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    position: "absolute",
    right: 5,
    bottom: 12,
    height: calculateY(32),
    width: calculateY(32),

    borderBottomLeftRadius: radius._10,
  },
  title: {
    fontWeight: "600",
    marginStart: spacingX._10,
  },
  img: {
    height: "75%",
    width: "100%",

    marginVertical: 0,
    alignSelf: "flex-start",
    objectFit: "cover",
    borderTopLeftRadius: radius._10,
    borderTopRightRadius: radius._10,
  },
  dotsContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacingX._10,
    paddingTop: spacingY._5,
    gap: spacingX._3,
  },
  dot: {
    borderRadius: radius._12,
    backgroundColor: colours.black,
    height: calculateY(14),
    width: calculateY(14),
  },
});
