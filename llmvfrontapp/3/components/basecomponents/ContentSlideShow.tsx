import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View,
  Image,
  FlexStyle,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { radius, spacingX, spacingY } from "@/config/spacings";
import { calculateX } from "@/utils/screensizing";
import colours from "@/config/colours";
import BaseText from "./BaseText";

//Globals//
const { width: deviceScreenWidth, height: deviceScreenHeight } =
  Dimensions.get("window");

// For adjusting the slide show screen!
const adjustedWidth = deviceScreenWidth - calculateX(34);

type SliderObject = {
  id?: number;
  body: { image: any; headline?: string; tagline?: string };
};
export interface ISliderObjectArrayProps {
  sliderArray: SliderObject[];
  sliderButtonColour?: string;
  slideViewContainerHeight?: number;
  slideViewContainerWidth?: number;
  slideViewContainerBorderRadius?: number;
  slideViewContainerAlignment?: FlexStyle["alignSelf"];
}
const ContentSlideShow = ({
  sliderArray,
  sliderButtonColour = colours.primary,
  slideViewContainerHeight = 0.2,
  slideViewContainerWidth = adjustedWidth,
  slideViewContainerBorderRadius = radius._20,
  slideViewContainerAlignment = "center",
}: ISliderObjectArrayProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScrollMomentum = (
    scrollEvent: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const index = Math.floor(
      scrollEvent.nativeEvent.contentOffset.x / adjustedWidth
    );

    setCurrentIndex(index);
  };

  const scrollToNext = () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= sliderArray.length) {
      // Reset to the first image in the images array
      nextIndex = 0;
    }
    if (scrollViewRef.current)
      scrollViewRef.current.scrollTo({
        //adjust by x for slide to width of pics
        //Not change the pinks
        x: nextIndex * adjustedWidth,
        animated: true,
      });
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollToNext();
    }, 3500);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View
      style={{
        height: deviceScreenHeight * slideViewContainerHeight,
        width: slideViewContainerWidth,
        borderRadius: slideViewContainerBorderRadius,
        overflow: "hidden",
        marginVertical: spacingY._15,
        alignSelf: slideViewContainerAlignment,
      }}
    >
      {/* Image Tray */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onMomentumScrollEnd={handleScrollMomentum}
        //Detecting when the scroll animation finishes and updates current Index
      >
        {sliderArray.map((item, index) => (
          <View
            key={index}
            style={{
              height: deviceScreenHeight * slideViewContainerHeight,
              width: slideViewContainerWidth,
              borderRadius: slideViewContainerBorderRadius,
              overflow: "hidden",
              marginVertical: spacingY._15,
              alignSelf: slideViewContainerAlignment,
            }}
          >
            <Image key={index} source={item.body.image} style={styles.images} />
            {item.body.headline && item.body.tagline && (
              <View>
                <BaseText>{item.body.headline}</BaseText>
                <BaseText>{item.body.tagline}</BaseText>
              </View>
            )}
          </View>
        ))}
      </ScrollView>

      {/* Slider Button */}
      <View style={styles.indicatorContainer}>
        {sliderArray.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              {
                width: index === currentIndex ? 15 : 8,
                backgroundColor:
                  index === currentIndex
                    ? sliderButtonColour
                    : colours.transparent,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default ContentSlideShow;

const styles = StyleSheet.create({
  container: {
    height: deviceScreenHeight * 0.2,
    width: adjustedWidth,
    borderRadius: radius._20,
    overflow: "hidden",
    marginVertical: spacingY._15,
    alignSelf: "center",
  },
  images: {
    height: "100%",
    resizeMode: "cover",
    width: adjustedWidth,
  },
  indicatorContainer: {
    position: "absolute",
    bottom: spacingY._10,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: radius._6,
    marginHorizontal: spacingX._3,
    borderWidth: 1,
  },
});
