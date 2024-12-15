import React from "react";
import { Text, View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";

const HelloWorld = () => {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <Text className="text-2xl font-bold text-blue-500">Hello, World!</Text>
    </View>
  );
};

export default HelloWorld;
