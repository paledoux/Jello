import React from "react";

import AuthenticationHeader from "../components/AuthenticationHeader";
import Link from "../components/Link";
import { Box, Text } from "../components/Theme";
import { Button } from "../components";

import { AuthNavigationProps } from "./Navigation";

const SignUp = ({ navigation }: AuthNavigationProps<"SignUp">) => {
  return (
    <Box flex={1} backgroundColor="primary">
      <AuthenticationHeader />

      <Box flex={0.22}>
        <Box flex={1} marginHorizontal="m" marginTop="m">
          <Text variant="title2">Create your account</Text>
          <Box flexDirection="row">
            <Text variant="onboardingDescription" marginTop="s">
              Do you already have an account ?{" "}
            </Text>
            <Link onPress={() => navigation.navigate("Login")}>
              <Text
                variant="onboardingDescription"
                color="secondary"
                marginTop="s"
              >
                Sign In
              </Text>
            </Link>
          </Box>
        </Box>
      </Box>

      <Box
        flex={1}
        backgroundColor="white"
        borderTopLeftRadius="l"
        borderTopRightRadius="l"
        padding="l"
        alignItems="center"
      >
        <Text>Username</Text>
        <Button
          label="Create account"
          size="big"
          variant="primary"
          onPress={() => true}
        />
      </Box>
    </Box>
  );
};

export default SignUp;
