import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import "@expo/metro-runtime";

import imageArr from "./data/imageData";
import data from "./data/motivationData.json";

export default function App() {
  const RandomQuote = (data) => {
    const newData = data.data.affirmations;
    const randomIndex = Math.floor(Math.random() * newData.length);

    return (
      <View>
        <Text style={styles.quoteItem}>{newData[randomIndex]}</Text>
      </View>
    );
  };

  return (
    <ImageBackground
      source={imageArr[Math.floor(Math.random() * imageArr.length)]}
      style={styles.image}
    >
      <RandomQuote data={data} />
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  quoteItem: {
    color: "white",
    fontSize: 26,
    textAlign: "center",
    paddingHorizontal: 80,
    paddingVertical: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    fontStyle: "italic",
    fontWeight: "semibold",
  },
});
