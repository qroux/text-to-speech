import React, { useContext, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import * as Speech from "expo-speech";

import { Context as AppContext } from "../context/AppContext";

import { Text, View } from "../components/Themed";
import { ImagePicking } from "../components/ImagePicking";
import { recognizeImage } from "../components/helpers/mlkit";
import { Button } from "react-native-elements";

type BlockContent = {
  text: string;
};

type Blocks = BlockContent[];

export default function PracticeScreen() {
  const {
    state: { words },
    actions: { toggleLang, incrementWordCount },
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
            style={{
              fontSize: 18,
              paddingRight: 10,
              paddingBottom: 15,
            }}
            key={word + Math.random()}
            onPress={() => {
              speak(word);
              incrementWordCount(word);
            }}
          >
            {word}{" "}
          </Text>
        );
      });
  };

  return (
    <ScrollView>
      {/* <Button
        title={words.real.toString()}
        onPress={() => {
          incrementWordCount();
        }}
      /> */}
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
