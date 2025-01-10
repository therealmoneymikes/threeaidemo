import { Stack } from "expo-router";



const InductionLayout = () => {
    return (
        <Stack initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" options={{headerShown: false}}/>
            <Stack.Screen name="SignUpScreen" options={{headerShown: false}}/>
        </Stack>
    )
}

export default InductionLayout
