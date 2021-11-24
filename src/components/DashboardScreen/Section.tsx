import * as React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "../Themed";
import Item from "./Item";

interface SectionProps {
  title: string;
}

const Section = ({ title }: SectionProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.itemContainer}>
        <Item label="Clicks" value={0} />
        <Item label="Vocabulary" value={0} unit={"words"} />
        <Item label="Goal" value={0} unit={"/ 3000 words"} />
      </View>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    borderColor: "transparent",
    borderRadius: 5,
    borderWidth: 1,
    // flex: 1,
    height: 200,
    width: "100%",
    padding: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 34,
  },
  itemContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
});
