import React, { useRef, useEffect } from "react";
import { Animated, View, Image, StyleSheet, Easing } from "react-native";

const RotateView = ({ children }) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startAnimation = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(rotateAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease),
          }),
          Animated.delay(1000),
          Animated.timing(rotateAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease),
          }),
          Animated.delay(1000),
        ])
      ).start();
    };

    const timer = setTimeout(() => {
      startAnimation();
    }, 500);

    return () => clearTimeout(timer);
  }, [rotateAnim]);

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["45deg", "-45deg"],
  });

  return (
    <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
      {children}
    </Animated.View>
  );
};

const Arrow = () => {
  return (
    <View style={styles.arrowContainer}>
      <RotateView>
        <Image
          source={require("@/assets/image/SignInPage/arrow left.png")}
          style={styles.arrow}
        />
      </RotateView>
    </View>
  );
};

const styles = StyleSheet.create({
  arrow: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  arrowContainer: {
    position: "absolute",
    top: 700,
    left: 320,
  },
  text: {
    color: "white",
    marginTop: 20,
  },
});

export { RotateView, Arrow };
