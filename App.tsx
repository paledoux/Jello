import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

import { assets } from "./src/Authentication/Onboarding";
import { LoadAssets } from "./src/components";
import { AuthenticationNavigator } from "./src/Authentication/Navigation";

const fonts = {
  "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
  "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  "Roboto-Regular": require("./assets/fonts/Roboto-Light.ttf"),
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
