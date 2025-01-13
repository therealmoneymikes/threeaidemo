import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import { Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { router, useFocusEffect } from "expo-router";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInLeft,
} from "react-native-reanimated";
import CustomPressable from "@/components/basecomponents/CustomPressable";
import { radius, spacingX, spacingY } from "@/config/spacings";
import BaseText from "@/components/basecomponents/BaseText";
import BaseScreen from "@/components/basecomponents/BaseScreen";
import colours from "@/config/colours";
import { BlurView } from "expo-blur";
import { calculateY } from "@/utils/screensizing";
import ProfileScreen from "@/components/basecomponents/ProfileScreen";
import ProfileEditModal from "../modal/ProfileEditModal";
import BaseNoAuthScreen from "../(screens)/BaseNoAuthScreen";

const Profile = () => {
  const [key, setKey] = useState(0);
  const [editImage, setEditImage] = useState<boolean>(false);
  const [profileModal, setProfileModal] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const closeModal = () => setProfileModal(false);
  const openModal = () => setProfileModal(true);

  useFocusEffect(
    useCallback(() => {
      setKey((prev) => prev + 1);
    }, [])
  );

  interface Props {
    icon: any;
    title: string;
    iconColor: string;
    index: number;
    onPress: () => void;
  }
  const Row = ({ icon, title, iconColor, index, onPress }: Props) => {
    return (
      <CustomPressable onPress={onPress}>
        <Animated.View
          style={styles.optionRow}
          key={`${index}`}
          entering={FadeInLeft.delay(index * 20)
            .duration(200)
            .damping(12)
            .dampingRatio(1)
            .springify()}
        >
          <View
            style={{
              backgroundColor: iconColor,
              padding: spacingY._10,
              borderRadius: radius._10,
            }}
          >
            {icon}
          </View>
          <BaseText size={16} style={{ fontWeight: "600", flex: 1 }}>
            {title}
          </BaseText>
          <MaterialCommunityIcons
            name="chevron-right"
            size={24}
            color="black"
          />
        </Animated.View>
      </CustomPressable>
    );
  };

  return (
    <BaseScreen
      style={
        {
          // paddingHorizontal: spacingX._20,
          // backgroundColor: colors.lightPrimary,
        }
      }
      animateBackground
      animationSpeed={3300}
      gradient
      gradientColours={["hsl(17 65.4% 63.7%)", "orange"]}
    >
      {/* Profile Modal  */}
      {!isLoggedIn ? (
        <BaseNoAuthScreen
          headlineImg={require("../../assets/images/products/item4.png")}
          headline="Save your progress"
          tagline="Create a CodeSwitch Profile boost your employability"
        />
      ) : (
        <>
          <Pressable onPress={() => router.navigate("/(tabs)/explore")}>
            <BlurView
              intensity={100}
              tint="extraLight"
              style={[
                {
                  // paddingTop: 0,
                  // padding: spacingY._20,
                  // paddingBottom: "10%",
                  alignSelf: "flex-end",
                  flexWrap: "wrap",
                  padding: 10,
                  overflow: "hidden",
                  borderRadius: radius._30,
                  // flexGrow: 1
                },
              ]}
            >
              <MaterialCommunityIcons
                name="camera-plus"
                size={24}
                color={colours.csablack}
                style={{
                  alignSelf: "flex-start",
                  marginBottom: 2,
                  right: 10,
                  top: 0,
                }}
              />
            </BlurView>
          </Pressable>
          <Animated.View style={styles.firstRow}>
            <Animated.View
              style={{ position: "relative", alignItems: "center" }}
            >
              <Pressable onPress={openModal}>
                <Image
                  style={{
                    width: calculateY(150),
                    height: calculateY(150),
                    borderRadius: calculateY(100),
                    borderWidth: calculateY(1),
                    borderColor: colours.white,
                  }}
                  source={require("@/assets/images/users/andy.jpg")}
                />
              </Pressable>
              {/* {
            <Animated.View
              style={{ backgroundColor: colours.gray, padding: 3, top: 10 }}
            >
              <Text style={{ fontFamily: "Nunito" }}>Change Profile Image</Text>
            </Animated.View>
          } */}
            </Animated.View>
            <Animated.View
              style={{
                marginTop: spacingY._5,
                alignItems: "center",
                gap: spacingY._7,
              }}
            >
              <BaseText size={30} style={{ fontWeight: 600 }}>
                Hey, Michael Roberts
              </BaseText>
              {/* <BaseText size={20} style={{ color: "white", fontWeight: 200 }}>
            michael@dev.com
          </BaseText> */}
            </Animated.View>
          </Animated.View>

          {/* Invite Friends */}
          <Animated.View
            style={{ marginBottom: spacingY._10 }}
            entering={FadeIn.delay(200)
              .duration(200)
              .damping(12)
              .dampingRatio(1)
              .springify()}
          >
            <CustomPressable
              onPress={() => console.log("Invite Friends")}
              style={{
                alignSelf: "center",
                marginBottom: spacingY._10,
                backgroundColor: colours.csaForeground,
                width: "100%",
                borderRadius: 20,
              }}
            >
              <Animated.View
                style={[
                  styles.optionRow,
                  {
                    paddingHorizontal: spacingX._10,
                    alignSelf: "center",
                    width: "100%",
                  },
                ]}
              >
                <View
                  style={{
                    backgroundColor: colours.csablack,
                    padding: spacingY._10,
                    borderRadius: radius._10,
                    marginLeft: spacingX._3,
                  }}
                >
                  <Ionicons name="person-add" size={24} color={"#C60A35"} />
                </View>
                <View style={{ flex: 1, marginRight: spacingX._5 }}>
                  <BaseText size={16} style={{ fontWeight: "600", flex: 1 }}>
                    Invite a friend
                  </BaseText>
                  <BaseText
                    size={12}
                    style={{ fontWeight: "600", flex: 1, color: "white" }}
                  >
                    EARN Real Rewards!
                  </BaseText>
                </View>
                {/* <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color="black"
              style={{ borderWidth: 1 }}
            /> */}
              </Animated.View>
            </CustomPressable>
          </Animated.View>
          {/* End of Invite Friends */}
          {/* Bottom Tabs */}
          <Animated.View style={{ flex: 1, gap: 20 }}>
            <View
              style={{
                backgroundColor: colours.white,
                borderRadius: spacingY._20,
                shadowColor: colours.black,
                shadowOffset: { height: 0, width: 0 },
                shadowOpacity: 0.05,
                shadowRadius: 10,
                padding: spacingY._15,

                // marginBottom: '30%',
              }}
            >
              <Row
                title={"Edit profile"}
                iconColor={"#fbdbe6"}
                icon={<Ionicons name="person" size={24} color={"#eb4b8b"} />}
                index={0}
                onPress={() => console.log("Edit Profile")}
              />
              {/* <View style={styles.line} /> */}
              <Row
                title={"My stats"}
                iconColor={"#dedffd"}
                icon={
                  <Ionicons name="stats-chart" size={24} color={"#5d5be5"} />
                }
                index={1}
                onPress={() => console.log("My Stats")}
              />
              <Row
                title={"Settings"}
                iconColor={"#ffe3ce"}
                icon={<Ionicons name="settings" size={24} color={"#f97113"} />}
                index={2}
                onPress={() => console.log("Settings")}
              />
              {/* <Row
            title={"Invite a friend"}
            iconColor={"#F5E8E4"} // '#E9F8F9' '#176B87'
            icon={<Ionicons name="person-add" size={24} color={"#860A35"} />}
            index={3}
            onPress={() => console.log("Invite Friend")}
          /> */}
            </View>
            <View style={[styles.bottomContainer, { marginBottom: "30%" }]}>
              <Row
                title={"Help"}
                iconColor={"#d1d1d1"}
                icon={
                  <Ionicons
                    name="chatbubble-ellipses"
                    size={24}
                    color={colours.black}
                  />
                }
                index={3}
                onPress={() => console.log("Invite Friend")}
              />
              <Row
                title={"Log out"}
                iconColor={"#d1d1d1"}
                icon={
                  <MaterialCommunityIcons
                    name="logout"
                    size={24}
                    color={colours.black}
                  />
                }
                index={4}
                onPress={() => console.log("Log out")}
              />
            </View>
          </Animated.View>
          <ProfileEditModal
            showModal={profileModal}
            setShowModal={setProfileModal}
          />
        </>
      )}
    </BaseScreen>
  );
};

export default Profile;
const styles = StyleSheet.create({
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacingX._10,
    paddingVertical: spacingY._10,
    paddingRight: spacingX._5,
  },
  bottomContainer: {
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    padding: spacingY._15,
    backgroundColor: colours.white,
    borderRadius: spacingY._20,
    shadowColor: colours.black,
  },
  firstRow: {
    alignItems: "center",
    gap: spacingX._10,
    marginBottom: calculateY(27),
    marginTop: "2%",
  },
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
  text: { fontSize: 16 },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  bottomSheet: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  menuItem: {
    paddingVertical: 15,
    fontSize: 18,
    textAlign: "center",
    color: "#007bff",
  },
});
