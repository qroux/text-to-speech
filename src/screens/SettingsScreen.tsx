import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Divider } from "react-native-elements";
import * as IntentLauncher from "expo-intent-launcher";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import { Context as AppContext } from "../context/AppContext";
import { sharedStyles } from "../constants/Container";
import SettingSection from "../components/SettingsScreen/SettingSectionButton";
import SettingSectionSwitch from "../components/SettingsScreen/SettingSectionSwitch";

export default function SettingsScreen() {
  const {
    state: { lang, keys },
    actions: { toggleLang, resetWordContext },
  } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <SettingSectionSwitch
        sectionTitle="Language"
        onPress={toggleLang}
        lang={lang}
      />

      <SettingSection
        sectionTitle="Change Synth Accent"
        label="Change Synth Accent"
        onPress={() =>
          IntentLauncher.startActivityAsync(
            IntentLauncher.ActivityAction.ACCESSIBILITY_SETTINGS
          )
        }
      />

      <SettingSection
        sectionTitle="Storage"
        label="Reset App Memory"
        onPress={async () => {
          await AsyncStorage.multiRemove(keys);
          resetWordContext();
        }}
        disabled={keys?.length == 0}
        divider={false}
      />
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
