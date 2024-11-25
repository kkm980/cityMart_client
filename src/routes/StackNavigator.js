import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomTabs } from "./BottomTab";

// Create the Stack Navigator
const Stack = createStackNavigator();

// Stack Navigator Component
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="BottomTabs">
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default StackNavigator;