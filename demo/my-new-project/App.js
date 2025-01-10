import "@expo/metro-runtime";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setValue(e);
  };

  const handlePress = () => {
    setItems([...items, value]);
    setValue("");
  };

  const handleDelete = (index) => {
    setItems((prev) => {
      return prev.filter((item, i) => {
        return i !== index;
      });
    });
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputElement}
          placeholder="Enter todo"
          onChangeText={handleChange}
          value={value}
        />
        <Button title="Submit" onPress={handlePress} />
      </View>
      <View style={styles.itemContainer}>
        {items.map((item, index) => (
          <Text
            key={index}
            style={styles.listItems}
            onPress={() => handleDelete(index)}
          >
            {item}
          </Text>
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
    width: "60%",
    borderWidth: 2,
    borderColor: "blue",
    height: 36,
    borderRadius: 5,
    padding: 5,
  },
  itemContainer: {
    flex: 2,
    alignItems: "center",
  },
  listItems: {
    margin: 5,
    textTransform: "capitalize",
    fontSize: 18,
    fontWeight: "bold",
    cursor: "pointer",
  },
});
