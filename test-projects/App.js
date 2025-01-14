import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import "@expo/metro-runtime";

import data from "./data/fitnessData.json";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Welcome to App</Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <FlatList
          data={data}
          renderItem={(item) => {
            return;
          }}
        />
      </ScrollView>
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
