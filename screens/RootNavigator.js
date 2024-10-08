import React from "react";
import SignInScreen from "./SignInScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreens from "./MainScreens";
import SpiderverseScreens from "./SpiderverseScreens";
import Onboarding1 from "./onboarding1";
import Onboarding2 from "./onboarding2";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Main" component={MainScreens} />
        <Stack.Screen name="SpiderVerse" component={SpiderverseScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
