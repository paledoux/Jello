import React, { ReactNode } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

interface LinkProps {
  children: ReactNode;
  onPress: () => void;
}

const Link = ({ children, onPress }: LinkProps) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>{children}</TouchableOpacity>
  );
};

export default Link;
