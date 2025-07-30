import {
  Dimensions,
  Modal,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import CustomPressable from "@/components/basecomponents/CustomPressable";
import colours from "@/config/colours";
import { calculateX, calculateY } from "@/utils/screensizing";
import { useRouter } from "expo-router";
import { Camera, CameraCapturedPicture } from "expo-camera";
const { height } = Dimensions.get("screen");
interface Props {
  showModal: boolean;
  setShowModal: (op: boolean) => void;
  onPress?: () => void;
  _onRequestClose?: (e: NativeSyntheticEvent<any>) => void;
}
const ProfileEditModal = ({
  showModal,
  setShowModal,
  _onRequestClose,
  onPress,
}: Props) => {
  const router = useRouter();
  //   const openCamera = () => {
  //     router.push("/(screens)/CameraScreen");
  //     setShowModal(false);
  //   };

  //   const openUserMediaAlbum = () => {
  //     router.push("/(screens)/MediaLibraryScreen");
  //     setShowModal(false);
  //   };
  return (
    <Modal
      transparent
      visible={showModal}
      animationType="slide"
      onRequestClose={_onRequestClose}
    >
      <TouchableOpacity
        onPress={() => setShowModal!(false)}
        style={{ backgroundColor: "rgba(0,0,0,0.5)", height: height * 0.25 }}
      />
      <TouchableOpacity
        style={styles.overlay}
        onPress={() => setShowModal(showModal)}
      >
        {/* <View style={styles.bottomSheet} needsOffscreenAlphaCompositing>
          <CustomPressable
            onPress={openCamera}
            style={{ borderBottomColor: colours.csablack }}
          >
            <Text style={styles.menuItem}>Take Photo</Text>
          </CustomPressable>
          <CustomPressable onPress={onPress!}>
            <Text style={styles.menuItem} onPress={openUserMediaAlbum}>
              Upload Photo
            </Text>
          </CustomPressable>
          <CustomPressable onPress={() => setShowModal(false)}>
            <Text
              style={{
                paddingVertical: 15,
                fontSize: 18,
                textAlign: "center",
                color: "red",
              }}
              onPress={onPress}
            >
              Cancel
            </Text>
          </CustomPressable>
        </View> */}
      </TouchableOpacity>
    </Modal>
  );
};

export default ProfileEditModal;

const styles = StyleSheet.create({
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
    backgroundColor: colours.csablack,
    padding: 20,
    borderTopLeftRadius: calculateY(10),
    borderTopRightRadius: calculateY(10),
  },
  menuItem: {
    paddingVertical: 15,
    fontSize: 18,
    textAlign: "center",
    color: colours.gray,
  },
});
