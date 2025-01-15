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
        <Button title="Add Todo" />
      </View>
      <View style={styles.todoListContainer}>
        <FlatList
          data={addTodo}
          renderItem={(item) => {
            return (
              <View style={styles.textItemContainer}>
                <Text style={styles.textItem}>
                  {item.index + 1}: {item.item}
                </Text>
              </View>
            );
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
    borderBottomWidth: 2,
    paddingBottom: 50,
    justifyContent: "center",
  },
  textInputComponent: {
    width: "60%",
    borderWidth: 1,
    borderColor: "black",
    paddingLeft: 10,
  },
  todoListContainer: {
    flex: 5,
    paddingTop: 50,
  },
  textItemContainer: {
    backgroundColor: "black",
    marginTop: 12,
  },
  textItem: {
    fontSize: 20,
    textTransform: "capitalize",
    color: "white",
    padding: 12,
    paddingLeft: 50,
  },
});
