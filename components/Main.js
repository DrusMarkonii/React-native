import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity, FlatList } from "react-native";
import { gStyle } from "../styles/style";

export default function Main({ navigation }) {
  const [news, setNews] = useState([
    { name: "Google", anons: "Google!!!", full: "Google is cool " },
    { name: "Apple", anons: "Apple!!!", full: "Apple is cool " },
    { name: "FaceBook", anons: "FaceBook!!!", full: "FaceBook is cool " },
  ]);
  const loadScene = () => {
    navigation.navigate("FullInfo");
  };
  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>Main page</Text>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.name}
            onPress={() => navigation.navigate("FullInfo", item)}
          >
            <Text>{item.name}</Text>
            <Text>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="FullInfo" onPress={loadScene} />
    </View>
  );
}
