import "@expo/metro-runtime";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={styles.box}>Box 1</Text>
        <Text style={styles.box}>Box 2</Text>
        <Text style={styles.box}>Box 3</Text>
      </View>
      <View style={{ flex: 3 }}>
        <Text style={styles.box}>Box 4</Text>
        <Text style={styles.box}>Box 5</Text>
        <Text style={styles.box}>Box 6</Text>
        <Text style={styles.box}>Box 7</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#f0f",
    padding: 20,
    margin: 10,
    textAlign: "center",
  },
});
