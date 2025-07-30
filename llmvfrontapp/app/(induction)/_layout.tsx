import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const InductionLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="PreInductionScreen"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="UserScreen1" options={{ headerShown: false }} />
      <Stack.Screen name="UserScreen2" options={{ headerShown: false }} />
      <Stack.Screen name="UserScreen3" options={{ headerShown: false }} />
      <Stack.Screen name="UserScreen4" options={{ headerShown: false }} />
      <Stack.Screen name="UserScreen5" options={{ headerShown: false }} />
    </Stack>
  );
};

export default InductionLayout;
