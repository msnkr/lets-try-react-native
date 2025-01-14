import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import "@expo/metro-runtime";

import data from "./data/fitnessData.json";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Welcome to app</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
