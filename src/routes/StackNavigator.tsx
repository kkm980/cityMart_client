import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomTabs } from "./BottomTab";
import SignUp from "../screens/auth/SignUp";
import SignIn from "../screens/auth/SignIn";
import Otp from "../screens/auth/Otp";
import ForgetPassword from "../screens/auth/ForgetPassword";
import ResetPassword from "../screens/auth/ResetPassword";
import Welcome from "../screens/Welcome";

export type RootStackParamList = {
  Welcome: undefined; // No parameters for SignIn
  BottomTabs: undefined; // No parameters for SignIn
  SignUp: undefined; // No parameters for SignUp
  SignIn: undefined; // No parameters for SignIn
  Otp: undefined; // No parameters for SignIn
  ForgetPassword: undefined; // No parameters for SignIn
  ResetPassword: undefined; // No parameters for SignIn
};

// Create the Stack Navigator
const Stack = createStackNavigator<RootStackParamList>();

// Stack Navigator Component
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="Welcome" component={Welcome} />

    </Stack.Navigator>
  );
};

export default StackNavigator;