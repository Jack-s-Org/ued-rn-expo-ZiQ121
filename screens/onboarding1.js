import React, { useRef } from "react";
import { Text, TouchableOpacity, StyleSheet, View, Image } from "react-native";
import LottieView from "lottie-react-native";
import { RotateView, Arrow } from "./Animation_UI";

export default function Onboarding1({ navigation }) {
  const animation = useRef(null);

  return (
    <View style={styles.container}>
      {/* Lottie Animation */}
      <LottieView
        ref={animation}
        style={{ height: "105%" }}
        source={require("@/assets/lottie/Onboarding1.json")} // Update with your Lottie JSON path
        autoPlay
        loop // Set it to loop
      />

      <TouchableOpacity
        onPress={() => navigation.replace("Onboarding2")}
        style={styles.buttonContainer}
      >
        <Arrow>
          <RotateView />
        </Arrow>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
  },
  button: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  buttonContainer: {
    position: "absolute",
    top: 50,
    left: 20,
  },
});
