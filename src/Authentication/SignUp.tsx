import React from "react";
import { View, Text, StyleSheet } from "react-native";

import AuthenticationHeader from "../components/AuthenticationHeader";

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: "Roboto-Medium",
    color: "white",
  },
  desc: {
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    color: "white",
    paddingVertical: 15,
  },
});

const SignUp = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#0062CD" }}>
      <View style={{ flex: 0.22 }}>
        <AuthenticationHeader />
        <View
          style={{
            flex: 1,
            marginHorizontal: 20,
            marginTop: 10,
          }}
        >
          <Text style={styles.title}>Welcome to Login</Text>
          <Text style={styles.desc}>
            Please fill E-mail & password to login your app account. Sign Up
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 0.78,
          backgroundColor: "white",
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
        }}
      ></View>
    </View>
  );
};

export default SignUp;
