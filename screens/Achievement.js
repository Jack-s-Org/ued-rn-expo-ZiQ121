import { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Achievements = ({ navigation }) => {
  const [Badge1, setBadge1] = useState(
    require("@/assets/image/Achievements/badge1.png")
  );
  const [Badge2, setBadge2] = useState(
    require("@/assets/image/Achievements/badge2.png")
  );
  const [Badge3, setBadge3] = useState(
    require("@/assets/image/Achievements/badge3.png")
  );
  const [Badge4, setBadge4] = useState(
    require("@/assets/image/Achievements/badge4.png")
  );
  const [Badge5, setBadge5] = useState(
    require("@/assets/image/Achievements/badge5.png")
  );
  const [Badge6, setBadge6] = useState(
    require("@/assets/image/Achievements/badge6.png")
  );

  const handlePressBadge1 = () => {
    setBadge1((prevImage) =>
      prevImage === require("@/assets/image/Achievements/badge1.png")
        ? require("@/assets/image/Achievements/badge1_open.png")
        : require("@/assets/image/Achievements/badge1.png")
    );
  };

  const handlePressBadge2 = () => {
    setBadge2((prevImage) =>
      prevImage === require("@/assets/image/Achievements/badge2.png")
        ? require("@/assets/image/Achievements/badge2_open.png")
        : require("@/assets/image/Achievements/badge2.png")
    );
  };

  const handlePressBadge3 = () => {
    setBadge3((prevImage) =>
      prevImage === require("@/assets/image/Achievements/badge3.png")
        ? require("@/assets/image/Achievements/badge3_open.png")
        : require("@/assets/image/Achievements/badge3.png")
    );
  };

  const handlePressBadge4 = () => {
    setBadge4((prevImage) =>
      prevImage === require("@/assets/image/Achievements/badge4.png")
        ? require("@/assets/image/Achievements/badge4_open.png")
        : require("@/assets/image/Achievements/badge4.png")
    );
  };

  const handlePressBadge5 = () => {
    setBadge5((prevImage) =>
      prevImage === require("@/assets/image/Achievements/badge5.png")
        ? require("@/assets/image/Achievements/badge5_open.png")
        : require("@/assets/image/Achievements/badge5.png")
    );
  };

  const handlePressBadge6 = () => {
    setBadge6((prevImage) =>
      prevImage === require("@/assets/image/Achievements/badge6.png")
        ? require("@/assets/image/Achievements/badge6_open.png")
        : require("@/assets/image/Achievements/badge6.png")
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Main", { screen: "Home" });
          }}
          style={{
            zIndex: 10000,
            height: 70,
            width: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("@/assets/image/LeaderboardPage/cross arrow.png")}
            style={{ height: 40, width: 40, resizeMode: "cover" }}
          />
        </TouchableOpacity>
        <Text
          style={{ color: "white", fontFamily: "Independent", fontSize: 16 }}
        >
          Achievements
        </Text>
        <Image
          source={require("@/assets/image/MusicPlayer/share.png")}
          style={{ height: 50, width: 50, resizeMode: "cover" }}
        />
      </View>
      <ScrollView style={styles.ScrollView}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.fontTitle}>Your Achievements</Text>
          <Text
            style={{
              color: "white",
              fontSize: 12,
              fontFamily: "HagridLight",
              marginTop: 4,
              marginBottom: 12,
            }}
          >
            1 August 2024 , 10:00am
          </Text>
        </View>

        <TouchableOpacity onPress={handlePressBadge1}>
          <Image
            source={Badge1}
            style={[
              styles.buttonImage,
              Badge1 ===
                require("@/assets/image/Achievements/badge1_open.png") &&
                styles.openBadge,
            ]}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePressBadge2}>
          <Image
            source={Badge2}
            style={[
              styles.buttonImage,
              Badge2 ===
                require("@/assets/image/Achievements/badge2_open.png") &&
                styles.openBadge,
            ]}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePressBadge3}>
          <Image
            source={Badge3}
            style={[
              styles.buttonImage,
              Badge3 ===
                require("@/assets/image/Achievements/badge3_open.png") &&
                styles.openBadge,
            ]}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePressBadge4}>
          <Image
            source={Badge4}
            style={[
              styles.buttonImage,
              Badge4 ===
                require("@/assets/image/Achievements/badge4_open.png") &&
                styles.openBadge,
            ]}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePressBadge5}>
          <Image
            source={Badge5}
            style={[
              styles.buttonImage,
              Badge5 ===
                require("@/assets/image/Achievements/badge5_open.png") &&
                styles.openBadge,
            ]}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePressBadge6}>
          <Image
            source={Badge6}
            style={[
              styles.buttonImage,
              Badge6 ===
                require("@/assets/image/Achievements/badge6_open.png") &&
                styles.openBadge,
            ]}
          />
        </TouchableOpacity>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={require("@/assets/image/Achievements/lock.png")}
            style={styles.lock}
          />
          <Text style={styles.font}>Unlock More</Text>
        </View>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          alignItems: "center",
          backgroundColor: "black",
          width: 410,
          height: 60,
          borderWidth: 2,
          borderColor: "orange",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingHorizontal: 20,
            paddingTop: 12,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SpiderVerse", { screen: "Journey" });
            }}
          >
            <Image
              source={require("@/assets/image/nav/nav1.png")}
              style={{ width: 30, height: 30, resizeMode: "cover" }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SpiderVerse", { screen: "Recap" });
            }}
          >
            <Image
              source={require("@/assets/image/nav/nav2.png")}
              style={{ width: 35, height: 30, resizeMode: "cover" }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SpiderVerse", { screen: "Leaderboard" });
            }}
          >
            <Image
              source={require("@/assets/image/nav/nav3.png")}
              style={{ width: 30, height: 30, resizeMode: "cover" }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SpiderVerse", { screen: "Achievements" });
            }}
          >
            <Image
              source={require("@/assets/image/nav/nav4.png")}
              style={{ width: 30, height: 30, resizeMode: "cover" }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  column: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  buttonImage: {
    width: 380,
    height: 80,
    marginHorizontal: 10,
    resizeMode: "contain",
    marginTop: -4,
  },
  openBadge: {
    width: 380,
    height: 380,
    resizeMode: "contain",
  },

  lock: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginTop: 20,
  },

  font: {
    color: "#FDDD3D",
    fontFamily: "Hagrid",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 8,
  },
  fontTitle: {
    color: "#FDDD3D",
    fontFamily: "Independent",

    fontSize: 30,
    marginTop: 8,
  },
});

export default Achievements;
