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
  const [date, setDate] = useState();
  const [mainCurrency, setMainCurrency] = useState()
  const [rates, setRates] = useState(null)
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [exchangeRate, setExChangeRate] = useState();

 
  const data = mainRate.data;
  // console.log(data);

  const BASE_URL =
    "http://api.exchangeratesapi.io/v1/latest?access_key=cb6a10a60f1d6fd60feba128380a4b5e";

  useEffect(() => {
    fetch(`${BASE_URL}&base=EUR&symbols=USD,BYN,RUB,GEL`)
      .then((response) => response.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];
        setSelectedValue([data.base, ...Object.keys(data.rates)]);
        setRates(data.rates)
        setFromCurrency(data.base);
        setDate(data.date);
        setMainCurrency(data.base)
        setToCurrency(firstCurrency);
        setExChangeRate(data.rates[firstCurrency]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency !== undefined && toCurrency !== undefined)
      try {
        fetch(`${BASE_URL}&base=${fromCurrency}&symbols=${toCurrency}`)
          .then((res) => res.json())
          .then((data) => setExChangeRate(data.rates[toCurrency]));
      } catch (e) {
        console.error(e);
      }
  }, [fromCurrency, toCurrency]);

  let fromAmount, toAmount;

  if (amountInFromCurrency) {
    console.log(amountInFromCurrency, exchangeRate);
    fromAmount = Number(amount);
    toAmount = (+amount * exchangeRate).toFixed(3);
  } else {
    toAmount = +amount;
    fromAmount = (+amount / exchangeRate).toFixed(3);
  }

  const handleFromAmountChange = (text) => {
    setAmount(text);
    console.log(text);
    setAmountInFromCurrency(true);
  };

  const handleToAmountChange = (text) => {
    setAmount(text);
    setAmountInFromCurrency(false);
  };

  if (selectedValue.length) {
    return (
      <View style={gStyle.main}>
        <Text style={[gStyle.title, styles.header]}>Exchange rates</Text>
        <Text style={styles.currentDay}>{date}</Text>
        <View>
          <Rate rates={rates} mainCurrency={mainCurrency} />
        </View>
        <View></View>
        <View>
          <InputValue
            currencyOption={selectedValue}
            selectedCurrency={fromCurrency}
            onChangeCurrency={(itemValue) => {
              setFromCurrency(itemValue);
              console.log(itemValue);
            }}
            onChangeAmount={handleFromAmountChange}
            amount={fromAmount}
          />
        </View>
        <View>
          <InputValue
            currencyOption={selectedValue}
            selectedCurrency={toCurrency}
            onChangeCurrency={(itemValue) => setToCurrency(itemValue)}
            onChangeAmount={handleToAmountChange}
            amount={toAmount}
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
