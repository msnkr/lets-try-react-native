import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e);
  };

  const handlePress = () => {
    alert(text);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInputField}
          placeholder="Add your goal"
          onChangeText={handleChange}
        />
        <Button
          style={styles.buttonItems}
          title="Add Goal"
          onPress={handlePress}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 40,
    flex: 1,
    backgroundColor: "black",
    color: "white",
  },
  textInputContainer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  textInputField: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 12,
    width: "80%",
    color: "white",
  },
  buttonItems: {
    padding: 12,
  },
});
