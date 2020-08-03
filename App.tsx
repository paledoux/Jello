import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

import Onboarding, { assets } from "./src/Authentication/Onboarding";
import { LoadAssets } from "./src/components";

const fonts = {
  "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
  "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  "Roboto-Regular": require("./assets/fonts/Roboto-Light.ttf"),
};

const AuthenticationStack = createStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Home" component={Onboarding} />
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <LoadAssets {...{ fonts, assets }}>
        <StatusBar barStyle="dark-content" />
        <AuthenticationNavigator />
      </LoadAssets>
    </SafeAreaProvider>
  );
}
