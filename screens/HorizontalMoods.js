import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const HorizontalScrollMode = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handlePress = (key) => {
    setActiveButton(activeButton === key ? null : key);
  };

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 16 }}
      >
        {["For DJs", "Collab", "Music School", "Party", "Romance"].map(
          (text, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.containerBox,
                {
                  backgroundColor:
                    activeButton === index ? "#A2A2A2" : "#4A4A4A",
                },
              ]}
              onPress={() => handlePress(index)}
            >
              <Text style={styles.descriptionTitle}>{text}</Text>
            </TouchableOpacity>
          )
        )}
      </ScrollView>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 16, marginTop: -4 }}
      >
        {["Chilling", "Emotional", "Workout", "Sleep", "Focus"].map(
          (text, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.containerBox,
                {
                  backgroundColor:
                    activeButton === index + 5 ? "#A2A2A2" : "#4A4A4A",
                },
              ]}
              onPress={() => handlePress(index + 5)}
            >
              <Text style={styles.descriptionTitle}>{text}</Text>
            </TouchableOpacity>
          )
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerBox: {
    display: "flex",
    flexDirection: "row",
    width: "auto",
    height: 40,
    paddingLeft: 12,
    paddingRight: 12,
    alignItems: "center",
    margin: 4,
    marginTop: 8,
    borderRadius: 20,
  },
  descriptionTitle: {
    fontFamily: "Independent",
    color: "white",
    marginTop: 4,
    textAlign: "left",
    lineHeight: 16,
    fontSize: 14,
  },
});

export default HorizontalScrollMode;
