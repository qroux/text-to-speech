import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Divider, Button } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import Colors from "../../constants/Colors";
import { sharedStyles } from "../../constants/Container";
import { View, Text } from "../Themed";

interface VocabularySectionProps {
  words: string[];
}

const VocabularySection = ({ words }: VocabularySectionProps) => {
  const [sorting, setSorting] = useState(true);
  const sortingIndex = sorting ? 1 : 0;

  const sortedList = () => {
    const sortable = [];
    for (let word in words) sortable.push([word, words[word]]);

    return sortingIndex
      ? sortable.sort((a, b) => b[1] - a[1])
      : sortable.sort((a, b) => a[0].localeCompare(b[0]));
  };

  const list = sortedList();

  return (
    <View style={sharedStyles.sectionContainer}>
      <View style={styles.headerContainer}>
        <Text style={sharedStyles.sectionTitle}>Vocabulary</Text>
        <Button
          icon={
            <FontAwesome
              name={sortingIndex ? "sort-numeric-desc" : "sort-alpha-asc"}
              size={28}
              color={Colors.light.primary}
            />
          }
          onPress={() => {
            setSorting(!sorting);
          }}
          buttonStyle={styles.button}
          type="clear"
        />
      </View>

      <FlatList
        data={Object.keys(list)}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemContainer}>
              <View style={styles.content}>
                <Text style={styles.item}>{list[item][0]}</Text>
                <Text style={{ ...styles.item, paddingRight: 15 }}>
                  {list[item][1]}
                </Text>
              </View>
              {/* <Divider /> */}
            </View>
          );
        }}
      />
    </View>
  );
};

export default VocabularySection;

const styles = StyleSheet.create({
  itemContainer: {},
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  item: {
    fontSize: 18,
    paddingBottom: 15,
    paddingTop: 15,
  },
  buttonContainer: {
    // flexDirection: "row",
    // justifyContent: "flex-end",
  },
  button: {
    width: 45,
  },
});
