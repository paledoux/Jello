import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import AuthenticationHeader from "../components/AuthenticationHeader";
import Link from "../components/Link";
import { Box, Text } from "../components/Theme";
import { Button, TextInput, Container } from "../components";

import {
  AuthNavigationProps,
  AuthenticationStackParamList,
} from "./Navigation";

const Header = () => {
  const navigation = useNavigation<
    StackNavigationProp<AuthenticationStackParamList, "Login">
  >();
  return (
    <Box flex={1}>
      <AuthenticationHeader />
      <Box
        position="absolute"
        borderWidth={50}
        borderColor="lightBlue"
        top={-70}
        right={-80}
        width={190}
        height={190}
        style={{ borderRadius: 190 * 2 }}
      />
      <Box flex={1} marginHorizontal="m" marginTop="m">
        <Text variant="title2">Welcome to Login</Text>
        <Box flexDirection="row">
          <Text variant="onboardingDescription" marginTop="s">
            Please fill E-mail & password to login your app account.
          </Text>
          <Link onPress={() => navigation.navigate("SignUp")}>
            <Text
              variant="onboardingDescription"
              color="secondary"
              marginTop="s"
            >
              Sign Up
            </Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

const Login = ({ navigation }: AuthNavigationProps<"SignUp">) => {
  const { handleSubmit, control, errors } = useForm();

  const onSubmit = (data: unknown) => console.log(data);

  return (
    <Box>
      <Container header={<Header />}>
        <Box
          flex={1}
          backgroundColor="white"
          borderTopLeftRadius="l"
          borderTopRightRadius="l"
          padding="l"
          alignItems="center"
        >
          <Box paddingTop="m">
            <Box
              flexDirection="row"
              justifyContent="space-between"
              paddingBottom="s"
            >
              <Text variant="onboardingDescription">Username</Text>
              {errors.username && (
                <Text variant="onboardingDescription" color="red">
                  This is required.
                </Text>
              )}
            </Box>
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput onBlur={onBlur} value={value} onChange={onChange} />
              )}
              name="username"
              rules={{ required: true, minLength: 3 }}
              defaultValue=""
            />
          </Box>
          <Box paddingTop="m">
            <Box
              flexDirection="row"
              justifyContent="space-between"
              paddingBottom="s"
            >
              <Text variant="onboardingDescription">E-mail</Text>
              {errors.email && (
                <Text variant="onboardingDescription" color="red">
                  This is required.
                </Text>
              )}
            </Box>
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput onBlur={onBlur} value={value} onChange={onChange} />
              )}
              name="email"
              rules={{ required: true, minLength: 3 }}
              defaultValue=""
            />
          </Box>
          <Box paddingTop="m">
            <Box
              flexDirection="row"
              justifyContent="space-between"
              paddingBottom="s"
            >
              <Text variant="onboardingDescription">Password</Text>
              {errors.password && (
                <Text variant="onboardingDescription" color="red">
                  This is required.
                </Text>
              )}
            </Box>

            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput onBlur={onBlur} value={value} onChange={onChange} />
              )}
              name="password"
              rules={{ required: true, minLength: 3 }}
              defaultValue=""
            />
          </Box>
          <Box marginTop="xl">
            <Button
              label="Create account"
              size="big"
              variant="primary"
              onPress={handleSubmit(onSubmit)}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
