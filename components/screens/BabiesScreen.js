import * as React from "react";
import { Button, View, Text } from "react-native";

function BabiesScreen({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate("NewBaby")}
          title="New Baby"
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Diary Screen</Text>
      <Button
        title="Go to Diary"
        onPress={() => navigation.navigate("Diary")}
      />
    </View>
  );
}

export default BabiesScreen;
