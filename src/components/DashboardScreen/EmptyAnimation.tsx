import * as React from "react";
import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { View, Text } from "../Themed";
import { Button } from "react-native-elements";
import Colors from "../../constants/Colors";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { internationalize } from "../../helpers/internationalize";

interface EmptyAnimationProps {}

const EmptyAnimation = (props: EmptyAnimationProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../assets/animations/empty.json")}
        autoPlay
        loop
        speed={0.5}
        style={styles.lottie}
      />
      <Button
        title={internationalize("dashboard.cta")}
        titleStyle={styles.title}
        buttonStyle={styles.button}
        containerStyle={{
          marginBottom: 30,
        }}
        type="solid"
        icon={<Entypo name="flash" size={24} color="white" />}
        onPress={() => {
          navigation.navigate("PracticeScreen");
        }}
      />
    </View>
  );
};

export default EmptyAnimation;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 0,
  },
  lottie: {
    alignSelf: "center",
    height: 120,
    marginTop: 10,
    marginBottom: 40,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
  },
  button: {
    width: "80%",
    backgroundColor: Colors.light.primary,
    alignSelf: "center",
    borderRadius: 50,
  },
  title: {
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
  },
});
