import RootNavigator from "./screens/RootNavigator";
import "./gesture-handler";
import { useFonts } from "expo-font";
import createIconSetFromIcoMoon from "@expo/vector-icons/createIconSetFromIcoMoon";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Image, Text } from "react-native";
import VideoPlayer from "./components/VideoPlayer";

const Icon = createIconSetFromIcoMoon(
  require("@/assets/icomoon/move ttf and .json file Here/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

export default function App() {
  const [fontsLoaded] = useFonts({
    IcoMoon: require("@/assets/icomoon/move ttf and .json file Here/icomoon.ttf"),
    Hagrid: require("@/assets/fonts/hagrid-text-bold.ttf"),
    HagridLight: require("@/assets/fonts/hagrid-text-light.ttf"),
    Independent: require("@/assets/fonts/IndependentDesigner.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ height: "100%", backgroundColor: "black" }}>
        <RootNavigator />

        {/* <Icon name="pacman" size={32} color={"blue"} />
      <Image
        source={require("@/assets/image/icon.png")}
        style={{ height: 32, width: 32 }}
      />
      <Text style={{ fontFamily: "Hagrid" }}>Hello</Text> */}

        {/* <VideoPlayer /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
