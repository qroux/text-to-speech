import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";

import { sharedStyles } from "../../constants/Container";
import TouchableFlag from "./TouchableFlag";

interface SettingSectionProps {
  lang: string;
  sectionTitle: string;
  onPress: () => void;
  divider?: boolean;
  disabled?: boolean;
}

const SettingSectionSwitch = ({
  lang,
  sectionTitle,
  onPress,
  divider = true,
  disabled = false,
}: SettingSectionProps) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={sharedStyles.sectionTitle}>{sectionTitle}</Text>
      <View style={styles.flags}>
        <TouchableFlag
          code="fr"
          flag="FR"
          rightMargin={20}
          lang={lang}
          onPress={onPress}
        />
        <TouchableFlag
          code="en"
          flag="GB"
          rightMargin={20}
          lang={lang}
          onPress={onPress}
        />
      </View>

      {divider ? <Divider style={styles.divider} /> : null}
    </View>
  );
};

export default SettingSectionSwitch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  sectionContainer: {
    paddingTop: 15,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  button: {
    width: "80%",
    justifyContent: "flex-start",
  },
  divider: {
    marginTop: 15,
  },
  switch: {
    height: 30,
    maxWidth: 150,
  },
  flags: {
    flexDirection: "row",
    paddingLeft: 5,
  },
});
