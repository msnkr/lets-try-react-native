import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import { useState } from "react";
import "@expo/metro-runtime";

export default function App() {
  const [todos, setTodos] = useState(["todo1", "todo2", "todo3"]);

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={{ width: "60%", paddingHorizontal: 12, borderWidth: 1 }}
          placeholder="Add todo"
        />
        <Button title="Add" />
      </View>
      <ScrollView style={styles.goalsContainer}>
        {todos.map((todo, index) => (
          <Text key={index}>{todo}</Text>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
  },
  textInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  goalsContainer: {
    paddingTop: 20,
  },
});
