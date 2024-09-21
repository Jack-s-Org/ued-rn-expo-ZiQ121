import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

const DiscoverScreen = () => {
  const navigation = useNavigation();
  const [imageUri, setImageUri] = useState(
    require("@/assets/image/ProfilePage2/pfp.png")
  ); // Default image

  const handleProfilePictureClick = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission required",
        "Sorry, we need camera roll permissions to make this work!"
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri); // Update to selected image
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={handleProfilePictureClick}>
          <Image
            source={
              imageUri
                ? { uri: imageUri }
                : require("@/assets/image/ProfilePage2/pfp.png")
            }
            style={styles.Image}
          />
        </TouchableOpacity>
        <View style={{ flexDirection: "column", marginTop: 8 }}>
          <View style={styles.column}>
            <Text style={styles.Titletext}>PARKER_PB</Text>
            <Text style={styles.Bodytext}>@spidermann</Text>
          </View>
          <View style={styles.row}>
            <View style={{ flexDirection: "column", marginTop: 12 }}>
              <Text style={styles.Titletext}>32</Text>
              <Text style={styles.Bodytext}>following</Text>
            </View>
            <View style={{ flexDirection: "column", marginTop: 12 }}>
              <Text style={styles.Titletext}>504</Text>
              <Text style={styles.Bodytext}>followers</Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <View style={{ height: 32 }} />
        <View style={styles.accountRow}>
          <View style={styles.leftSide}>
            <Image
              source={require("@/assets/image/ProfilePage2/MyAccount.png")}
              style={styles.icons}
            />
            <Text style={styles.text}>My Account</Text>
          </View>
          <Image
            source={require("@/assets/image/ProfilePage2/right_arrow.png")}
            style={styles.rightIcon}
          />
        </View>
        <View style={styles.accountRow}>
          <View style={styles.leftSide}>
            <Image
              source={require("@/assets/image/ProfilePage2/Favourite.png")}
              style={styles.icons}
            />
            <Text style={styles.text}>Favourite</Text>
          </View>
          <Image
            source={require("@/assets/image/ProfilePage2/right_arrow.png")}
            style={styles.rightIcon}
          />
        </View>
        <View style={styles.accountRow}>
          <View style={styles.leftSide}>
            <Image
              source={require("@/assets/image/ProfilePage2/Export.png")}
              style={styles.icons}
            />
            <Text style={styles.text}>History</Text>
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
            <Text style={styles.text}>Downloads</Text>
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
            <Text style={styles.text}>Subcriptions</Text>
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
            <Text style={styles.text}>Supports</Text>
          </View>
          <Image
            source={require("@/assets/image/ProfilePage2/right_arrow.png")}
            style={styles.rightIcon}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
    marginTop: -20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  Titletext: {
    fontFamily: "Hagrid",
    fontSize: 32,
    color: "#FFFF",
    textAlign: "center",
  },
  Bodytext: {
    fontFamily: "HagridLight",
    fontSize: 16,
    color: "#FFFF",
    lineHeight: 20,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontFamily: "Independent",
    textAlign: "center",
    marginLeft: 16,
  },
  Image: {
    height: 120,
    width: 120,
    marginRight: 30,
  },
  icons: {
    height: 32,
    width: 32,
  },
});

export default DiscoverScreen;
