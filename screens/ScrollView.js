import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

const HorizontalScroll = () => {
  const [fontsLoaded] = useFonts({
    Hagrid: require("@/assets/fonts/hagrid-text-bold.ttf"),
    Independent: require("@/assets/fonts/IndependentDesigner.ttf"),
    HagridLight: require("@/assets/fonts/hagrid-text-light.ttf"),
  });
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.containerBox}>
        <Image
          source={require("@/assets/image/AlbumCover/cover1.png")}
          style={styles.image}
        />
        <Text style={styles.descriptionTitle}>Decades: The Rising 1960s</Text>
        <Text style={styles.descriptionBody}>by Tidal</Text>
        <Text style={styles.descriptionBody}>79 tracks</Text>
      </View>

      <View style={styles.containerBox}>
        <Image
          source={require("@/assets/image/AlbumCover/cover2.png")}
          style={styles.image}
        />
        <Text style={styles.descriptionTitle}>Mandapop Fantasy</Text>
        <Text style={styles.descriptionBody}>by Tidal</Text>
        <Text style={styles.descriptionBody}>101 tracks</Text>
      </View>

      <View style={styles.containerBox}>
        <Image
          source={require("@/assets/image/AlbumCover/cover3.png")}
          style={styles.image}
        />
        <Text style={styles.descriptionTitle}>Chilling and Claming</Text>
        <Text style={styles.descriptionBody}>by Tidal</Text>
        <Text style={styles.descriptionBody}>89 tracks</Text>
      </View>

      <View style={styles.containerBox}>
        <Image
          source={require("@/assets/image/AlbumCover/cover4.png")}
          style={styles.image}
        />
        <Text style={styles.descriptionTitle}>Timeless Pop Classics</Text>
        <Text style={styles.descriptionBody}>by Tidal</Text>
        <Text style={styles.descriptionBody}>92 tracks</Text>
      </View>
      <View style={styles.containerBox}>
        <Image
          source={require("@/assets/image/AlbumCover/cover5.png")}
          style={styles.image}
        />
        <Text style={styles.descriptionTitle}>
          Country Waves: Best New Country
        </Text>
        <Text style={styles.descriptionBody}>by Tidal</Text>
        <Text style={styles.descriptionBody}>120 tracks</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    fontFamily: "Hagrid",
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: "blue",
    padding: -35,
  },

  containerBox: {
    width: 140,
    marginRight: 20,
    height: 200,
    alignItems: "left",
    margin: 10,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 10,
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

export default HorizontalScroll;
