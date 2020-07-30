import React from "react";
import { View, Dimensions, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Slide from "./Slide";

const description = // eslint-disable-next-line max-len
  "Original with 1000 product from a lot of  different brand accros the world. buy so easy with just simple step then your item will send it.";

const { width } = Dimensions.get("window");
const Onboarding = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        horizontal
        snapToInterval={width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        bounces={false}
      >
        <Slide title="ORIGINAL PRODUCT" description={description} />
        <Slide title="FREE SHIPPING" description={description} />
        <Slide title="FAST DELIVERY" description={description} />
      </ScrollView>
      <Button title="Test" onPress={() => true} />
      <Button title="Test" onPress={() => true} />
    </View>
  );
};

export default Onboarding;
