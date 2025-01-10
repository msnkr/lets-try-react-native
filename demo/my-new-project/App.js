import "@expo/metro-runtime";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { registerRootComponent } from "expo";
registerRootComponent(App);

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputElement} placeholder="Enter your name" />
        <Button title="Submit" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputElement: {
    borderWidth: 2,
    borderColor: "blue",
    height: 36,
    borderRadius: 5,
    padding: 5,
  },
});
