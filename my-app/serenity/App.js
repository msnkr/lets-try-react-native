import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

import RandomImage from "./components/RandomImage";
import RandomMessage from "./components/RandomMessage";

export default function App() {
  return (
    <ImageBackground source={RandomImage()} style={styles.backgroundImage}>
      <View style={styles.appContainer}>
        <RandomMessage />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  appContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Optional: to add a semi-transparent background
    alignItems: "center",
    justifyContent: "center",
  },
});
