import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import "@expo/metro-runtime";

import image from "./assets/1.jpg";
import data from "./data/motivationData.json";

export default function App() {
  const RandomQuote = (data) => {
    const newData = data.data.quotes;
    const randomIndex = Math.floor(Math.random() * newData.length);

    return (
      <View>
        <Text style={styles.quoteItem}>"{newData[randomIndex].quote}"</Text>
        <Text style={styles.quoteItem}>{newData[randomIndex].author}</Text>
      </View>
    );
  };

  return (
    <ImageBackground source={image} style={styles.image}>
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
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    fontStyle: "italic",
  },
});
