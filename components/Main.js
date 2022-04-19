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
import Form from "./Form";

export default function Main({ navigation }) {
  const [news, setNews] = useState([
    {
      name: "Google",
      anons: "Google!!!",
      full: "Google is cool ",
      key: "1",
      img: "https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1",
    },
    {
      name: "Apple",
      anons: "Apple!!!",
      full: "Apple is cool ",
      key: "2",
      img: "https://www.alia.ge/wp-content/uploads/2022/03/security_apple_1138155587.jpg",
    },
    {
      name: "FaceBook",
      anons: "FaceBook!!!",
      full: "FaceBook is cool ",
      key: "3",
      img: "https://cdn.pixabay.com/photo/2018/05/08/18/25/facebook-3383596_640.png",
    },
  ]);

  const addArticle = (article) => {
    setNews((list) => {
      article.key = Date.now().toString();
      return [article, ...list];
    });

    setModalWindow(false);
  };

  const [modalWindow, setModalWindow] = useState(false);
  return (
    <View style={gStyle.main}>
      <Modal visible={modalWindow}>
        <View style={gStyle.main}>
          <Ionicons
            name="close"
            size={34}
            color="red"
            style={styles.itemClose}
            onPress={() => setModalWindow(false)}
          />
          <Text style={styles.title}>Form add of articles</Text>
          <Form addArticle={addArticle} />
        </View>
      </Modal>
      <Ionicons
        name="add-circle"
        size={34}
        color="green"
        style={styles.itemAdd}
        onPress={() => setModalWindow(true)}
      />
      <Text style={[gStyle.title, styles.header]}>Main page</Text>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.name}
            onPress={() => navigation.navigate("FullInfo", item)}
            style={styles.item}
          >
            <Image
              source={{
                uri: item.img,
              }}
              style={styles.img}
            />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.anons}>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
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
