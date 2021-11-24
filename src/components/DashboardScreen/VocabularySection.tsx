import * as React from "react";
import { StyleSheet } from "react-native";
import { ListItem, Divider } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { sharedStyles } from "../../constants/Container";
import { View, Text, useThemeColor } from "../Themed";

interface VocabularySectionProps {
  words: string[];
}

const VocabularySection = ({ words }: VocabularySectionProps) => {
  var sortable = [];
  for (var word in words) {
    sortable.push([word, words[word]]);
  }

  const sortedList = sortable.sort((a, b) => b[1] - a[1]);
  return (
    <View style={sharedStyles.sectionContainer}>
      <Text style={sharedStyles.sectionTitle}>Vocabulary</Text>
      <FlatList
        data={Object.keys(sortedList)}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemContainer}>
              <View style={styles.content}>
                <Text style={styles.item}>{sortedList[item][0]}</Text>
                <Text style={styles.item}>{sortedList[item][1]}</Text>
              </View>
              <Divider />
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
  item: {
    fontSize: 18,
    paddingBottom: 15,
    paddingTop: 15,
  },
});
