import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { ThemeProvider } from "@shopify/restyle";

import { assets } from "./src/Authentication/Onboarding";
import { LoadAssets, theme } from "./src/components";
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
      <ThemeProvider theme={theme}>
        <LoadAssets {...{ fonts, assets }}>
          <StatusBar barStyle="dark-content" />
          <AuthenticationNavigator />
        </LoadAssets>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
