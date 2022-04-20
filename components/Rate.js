import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { gStyle } from "../styles/style";

export default function Rate({ data }) {
  return (
    <View style={styles.currenciesBox}>
      {Object.entries(data).map((item) => {
        return (
          <Text key={item[0]} style={styles.currenciesItem}>
            {item[1].code}: {item[1].value}
          </Text>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  currenciesBox: {
    margin: 10,
    width: "100%",
    padding: 10,
    alignItems: "baseline",
  },
  currenciesItem: {
    color: "white",
    fontSize: 20,
  },
});
