import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack initialRouteName="StartScreen">
      <Stack.Screen name="StartScreen" />
      <Stack.Screen name="HomeScreen" />
      <Stack.Screen name="SignUpScreen" />
      <Stack.Screen name="SignInScreen" />
    </Stack>
  );
};
export default AuthLayout;
