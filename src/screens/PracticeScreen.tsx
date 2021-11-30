import React, { useContext, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";

import { Context as AppContext } from "../context/AppContext";

import { Text, View } from "../components/Themed";
import { ImagePicking } from "../components/PracticeScreen/ImagePicking";
import { Blocks, recognizeImage } from "../helpers/mlkit";
import { concatTextBlocks, sanitizeString } from "../helpers/resultProcessing";
import { sharedStyles } from "../constants/Container";
import { speak } from "../helpers/voiceSynth";

export default function PracticeScreen() {
  const {
    actions: { incrementWordCount },
  } = useContext(AppContext);
  const [result, setResult] = useState<Blocks>([]);
  const [error, setError] = useState<any>("");

  const renderWords = () => {
    return concatTextBlocks(result)
      .split(" ")
      .map((word: string) => {
        return (
          <Text
            style={styles.words}
            key={word + Math.random()}
            onPress={() => {
              speak(word);
              incrementWordCount(sanitizeString(word));
            }}
          >
            {word}{" "}
          </Text>
        );
      });
  };

  return (
    <View style={sharedStyles.pageContainer}>
      {/* EmptyAnimation + ImagePicking + Header right Icon process CTA component  */}
      <ImagePicking
        recognizeImage={recognizeImage}
        setResult={setResult}
        setError={setError}
        result={result}
      />

      {/* EXTRACTED CONTENT RENDERING */}
      {result.length > 0 ? (
        <ScrollView style={styles.scrollView}>
          {error ? <Text>{error}</Text> : null}
          <View style={styles.container}>{renderWords()}</View>
        </ScrollView>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  scrollView: {},
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  words: {
    fontSize: 18,
    paddingRight: 10,
    paddingBottom: 15,
  },
});
