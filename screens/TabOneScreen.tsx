import * as React from 'react';
import { StyleSheet, Button } from 'react-native';
import * as Speech from 'expo-speech';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  const speak = () => {
    const thingToSay =
      'Tell me not, in mournful numbers, Life is but an empty dream! For the soul is dead that slumbers, And things are not what they seem. Life is real! Life is earnest! And the grave is not its goal. Dust thou art, to dust returnest, Was not spoken of the soul.';

    Speech.speak(thingToSay, { language: 'en-US', rate: 0.6 });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      <Button title='test' onPress={speak} />
      <EditScreenInfo path='/screens/TabOneScreen.tsx' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
