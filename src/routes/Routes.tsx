import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";

import { RootStackParams } from "../types";
import Home from "../views/Home";
import Detail from "../views/Detail";


const Stack = createNativeStackNavigator<RootStackParams>();
const routeScreenDefaultOptions = {
  headerStyle: {
    backgroundColor: "#071A5D",
  },
  headerTitleStyle: {
    color: "#FFF",
  },
  headerTintColor: "#FFF",
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={routeScreenDefaultOptions}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={routeScreenDefaultOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;