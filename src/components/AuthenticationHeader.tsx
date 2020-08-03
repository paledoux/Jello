import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});

interface AuthenticationHeaderProps {
  color: string;
}

const AuthenticationHeader = ({ color }: AuthenticationHeaderProps) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.header, { marginTop: insets.top }]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="ios-arrow-round-back" size={40} color={color} />
      </TouchableOpacity>
    </View>
  );
};

AuthenticationHeader.defaultProps = {
  color: "white",
};

export default AuthenticationHeader;
