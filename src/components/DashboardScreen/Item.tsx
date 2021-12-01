import * as React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { View, useThemeColor } from "../Themed";

interface ItemProps {
  label: string;
  value: number;
  unit?: number | string;
  lightColor?: string;
  darkColor?: string;
}

const Item = ({
  label,
  value,
  unit,
  lightColor = "rgba(0,0,0, 0.1)",
  darkColor = "rgba(255,255,255, 0.2)",
}: ItemProps) => {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  return (
    <View style={{ ...styles.container, borderColor: color }}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.count}>{value}</Text>
        <Text style={styles.unit}>{unit}</Text>
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    // borderColor: "rgba(0,0,0, 0.1)",
    backgroundColor: Colors.light.primary,
    borderWidth: 0.3,
    borderRadius: 5,
    width: "32%",
    height: "100%",
    alignItems: "center",
    paddingTop: 15,
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  contentContainer: {
    paddingTop: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  count: {
    color: "white",
  },
  unit: {
    fontWeight: "bold",
    color: "white",
  },
});
