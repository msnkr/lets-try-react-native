import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "@expo/metro-runtime";

import RNFS from "react-native-fs";
const folderPath = RNFS.DocumentDirectoryPath;

export default function App() {
  console.log(folderPath);
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
