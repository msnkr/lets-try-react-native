import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import "@expo/metro-runtime";

import data from "./data.json";
const imagePath = "./assets/exercises/";

import SearchComponent from "./components/SearchComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <SearchComponent />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
