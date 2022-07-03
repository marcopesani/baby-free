import * as React from "react";
import { Button, View, Text } from "react-native";

function EntryScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Entry Screen</Text>
      <Button
        title="Go to Diary"
        onPress={() => navigation.navigate("Diary")}
      />
    </View>
  );
}

export default EntryScreen;
