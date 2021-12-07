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
import { useHeaderTitle } from "../hooks/useHeaderTitle";
import { internationalize } from "../helpers/internationalize";
import { PlatformList } from "../constants/PlatformList";

export default function SettingsScreen() {
  const {
    state: { lang, keys },
    actions: { toggleLang, resetWordContext },
  } = useContext(AppContext);

  useHeaderTitle({ lang, ressource: "settings.screenTitle" });

  return (
    <View style={styles.container}>
      <SettingSectionSwitch
        sectionTitle={internationalize("settings.language")}
        onPress={toggleLang}
        lang={lang}
      />

      <SettingSection
        sectionTitle={internationalize("settings.synth.title")}
        label={internationalize("settings.synth.button")}
        onPress={() =>
          IntentLauncher.startActivityAsync(
            IntentLauncher.ActivityAction.ACCESSIBILITY_SETTINGS
          )
        }
        platform={[PlatformList.android]}
      />

      <SettingSection
        sectionTitle={internationalize("settings.storage.title")}
        label={internationalize("settings.storage.button")}
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
