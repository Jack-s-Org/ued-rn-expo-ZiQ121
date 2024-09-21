import { useState } from "react";
import { StyleSheet, Text, Image, View, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import createIconSetFromIcoMoon from "@expo/vector-icons/createIconSetFromIcoMoon";
import { useFonts } from "expo-font";
import HomeScreen from "./HomeScreen";
import DiscoverScreen from "./DiscoverScreen";
import NotificationsScreen from "./NotificationsScreen";
import AddScreen from "./AddScreen";
import SettingsScreen from "./SettingsScreen";

// Create a single icon set configuration
const Icon = createIconSetFromIcoMoon(
  require("@/assets/icomoon/move ttf and .json file Here/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

const MainStacks = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  const [fontsLoaded] = useFonts({
    Independent: require("@/assets/fonts/IndependentDesigner.ttf"),
    IcoMoon: require("@/assets/icomoon/move ttf and .json file Here/icomoon.ttf"),
  });

  if (!fontsLoaded) {
    return null; // Optionally render a loading indicator
  }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "black",
        },
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "white",
      }}
    >
      <Tab.Screen
        name=" "
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <Image
              source={require("@/assets/image/HomePage/home1.png")}
              style={{ width: 400, height: 40 }}
              resizeMode="contain"
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <Icon name="Home" size={size} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />

      <Tab.Screen
        name="Explore"
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" size={size} color={color} />
          ),
          tabBarLabel: "Explore",
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontFamily: "Independent",
            fontSize: 20,
          },
        }}
      />
      <Tab.Screen
        name="My Profile"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="profile" size={size} color={color} />
          ),
          tabBarLabel: "My Profile",

          headerTitleAlign: "left",
          headerTitleStyle: {
            fontFamily: "Independent",
            fontSize: 20,
          },

          headerRight: () => (
            <SafeAreaView>
              <View style={styles.row}>
                <Image
                  source={require("@/assets/image/ProfilePage2/recap.png")}
                  style={styles.image}
                />
                <Image
                  source={require("@/assets/image/ProfilePage2/setting.png")}
                  style={styles.image}
                />
              </View>
            </SafeAreaView>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const MainScreens = () => {
  return (
    <MainStacks.Navigator>
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
    </MainStacks.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default MainScreens;
