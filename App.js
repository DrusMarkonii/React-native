import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import MainStack from "./components/Navigate";


const fonts = () =>
  Font.loadAsync({
    "mt-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "mt-light": require("./assets/fonts/Montserrat-Light.ttf"),
  });

export default function App() {
  const [font, setFont] = useState(false);
  const [context, setContext] = useState(null);

  if (font) {
    return (
      
        <MainStack />
      
    );
    // return <MainPage />;
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn}
      />
    );
  }
}
