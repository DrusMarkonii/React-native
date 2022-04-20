import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { mainRate } from "./store";
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
import Rate from "./Rate";
import InputValue from "./InputValue";

export default function MainPage({ navigation }) {
  const [selectedValue, setSelectedValue] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [exchangeRate, setExChangeRate] = useState();

  const CurrentDate = new Date();
  const year = CurrentDate.getFullYear();
  const month = CurrentDate.getMonth() + 1;
  const day = CurrentDate.getDate();
  console.log(exchangeRate);
  const data = mainRate.data;

  const BASE_URL =
    "http://api.exchangeratesapi.io/v1/latest?access_key=cb6a10a60f1d6fd60feba128380a4b5e";

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];
        setSelectedValue([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExChangeRate(data.rates[firstCurrency]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  let toAmount, fromAmount;

  if (amountInFromCurrency) {
    fromAmount = amount * exchangeRate;
  } else {
    toAmount = amount / exchangeRate;
  }

  const handleFromAmountChange = () => {
    setAmount()
    setAmountInFromCurrency(true)
  }

  const handleToAmountChange = () => {
    setAmount()
    setAmountInFromCurrency(false)
  }

  if (selectedValue.length) {
    return (
      <View style={gStyle.main}>
        <Text style={[gStyle.title, styles.header]}>Exchange rates</Text>
        <Text style={styles.currentDay}>{`${year}-${month}-${day}`}</Text>
        <View>
          <Rate data={data} />
        </View>
        <View>
          <InputValue
            currencyOption={selectedValue}
            selectedCurrency={fromCurrency}
            onChangeCurrency={(itemValue) => setFromCurrency(itemValue)}
            onChangeAmount={handleToAmountChange}
            amount= {fromAmount}
          />
        </View>
        <View>
          <InputValue
            currencyOption={selectedValue}
            selectedCurrency={toCurrency}
            onChangeCurrency={(itemValue) => setToCurrency(itemValue)}
            amount= {toAmount}
          />
        </View>
      </View>
    );
  } else {
    return <Text>loading...</Text>;
  }
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 30,
  },
  title: {
    fontFamily: "mt-bold",
    fontSize: 22,
    marginTop: 20,
    textAlign: "center",
    color: "#474747",
  },
  currentDay: {
    textAlign: "center",
    backgroundColor: "#769CE8",
    padding: 5,
    margin: "0 auto",
    width: "40%",
    fontSize: 18,
    borderRadius: 5,
    color: "white",
  },
});
