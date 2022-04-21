import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Picker } from "react-native";
import { TextInput } from "react-native-web";
import { gStyle } from "../styles/style";

export default function InputValue({
  currencyOption,
  selectedCurrency,
  onChangeCurrency,
  onChangeAmount,
  amount
}) {
  return (
    <View style={styles.inputBox}>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={onChangeAmount}
      />
      <Picker
        selectedValue={selectedCurrency}
        style={styles.select}
        onValueChange={onChangeCurrency}
      >
        {currencyOption.map((item, index) => (
          <Picker.Item key={item + index} label={item} value={item} />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "silver",
    borderRadius: 8,
    marginTop: 10,
    padding: 10,
    backgroundColor: "#B1C3E8",
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  select: {
    height: 40,
    width: 60,
    borderRadius: 5,
    marginLeft: 5,
  },
});
