import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Image,
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Leaderboard = ({ navigation }) => {
  const [button1Image, setButton1Image] = useState(
    require("@/assets/image/LeaderboardPage/button1_pressed.png")
  );
  const [button2Image, setButton2Image] = useState(
    require("@/assets/image/LeaderboardPage/button2_normal.png")
  );

  const handlePress = () => {
    setButton1Image((prevImage) =>
      prevImage ===
      require("@/assets/image/LeaderboardPage/button1_pressed.png")
        ? require("@/assets/image/LeaderboardPage/button1_normal.png")
        : require("@/assets/image/LeaderboardPage/button1_pressed.png")
    );
    setButton2Image((prevImage) =>
      prevImage === require("@/assets/image/LeaderboardPage/button2_normal.png")
        ? require("@/assets/image/LeaderboardPage/button2_pressed.png")
        : require("@/assets/image/LeaderboardPage/button2_normal.png")
    );
  };

  const dataSet1 = [
    {
      image0: require("@/assets/image/LeaderboardPage/leaderboard_bg.png"),
      image1: require("@/assets/image/LeaderboardPage/stayc0.png"),
      image2: require("@/assets/image/LeaderboardPage/stayc1.png"),
      text: "STAYC",
      image3: require("@/assets/image/LeaderboardPage/stayc2.png"),
      image4: require("@/assets/image/LeaderboardPage/stayc3.png"),
    },
  ];

  const dataSet2 = [
    {
      image0: require("@/assets/image/LeaderboardPage/leaderboard_bg.png"),
      image1: require("@/assets/image/LeaderboardPage/jon0.png"),
      image2: require("@/assets/image/LeaderboardPage/jon1.png"),
      text: "Jonathan",
      image3: require("@/assets/image/LeaderboardPage/jon2.png"),
      image4: require("@/assets/image/LeaderboardPage/jon3.png"),
    },
  ];
  const dataSet3 = [
    {
      image0: require("@/assets/image/LeaderboardPage/leaderboard_bg.png"),
      image1: require("@/assets/image/LeaderboardPage/miles0.png"),
      image2: require("@/assets/image/LeaderboardPage/miles1.png"),
      text: "Miles",
      image3: require("@/assets/image/LeaderboardPage/miles2.png"),
      image4: require("@/assets/image/LeaderboardPage/miles3.png"),
    },
  ];
  const dataSet4 = [
    {
      image0: require("@/assets/image/LeaderboardPage/leaderboard_bg2.png"),
      image1: require("@/assets/image/LeaderboardPage/spider0.png"),
      image2: require("@/assets/image/LeaderboardPage/spider1.png"),
      text: "Spidorman",
      image3: require("@/assets/image/LeaderboardPage/spider2.png"),
      image4: require("@/assets/image/LeaderboardPage/spider3.png"),
    },
  ];
  const dataSet5 = [
    {
      image0: require("@/assets/image/LeaderboardPage/leaderboard_bg2.png"),
      image1: require("@/assets/image/LeaderboardPage/pb0.png"),
      image2: require("@/assets/image/LeaderboardPage/pb1.png"),
      text: "Parker_PB",
      image3: require("@/assets/image/LeaderboardPage/pb2.png"),
      image4: require("@/assets/image/LeaderboardPage/pb3.png"),
    },
  ];
  const dataSet6 = [
    {
      image0: require("@/assets/image/LeaderboardPage/leaderboard_bg2.png"),
      image1: require("@/assets/image/LeaderboardPage/pool0.png"),
      image2: require("@/assets/image/LeaderboardPage/pool1.png"),
      text: "Deadpool",
      image3: require("@/assets/image/LeaderboardPage/pool2.png"),
      image4: require("@/assets/image/LeaderboardPage/pool3.png"),
    },
  ];
  const dataSet7 = [
    {
      image0: require("@/assets/image/LeaderboardPage/leaderboard_bg2.png"),
      image1: require("@/assets/image/LeaderboardPage/may0.png"),
      image2: require("@/assets/image/LeaderboardPage/may1.png"),
      text: "May",
      image3: require("@/assets/image/LeaderboardPage/may2.png"),
      image4: require("@/assets/image/LeaderboardPage/may3.png"),
    },
  ];

  const combinedDataSet = [
    ...dataSet1,
    ...dataSet2,
    ...dataSet3,
    ...dataSet4,
    ...dataSet5,
    ...dataSet6,
    ...dataSet7,
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
      >
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
                fontSize: 16,
              }}
            >
              Leaderboard
            </Text>
            <Image
              source={require("@/assets/image/LeaderboardPage/tabler_search.png")}
              style={{ height: 30, width: 30, resizeMode: "cover" }}
            />
          </View>
          <Image
            source={require("@/assets/image/LeaderboardPage/Leaderboard1.png")}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={{ marginTop: -70 }}>
            <View style={styles.row}>
              <TouchableOpacity onPress={handlePress}>
                <Image source={button1Image} style={styles.buttonImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={handlePress}>
                <Image source={button2Image} style={styles.buttonImage} />
              </TouchableOpacity>

              <Image
                source={require("@/assets/image/LeaderboardPage/icon_history.png")}
                style={{
                  height: 25,
                  width: 25,
                  resizeMode: "contain",
                  marginLeft: "auto",
                  marginTop: 30,
                }}
              />
            </View>
          </View>

          <View style={styles.rank}>
            {combinedDataSet.map((item, index) => (
              <ImageBackground
                key={index}
                source={item.image0}
                style={styles.rowBackground}
                resizeMode="contain"
              >
                <View style={styles.row}>
                  <View style={styles.leftSide}>
                    <Image
                      source={item.image1}
                      style={styles.leaderboard_image1}
                    />
                    <Image
                      source={item.image2}
                      style={styles.leaderboard_image2}
                    />
                    <Text style={styles.text}>{item.text}</Text>
                    <Image
                      source={item.image3}
                      style={styles.leaderboard_image3}
                    />
                  </View>

                  <Image
                    source={item.image4}
                    style={styles.leaderboard_image4}
                  />
                </View>
              </ImageBackground>
            ))}
          </View>
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
  },
  scrollContent: {
    paddingBottom: 20,
  },
  rowBackground: {
    width: "100%",
    height: 80,
    marginBottom: 10,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  leftSide: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  image: {
    width: 380,
    height: 400,
    resizeMode: "contain",

    marginTop: -40,
  },
  leaderboard_image1: {
    width: 90,
    height: 90,
    resizeMode: "contain",
    marginRight: -20,
    marginTop: 4,
  },
  leaderboard_image2: {
    width: 45,
    height: 50,
    marginRight: 10,
  },
  leaderboard_image3: {
    width: 30,
    height: 25,
    resizeMode: "contain",
    marginLeft: 5,
  },
  leaderboard_image4: {
    width: 100,
    height: 25,
    resizeMode: "contain",
    marginLeft: "auto",
    textAlign: "right",
    alignSelf: "center",
  },
  rank: {
    width: "100%",
    marginTop: 20,
  },
  text: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Independent",
    marginLeft: -4,
    marginTop: 4,
  },

  buttonNormal: {
    height: 40,
    width: "28%",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  buttonPressed: {
    height: 70,
    width: "30%",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  buttonImage: {
    height: 80,
    width: 100,
    alignItems: "center",
    resizeMode: "cover",
  },
});

export default Leaderboard;
