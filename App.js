import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Navbar from './src/components/Navbar/Navbar';

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Navbar title="Todo App"/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  
});
