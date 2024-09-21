import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  ScrollView,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("VideoTransition");
          }}
        >
          <Image
            source={require("@/assets/image/HomePage/Journey.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Image
          source={require("@/assets/image/HomePage/home2.png")}
          style={styles.home2}
        />
      </ScrollView>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Main", { screen: "MusicPage" });
        }}
        style={styles.MusicPlayer}
      >
        <Image
          source={require("@/assets/image/HomePage/home_musicPlayer.png")}
          style={styles.musicPlayerImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 400,
    height: 400,
    marginTop: -80,
  },

  home2: {
    height: 1200,
    resizeMode: "contain",
    marginTop: -80,
  },
  MusicPlayer: {
    position: "absolute",
    bottom: -68,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  musicPlayerImage: {
    width: 420,
    height: 200,
    resizeMode: "contain",
  },
});

export default HomeScreen;
