import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet } from "react-native";
import { Button, FAB } from "react-native-elements";
import Colors from "../../constants/Colors";

type FabProps = {
  img: any;
  loading: boolean;
  firstAction: () => void;
  secondAction: () => void;
};

const CustomFab = ({ img, loading, firstAction, secondAction }: FabProps) => {
  return (
    <Button
      title={
        img ? (
          <Feather name="upload" size={24} color="white" />
        ) : (
          <Entypo name="plus" size={24} color="white" />
        )
      }
      onPress={img ? secondAction : firstAction}
      loading={loading}
      buttonStyle={{
        ...styles.fab,
        backgroundColor: img ? "#F87060" : Colors.light.tint,
      }}
    />
  );
};

export default CustomFab;

const styles = StyleSheet.create({
  fab: {
    marginRight: 20,
    borderRadius: 50,
    width: 50,
  },
});
