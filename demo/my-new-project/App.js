import "@expo/metro-runtime";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState(["milk", "bread", "eggs"]);

  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputElement}
          placeholder="Enter your name"
          onChangeText={handleChange}
        />
        <Button title="Submit" />
      </View>
      <View style={styles.itemContainer}>
        {items.map((item, index) => (
          <li key={index} style={styles.listItems}>
            {item}
          </li>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  inputElement: {
    borderWidth: 2,
    borderColor: "blue",
    height: 36,
    borderRadius: 5,
    padding: 5,
  },
  itemContainer: {
    flex: 5,
    alignItems: "center",
  },
  listItems: {
    padding: 10,
    margin: 5,
    textTransform: "capitalize",
    fontSize: 18,
    fontWeight: "bold",
    cursor: "pointer",
  },
});
