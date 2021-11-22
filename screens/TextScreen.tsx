import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import * as Speech from "expo-speech";

import { Text, View } from "../components/Themed";
import { ImagePicking } from "../components/ImagePicking";
import { recognizeImage } from "../components/helpers/mlkit";

type BlockContent = {
  text: string;
};

type Blocks = BlockContent[];

export default function TextScreen() {
  const [result, setResult] = useState<Blocks>([]);
  const [error, setError] = useState<any>("");

  const concatTextBlocks = () => {
    const humanizedBlocks = result.map((block: BlockContent) =>
      block.text.replace(/(\r\n|\n|\r)/gm, " ")
    );

    return humanizedBlocks.join(" ");
  };

  const renderWords = () => {
    return concatTextBlocks()
      .split(" ")
      .map((word: string) => {
        return (
          <Text
            style={{
              fontSize: 18,
              paddingRight: 10,
              paddingBottom: 15,
            }}
            key={word + Math.random()}
            onPress={() => speak(word)}
          >
            {word}{" "}
          </Text>
        );
      });
  };

  const speak = (word: any) => {
    Speech.VoiceQuality.Enhanced;
    Speech.speak(word, { language: "en-USA", rate: 0.7 });
  };

  return (
    <ScrollView>
      <View style={styles.container}>{renderWords()}</View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ImagePicking
          recognizeImage={recognizeImage}
          setResult={setResult}
          setError={setError}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 15,
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
});
