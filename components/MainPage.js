import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  Button,
  Modal,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import { gStyle } from "../styles/style";

export default function MainPage({ navigation }) {
  const CurrentDate = new Date()
  const year = CurrentDate.getFullYear()
  const month = CurrentDate.getMonth() + 1;
  const day = CurrentDate.getDate()
 
  const [currentDate, setCurrentDate] = useState();
  return (
    <View style={gStyle.main}>
      <Text style={[gStyle.title, styles.header]}>Exchange rates</Text>
      <View>
        <Text>{`${year}-${month}-${day}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 30,
  },
  item: {
    width: "100%",
    marginBottom: 30,
  },
  title: {
    fontFamily: "mt-bold",
    fontSize: 22,
    marginTop: 20,
    textAlign: "center",
    color: "#474747",
  },
  anons: {
    fontFamily: "mt-light",
    fontSize: 16,
    marginTop: 5,
    textAlign: "center",
    color: "#474747",
  },
  img: {
    width: "100%",
    height: 200,
  },
  itemAdd: {
    textAlign: "center",
    marginBottom: 15,
  },
  itemClose: {
    textAlign: "center",
  },
});
