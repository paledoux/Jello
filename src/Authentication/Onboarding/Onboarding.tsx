import React from "react";
import { Dimensions } from "react-native";
import Animated, { divide } from "react-native-reanimated";
import { useScrollHandler } from "react-native-redash";

import Button from "../../components/Button";
import { AuthNavigationProps } from "../Navigation";
import { Box } from "../../components/Theme";

import Slide from "./Slide";
import Dot from "./Dot";

const desc = // eslint-disable-next-line max-len
  "Original with 1000 product from a lot of  different brand accros the world. buy so easy with just simple step then your item will send it.";

const slides = [
  {
    title: "ORIGINAL PRODUCT",
    description: desc,
    picture: {
      width: 223,
      height: 273,
      src: require("../assets/1.png"),
    },
  },
  {
    title: "FREE SHIPPING",
    description: desc,
    picture: {
      width: 229,
      height: 178,
      src: require("../assets/2.png"),
    },
  },
  {
    title: "FAST DELIVERY",
    description: desc,
    picture: {
      width: 147,
      height: 213,
      src: require("../assets/3.png"),
    },
  },
];

export const assets = slides.map((slide) => slide.picture.src);

const { width } = Dimensions.get("window");

const Onboarding = ({ navigation }: AuthNavigationProps<"Home">) => {
  const { scrollHandler, x } = useScrollHandler();
  return (
    <Box flex={1} backgroundColor="white">
      <Animated.ScrollView
        horizontal
        snapToInterval={width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        bounces={false}
        {...scrollHandler}
      >
        {slides.map(({ title, description, picture }, index) => {
          return (
            <Slide
              title={title}
              description={description}
              picture={picture.src}
              key={index}
            />
          );
        })}
      </Animated.ScrollView>

      <Box
        marginBottom="s"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        {slides.map((_, index) => (
          <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />
        ))}
      </Box>
      <Box flexDirection="row" justifyContent="space-evenly" paddingBottom="l">
        <Button
          label="SIGN UP"
          variant="secondary"
          onPress={() => navigation.navigate("SignUp")}
        />
        <Button
          label="SIGN IN"
          variant="primary"
          onPress={() => navigation.navigate("Login")}
        />
      </Box>
    </Box>
  );
};

export default Onboarding;
