import "react";
import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import "@expo/metro-runtime";

const ModalComponent = () => {
  return (
    <View style={styles.textInputContainer}>
      <TextInput placeholder="Add Todo" style={styles.textInputComponent} />
      <Pressable style={styles.backgroundButton}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textInputComponent: {
    border: 2,
  },
  backgroundButton: {
    backgroundColor: "#60696b",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default ModalComponent;
