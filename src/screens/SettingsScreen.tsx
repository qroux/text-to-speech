import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import IntentLauncher from "expo-intent-launcher";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import { Context as AppContext } from "../context/AppContext";

export default function SettingsScreen() {
  const {
    state: { keys },
    actions: { resetWordContext },
  } = useContext(AppContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Panel</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button
        title={"Vocal Synth Settings"}
        onPress={() =>
          IntentLauncher.startActivityAsync(
            IntentLauncher.ActivityAction.ACCESSIBILITY_SETTINGS
          )
        }
        buttonStyle={{
          backgroundColor: Colors.light.buttons.primary.main,
        }}
      />
      <Button
        title="clear all items"
        onPress={async () => {
          await AsyncStorage.multiRemove(keys);
          resetWordContext();
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
