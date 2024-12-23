import React from "react";
import { View, Text } from "react-native-web";
import data from "../data/data.json";

const RandomMessage = () => {
  return (
    <View>
      <Text>{data[2]}</Text>
    </View>
  );
};

export default RandomMessage;
