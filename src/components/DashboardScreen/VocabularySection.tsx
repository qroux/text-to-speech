import * as React from "react";
import { StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { sharedStyles } from "../../constants/Container";
import { View, Text } from "../Themed";

interface VocabularySectionProps {
  words: string[];
}

const VocabularySection = ({ words }: VocabularySectionProps) => {
  return (
    <View style={sharedStyles.sectionContainer}>
      <Text style={sharedStyles.sectionTitle}>Vocabulary</Text>
      <FlatList
        data={Object.keys(words)}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>
                  {words[item]} {item}
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
            // <Text style={styles.item}>
            //   {words[item]} {item}
            // </Text>
          );
        }}
      />
    </View>
  );
};

export default VocabularySection;

const styles = StyleSheet.create({
  item: {},
});
