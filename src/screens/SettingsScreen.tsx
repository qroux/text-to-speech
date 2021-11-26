import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Divider } from "react-native-elements";
import * as IntentLauncher from "expo-intent-launcher";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import { Context as AppContext } from "../context/AppContext";
import { sharedStyles } from "../constants/Container";

export default function SettingsScreen() {
  const {
    state: { keys },
    actions: { resetWordContext },
  } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={sharedStyles.sectionTitle}>Vocal Synthesis</Text>
        <Button
          title={"Change Synth Accent"}
          titleStyle={{ color: Colors.light.primary }}
          onPress={() =>
            IntentLauncher.startActivityAsync(
              IntentLauncher.ActivityAction.ACCESSIBILITY_SETTINGS
            )
          }
          buttonStyle={styles.button}
          type="clear"
        />
      </View>
      <Divider />

      <View style={styles.sectionContainer}>
        <Text style={sharedStyles.sectionTitle}>Storage</Text>
        <Button
          title="Reset App Memory"
          titleStyle={{ color: Colors.light.primary }}
          disabled={keys?.length == 0}
          onPress={async () => {
            await AsyncStorage.multiRemove(keys);
            resetWordContext();
          }}
          buttonStyle={styles.button}
          type="clear"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  sectionContainer: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  button: {
    paddingLeft: 0,
    marginLeft: 0,
    width: "50%",
  },
});
