import React from "react";
import { View, Text } from "react-native";

import AuthenticationHeader from "../components/AuthenticationHeader";

const Login = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <AuthenticationHeader color="black" />

      <View>
        <Text>Login</Text>
      </View>
    </View>
  );
};

export default Login;
