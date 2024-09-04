import React from "react";
import SignInScreen from "./SignInScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreens from "./MainScreens";
import SpiderverseScreens from "./SpiderverseScreens";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Main" component={MainScreens} />
        <Stack.Screen name="SpiderVerse" component={SpiderverseScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
