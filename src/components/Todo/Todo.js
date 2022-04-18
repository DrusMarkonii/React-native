import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function Todo({ todo }) {
  return (
    <View style={styles.todo}>
      <Text style={styles.text}>{todo.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      borderWidth: 1,
      borderColor: '#eee',
      borderRadius: 5,
      marginBottom: 10
  },
});
