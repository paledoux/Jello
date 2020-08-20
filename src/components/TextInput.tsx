import React from "react";
import { useTheme } from "@shopify/restyle";
import { TextInput as RNTextInput } from "react-native-gesture-handler";

import { Theme } from "./Theme";

interface TextInputProps {
  placeHolder: string;
  onBlur: () => void;
  onChange: (v: string) => void;
  value: string;
}

const TextInput = ({
  placeHolder,
  onBlur,
  onChange,
  value,
}: TextInputProps) => {
  const theme = useTheme<Theme>();
  return (
    <RNTextInput
      onBlur={onBlur}
      onChangeText={(v) => onChange(v)}
      value={value}
      style={{
        width: 300,
        height: 55,
        borderWidth: 1,
        borderColor: theme.colors.borderColor,
        borderRadius: theme.borderRadii.s,
        color: theme.colors.borderColor,
        paddingLeft: 20,
      }}
      placeholder={placeHolder}
    />
  );
};

export default TextInput;
