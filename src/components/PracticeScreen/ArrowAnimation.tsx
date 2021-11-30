import * as React from "react";
import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { View, Text } from "../Themed";
import Colors from "../../constants/Colors";
import InstructionText from "./InstructionText";

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
        span={"Import"}
        text={"an image/photo containing some text content."}
      />
      <InstructionText
        span={"Process"}
        text={"the image to extract its text content."}
      />
      <InstructionText
        span={"Practice"}
        text={"your prononciation by clicking on the desired word."}
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
    alignSelf: "center",
    height: 120,
    marginBottom: 100,
  },
});
