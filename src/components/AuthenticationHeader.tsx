import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Box } from "./Theme";

interface AuthenticationHeaderProps {
  color: string;
}

const AuthenticationHeader = ({ color }: AuthenticationHeaderProps) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <Box
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
      paddingHorizontal="m"
      style={{ marginTop: insets.top }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="ios-arrow-round-back" size={40} color={color} />
      </TouchableOpacity>
    </Box>
  );
};

AuthenticationHeader.defaultProps = {
  color: "white",
};

export default AuthenticationHeader;
