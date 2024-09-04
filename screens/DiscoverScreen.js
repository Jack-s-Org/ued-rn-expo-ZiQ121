import React from "react";
import { StyleSheet, Text, Image, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import HorizontalScroll from "@/screens/ScrollView.js";
import HorizontalScrollMode from "./HorizontalMoods";

const NotificationsScreen = () => {
  const [fontsLoaded] = useFonts({
    Independent: require("@/assets/fonts/IndependentDesigner.ttf"),
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
        <Image
          source={require("@/assets/image/Explore/YourJourney.png")}
          style={styles.exploreImage}
        />
      </ScrollView>
    </SafeAreaView>
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
    marginTop: -50,
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
});

export default NotificationsScreen;
