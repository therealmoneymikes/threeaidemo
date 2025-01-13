import BaseScreen from "@/components/basecomponents/BaseScreen";
import BaseText from "@/components/basecomponents/BaseText";
import CustomPressable from "@/components/basecomponents/CustomPressable";
import { categories, products, exportSliderImages } from "@/utils/data";
import colours from "@/config/colours";
import { radius, spacingX, spacingY } from "@/config/spacings";
import { MaterialIcons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  Pressable,
} from "react-native";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInLeft,
} from "react-native-reanimated";
const gIconSize = 18;
const data = [
  { id: 1, category: "By Revelant" },
  { id: 2, category: "lowest to highest" },
  { id: 3, category: "highest to lowest" },
];

interface ICategoryObject {
  id: number;
  url: any;
  name: any;
  category: string;
  price: number;
}
export default function Explore() {
  const [useFilter, setUserFilter] = useState<boolean>(false);
  const [filterIndex, setFilterIndex] = useState<number>(0);
  const [selected, setSelected] = useState<string>("All");
  const [contentData, setContentData] = useState<ICategoryObject[]>(products);
  const [itemData, setItemData] = useState<ICategoryObject>();
  const [contentKey, setContentKey] = useState<number>(0);
  const [filterModalVisible, setFilterModalVisible] = useState<boolean>(false);
  const router = useRouter();
  const items = [];
  // ITEMS for favorites

  const selectFilter = (index: number) => {
    setFilterIndex(index);
  };
  const itemPath = useLocalSearchParams();

  const handleCategoryFilter = (category: any) => {
    setSelected(category);
    setContentData([] as ICategoryObject[]);
    setTimeout(() => {
      if (category === "All") {
        setContentData(products);
      } else {
        const filteredData = products.filter(
          (item) => item.category === category
        );
        setContentData(filteredData);
      }
    }, 20);
  };

  // gradientColours={["hsl(27 93% 66%)", "hsl(0 93% 86%)"]}
  //gradientColours={["#0f0f0f", "#1a1a1a"]}
  //hsl(225 93% 54%)
  //hsl(22 93% 66%)
  //Orange Fore - hsl(5 61.5% 58.2%)
  //Light Orange - hsl(17 65.4% 63.7%)
  //Beige - #e7b379
  //CSA Black - #171c1a


  return (
    <BaseScreen
      gradient
      startRangeColour={colours.primary}
      endRangeColour={colours.maroon}
      animateBackground
      animationSpeed={4500}
    >
      {/* Header */}
      <View style={styles.header}>
        {/* Grid Button*/}

        {/* Basket Button */}
        <View
          style={{
            flexDirection: "row",

            justifyContent: "flex-end",
            rowGap: 25,
            width: 100,
          }}
        >
          {/*  To ShoppingCart*/}
          <CustomPressable
            style={[
              {
                backgroundColor: "transparent",
                borderRadius: radius._20,
                padding: spacingY._7,
              },
              { position: "relative" },
            ]}
            onPress={() => router.navigate("/(screens)/ShoppingCart")}
          >
            {items.length > 0 && (
              <View
                style={{
                  borderRadius: 50,
                  borderCurve: "continuous",
                  position: "absolute",
                  backgroundColor: "red",
                  alignContent: "center",
                  justifyContent: "center",
                  width: 15,
                  height: 15,
                  right: -1,
                  top: 2,
                  zIndex: 100,
                }}
              >
                <BaseText style={{ fontWeight: "700", alignSelf: "center" }}>
                  {items.length}
                </BaseText>
              </View>
            )}
            <MaterialIcons name="shopping-cart" color="white" size={26} />
          </CustomPressable>
          {/* To Favorites  */}
          <CustomPressable
            style={[
              {
                backgroundColor: "transparent",
                borderRadius: radius._20,
                padding: spacingY._7,
              },
              { marginLeft: 6, position: "relative" },
            ]}
            onPress={() => router.push("/(screens)/FavouriteScreen")}
          >
            <MaterialCommunityIcons
              name={"heart-outline"}
              size={26}
              color="white"
            />
          </CustomPressable>
          {/* Notification Button  */}
          <CustomPressable
            style={[
              {
                backgroundColor: "transparent",
                borderRadius: radius._20,
                padding: spacingY._7,
              },
              { marginLeft: 6, position: "relative" },
            ]}
            onPress={() => console.log("Navigate to Notifications")}
          >
            <Ionicons name="notifications-outline" size={26} color="white" />
          </CustomPressable>
        </View>
      </View>

      {/* Search Bar */}

      {/* Main Window */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: spacingY._60 }}
        showsVerticalScrollIndicator={false}
      >
        {/*  Image Content Slide Show*/}
        <Animated.View
          entering={FadeIn.delay(10).damping(12).springify().dampingRatio(0.5)}
        >
          
        </Animated.View>

        <Animated.View
          entering={FadeInLeft.delay(10)
            .springify()
            .damping(20)
            .dampingRatio(2)}
          style={styles.headingContainer}
        >
          <BaseText
            size={18}
            style={{ fontWeight: "600", color: colours.white }}
          >
            Get started today
          </BaseText>
          <BaseText style={{ color: colours.white }}>See all</BaseText>
        </Animated.View>

        {/* Categories */}
        {data.length > 0 && (
          <FlatList
            data={contentData}
            keyExtractor={(_, index) => index.toString()}
            contentContainerStyle={{
              gap: spacingX._20,
              paddingHorizontal: spacingX._20,
              paddingTop: spacingY._15,
            }}
            scrollEnabled={false}
            numColumns={2}
            columnWrapperStyle={{ gap: spacingX._20 }}
            renderItem={({ item, index }) => {
              return (
                <Animated.View
                  key={`${contentKey}`}
                  entering={FadeInDown.delay(200 * index)
                    .duration(600)
                    .damping(12)
                    .springify()}
                ></Animated.View>
              );
            }}
          />
        )}
      </ScrollView>

      {/* </BaseScreen> */}
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    padding: spacingY._10,
    paddingHorizontal: spacingX._20,
    justifyContent: "space-between",
  },
  gridIcon: {
    backgroundColor: colours.lightGray,
    borderRadius: radius._20,
    padding: spacingY._7,
  },
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
  categoryFilterList: {
    backgroundColor: colours.gray,
    flexDirection: "column",
    justifyContent: "center",
    zIndex: 2,
    alignItems: "center",
    position: "static",
    height: 50,
    width: 155,
    top: 10,
    left: 250,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: spacingY._15,
    marginVertical: 2,
  },
  categoriesContainer: {
    marginTop: spacingY._15,
    paddingHorizontal: spacingX._15,
  },
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: spacingY._20,
    marginHorizontal: spacingX._15,
  },
});
