import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [arr, setArr] = useState(["apple", "tea", "milk", "coffee"]);

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
        {arr.map((item, index) => (
          <Text
            key={index}
            style={{
              color: "#F0FFCE",
              textTransform: "capitalize",
              marginTop: 5,
            }}
          >
            {item}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 40,
    flex: 1,
    backgroundColor: "#1B1B1E",
    color: "#F0FFCE",
  },
  textInputContainer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  textInputField: {
    borderColor: "#F0FFCE",
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 12,
    width: "80%",
    color: "#F0FFCE",
  },
  buttonItems: {
    padding: 12,
  },
});
