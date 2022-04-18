import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { AddTodo } from "./src/components/AddTodo/AddTodo";
import Navbar from "./src/components/Navbar/Navbar";
import Todo from "./src/components/Todo/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos((prev) => [
      {
        id: Date.now().toString(),
        title,
      },
      ...prev,
    ]);
  };

  return (
    <SafeAreaView>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <View>
          {todos.map((todo) => <Todo key={todo.id} todo={todo}/>)}
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
