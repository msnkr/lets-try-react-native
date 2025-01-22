import "react";
import "@expo/metro-runtime";
import { StyleSheet, View, Text, FlatList } from "react-native";

import { use, useState } from "react";

const TodoComponent = () => {
  const [todoArr, setTodoArr] = useState(["todo1", "todo2", "todo3"]);
  return (
    <FlatList
      data={todoArr}
      renderItem={(item) => {
        return (
          <Text style={styles.todoText}>
            {item.index + 1}: {item.item}
          </Text>
        );
      }}
    />
  );
};

export default TodoComponent;

const styles = StyleSheet.create({
  todoText: {
    fontSize: 20,
    textTransform: "capitalize",
    margin: 5,
    padding: 8,
    backgroundColor: "#60696b",
    color: "white",
    borderRadius: 4,
  },
});
