import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import * as Speech from 'expo-speech';

import { Text, View } from '../components/Themed';
import CameraTest from '../components/CameraTest';

export default function TextScreen() {
  const renderWords = () => {
    const text = 'Water Tell me not';
    return text.split(' ').map((word) => {
      return (
        <Text
          style={{
            fontSize: 18,
            paddingRight: 10,
            paddingBottom: 15,
          }}
          key={word + Math.random()}
          onPress={() => speak(word)}>
          {word}{' '}
        </Text>
      );
    });
  };

  const speak = (word: any) => {
    Speech.VoiceQuality.Enhanced;
    Speech.speak(word, { language: 'en-USA', rate: 0.7 });
  };

  return (
    <ScrollView>
      <View style={styles.container}>{renderWords()}</View>
      <CameraTest />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
