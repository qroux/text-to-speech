import * as React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { Text } from "../Themed";

interface InstructionTextProps {
  span: string;
  text: string;
}

const InstructionText = ({ span, text }: InstructionTextProps) => {
  return (
    <Text style={styles.text}>
      <Text style={styles.span}>{span}</Text> {text}
    </Text>
  );
};

export default InstructionText;

const styles = StyleSheet.create({
  text: {
    textAlign: "left",
    fontSize: 18,
    width: "100%",
    marginBottom: 15,
  },
  span: { fontWeight: "bold", color: Colors.light.primary, fontSize: 20 },
});
