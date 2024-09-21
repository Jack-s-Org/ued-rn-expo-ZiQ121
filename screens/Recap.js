import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  ScrollView,
} from "react-native";

const Recap = ({ navigation }) => {
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
          style={{
            color: "white",
            fontFamily: "Independent",
            fontSize: 20,
          }}
        >
          Recap
        </Text>
        <Image
          source={require("@/assets/image/Recap/recap_share.png")}
          style={{ height: 30, width: 30, resizeMode: "cover" }}
        />
      </View>
      <ScrollView>
        <Image
          source={require("@/assets/image/Recap/recap_all.png")}
          style={{
            width: 400,
            height: 1000,
            marginTop: -80,
            resizeMode: "contain",
          }}
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
});

export default Recap;
