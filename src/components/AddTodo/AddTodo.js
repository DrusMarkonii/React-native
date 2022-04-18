import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";

export const AddTodo = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const pressHandler = () => {
    if (inputValue.trim()) {
      onSubmit(inputValue);
      setInputValue("");
    } else {
      Alert.alert("Need to enter text");
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Enter text"
      />
      <Button title="Add" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    width: "80%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3839ab",
    padding: 10,
  },
});
