import * as React from "react";
import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { View, Text } from "../Themed";
import InstructionText from "./InstructionText";
import { internationalize } from "../../helpers/internationalize";

interface ArrowAnimationProps {
  hidden: boolean;
}

const ArrowAnimation = ({ hidden }: ArrowAnimationProps) => {
  return hidden ? null : (
    <View style={styles.container}>
      <LottieView
        source={require("../../assets/animations/arrow.json")}
        autoPlay
        loop
        speed={0.2}
        style={styles.lottie}
      />
      <InstructionText
        span={internationalize("practice.instructions.import.span")}
        text={internationalize("practice.instructions.import.text")}
      />
      <InstructionText
        span={internationalize("practice.instructions.process.span")}
        text={internationalize("practice.instructions.process.text")}
      />
      <InstructionText
        span={internationalize("practice.instructions.practice.span")}
        text={internationalize("practice.instructions.practice.text")}
      />
    </View>
  );
};

export default ArrowAnimation;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    paddingTop: 30,
    alignItems: "center",
  },
  lottie: {
    height: 150,
    marginBottom: 30,
  },
});
