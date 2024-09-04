import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

const HorizontalScrollMode = () => {
  const [fontsLoaded] = useFonts({
    Hagrid: require("@/assets/fonts/hagrid-text-bold.ttf"),
    Independent: require("@/assets/fonts/IndependentDesigner.ttf"),
    HagridLight: require("@/assets/fonts/hagrid-text-light.ttf"),
  });
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 16 }}
      >
        <View style={styles.containerBox}>
          <Text style={styles.descriptionTitle}>For DJs</Text>
        </View>

        <View style={styles.containerBox}>
          <Text style={styles.descriptionTitle}>Collab</Text>
        </View>

        <View style={styles.containerBox}>
          <Text style={styles.descriptionTitle}>Music School</Text>
        </View>

        <View style={styles.containerBox}>
          <Text style={styles.descriptionTitle}>Party</Text>
        </View>
        <View style={styles.containerBox}>
          <Text style={styles.descriptionTitle}>Romance</Text>
        </View>
      </ScrollView>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 16, marginTop: -4 }}
      >
        <View style={styles.containerBox}>
          <Text style={styles.descriptionTitle}>Chilling</Text>
        </View>

        <View style={styles.containerBox}>
          <Text style={styles.descriptionTitle}>Emotional</Text>
        </View>

        <View style={styles.containerBox}>
          <Text style={styles.descriptionTitle}>Workout</Text>
        </View>

        <View style={styles.containerBox}>
          <Text style={styles.descriptionTitle}>Sleep</Text>
        </View>
        <View style={styles.containerBox}>
          <Text style={styles.descriptionTitle}>Focus</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    fontFamily: "Hagrid",
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: "blue",
    padding: -35,
  },

  containerBox: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    width: "auto",
    height: 40,
    paddingLeft: 12,
    paddingRight: 12,
    alignItems: "left",
    margin: 4,
    marginTop: 12,
    backgroundColor: "pink",
    borderRadius: 20,
  },

  descriptionTitle: {
    color: "white",
    marginTop: 10,
    textAlign: "left",
    lineHeight: 16,
    fontFamily: "Hagrid",
    fontSize: 14,
  },
  descriptionBody: {
    color: "white",
    marginTop: 3,
    textAlign: "left",
    fontFamily: "HagridLight",
    fontVariant: "light",
    fontSize: 8,
  },
});

export default HorizontalScrollMode;
