import "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  TextInputComponent,
} from "react-native";
import "@expo/metro-runtime";

const SearchComponent = () => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Search by name, body-group"
        style={styles.TextInputComponent}
      />
      <Pressable style={styles.pressableContainer}>
        <Text style={styles.TextContainer}>Search</Text>
      </Pressable>
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  TextInputComponent: {
    borderWidth: 1,
    padding: 8,
    width: "60%",
  },
  pressableContainer: {
    backgroundColor: "black",
    width: 60,
  },
  TextContainer: {
    color: "white",
    padding: 9,
  },
});
