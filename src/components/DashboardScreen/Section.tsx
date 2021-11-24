import * as React from "react";
import { StyleSheet } from "react-native";
import { sharedStyles } from "../../constants/Container";
import { View, Text } from "../Themed";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <View style={sharedStyles.sectionContainer}>
      <Text style={sharedStyles.sectionTitle}>{title}</Text>
      <View style={styles.itemContainer}>{children}</View>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  itemContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
});
