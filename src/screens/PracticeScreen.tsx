import React, { useContext, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import * as Speech from "expo-speech";

import { Context as AppContext } from "../context/AppContext";

import { Text, View } from "../components/Themed";
import { ImagePicking } from "../components/PracticeScreen/ImagePicking";
import { recognizeImage } from "../components/helpers/mlkit";
import { sanitizeString } from "../components/helpers/sanitizeString";

type BlockContent = {
  text: string;
};

type Blocks = BlockContent[];

export default function PracticeScreen() {
  const {
    actions: { incrementWordCount },
  } = useContext(AppContext);
  const [result, setResult] = useState<Blocks>([]);
  const [error, setError] = useState<any>("");

  const concatTextBlocks = () => {
    const humanizedBlocks = result.map((block: BlockContent) =>
      block.text.replace(/(\r\n|\n|\r)/gm, " ")
    );
    return humanizedBlocks.join(" ");
  };

  const speak = (word: any) => {
    Speech.VoiceQuality.Enhanced;
    Speech.speak(word, { language: "en-USA", rate: 0.7 });
  };

  const renderWords = () => {
    return concatTextBlocks()
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
    <View
      style={{
        flex: 1,
      }}
    >
      <ImagePicking
        recognizeImage={recognizeImage}
        setResult={setResult}
        setError={setError}
      />

      <ScrollView style={styles.scrollView}>
        {error ? <Text>{error}</Text> : null}
        <View style={styles.container}>{renderWords()}</View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {},
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 15,
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
