import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import "@expo/metro-runtime";
import { addInput } from "./components/addInput";

import { use, useState } from "react";

export default function App() {
  const [addTodo, setAddTodo] = useState([
    "todo1",
    "todo2",
    "todo3",
    "todo1",
    "todo2",
    "todo3",
  ]);

  const handleDelete = (index) => {
    setAddTodo((prevTodo) => {
      return prevTodo.filter((item, i) => {
        return i !== index;
      });
    });
  };
  return (
    <View style={styles.appContainer}>
      <addInput />
      <View style={styles.todoListContainer}>
        <FlatList
          data={addTodo}
          renderItem={(item) => {
            return (
              <View style={styles.textItemContainer}>
                <Pressable onPress={() => handleDelete(item.index)}>
                  <Text style={styles.textItem}>
                    {item.index + 1}: {item.item}
                  </Text>
                </Pressable>
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
