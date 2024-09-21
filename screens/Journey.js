import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  ScrollView,
} from "react-native";

const Journey = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Main", { screen: "Home" });
          }}
          style={styles.backButton}
        >
          <Image
            source={require("@/assets/image/LeaderboardPage/cross arrow.png")}
            style={{ height: 40, width: 40, resizeMode: "cover" }}
          />
        </TouchableOpacity>

        <Text style={styles.headerText}>Journey</Text>

        <Image
          source={require("@/assets/image/Journey/journey_pfp.png")}
          style={{ height: 60, width: 60, resizeMode: "cover" }}
        />
      </View>

      <ScrollView>
        <Image
          source={require("@/assets/image/Journey/journey1.png")}
          style={styles.bannerImage}
        />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SpiderVerse", { screen: "dailyRecap" });
          }}
        >
          <Image
            source={require("@/assets/image/Journey/Journey2.png")}
            style={styles.contentImage}
          />
        </TouchableOpacity>

        <Image
          source={require("@/assets/image/Journey/journey3.png")}
          style={styles.contentImageSmall}
        />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Main", { screen: "MusicPage" });
          }}
        >
          <Image
            source={require("@/assets/image/Journey/journey4.png")}
            style={styles.footerImage}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <Image
          source={require("@/assets/image/Journey/journey5.png")}
          style={styles.contentImage}
        />
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
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  backButton: {
    zIndex: 10000,
    height: 70,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontFamily: "Independent",
    fontSize: 16,
  },
  bannerImage: {
    width: 400,
    height: 100,
    resizeMode: "contain",
  },
  contentImage: {
    width: 400,
    height: 320,
    marginBottom: 20,
    resizeMode: "contain",
  },
  contentImageSmall: {
    width: 400,
    height: 200,
    marginBottom: 10,
    resizeMode: "contain",
    marginLeft: 10,
  },
  footerImage: {
    width: 390,
    height: 60,
    marginBottom: 40,
    resizeMode: "contain",
  },
});

export default Journey;
