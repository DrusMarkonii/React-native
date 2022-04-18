import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function Navbar({title}) {

  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    navbar: {
      height: 50,
        alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#3949ab',
      color: '#fff',
    },
    text: {
      color: '#fff',
      fontSize: 20
    }
  });
  