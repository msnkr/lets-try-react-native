import "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const addInput = () => {
  return (
    <View style={styles.textInputContainer}>
      <TextInput style={styles.textInputComponent} placeholder="Add todo" />
      <Button title="Add Todo" />
    </View>
  );
};

export default addInput;

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: "row",
    borderBottomWidth: 2,
    paddingBottom: 50,
    justifyContent: "center",
  },
  textInputComponent: {
    width: "60%",
    borderWidth: 1,
    borderColor: "black",
    paddingLeft: 10,
  },
});
