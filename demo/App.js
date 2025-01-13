import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
import "@expo/metro-runtime";

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
            return (
              <Text
                onPress={() => handleDelete(todo.index)}
                style={styles.todoItem}
              >
                {todo.index + 1}: {todo.item}
              </Text>
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
    marginTop: 100,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderBottomWidth: 2,
    paddingBottom: 20,
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
  todoItem: {
    backgroundColor: "#484141",
    color: "white",
    paddingLeft: 80,
    fontSize: 22,
    textTransform: "capitalize",
    margin: 4,
    borderRadius: 8,
    padding: 4,
  },
});
