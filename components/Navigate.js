import React from "react";
import Main from "./Main";
import FullInfo from "./FullInfo";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: "Home",
            headerStyle: {
              backgroundColor: "#e55544",
              height: 70,
            },
            headerTitleStyle: {
              fontWeight: "400",
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
