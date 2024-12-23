import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

import randomImage from "./components/randomImage";
import RandomMessage from "./components/RandomMessage";

export default function App() {
  return (
    <ImageBackground source={randomImage()} style={styles.backgroundImage}>
      <View style={styles.appContainer}>
        <RandomMessage />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  appContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Optional: to add a semi-transparent background
    alignItems: "center",
    justifyContent: "center",
  },
});
