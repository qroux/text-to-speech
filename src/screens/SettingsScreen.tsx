import * as React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import * as IntentLauncher from "expo-intent-launcher";

import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Panel</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button
        title="vocal synth settings"
        onPress={() =>
          IntentLauncher.startActivityAsync(
            IntentLauncher.ActivityAction.ACCESSIBILITY_SETTINGS
          )
        }
        buttonStyle={{
          backgroundColor: Colors.light.buttons.primary.active,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
