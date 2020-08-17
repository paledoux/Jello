import * as React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import Login from "./Login";
import Onboarding from "./Onboarding";
import SignUp from "./SignUp";

type AuthenticationStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
};

export interface AuthNavigationProps<
  RouteName extends keyof AuthenticationStackParamList
> {
  navigation: StackNavigationProp<AuthenticationStackParamList, RouteName>;
  route: RouteProp<AuthenticationStackParamList, RouteName>;
}

const AuthenticationStack = createStackNavigator<
  AuthenticationStackParamList
>();

export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Home" component={Onboarding} />
      <AuthenticationStack.Screen name="Login" component={Login} />
      <AuthenticationStack.Screen name="SignUp" component={SignUp} />
    </AuthenticationStack.Navigator>
  );
};
