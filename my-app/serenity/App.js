import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function App() {
  return (
    <ImageBackground
      source={{
        uri: "https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      }}
      style={styles.backgroundImage}
    >
      <View style={styles.appContainer}>
        <Text>Open up App.js to start working on your app!</Text>
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
