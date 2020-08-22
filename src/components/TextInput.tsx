import React from "react";
import { useTheme } from "@shopify/restyle";
import { TextInput as RNTextInput } from "react-native-gesture-handler";
import { TextInputProperties } from "react-native";

import { Theme } from "./Theme";

const TextInput = (props: TextInputProperties) => {
  const theme = useTheme<Theme>();
  return (
    <RNTextInput
      {...props}
      style={{
        width: 300,
        height: 55,
        borderWidth: 1,
        borderColor: theme.colors.borderColor,
        borderRadius: theme.borderRadii.s,
        color: theme.colors.borderColor,
        paddingLeft: 20,
      }}
    />
  );
};

export default TextInput;
