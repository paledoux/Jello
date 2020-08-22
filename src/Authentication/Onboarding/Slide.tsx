import React from "react";
import { Dimensions, Image, ImageSourcePropType } from "react-native";

import { Box, Text } from "../../components/Theme";

interface SlideProps {
  title: string;
  description: string;
  picture: ImageSourcePropType;
}

const { width } = Dimensions.get("window");

const Slide = ({ title, description, picture }: SlideProps) => {
  return (
    <Box
      width={width}
      justifyContent="center"
      alignItems="center"
      flex={1}
      backgroundColor="white"
    >
      <Box flex={0.6} justifyContent="flex-end">
        <Image source={picture} />
      </Box>

      <Box
        flex={0.4}
        justifyContent="flex-start"
        alignItems="center"
        paddingTop="xl"
      >
        <Text variant="title">{title}</Text>
        <Text
          variant="onboardingDescription"
          textAlign="center"
          style={{ paddingHorizontal: 30, paddingTop: 22 }}
        >
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default Slide;
