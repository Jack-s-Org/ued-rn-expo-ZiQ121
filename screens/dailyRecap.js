import { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from "react-native";

const DailyRecap = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SpiderVerse", { screen: "Journey" });
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
          Your Personal Daily Hits
        </Text>
        <Image
          source={require("@/assets/image/DailyRecap/daily_playlist.png")}
          style={{ height: 30, width: 30, resizeMode: "cover" }}
        />
      </View>
      <View style={styles.container}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.scrollViewContent}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: "white", size: 12, fontFamily: "Hagrid" }}>
              LVL.7
            </Text>
            <Image
              source={require("@/assets/image/DailyRecap/daily_lvl.png")}
              style={styles.lvl}
            />
            <View style={styles.row}>
              <Text style={styles.font}>PARKER_PB</Text>
              <Image
                source={require("@/assets/image/DailyRecap/daily_owl.png")}
                style={styles.owl}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",

                marginTop: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",

                  marginLeft: 40,
                }}
              >
                <Image
                  source={require("@/assets/image/DailyRecap/daily_trophy.png")}
                  style={{ width: 30, height: 30, resizeMode: "contain" }}
                />
                <Text style={styles.font2}>5</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("@/assets/image/DailyRecap/daily_level.png")}
                  style={{ width: 20, height: 20, resizeMode: "contain" }}
                />
                <Text style={styles.font2}>2540/3000</Text>
              </View>
            </View>
            <View style={{ height: 200 }}>
              <ImageBackground
                source={require("@/assets/image/DailyRecap/daily3.png")}
                style={styles.background}
              >
                <Text
                  style={{
                    fontFamily: "Hagrid",
                    fontSize: 30,
                    color: "#FF1590",
                    height: 35,
                    width: 100,
                    textAlign: "center",
                    marginTop: 30,
                    textShadowColor: "black",
                    textShadowOffset: { width: 2, height: 1 },
                    textShadowRadius: 0,
                  }}
                >
                  01/08
                </Text>
                <Text
                  style={{
                    fontFamily: "Hagrid",
                    fontSize: 20,
                    color: "black",

                    height: 35,
                    textAlign: "center",
                  }}
                >
                  Your Today Picks
                </Text>

                <Text
                  style={{
                    fontFamily: "Independent",
                    fontSize: 18,
                    color: "white",
                    backgroundColor: "#FB7202",
                    textShadowColor: "black",
                    textShadowOffset: { width: 3, height: 1 },
                    textShadowRadius: 0,
                    height: 25,
                    width: 300,
                    textAlign: "center",
                    lineHeight: 28,
                    borderWidth: 2,
                    borderColor: "black",
                    marginTop: -10,
                    marginBottom: 10,
                  }}
                >
                  START TO PLAY MUSIC
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "80%",
                  }}
                >
                  <View
                    style={{
                      height: 180,
                      width: 140,
                      backgroundColor: "#FFD420",
                      borderWidth: 2,
                      borderColor: "black",
                      shadowColor: "black",
                      shadowOpacity: 1,
                      shadowOffset: { width: 3, height: 3 },
                      shadowRadius: 0,
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 8,
                    }}
                  >
                    <Image
                      source={require("@/assets/image/DailyRecap/daily_cover1.png")}
                      style={{
                        width: 100,
                        height: 100,
                      }}
                    />
                    <Text
                      style={{
                        fontFamily: "Independent",
                        fontSize: 24,
                        color: "black",
                        marginTop: 12,
                      }}
                    >
                      Sunflower
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Independent",
                        fontSize: 14,
                        color: "black",
                      }}
                    >
                      Post Malone
                    </Text>
                  </View>
                  <View
                    style={{
                      height: 180,
                      width: 140,
                      backgroundColor: "#FF1590",
                      borderWidth: 2,
                      borderColor: "black",
                      shadowColor: "black",
                      shadowOpacity: 1,
                      shadowOffset: { width: 3, height: 3 },
                      shadowRadius: 0,
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 8,
                    }}
                  >
                    <Image
                      source={require("@/assets/image/DailyRecap/daily_cover2.png")}
                      style={{
                        width: 100,
                        height: 100,
                      }}
                    />
                    <Text
                      style={{
                        fontFamily: "Independent",
                        fontSize: 24,
                        color: "black",
                        marginTop: 12,
                      }}
                    >
                      Way Up
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Independent",
                        fontSize: 14,
                        color: "black",
                      }}
                    >
                      Jaden Smith
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "80%",
                  }}
                >
                  <View
                    style={{
                      height: 180,
                      width: 140,
                      backgroundColor: "#2F5DFF",
                      borderWidth: 2,
                      borderColor: "black",
                      shadowColor: "black",
                      shadowOpacity: 1,
                      shadowOffset: { width: 3, height: 3 },
                      shadowRadius: 0,
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 8,
                    }}
                  >
                    <Image
                      source={require("@/assets/image/DailyRecap/daily_cover4.png")}
                      style={{
                        width: 100,
                        height: 100,
                      }}
                    />
                    <Text
                      style={{
                        fontFamily: "Independent",
                        fontSize: 24,
                        color: "black",
                        marginTop: 12,
                      }}
                    >
                      Invicible
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Independent",
                        fontSize: 14,
                        color: "black",
                      }}
                    >
                      Amine
                    </Text>
                  </View>
                  <View
                    style={{
                      height: 180,
                      width: 140,
                      backgroundColor: "#FB7202",
                      borderWidth: 2,
                      borderColor: "black",
                      shadowColor: "black",
                      shadowOpacity: 1,
                      shadowOffset: { width: 3, height: 3 },
                      shadowRadius: 0,
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 8,
                    }}
                  >
                    <Image
                      source={require("@/assets/image/DailyRecap/daily_cover3.png")}
                      style={{
                        width: 100,
                        height: 100,
                      }}
                    />
                    <Text
                      style={{
                        fontFamily: "Independent",
                        fontSize: 24,
                        color: "black",
                        marginTop: 12,
                      }}
                    >
                      Home
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Independent",
                        fontSize: 14,
                        color: "black",
                      }}
                    >
                      Vince Staples
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </View>
        </ScrollView>
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
  scrollViewContent: {
    paddingBottom: 20,
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
  owl: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginRight: "auto",
  },

  lvl: {
    width: 160,
    height: 160,
    resizeMode: "contain",
    marginTop: 20,
  },

  font: {
    color: "white",
    fontFamily: "Hagrid",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 20,
    fontSize: 28,
    marginLeft: "auto",
    marginRight: 20,
  },
  font2: {
    color: "white",
    fontFamily: "Hagrid",
    justifyContent: "center",
    alignContent: "center",
    fontSize: 16,
    marginLeft: "auto",
    marginHorizontal: 50,
  },
  background: {
    width: 380,
    height: 550,
    resizeMode: "contain",
    marginTop: 40,

    alignItems: "center",
  },
});

export default DailyRecap;
