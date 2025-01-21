import "react";
import { StyleSheet, Text } from "react-native";
import "@expo/metro-runtime";

const ShowText = () => {
  return <Text style={styles.textComponent}>Hello, World!</Text>;
};

export default ShowText;

const styles = StyleSheet.create({
  textComponent: {
    fontSize: 22,
  },
});
