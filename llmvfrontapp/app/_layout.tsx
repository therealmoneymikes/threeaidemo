import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { Slot } from "expo-router";
import "../global.css";
import { useColorScheme } from "@/components/useColorScheme";
import { Provider } from "react-redux";
import { store } from "./statemangement/store";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    InterBlack: require("../assets/fonts/Inter-Black.otf"),
    InterBlackItalic: require("../assets/fonts/Inter-BlackItalic.otf"),
    InterBlackBold: require("../assets/fonts/Inter-Bold.otf"),
    InterExtraLight: require("../assets/fonts/Inter-Light-BETA.otf"),
    InterThin: require("../assets/fonts/Inter-Thin-BETA.otf"),
    InterMedium: require("../assets/fonts/Inter-Medium.otf"),
    InterSemi: require("../assets/fonts/Inter-SemiBold.otf"),
    LatoLight: require("../assets/fonts/Lato-Light.ttf"),
    LatoRegular: require("../assets/fonts/Lato-Regular.ttf"),
    LatoThin: require("../assets/fonts/Lato-Thin.ttf"),
    Nunito: require("../assets/fonts/Nunito.ttf"),
    CabinSketchRegular: require("../assets/fonts/CabinSketch-Regular.ttf"),
    CabinSketchBold: require("../assets/fonts/CabinSketch-Bold.ttf"),
    CabinCondensedBold: require("../assets/fonts/CabinCondensed-Bold.ttf"),
    CabinCondensedMedium: require("../assets/fonts/CabinCondensed-Medium.ttf"),
    CabinCondensedRegular: require("../assets/fonts/CabinCondensed-Regular.ttf"),
    CabinCondensedSemiBold: require("../assets/fonts/CabinCondensed-SemiBold.ttf"),
    CabinMedium: require("../assets/fonts/Cabin-Medium.ttf"),
    CabinRegular: require("../assets/fonts/Cabin-Regular.ttf"),
    MuliLight: require("../assets/fonts/Muli-Light.ttf"),
    MuliRegularMuliRegular: require("../assets/fonts/Muli-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  //Theme Provider Error colorScheme?.trim()
  return (
    <Provider store={store}>
      <ThemeProvider
        value={colorScheme?.trim() === "dark" ? DarkTheme : DefaultTheme}
      >
        <Stack>
          <Stack.Screen name="(induction)" options={{ headerShown: false }} />
          <Stack.Screen name="(screens)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        </Stack>
      </ThemeProvider>
    </Provider>
  );
}
