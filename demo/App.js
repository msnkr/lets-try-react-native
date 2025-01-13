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
        />
        <Button title="Add" onPress={handlePress} />
      </View>
      <ScrollView
        style={styles.todoContainer}
        showsHorizontalScrollIndicator={false}
      >
        <View>
          <FlatList
            style={styles.flatListContainer}
            data={todos}
            renderItem={(todo) => {
              return <Text style={styles.todoItem}>{todo.item}</Text>;
            }}
          />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderBottomWidth: 2,
    paddingBottom: 20,
  },
  inputText: {
    width: "60%",
    paddingHorizontal: 12,
    borderWidth: 2,
  },
  todoContainer: {
    flex: 5,
    paddingTop: 40,
  },
  todoItem: {
    backgroundColor: "black",
    color: "white",
    paddingLeft: 80,
    fontSize: 22,
    textTransform: "capitalize",
    margin: 4,
    borderRadius: 8,
    padding: 4,
  },
});
