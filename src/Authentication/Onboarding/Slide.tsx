import React from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";

interface SlideProps {
  title: string;
  description: string;
  picture?: number;
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: "Roboto-Medium",
    color: "#414B5A",
    letterSpacing: 1,
  },
  description: {
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    color: "#B8BFC5",
    paddingHorizontal: 30,
    paddingVertical: 22,
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 1,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#FFF",
  },
});

const Slide = ({ title, description }: SlideProps) => {
  return (
    <View style={[styles.container, { width }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default Slide;
