import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "@expo/metro-runtime";
import { registerRootComponent } from "expo";
registerRootComponent(App);

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>Box 1</Text>
      <Text style={styles.boxTwo}>Box 2</Text>
      <Text style={styles.boxThree}>Box 3</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  boxOne: {
    flex: 1,
    backgroundColor: "violet",
    padding: 20,
  },
  boxTwo: {
    flex: 1,
    backgroundColor: "gold",
    padding: 20,
  },
  boxThree: {
    flex: 1,
    backgroundColor: "coral",
    padding: 20,
  },
});
