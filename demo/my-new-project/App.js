import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textInputField} placeholder="Add your goal" />
        <Button title="Add" />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 20,
    marginTop: 20,
    flex: 1,
  },
  textInputContainer: {
    flexDirection: "column",
  },
  textInputField: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    height: 50,
    padding: 12,
  },
});
