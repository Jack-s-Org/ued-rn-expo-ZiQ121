import * as React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ImageBackground,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Video, ResizeMode } from "expo-av";

const SignInScreen = ({ navigation }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <SafeAreaView style={styles.container}>
      <Video
        ref={video}
        source={require("@/assets/video/logo.mp4")} // Replace with your video file
        style={styles.logo}
        resizeMode={ResizeMode.CONTAIN}
        isLooping={false}
        shouldPlay
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
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
    width: 300,
    height: 300,
    marginBottom: 40,
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
    color: "black",
  },
});

export default SignInScreen;
