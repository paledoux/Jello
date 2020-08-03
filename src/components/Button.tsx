import React from "react";
import { StyleSheet, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

interface ButtonProps {
  label: string;
  variant: "primary" | "secondary";
  size: "small" | "big";
  onPress: () => void;
}

const Button = ({ label, variant, onPress, size }: ButtonProps) => {
  const backgroundColor = variant === "primary" ? "#FDB816" : "";
  const color = "#414B5A";
  const width = size === "small" ? 155 : 300;
  return (
    <RectButton
      onPress={onPress}
      style={[styles.container, { backgroundColor, width }]}
    >
      <Text style={{ color }}>{label}</Text>
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
