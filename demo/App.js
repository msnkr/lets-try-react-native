import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import "@expo/metro-runtime";

import ShowTodo from "./components/ShowTodo";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [addTodo, setAddTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleDelete = (index) => {
    setTodos((prev) => {
      return prev.filter((item, i) => {
        return index !== i;
      });
    });
  };

  const handleChange = (e) => {
    setAddTodo(e);
  };

  const handlePress = () => {
    setTodos([...todos, addTodo]);
    setAddTodo("");
  };

  return (
    <View style={styles.container}>
      <AddTodo
        textChanged={handleChange}
        buttonPressed={handlePress}
        valueItem={addTodo}
      />
      <View style={styles.todoContainer}>
        <FlatList
          style={styles.flatListContainer}
          data={todos}
          renderItem={(todo) => {
            return (
              <ShowTodo text={todo} done={handleDelete} valueItem={addTodo} />
            );
          }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
  },

  todoContainer: {
    flex: 6,
    paddingTop: 40,
    paddingHorizontal: 50,
  },
});
