import React from "react";
import MainPage from "./MainPage";
import FullInfo from "./FullInfo";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{
            title: "Main",
            headerStyle: {
              backgroundColor: "#1C4492",
              height: 50,
              
            },
            headerTitleStyle: {
              fontWeight: "400",
              color: '#FFF'
            },
          }}
        />
        <Stack.Screen
          name="FullInfo"
          component={FullInfo}
          options={{ title: "Article" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
