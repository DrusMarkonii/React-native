import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { gStyle } from "../styles/style";

export default function Saved({ route }) {
  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>{route.params.name}</Text>
      <Image
        source={{
          uri: route.params.img,
        }}
        style={styles.img}
      />
      <Text style={styles.full}>{route.params.full}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  full: {
    fontFamily: "mt-light",
    fontSize: 16,
    marginTop: 20,
    textAlign: "center",
    color: "#f55151",
  },
  img: {
    width: "100%",
    height: 220,
  },
});
