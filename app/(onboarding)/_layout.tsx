import { Stack, router } from "expo-router";

export default function TabLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="welcome"
                options={{
                    headerTitle: "Kisállat hozzáadása",
                    headerTitleStyle: { fontFamily: 'inter-medium', color: '#1E1E2A' }
                }} />
            <Stack.Screen
                name="name"
                options={{
                    headerBackVisible: false,
                    headerTitle: "Kisállat hozzáadása",
                    headerTitleStyle: { fontFamily: 'inter-medium', color: '#1E1E2A' }
                }} />
            <Stack.Screen
                name="breed"
                options={{
                    headerBackVisible: false,
                    headerTitle: "Kisállat hozzáadása",
                    headerTitleStyle: { fontFamily: 'inter-medium', color: '#1E1E2A' }
                }} />
                <Stack.Screen
                name="birthday"
                options={{
                    headerBackVisible: false,
                    headerTitle: "Kisállat hozzáadása",
                    headerTitleStyle: { fontFamily: 'inter-medium', color: '#1E1E2A' }
                }} />
                <Stack.Screen
                name="gender"
                options={{
                    headerBackVisible: false,
                    headerTitle: "Kisállat hozzáadása",
                    headerTitleStyle: { fontFamily: 'inter-medium', color: '#1E1E2A' }
                }} />
        </Stack>
    )

}