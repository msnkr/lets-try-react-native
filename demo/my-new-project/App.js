import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [arr, setArr] = useState([]);

  const handleDelete = (id) => {
    setArr((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  };

  const handleChange = (e) => {
    setText(e);
  };

  const handlePress = () => {
    setArr((prev) => {
      return [...prev, text];
    });
    setText("");
  };

  const ShowArrItem = ({ listItem, id }) => {
    return (
      <Text style={styles.showItem} onPress={() => handleDelete(id)}>
        {listItem}
      </Text>
    );
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInputField}
          placeholder="Add your goal"
          onChangeText={handleChange}
          value={text}
        />
        <Button
          style={styles.buttonItems}
          title="Add Goal"
          onPress={handlePress}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        {arr.map((item, index) => (
          <View key={index}>
            <ShowArrItem listItem={item} id={index} />
          </View>
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
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    paddingLeft: 12,
    width: "80%",
    color: "#F0FFCE",
  },
  buttonItems: {
    padding: 12,
  },
  showItem: {
    color: "#F0FFCE",
    textTransform: "capitalize",
    marginTop: 5,
  },
});
