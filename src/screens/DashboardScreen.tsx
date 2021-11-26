import React, { useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import * as Localization from "expo-localization";
import i18n from "i18n-js";

import { Text, View } from "../components/Themed";
import { Context as AppContext, WordsObject } from "../context/AppContext";
import Section from "../components/DashboardScreen/Section";
import Item from "../components/DashboardScreen/Item";
import VocabularyList from "../components/DashboardScreen/VocabularySection";
import { Button } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchStorage } from "../context/fetchStorage";

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
      const [wordObject, keys] = await fetchStorage();
      // @ts-ignore
      if (wordObject) populateWordContext(wordObject, keys);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Section title="Overall Progress">
        <Item label="Clicks" value={0} />
        <Item label="Vocabulary" value={0} unit={"words"} />
        <Item label="Goal" value={0} unit={"/ 3000 words"} />
      </Section>
      <VocabularyList words={words} />
      <Button
        title="clear all items"
        onPress={async () => {
          const value = await AsyncStorage.getItem("chair");
          console.log("value =", value);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // borderColor: "blue",
    // borderWidth: 2,
    padding: 15,
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
