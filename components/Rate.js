import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { gStyle } from "../styles/style";

export default function Rate({ rates, mainCurrency }) {
  if (rates !== null) {
    // console.log(Object.entries(rates))
    return (
      <View style={styles.currenciesBox}>
      <Text style={styles.currenciesItem}>1 {mainCurrency}:</Text>
        {Object.entries(rates).map((item) => {
          return (
            <Text key={item} style={styles.currenciesItem}>
              {`${item[0]}: ${item[1]}`}
            </Text>
          );
        })}
      </View>
    );
  } else {
    return <Text>Loading..</Text>
  }
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
