import React, { Component } from "react";
import { View, Text, Button } from "./Themed";
import { getAllWordList } from "../helpers/database";

export default class RealmDisplay extends Component {
  render() {
    return (
      <View>
        <Text>Random</Text>
        <Button
          title="realm"
          onPress={() => {
            getAllWordList();
          }}
        />
      </View>
    );
  }
}
