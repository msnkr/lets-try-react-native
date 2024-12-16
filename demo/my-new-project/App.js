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
          style={styles.textInputComponent}
          placeholder="Add your goal"
        />
        <Button title="Add Goal" onPress={handlePress}></Button>
      </View>
      <View>
        {arr.map((goal, index) => (
          <View>
            <ShowArrItem listItem={goal} id={index} />
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
  },
  textInputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 2,
    paddingBottom: 20,
  },
  textInputComponent: {
    width: "70%",
    borderWidth: 2,
    paddingLeft: 5,
  },
});
