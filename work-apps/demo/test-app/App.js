import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

import image from "./assets/1.jpg";

export default function App() {
  return (
    <View style={styles.imageContainer}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.textContainer}>Hello, World!</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    color: "white",
    fontWeight: "bold",
  },
});
