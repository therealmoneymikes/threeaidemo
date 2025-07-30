import { Stack } from "expo-router";



const SignInLayout = () => {
    return (
        <Stack initialRouteName="SignInScreen">
            <Stack.Screen name="SignInScreen" options={{headerShown: false}}/>
        </Stack>
    )
}

export default SignInLayout;
