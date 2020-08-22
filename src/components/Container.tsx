import React, { ReactNode } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Platform, Dimensions } from "react-native";
import Constants from "expo-constants";

import { Box } from "./Theme";

const { height: wHeight } = Dimensions.get("window");

interface ContainerProps {
  children: ReactNode;
  header: ReactNode;
}

const Container = ({ children, header }: ContainerProps) => {
  return (
    <KeyboardAwareScrollView scrollEnabled={false} extraScrollHeight={25}>
      <Box
        height={
          wHeight + (Platform.OS === "android" ? Constants.statusBarHeight : 0)
        }
        backgroundColor="secondary"
      >
        <Box flex={1} backgroundColor="primary">
          <Box flex={0.22}>{header}</Box>
          <Box flex={0.78}>{children}</Box>
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default Container;
