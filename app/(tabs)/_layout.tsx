import { Stack, Tabs } from "expo-router";
import colors from "../../assets/colors"
import HomeIcon from "../../assets/icons/home";
import HealthIcon from "../../assets/icons/health";
import DiaryIcon from "../../assets/icons/diary";
import ProfileIcon from "../../assets/icons/profile";
import { TouchableOpacity } from "react-native-gesture-handler";
import PrimaryButton from "../../components/PrimaryButton";

export default function TabLayout() {
    return (
        <Tabs initialRouteName="home">
            <Tabs.Screen name="home"
                options={{
                    tabBarActiveTintColor: colors.light.primary,
                    tabBarInactiveTintColor: colors.light.tabIconDefault,
                    title: "Kezdőlap",
                    tabBarLabelStyle: { fontFamily: 'inter-medium', fontSize: 10},
                    tabBarIcon: () => <HomeIcon />,

                }} />
            <Tabs.Screen name="health"
                options={{
                    tabBarActiveTintColor: colors.light.primary,
                    tabBarInactiveTintColor: colors.light.tabIconDefault,
                    tabBarLabelStyle: {fontFamily: 'inter-medium', fontSize: 10},
                    title: "Egészség",
                    tabBarIcon: () => <HealthIcon />,
                }} />           

            <Tabs.Screen name="diary"
                options={{
                    tabBarActiveTintColor: colors.light.primary,
                    tabBarInactiveTintColor: colors.light.tabIconDefault,
                    tabBarLabelStyle: { fontFamily: 'inter-medium', fontSize: 10},
                    title: "Napló",
                    tabBarIcon: () => <DiaryIcon />
                }} />
            <Tabs.Screen name="profile"
                options={{
                    tabBarActiveTintColor: colors.light.primary,
                    tabBarInactiveTintColor: colors.light.tabIconDefault,
                    tabBarLabelStyle: {fontFamily: 'inter-medium', fontSize: 10},
                    title: "Profil",
                    tabBarIcon: () => <ProfileIcon />
                }} />
        </Tabs>
    )
}