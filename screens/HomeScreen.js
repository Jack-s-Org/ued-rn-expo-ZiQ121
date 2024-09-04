import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ImageBackground,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.replace("SpiderVerse", { screen: "Leaderboard" });
        }}
      >
        <Image
          source={require("@/assets/image/HomePage/Journey.png")} // Replace with your logo path
          style={styles.logo}
          resizeMode="contain" // Ensures the logo maintains its aspect ratio
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
});

export default HomeScreen;
