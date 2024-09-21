import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "./HomeScreen";
import NotificationsScreen from "./NotificationsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import MeScreen from "./MeScreen";
import DiscoverScreen from "./DiscoverScreen";
import AppDrawer from "./AppDrawer";
import SettingsScreen from "./SettingsScreen";
import AddScreen from "./AddScreen";
import createIconSetFromIcoMoon from "@expo/vector-icons/createIconSetFromIcoMoon";
import { useFonts } from "expo-font";
import MusicPageScreen from "./MusicPageScreen";
import VideoTransition from "./VideoPlayback";

// Create a single icon set configuration
const Icon = createIconSetFromIcoMoon(
  require("@/assets/icomoon/move ttf and .json file Here/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

const MainStacks = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = ({ navigation }) => {
  const [unreadCount, setUnreadCount] = useState(3);

  // Load fonts
  const [fontsLoaded] = useFonts({
    IcoMoon: require("@/assets/icomoon/move ttf and .json file Here/icomoon.ttf"), // Ensure this path is correct and file contains all icons
  });

  if (!fontsLoaded) {
    return null; // Optionally render a loading indicator
  }

  return (
    <AppDrawer navigation={navigation}>
      {/* <SafeAreaView
        style={{ height: "100%", headerShown: false, backgroundColor: "black" }}
      > */}
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "black",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="Home" size={size} color={color} />
            ),
            tabBarLabel: "Home",
          }}
          style={{ textcolor: "black" }}
        />

        <Tab.Screen
          name="Explore"
          component={DiscoverScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="search" size={size} color={color} />
            ),
            tabBarLabel: "Explore",
          }}
        />

        <Tab.Screen
          name="Profile"
          component={NotificationsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="profile" size={size} color={color} />
            ),
            tabBarLabel: "Profile",
            tabBarBadge: unreadCount,
          }}
          listeners={{
            tabPress: () => {
              setUnreadCount(null);
            },
          }}
        />
      </Tab.Navigator>
      {/* </SafeAreaView> */}
    </AppDrawer>
  );
};

const Empty = () => null;

const MainScreens = () => {
  return (
    <MainStacks.Navigator
      options={{
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "white",
      }}
    >
      <MainStacks.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Add"
        component={AddScreen}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="MusicPage"
        component={MusicPageScreen}
        options={{
          animation: "fade_from_bottom",
          gestureDirection: "vertical",
          headerShown: false,
        }}
      />

      <MainStacks.Screen
        name="VideoTransition"
        component={VideoTransition}
        options={{ headerShown: false }}
      />
    </MainStacks.Navigator>
  );
};

// Export only one default component
export default MainScreens;
