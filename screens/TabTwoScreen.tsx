import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import * as Speech from 'expo-speech';

import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  const renderWords = () => {
    const text =
      'Water Tell me not, in mournful numbers, Life is but an empty dream! For the soul is dead that slumbers, And things are not what they seem. Life is real! Life is earnest! And the grave is not its goal; Dust thou art, to dust returnest, Was not spoken of the soul. Not enjoyment, and not sorrow, Is our destined end or way; But to act, that each tomorrow Find us farther than today. Art is long, and Time is fleeting, And our hearts, though stout and brave, Still, like muffled drums, are beating Funeral marches to the grave. In the world’s broad field of battle, In the bivouac of Life, Be not like dumb, driven cattle! Be a hero in the strife! Trust no Future, howe’er pleasant! Let the dead Past bury its dead! Act,—act in the living Present! Heart within, and God o’erhead! Lives of great men all remind us We can make our lives sublime, And, departing, leave behind us Footprints on the sands of time. Footprints, that perhaps another, Sailing o’er life’s solemn main, A forlorn and shipwrecked brother, Seeing, shall take heart again. Let us, then, be up and doing, With a heart for any fate. Still achieving, still pursuing, Learn to labor and to wait.';
    return text.split(' ').map((word) => {
      return (
        <Text
          style={{
            fontSize: 24,
            paddingRight: 15,
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
