import * as React from "react";
import { Button, View } from "react-native";
import { Text } from "react-native-ui-lib"

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
      <Text text30>Text goes here</Text>
      <Button
        title="Go to Diary"
        onPress={() => navigation.navigate("Diary")}
      />
    </View>
  );
}

export default BabiesScreen;
