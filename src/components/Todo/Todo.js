import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity  } from "react-native";

export default function Todo({ todo, onRemove }) {
  return (
    <TouchableOpacity
      activeOpacity={0.2}
      onLongPress={() => onRemove(todo.id)}
    >
      <View style={styles.todo}>
        <Text style={styles.text}>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    marginBottom: 10,
  },
});
