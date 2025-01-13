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
  const [todos, setTodos] = useState(["todo1", "todo2", "todo3"]);

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
      <ScrollView>
        <FlatList
          data={todos}
          renderItem={(todo) => {
            return <Text>{todo.item}</Text>;
          }}
        />
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
  },
  inputText: {
    width: "60%",
    paddingHorizontal: 12,
    borderWidth: 2,
  },
});
