import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, Image, View } from "react-native";

const Leaderboard = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Image source={require("@/assets/image/LeaderboardPage/Leaderboard1.png")/>
      <Text style={{ color: "white" }}>Leaderboard</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
});

export default Leaderboard;
