import "react";
import { StyleSheet, Text } from "react-native";

const ShowTodo = ({ text, done }) => {
  return (
    <Text style={styles.todoItem} onPress={() => done(text.index)}>
      {text.index + 1}: {text.item}
    </Text>
  );
};

export default ShowTodo;

const styles = StyleSheet.create({
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
