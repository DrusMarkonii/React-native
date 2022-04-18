import React from "react";
import { View, Text } from "react-native";
import { gStyle } from "../styles/style";

export default function Contact({ route }) {
  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>{route.params.name}</Text>
      <Text>{route.params.anons}</Text>
      <Text>{route.params.full}</Text>
    </View>
  );
}
