import { Stack } from "expo-router";



const InductionLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="SignInScreen" options={{headerShown: false}}/>
        </Stack>
    )
}

export default InductionLayout
