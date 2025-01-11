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
  const [currentTodo, setCurrentTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (text) => {
    setCurrentTodo(text);
  };

  const handlePress = () => {
    setTodos([...todos, currentTodo]);
  };

  const handleDelete = (index) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo, i) => i !== index);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={{
            width: "60%",
            paddingHorizontal: 12,
            borderWidth: 1,
            borderColor: "#415a77",
            color: "#778da9",
          }}
          onChangeText={handleChange}
          placeholder="Add todo"
        />
        <Button title="Add" onPress={handlePress} />
      </View>
      <ScrollView
        style={styles.goalsContainer}
        showsVerticalScrollIndicator={false}
      >
        {todos.map((todo, index) => (
          <Text
            style={styles.textItem}
            key={index}
            onPress={() => handleDelete(index)}
          >
            {index + 1}: {todo}
          </Text>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    flex: 1,
    backgroundColor: "#0d1b2a",
  },
  textInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#415a77",
  },
  goalsContainer: {
    paddingTop: 20,
    width: "70%",
    alignSelf: "center",
  },
  textItem: {
    fontSize: 18,
    fontWeight: "semibold",
    textTransform: "capitalize",
    paddingVertical: 12,
    color: "#9BAFD9",
  },
});
