import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import IntentLauncher from "expo-intent-launcher";

import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import { realmInstance } from "../helpers/realm/realm";
import userData from "../helpers/realm/data/userData";
import User from "../helpers/realm/models/User";

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
        title="realm"
        onPress={async () => {
          const instance = await realmInstance;
          try {
            const result = await userData(instance).add({
              username: "Quentin",
            });
            console.log("ok", result);
          } catch (err) {
            console.error(err);
          }
        }}
      />
      <Button
        title="read"
        onPress={async () => {
          const instance = await realmInstance;
          try {
            const results = await instance.objects("User");
            console.log(JSON.stringify(results));
          } catch (err) {
            console.error(err);
          }
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
