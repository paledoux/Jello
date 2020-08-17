import React from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";

import { Theme, Text } from "./Theme";
interface ButtonProps {
  label: string;
  variant: "primary" | "secondary";
  size: "small" | "big";
  onPress: () => void;
}

const Button = ({ label, variant, onPress, size }: ButtonProps) => {
  const theme = useTheme<Theme>();
  const backgroundColor = variant === "primary" ? theme.colors.secondary : "";
  const width = size === "small" ? 155 : 300;
  return (
    <RectButton
      onPress={onPress}
      style={[styles.container, { backgroundColor, width }]}
    >
      <Text variant="title">{label}</Text>
    </RectButton>
  );
};

export default Button;

Button.defaultProps = {
  size: "small",
};

const styles = StyleSheet.create({
  container: {
    height: 55,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
