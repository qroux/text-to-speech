import * as React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

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
    marginBottom: 20,
  },
  span: { fontWeight: "bold", color: Colors.light.primary, fontSize: 24 },
});
