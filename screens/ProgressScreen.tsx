import * as React from "react";
import { StyleSheet, Button, ScrollView, Linking } from "react-native";
import * as Localization from "expo-localization";
import i18n from "i18n-js";

import { Text, View } from "../components/Themed";

export default function ProgressScreen() {
  // Set the key-value pairs for the different languages you want to support.
  i18n.translations = {
    en: { title: "Progress Dashboard Lang: ENG" },
    "fr-FR": { title: "Progress Dashboard Lang: FR" },
  };
  // Set the locale once at the beginning of your app.
  i18n.locale = Localization.locale;
  i18n.fallbacks = true;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t("title")}</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
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
