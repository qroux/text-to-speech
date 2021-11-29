import * as React from "react";
import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { View, Text } from "../Themed";
import { Button } from "react-native-elements";
import Colors from "../../constants/Colors";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface ArrowAnimationProps {}

const ArrowAnimation = (props: ArrowAnimationProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../assets/animations/arrow.json")}
        autoPlay
        loop
        speed={0.2}
        style={styles.lottie}
      />
      <Text style={styles.text}>
        Import an image/photo to extract its content. Practice your
        prononciation by clicking and the expected word.
      </Text>
    </View>
  );
};

export default ArrowAnimation;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    paddingTop: 0,
    alignItems: "center",
  },
  lottie: {
    alignSelf: "center",
    height: 120,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
  },
});
