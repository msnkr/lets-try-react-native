import "@expo/metro-runtime";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { registerRootComponent } from "expo";
registerRootComponent(App);

export default function App() {
  return (
    <View>
      <View>
        <TextInput placeholder="Enter your name" />
        <Button title="Submit" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
