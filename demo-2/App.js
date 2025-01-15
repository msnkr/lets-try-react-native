import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import "@expo/metro-runtime";

import { useState } from "react";

export default function App() {
  const [addTodo, setAddTodo] = useState([
    "todo1",
    "todo2",
    "todo3",
    "todo1",
    "todo2",
    "todo3",
  ]);
  return (
    <View style={styles.appContainer}>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textInputComponent} placeholder="Add todo" />
        <Button title="Add" />
      </View>
      <View style={styles.todoListContainer}>
        <FlatList
          data={addTodo}
          renderItem={(item) => {
            return <Text style={styles.textItem}>{item.item}</Text>;
          }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: 60,
  },
  textInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    paddingBottom: 50,
  },
  textInputComponent: {
    width: "60%",
  },
  todoListContainer: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  textItem: {
    fontSize: 24,
  },
});
