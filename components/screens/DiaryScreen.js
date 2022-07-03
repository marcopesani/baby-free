import * as React from "react";
import { Button, View, Text } from "react-native";

function DiaryScreen({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate("NewEntry")}
          title="New Entry"
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Diary Screen</Text>
      <Button
        title="Go to Entry"
        onPress={() => navigation.navigate("Entry")}
      />
    </View>
  );
}

export default DiaryScreen;
