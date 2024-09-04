import * as React from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { Video, ResizeMode } from "expo-av";

export default function VideoPlayer() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={{ height: "100%" }}
        // source={{
        //   uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        // }}
        // source={require("@/assets/videos/big_buck_bunny.mp4")}
        // useNativeControls={true}
        useNativeControls={false}
        resizeMode={ResizeMode.cover}
        shouldPlay={true}
        isLooping={false}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View>
      <Text style={{ color: "white" }}>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
});
