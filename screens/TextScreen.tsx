import React, { useState } from "react";
import { StyleSheet, ScrollView, Button } from "react-native";
import * as Speech from "expo-speech";

import { Text, View } from "../components/Themed";
import { ImagePicking } from "../components/ImagePicking";
import { recognizeImage } from "../components/helpers/mlkit";

type LineContent = {
  text: string;
};

type Line = {
  lines: LineContent[];
};

export default function TextScreen() {
  const [result, setResult] = useState<any>([]);
  const [error, setError] = useState<any>("");

  const concatLines = () => {
    const text: string[] = [];
    result.forEach((line: Line) => text.push(line.lines[0].text));
    return text.join(" ");
  };

  const renderWords = () => {
    return concatLines()
      .split(" ")
      .map((word) => {
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
      <View style={styles.container}>
        {renderWords()}
        {/* <Text>{concatLines()}</Text> */}
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ImagePicking
          recognizeImage={recognizeImage}
          setResult={setResult}
          setError={setError}
        />
        <Text>error: {error}</Text>
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
