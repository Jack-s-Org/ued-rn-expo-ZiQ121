import React from "react"; // Make sure React is imported
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Leaderboard from "./Leaderboard";
import { useFonts } from "expo-font";
import HomeScreen from "./HomeScreen";

const Stack = createNativeStackNavigator();

const SpiderverseScreens = () => {
  const [fontsLoaded] = useFonts({
    IcoMoon: require("@/assets/icomoon/move ttf and .json file Here/icomoon.ttf"),
  });

  if (!fontsLoaded) {
    return null; // Return null or a loading spinner until the fonts are loaded
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Leaderboard" component={Leaderboard} />
    </Stack.Navigator>
  );
};

export default SpiderverseScreens;
