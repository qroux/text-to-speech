import React, { useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import i18n from "i18n-js";

import { View } from "../components/Themed";
import { Context as AppContext } from "../context/AppContext";
import Section from "../components/DashboardScreen/Section";
import Item from "../components/DashboardScreen/Item";
import VocabularySection from "../components/DashboardScreen/VocabularySection";
import { fetchStorage } from "../context/fetchStorage";
import { sharedStyles } from "../constants/Container";
import { useHeaderTitle } from "../hooks/useHeaderTitle";

export default function DashboardScreen() {
  const {
    state: { lang, words, keys },
    actions: { populateWordContext },
  } = useContext(AppContext);

  useHeaderTitle({ lang, ressource: "dashboard.screenTitle" });

  useEffect(() => {
    (async () => {
      const [wordObject, fetchedKeys] = await fetchStorage();
      // @ts-ignore
      if (wordObject) populateWordContext(wordObject, fetchedKeys);
    })();
  }, []);

  return (
    <View style={sharedStyles.pageContainer}>
      <Section title={i18n.t("dashboard.title")}>
        <Item label={i18n.t("dashboard.items.clicks")} value={0} />
        <Item
          label={i18n.t("dashboard.items.vocabulary.label")}
          value={0}
          unit={i18n.t("dashboard.items.vocabulary.unit")}
        />
        <Item
          label={i18n.t("dashboard.items.goal.label")}
          value={0}
          unit={`/ 3000 ${i18n.t("dashboard.items.goal.unit")}`}
        />
      </Section>
      <VocabularySection words={words} />
    </View>
  );
}

const styles = StyleSheet.create({});
