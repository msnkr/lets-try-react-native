import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import "@expo/metro-runtime";

// Get an arr of random items for the homepage
// display them
// when clicked on, display information
// Create search bar
// Search items must display on page

import data from "./data.json";

const exerciseArr = [];

for (let index = 0; index < 10; index++) {
  exerciseArr.push(data[Math.floor(Math.random() * 100)]);
}

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={exerciseArr}
        renderItem={(item) => {
          const lowerCase = item.item.name.toLowerCase();
          console.log(lowerCase.replace(/ /g, "_"));
          return (
            <View>
              <Text>{item.item.name}</Text>
              <Text>{item.item.level}</Text>
              <Text>{item.item.primaryMuscles}</Text>
            </View>
          );
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
