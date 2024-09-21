import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MusicPlayer from "./MusicPlayer";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";

const Stack = createNativeStackNavigator();

const MusicPageScreen = ({ navigation }) => {
  const [HeartImage, setHeartImage] = useState(
    require("@/assets/image/MusicPlayer/heart_unclick.png")
  );

  const handleHeartPress = () => {
    setHeartImage((prevImage) =>
      prevImage === require("@/assets/image/MusicPlayer/heart_unclick.png")
        ? require("@/assets/image/MusicPlayer/heart_clicked.png")
        : require("@/assets/image/MusicPlayer/heart_unclick.png")
    );
  };

  const [isVisible, setIsVisible] = useState(false);

  const toggleView = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            zIndex: 10000,
            height: 70,
            width: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("@/assets/image/MusicPlayer/back arrow.png")}
            style={{ height: 40, width: 40, resizeMode: "cover" }}
          />
        </TouchableOpacity>
        <View style={styles.button1}>
          <Text style={styles.button12Text}>SONG</Text>
        </View>
        <View style={styles.button2}>
          <Text style={styles.button12Text}>VIDEO</Text>
        </View>
        <Image
          source={require("@/assets/image/MusicPlayer/playlist.png")}
          style={{ height: 30, width: 30, resizeMode: "cover" }}
        />
      </View>

      <View>
        <TouchableOpacity style={styles.button} onPress={toggleView}>
          <ImageBackground
            source={require("@/assets/image/MusicPlayer/activity.png")}
            style={styles.activity}
          >
            <Text style={styles.font1}>
              {" "}
              {isVisible ? "" : ""}YOUR ACTIVITY ABOUT THIS SONG
            </Text>
          </ImageBackground>
        </TouchableOpacity>

        {isVisible && (
          <View style={styles.overlay}>
            <Text
              style={{
                fontSize: 48,
                color: "#FFD420",
                fontFamily: "Independent",
              }}
            >
              SUNFLOWER
            </Text>
            <Text
              style={{
                fontSize: 30,
                color: "#FFD420",
                fontFamily: "Independent",
              }}
            >
              POST MALONE
            </Text>
            <Image
              source={require("@/assets/image/MusicPlayer/frequency.png")}
              style={{ resizeMode: "contain", width: "60%", margin: -16 }}
            />
            <View style={styles.column}>
              <View style={styles.rowOverlay}>
                <Text
                  style={{
                    color: "white",
                    marginRight: "auto",
                    fontFamily: "HagridLight",
                    fontSize: 16,
                  }}
                >
                  LISTENING TIME:
                </Text>

                <Text
                  style={{
                    marginLeft: "auto",
                    color: "#FFD420",
                    fontFamily: "Hagrid",
                    fontSize: 16,
                  }}
                >
                  33
                </Text>
              </View>
              <View style={styles.rowOverlay}>
                <Text
                  style={{
                    color: "white",
                    marginRight: "auto",
                    fontFamily: "HagridLight",
                    fontSize: 16,
                  }}
                >
                  1ST LISTEN ON:
                </Text>

                <Text
                  style={{
                    marginLeft: "auto",
                    color: "#FFD420",
                    fontFamily: "Hagrid",
                    fontSize: 16,
                  }}
                >
                  30 JUNE 2022
                </Text>
              </View>
              <View style={styles.rowOverlay}>
                <Text
                  style={{
                    color: "white",
                    marginRight: "auto",
                    fontFamily: "HagridLight",
                    fontSize: 16,
                  }}
                >
                  YOUR RANK:
                </Text>

                <Text
                  style={{
                    marginLeft: "auto",
                    color: "#FFD420",
                    fontFamily: "Hagrid",
                    fontSize: 16,
                  }}
                >
                  1000+
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>

      <Image
        source={require("@/assets/image/MusicPlayer/album_cover.png")}
        style={{
          height: 300,
          width: 300,
          resizeMode: "cover",
          marginTop: 48,
          zIndex: -1,
        }}
      />

      <View style={styles.row}>
        <View style={styles.smallColumn}>
          <Text style={styles.songTitle}>SUNFLOWER</Text>
          <Text style={styles.artistName}>POST MALONE</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("SpiderVerse", { screen: "Leaderboard" })
            }
            style={styles.iconButton}
          >
            <Image
              source={require("@/assets/image/MusicPlayer/journey icon.png")}
              style={styles.buttonImage}
            />
          </TouchableOpacity>
          <Image
            source={require("@/assets/image/MusicPlayer/share.png")}
            style={styles.buttonImage}
          />
          <TouchableOpacity onPress={handleHeartPress}>
            <Image source={HeartImage} style={styles.buttonImage} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.BarBG}>
        <View style={styles.BarColor} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          marginTop: 8,
        }}
      >
        <Text
          style={{
            color: "white",
            paddingHorizontal: 20,
          }}
        >
          0:23
        </Text>
        <Text
          style={{
            color: "white",
            paddingHorizontal: 20,
          }}
        >
          3:18
        </Text>
      </View>

      <MusicPlayer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  rowOverlay: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 4,
  },
  smallColumn: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  button1: {
    backgroundColor: "white",
    height: 32,
    width: 72,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  button2: {
    backgroundColor: "#5A5A5A",
    height: 32,
    width: 72,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  button12Text: {
    fontFamily: "Independent",
    textAlign: "center",
    lineHeight: 24,
  },
  activity: {
    width: 350,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  font1: {
    fontFamily: "Independent",
    fontSize: 18,
  },
  button: {
    height: 30,
    width: 350,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  content: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  TextXL: {
    fontSize: 50,
    color: "#FFD420",
    fontFamily: "Independent",
    alignContent: "center",
  },
  buttonImage: {
    height: 40,
    width: 40,
    marginHorizontal: 10,
    resizeMode: "cover",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "white",
    fontSize: 20,
    marginBottom: 20,
  },
  slider: {
    width: 300,
    height: 40,
  },
  value: {
    color: "white",
    fontSize: 18,
    marginTop: 10,
  },
  songTitle: {
    fontFamily: "Independent",
    fontSize: 20,
    color: "white",
    textAlign: "left",
  },
  artistName: {
    fontFamily: "Independent",
    fontSize: 14,
    color: "white",
    textAlign: "left",
  },
  overlay: {
    position: "absolute",
    top: 30,
    left: 0,
    padding: 20,
    width: 350,
    height: 350,
    backgroundColor: "black",
    borderColor: "#FF208B",
    borderWidth: 3,
    borderRadius: 10,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  BarBG: {
    height: 4,
    width: "90%",
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
    overflow: "hidden",
    marginTop: 50,
  },
  BarColor: {
    height: "100%",
    width: "19%",
    backgroundColor: "#FF8CD1",
  },
});

export default MusicPageScreen;
