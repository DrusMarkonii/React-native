import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

export default function ListItem({ el }) {
  return (
    <TouchableHighlight>
      <Text style={styles.text}>{el.text}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
    text: {
        
    }
});
