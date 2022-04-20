import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet, Text } from "react-native";
import { gStyle } from "../styles/style";

export default function Form({ keepCourse, values }) {
  const [eur, setEur] = useState(0.93);
  const [rus, setRus] = useState(81);
  const [usd, setUsd] = useState(1);

  return (
    <View style={gStyle.main}>
      <View>
        
        <TextInput style={styles.input} value={usd} onChangeText={setUsd} />
        <TextInput style={styles.input} value={eur} onChangeText={setEur} />
        <TextInput style={styles.input} value={rus} onChangeText={setRus} />

        <Button style={styles.Button} title="keep the course" />
      </View>
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
  },
});
