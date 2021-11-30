import React, { useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import * as Localization from "expo-localization";
import i18n from "i18n-js";

import { Text, View } from "../components/Themed";
import { Context as AppContext, WordsObject } from "../context/AppContext";
import Section from "../components/DashboardScreen/Section";
import Item from "../components/DashboardScreen/Item";
import VocabularySection from "../components/DashboardScreen/VocabularySection";
import { Button } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchStorage } from "../context/fetchStorage";
import { sharedStyles } from "../constants/Container";

export default function DashboardScreen() {
  const {
    state: { words, keys },
    actions: { populateWordContext },
  } = useContext(AppContext);
  // Set the key-value pairs for the different languages you want to support.
  i18n.translations = {
    en: { title: "Progress Dashboard Lang: ENG" },
    "fr-FR": { title: "Progress Dashboard Lang: FR" },
  };
  // Set the locale once at the beginning of your app.
  i18n.locale = Localization.locale;
  i18n.fallbacks = true;

  useEffect(() => {
    (async () => {
      const [wordObject, fetchedKeys] = await fetchStorage();
      // @ts-ignore
      if (wordObject) populateWordContext(wordObject, fetchedKeys);
    })();
  }, []);

  return (
    <View style={sharedStyles.pageContainer}>
      <Section title="Overall Progress">
        <Item label="Clicks" value={0} />
        <Item label="Vocabulary" value={0} unit={"words"} />
        <Item label="Goal" value={0} unit={"/ 3000 words"} />
      </Section>
      <VocabularySection words={words} />
    </View>
  );
}

const styles = StyleSheet.create({});
