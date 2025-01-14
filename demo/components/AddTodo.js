import "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const AddTodo = ({ textChanged, buttonPressed, valueItem }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputText}
        placeholder="Add todo"
        onChangeText={textChanged}
        value={valueItem}
      />
      <Button title="Add" onPress={buttonPressed} />
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
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
});
