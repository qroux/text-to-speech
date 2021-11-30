import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Divider } from "react-native-elements";
import Colors from "../../constants/Colors";
import { sharedStyles } from "../../constants/Container";

interface SettingSectionProps {
  sectionTitle: string;
  label: string;
  onPress: () => void;
  divider?: boolean;
  disabled?: boolean;
}

const SettingSectionButton = ({
  sectionTitle,
  label,
  onPress,
  divider = true,
  disabled = false,
}: SettingSectionProps) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={sharedStyles.sectionTitle}>{sectionTitle}</Text>
      <Button
        title={label}
        titleStyle={{
          color: Colors.light.primary,
        }}
        onPress={onPress}
        buttonStyle={styles.button}
        type="clear"
        disabled={disabled}
      />
      {divider ? <Divider style={styles.divider} /> : null}
    </View>
  );
};

export default SettingSectionButton;

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
});
