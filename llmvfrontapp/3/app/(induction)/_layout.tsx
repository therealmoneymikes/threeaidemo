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
      <Stack.Screen name="UsersScreen1" options={{ headerShown: false }} />
      <Stack.Screen name="UsersScreen2" options={{ headerShown: false }} />
      <Stack.Screen name="UsersScreen3" options={{ headerShown: false }} />
      <Stack.Screen name="UsersScreen4" options={{ headerShown: false }} />
      <Stack.Screen name="UsersScreen5" options={{ headerShown: false }} />
    </Stack>
  );
};