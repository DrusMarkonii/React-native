import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>To do list</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 30,
        height: 100,
        backgroundColor: 'silver'
    }, 
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'red',
        textAlign: 'center'
    }
});
