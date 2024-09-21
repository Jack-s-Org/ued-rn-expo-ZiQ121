import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import HorizontalScroll from "@/screens/ScrollView.js";
import HorizontalScrollMode from "./HorizontalMoods";

const NotificationsScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Independent: require("@/assets/fonts/IndependentDesigner.ttf"),
  });

  return (
    <View style={styles.container}>
      <ScrollView style={{ paddingHorizontal: 4 }}>
        <Image
          source={require("@/assets/image/ExplorePage/searchBar.png")}
          style={styles.image}
        />

        <View style={styles.row}>
          <Text style={styles.text}>GENRE</Text>
          <Text style={styles.button}>All</Text>
        </View>
        <HorizontalScroll style={styles.test} />
        <View style={styles.row}>
          <Text style={styles.text}>MOODS & ACTIVITIES</Text>
          <Text style={styles.button}>All</Text>
        </View>
        <HorizontalScrollMode style={styles.test} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SpiderVerse", { screen: "Journey" });
          }}
        >
          <Image
            source={require("@/assets/image/Explore/YourJourney.png")}
            style={styles.exploreImage}
          />
        </TouchableOpacity>

        <View>
          <View style={styles.accountRow}>
            <View style={styles.leftSide}>
              <Image
                source={require("@/assets/image/ProfilePage2/Favourite.png")}
                style={styles.icons}
              />
              <Text style={styles.text}>TOP</Text>
            </View>
            <Image
              source={require("@/assets/image/ProfilePage2/right_arrow.png")}
              style={styles.rightIcon}
            />
          </View>

          <View style={styles.accountRow}>
            <View style={styles.leftSide}>
              <Image
                source={require("@/assets/image/ProfilePage2/videos.png")}
                style={styles.icons}
              />
              <Text style={styles.text}>VIDEOS</Text>
            </View>
            <Image
              source={require("@/assets/image/ProfilePage2/right_arrow.png")}
              style={styles.rightIcon}
            />
          </View>
          <View style={styles.accountRow}>
            <View style={styles.leftSide}>
              <Image
                source={require("@/assets/image/ProfilePage2/Downloads.png")}
                style={styles.icons}
              />
              <Text style={styles.text}>HI RES</Text>
            </View>
            <Image
              source={require("@/assets/image/ProfilePage2/right_arrow.png")}
              style={styles.rightIcon}
            />
          </View>
          <View style={styles.accountRow}>
            <View style={styles.leftSide}>
              <Image
                source={require("@/assets/image/ProfilePage2/Subscriptions.png")}
                style={styles.icons}
              />
              <Text style={styles.text}>DOLBY ATMOS</Text>
            </View>
            <Image
              source={require("@/assets/image/ProfilePage2/right_arrow.png")}
              style={styles.rightIcon}
            />
          </View>
          <View style={styles.accountRow}>
            <View style={styles.leftSide}>
              <Image
                source={require("@/assets/image/ProfilePage2/star1.png")}
                style={styles.icons}
              />
              <Text style={styles.text}>TIDAL RISING</Text>
            </View>
            <Image
              source={require("@/assets/image/ProfilePage2/right_arrow.png")}
              style={styles.rightIcon}
            />
          </View>
          <View style={styles.accountRow}>
            <View style={styles.leftSide}>
              <Image
                source={require("@/assets/image/ProfilePage2/Supports.png")}
                style={styles.icons}
              />
              <Text style={styles.text}>STAFF PICKS</Text>
            </View>
            <Image
              source={require("@/assets/image/ProfilePage2/right_arrow.png")}
              style={styles.rightIcon}
            />
          </View>
          <View style={styles.accountRow}>
            <View style={styles.leftSide}>
              <Image
                source={require("@/assets/image/ProfilePage2/collab.png")}
                style={styles.icons}
              />
              <Text style={styles.text}>COLLAB</Text>
            </View>
            <Image
              source={require("@/assets/image/ProfilePage2/right_arrow.png")}
              style={styles.rightIcon}
            />
          </View>
          <View style={{ height: 36 }} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: 4,
  },
  image: {
    width: "100%",
    resizeMode: "contain",
    marginTop: 0,
  },
  text: {
    color: "white",
    fontFamily: "Independent",
    fontSize: 20,
  },
  button: {
    color: "white",
    fontFamily: "Independent",
    fontSize: 16,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: 60,
    height: 30,
    borderRadius: 15,
    textAlign: "center",
    lineHeight: 30,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10, // Added margin for vertical spacing
  },
  test: {
    borderWidth: 1,
    borderColor: "blue",
  },
  exploreImage: {
    width: "100%",
    resizeMode: "contain",
    marginTop: 10, // Added margin for spacing from previous content
  },
  rightIcon: {
    height: 32,
    width: 32,
    marginLeft: "auto",
  },
  accountRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
    marginTop: 12,
  },
  leftSide: {
    flexDirection: "row",
    alignItems: "center",
  },
  icons: {
    height: 32,
    width: 32,
    marginRight: 8,
  },
});

export default NotificationsScreen;
