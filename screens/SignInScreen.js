import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ImageBackground,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignInScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("@/assets/image/SignInPage/Tidal_Logo.png")} // Replace with your logo path
        style={styles.logo}
        resizeMode="contain" // Ensures the logo maintains its aspect ratio
      />
      <Text style={styles.TitleText}>WELCOME TO TIDAL</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          navigation.replace("Main", { screen: "Home" });
        }}
      >
        <ImageBackground
          source={require("@/assets/image/SignInPage/SignIn_BUTTON_BG.png")}
          style={styles.buttonBackground}
          imageStyle={{ borderRadius: 18 }}
        >
          <Text style={styles.buttonText}>Let's Start</Text>
        </ImageBackground>
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
  logo: {
    width: 200,
    height: 200,
    marginBottom: 100,
  },
  TitleText: {
    fontFamily: "Independent",
    fontSize: 32,
    color: "#FFF",
    marginBottom: 20,
  },
  buttonContainer: {
    borderRadius: 20,
    width: 250,
    borderColor: "#FF00CF",
    borderWidth: 2,
  },
  buttonBackground: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  buttonText: {
    fontFamily: "Hagrid",
    fontSize: 18,
    color: "#FFF",
  },
});

export default SignInScreen;
