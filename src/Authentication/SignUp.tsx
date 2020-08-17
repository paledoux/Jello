import React from "react";
import { View, Text, StyleSheet } from "react-native";

import AuthenticationHeader from "../components/AuthenticationHeader";
import Link from "../components/Link";

import { AuthNavigationProps } from "./Navigation";

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

const SignUp = ({ navigation }: AuthNavigationProps<"SignUp">) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#0062CD" }}>
      <AuthenticationHeader />
      <View style={{ flex: 0.22 }}>
        <View
          style={{
            flex: 1,
            marginHorizontal: 20,
            marginTop: 10,
          }}
        >
          <Text style={styles.title}>Create your account</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.desc}>Do you already have an account ? </Text>
            <Link onPress={() => navigation.navigate("Login")}>
              <Text style={[styles.desc, { color: "#FFC33A" }]}>Sign In</Text>
            </Link>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
        }}
      >
        <Text>Username</Text>
      </View>
    </View>
  );
};

export default SignUp;
