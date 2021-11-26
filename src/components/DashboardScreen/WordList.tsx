import * as React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

interface WordListProps {
  list: any;
}

const WordList = ({ list }: WordListProps) => {
  return (
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
  );
};

export default WordList;

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
