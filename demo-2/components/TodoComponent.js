import "react";
import "@expo/metro-runtime";
import { StyleSheet, Text, FlatList, Pressable } from "react-native";

const TodoComponent = ({ arr, deleteItem }) => {
  return (
    <FlatList
      data={arr}
      renderItem={(item) => {
        return (
          <Pressable>
            <Text
              style={styles.todoText}
              onPress={() => deleteItem(item.index)}
            >
              {item.index + 1}: {item.item}
            </Text>
          </Pressable>
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
