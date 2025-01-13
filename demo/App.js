import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import { useState } from "react";
import "@expo/metro-runtime";

import ShowTodo from "./components/ShowTodo";

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
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Add todo"
          onChangeText={handleChange}
          value={addTodo}
        />
        <Button title="Add" onPress={handlePress} />
      </View>

      <View style={styles.todoContainer}>
        <FlatList
          style={styles.flatListContainer}
          data={todos}
          renderItem={(todo) => {
            return <ShowTodo text={todo} done={handleDelete} />;
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
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderBottomWidth: 2,
    paddingBottom: 60,
    borderBottomColor: "#484141",
  },
  inputText: {
    color: "#484141",
    width: "60%",
    paddingHorizontal: 12,
    borderWidth: 2,
    borderColor: "#484141",
  },
  todoContainer: {
    flex: 6,
    paddingTop: 40,
    paddingHorizontal: 50,
  },
});
