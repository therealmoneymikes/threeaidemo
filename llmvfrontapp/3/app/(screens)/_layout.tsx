import { Stack } from "expo-router";

const ScreensLayout = () => {
  <Stack>
    <Stack.Screen name="FavoriteScreen" options={{ headerShown: false }} />
    <Stack.Screen
      name="ProductDetailsScreen"
      options={{ headerShown: false }}
    />
    <Stack.Screen name="ShoppingCartScreen" options={{ headerShown: false }} />
  </Stack>;
};

export default ScreensLayout;
