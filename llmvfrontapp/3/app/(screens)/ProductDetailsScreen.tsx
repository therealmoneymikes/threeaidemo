import {
  Dimensions,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import colours from "@/config/colours";
import {
  useGlobalSearchParams,
  useLocalSearchParams,
  useNavigation,
  usePathname,
  useRouter,
} from "expo-router";
import { radius, spacingX, spacingY } from "@/config/spacings";
import CustomPressable from "@/components/basecomponents/CustomPressable";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Animated, {
  cancelAnimation,
  FadeIn,
  FadeInUp,
  FadeOutDown,
  FadeOutUp,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withReanimatedTimer,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { ScrollView } from "react-native";
import BaseText from "@/components/basecomponents/BaseText";
import { calculateX, calculateY } from "@/utils/screensizing";
import BaseButton from "@/components/basecomponents/BaseButton";
import ProductDetailsSelector from "@/components/basecomponents/ProductDetailsSelector";
import LikeIcon from "@/components/basecomponents/LikeIcon";
import { useDispatch, useSelector } from "react-redux";
import { addItemToFavourite, addItem } from "../statemangement/BasketSlice";
addItemToFavourite;

const { height: SCREEN_HEIGHT } = Dimensions.get("screen");

enum SelectorOptions {
  DESC = "Description",
  SPEC = "Specification",
  REV = "Reviews",
  BLANK = "",
}

const ProductDetails = () => {
  const handleItemSelection = () => {
    // Pass in data via params object
    //Raw path name ProductDetails
  };

  const shakeValue = useSharedValue(0);
  const handleShake = () => {
    shakeValue.value = withRepeat(
      withSequence(
        withTiming(-5, { duration: 500 }),
        withTiming(5, { duration: 500 })
      ),
      0, //-1 for infinite loop, false //yoyo effect = true
      true
    );
  };

  const stopShake = () => {
    cancelAnimation(shakeValue);
    shakeValue.value = 0;
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: shakeValue.value }],
    };
  });
  const itemPath = useGlobalSearchParams();
  const localPath = useLocalSearchParams();
  console.log(itemPath);
  console.log(localPath);
  const router = useRouter();
  const gIconSize = 18;

  const [selected, setSelected] = useState<SelectorOptions>(
    SelectorOptions.DESC
  );
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleAddItem = () => {
    addItem({
      id: Number(itemPath.url),
      name: String(itemPath.name),
      price: Number(itemPath.price),
      category: String(itemPath.category),
      url: Number(itemPath.url),
      quantity: 0,
      isLiked: isFavourite,
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
      isLiked: isFavourite,
    });
  };

  const showBoughtModal = () => {
    setTimeout(() => {
      setShowModal(true);
      setShowModal(false);
    }, 1400);

    setShowModal(false);
  };

  useEffect(() => {
    if (showModal) {
      handleShake();
    } else {
      stopShake();
    }
  });

  return (
    <View style={{ flex: 1, backgroundColor: colours.white }}>
      {showModal && (
        <Animated.View
          entering={FadeInUp.delay(1).duration(100).damping(12)}
          exiting={FadeOutUp.delay(10).duration(100).damping(12)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            backgroundColor: "#37bf7e80",
            position: "absolute",
            zIndex: 100,
            width: 300,
            height: 40,
            alignContent: "center",
            justifyContent: "center",
            top: 70,
            borderRadius: 50,
          }}
        >
          {/* // #37bf7e // #1c553d // #247c54 // #24724c */}
          <BaseText
            style={{
              flexDirection: "row",
              alignSelf: "center",
              alignItems: "center",
              fontWeight: "200",
            }}
            size={29}
          >
            Item Added
          </BaseText>
          <MaterialCommunityIcons
            name="check-circle"
            color="#1c553d"
            size={28}
          />
        </Animated.View>
      )}

      <Animated.View style={styles.header}>
        {/* Go Back */}
        <CustomPressable
          style={styles.iconBackground}
          onPress={() => router.back()}
        >
          <MaterialIcons
            name="arrow-back-ios-new"
            color="black"
            size={gIconSize}
          />
        </CustomPressable>

        <View style={{ flex: 1 }} />
        <Animated.View style={styles.iconBackground}>
          <AntDesign name="sharealt" size={gIconSize} color="black" />
        </Animated.View>
        <Animated.View style={styles.iconBackground}>
          <LikeIcon
            itemId={Number(itemPath.id)}
            size={gIconSize}
            isLiked={isFavourite}
            setIsLiked={() => {
              setIsFavourite(!isFavourite);
              handleAddFavoriteItem();
            }}
          />
        </Animated.View>
      </Animated.View>

      {/* Bottom Section */}
      <Animated.View style={styles.bottomContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: "30%" }}
        >
          <BaseText size={36} style={{ fontWeight: "200" }}>
            {itemPath.name}
          </BaseText>
          <BaseText size={24} style={{ fontWeight: "600" }}>
            £{itemPath.price}
          </BaseText>
          <BaseText size={20} style={{ fontWeight: "200" }}>
            By Michael Roberts
          </BaseText>

          {/* Reviews */}
          <Animated.View style={styles.ratingRow}>
            {/* Rating Badge */}
            <View style={styles.ratingView}>
              <MaterialIcons name="star" size={12} color={colours.white} />
              <BaseText size={12} style={{ color: colours.white }}>
                5.0
              </BaseText>
            </View>
            <BaseText style={{ color: colours.gray }}>320 Reviews</BaseText>
          </Animated.View>
          <ProductDetailsSelector
            selected={selected}
            setSelected={setSelected}
          />
          {selected == "Description" ? (
            <BaseText style={{ color: colours.gray }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </BaseText>
          ) : (
            <BaseText style={{ color: colours.gray }}>
              The art of communication has evolved over centuries, yet the
              essence of conveying ideas remains timeless. Throughout history,
              language has served as a vessel for knowledge, culture, and
              expression. From the ancient scrolls of the scholars to the
              printed manuscripts of the Renaissance, the written word has been
              a cornerstone of human civilization. In the modern era, despite
              the advent of digital media, the fundamental principles of writing
              have endured. Whether through the pages of a well-worn book or the
              pixels on a screen, the power of words
            </BaseText>
          )}
        </ScrollView>

        {/* Details Selector */}
        {/* Add Item*/}
        <View style={styles.buttonContainer}>
          <BaseButton
            style={{ width: "100%", marginTop: 0 }}
            onPress={() => {
              handleAddItem();
              showBoughtModal();
              setShowModal(true);
              console.log("Item added");
              // router.navigate({pathname: "/(screens)/ShoppingCart", params: {...itemPath}})
            }}
            btnLabel={"Add to Cart"}
          />
          <CustomPressable
            onPress={() => {
              router.navigate("/(screens)/ShoppingCartScreen");
            }}
            style={{
              borderRadius: 50,
              backgroundColor: colours.accentmid,
              padding: spacingY._10,
              marginLeft: 10,
            }}
          >
            <Animated.View style={showModal && animatedStyle}>
              <MaterialIcons name="shopping-cart" size={26} />
            </Animated.View>
          </CustomPressable>
        </View>
      </Animated.View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    alignItems: "center",
    alignSelf: "flex-end",
    justifyContent: "center",
    zIndex: 1,
    gap: spacingX._10,
    paddingHorizontal: spacingX._20,
    marginTop: Platform.OS === "android" ? spacingX._15 : SCREEN_HEIGHT * 0.1,
  },
  iconBackground: {
    padding: spacingY._10,
    borderRadius: radius._20,
    backgroundColor: colours.accentlight,
  },
  price: {
    fontWeight: "600",
    marginTop: spacingY._5,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacingX._7,
    marginTop: spacingY._10,
  },
  ratingView: {
    backgroundColor: colours.primary,
    flexDirection: "row",
    alignItems: "center",
    gap: spacingX._5,
    borderRadius: radius._12,
    padding: calculateY(3),
    paddingHorizontal: calculateX(5),
  },
  bottomContainer: {
    flex: 1,
    borderTopLeftRadius: radius._20,
    borderTopRightRadius: radius._20,
    padding: spacingY._15,
    paddingBottom: 0,
    backgroundColor: colours.white,
    marginTop: -spacingY._20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",

    width: "80%",

    position: "absolute",
    bottom: spacingY._20,
    padding: spacingY._10,
    borderRadius: calculateY(40),
  },
  countView: {
    width: "32%",
    borderWidth: 1,
    borderColor: colours.white,
    flexDirection: "row",
    height: calculateY(40),
    borderRadius: radius._20,
    alignItems: "center",
    justifyContent: "space-around",
    marginStart: spacingX._5,
  },
  count: {
    color: colours.white,
    fontWeight: "600",
  },
});
