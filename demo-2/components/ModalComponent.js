import "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Modal,
} from "react-native";
import "@expo/metro-runtime";

const ModalComponent = ({ isVisible }) => {
  return (
    <Modal visible={isVisible}>
      <View style={styles.textInputContainer}>
        <TextInput placeholder="Add Todo" style={styles.textInputComponent} />
        <Pressable style={styles.backgroundButton}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
        <Pressable style={styles.backgroundButton}>
          <Text style={styles.buttonText}>Cancel</Text>
        </Pressable>
      </View>
    </Modal>
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
    borderWidth: 2,
    paddingVertical: 4,
    paddingHorizontal: 12,
    fontSize: 18,
    marginHorizontal: 4,
  },
  backgroundButton: {
    backgroundColor: "#60696b",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default ModalComponent;
