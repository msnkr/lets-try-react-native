import "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { useState } from "react";

export default function ModalComponent() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.textInputContainer}>
          <TextInput style={styles.textInputComponent} placeholder="Add todo" />
          <Pressable style={styles.buttonContainer}>
            <Text
              style={[styles.buttonText, { width: 40, textAlign: "center" }]}
            >
              Add
            </Text>
          </Pressable>
          <Pressable style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Cancel</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInputComponent: {
    borderWidth: 1,
    paddingHorizontal: 8,
    width: "50%",
    paddingVertical: 8,
  },
  buttonContainer: {
    backgroundColor: "purple",
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "white",
  },
});
