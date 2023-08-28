import { Stack } from "expo-router";

export default function TabLayout() {
    return (
        <Stack>
            <Stack.Screen name="welcome" options={{
                headerTitle: "Kisállat hozzáadása",
                headerTitleStyle: {fontFamily:'inter-medium', color:'#1E1E2A' }
            }}></Stack.Screen>
        </Stack>
    )

}