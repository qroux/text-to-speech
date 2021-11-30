import I18n from "i18n-js";
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
// @ts-ignore
import Flag from "react-native-flags";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

interface TouchableFlagProps {
  code: "en" | "fr";
  flag: "GB" | "FR";
  rightMargin?: number;
  lang: string;
  onPress: (code: string) => void;
}

const TouchableFlag = ({
  lang,
  flag,
  code = "en",
  rightMargin = 0,
  onPress,
}: TouchableFlagProps) => {
  const isActive = () => {
    return lang === code;
  };

  return (
    <TouchableWithoutFeedback onPress={() => onPress(code)}>
      <View
        style={{
          opacity: isActive() ? 1 : 0.3,
        }}
      >
        <Flag
          code={flag}
          size={48}
          style={{ marginRight: rightMargin }}
          type="flat"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TouchableFlag;

const styles = StyleSheet.create({
  container: {},
});
