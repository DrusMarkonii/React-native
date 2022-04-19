import React from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";
import { gStyle } from "../styles/style";
import { Formik } from "formik";

export default function Form({ addArticle }) {
  return (
    <View style={gStyle.main}>
      <Formik
        onSubmit={(values, action) => {
          addArticle(values);
          action.resetForm();
        }}
        initialValues={{
          name: "",
          full: "",
          anons: "",
          img: "",
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              value={props.values.name}
              placeholder="Enter name"
              onChangeText={props.handleChange("name")}
            />
            <TextInput
              style={styles.input}
              value={props.values.anons}
              multiline
              placeholder="Enter anons"
              onChangeText={props.handleChange("anons")}
            />
            <TextInput
              style={styles.input}
              value={props.values.full}
              multiline
              placeholder="Enter description"
              onChangeText={props.handleChange("full")}
            />
            <TextInput
              style={styles.input}
              value={props.values.img}
              placeholder="Add photo"
              onChangeText={props.handleChange("img")}
            />
            <Button title="Add Post" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
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
