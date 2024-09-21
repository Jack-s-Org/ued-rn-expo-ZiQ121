import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Audio } from "expo-av";

const MusicPlayer = () => {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicImage, setMusicImage] = useState(
    require("@/assets/image/MusicPlayer/play.png")
  );

  // Function to load and play/pause sound
  const handlePlayPause = async () => {
    if (!sound) {
      // Load and play sound if not already loaded
      console.log("Loading Sound");
      const { sound } = await Audio.Sound.createAsync(
        require("@/assets/music/sunflower.mp3")
      );
      setSound(sound);
      console.log("Playing Sound");
      await sound.playAsync();
      setIsPlaying(true);
      setMusicImage(require("@/assets/image/MusicPlayer/PAUSE.png"));
    } else {
      // Toggle play/pause if sound is already loaded
      if (isPlaying) {
        console.log("Pausing Sound");
        await sound.pauseAsync();
        setMusicImage(require("@/assets/image/MusicPlayer/play.png"));
      } else {
        console.log("Playing Sound");
        await sound.playAsync();
        setMusicImage(require("@/assets/image/MusicPlayer/PAUSE.png"));
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Clean up sound when component unmounts
  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          source={require("@/assets/image/MusicPlayer/shuffle.png")}
          style={styles.icons}
        />
        <Image
          source={require("@/assets/image/MusicPlayer/left.png")}
          style={styles.leftRight}
        />
        <TouchableOpacity onPress={handlePlayPause}>
          <Image source={musicImage} style={styles.buttonImage} />
        </TouchableOpacity>
        <Image
          source={require("@/assets/image/MusicPlayer/right.png")}
          style={styles.leftRight}
        />
        <Image
          source={require("@/assets/image/MusicPlayer/repeat.png")}
          style={styles.icons}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 10,
    marginTop: 30,
  },
  buttonImage: {
    height: 70,
    width: 70,
    resizeMode: "cover",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  icons: {
    height: 30,
    width: 30,
    resizeMode: "cover",
  },
  leftRight: {
    height: 60,
    width: 60,
    resizeMode: "cover",
  },
});

export default MusicPlayer;
