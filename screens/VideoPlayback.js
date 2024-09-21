import React, { useRef } from "react";
import { View, StyleSheet } from "react-native";
import { Video } from "expo-av";

const VideoTransition = ({ navigation }) => {
  const videoRef = useRef(null);

  const onPlaybackStatusUpdate = (status) => {
    if (status.didJustFinish) {
      navigation.replace("SpiderVerse", { screen: "Journey" }); // Use replace instead of navigate
    }
  };

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={require("@/assets/video/lightning_3.mp4")}
        style={styles.video}
        resizeMode="cover"
        shouldPlay
        isLooping={false}
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  video: {
    width: "100%",
    height: "100%",
  },
});

export default VideoTransition;
