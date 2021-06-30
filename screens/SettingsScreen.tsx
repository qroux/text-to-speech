import * as React from 'react';
import { StyleSheet, ScrollView, Button } from 'react-native';
import * as IntentLauncher from 'expo-intent-launcher';

import { Text, View } from '../components/Themed';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Panel</Text>
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      <Button
        title='link to settings'
        onPress={() =>
          IntentLauncher.startActivityAsync(IntentLauncher.ACTION_SETTINGS)
        }
      />
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
