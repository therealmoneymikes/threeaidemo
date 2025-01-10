import { PixelRatio, Dimensions } from "react-native";

//Height and Width of Device Screen
const { height: DEVICE_SCREEN_HEIGHT, width: DEVICE_SCREEN_WIDTH } =
  Dimensions.get("window");

//Largest Device Screen is the Samsung Flipbook
//Modify if something comes that is bigger
const deviceType = DEVICE_SCREEN_WIDTH < 600 ? "phone" : "tablet";
const medianBaseHeight = deviceType === "phone" ? 812 : 1024;
const medianBaseWidth = deviceType === "phone" ? 375 : 768;

const [shorterDimension, longerDimension] =
  DEVICE_SCREEN_WIDTH < DEVICE_SCREEN_HEIGHT
    ? [DEVICE_SCREEN_WIDTH, DEVICE_SCREEN_HEIGHT] //Width is shorter than Height
    : [DEVICE_SCREEN_HEIGHT, DEVICE_SCREEN_WIDTH]; //Height is shorter than the Width

//Normalisation of the X axis of the screen
export const calculateX = (size: number) => {
    return Math.round(
        PixelRatio.roundToNearestPixel(shorterDimension/medianBaseWidth) * size
    )
}
//Normalisation of the Y axis of the screen
export const calculateY = (size: number) => {
    return Math.round(
        PixelRatio.roundToNearestPixel(longerDimension / medianBaseHeight) * size
    )
}