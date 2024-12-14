import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Hello, World!</Text>
      <View>
        <Button onPress={() => alert("Hi")} title="Tap Me!" />
      </View>
      <View>
        <Text style={styles.dummyText}>This is a test</Text>
      </View>
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
  dummyText: {
    padding: 12,
    borderColor: "green",
    borderWidth: 4,
    marginTop: 6,
    marginBottom: 6,
    backgroundColor: "black",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
