import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "@expo/metro-runtime";

import data from "./data.json";

export default function App() {
  console.log(data[0]);
  return (
    <View style={styles.container}>
      <Text>Hello, World!</Text>
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
