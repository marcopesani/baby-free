import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DiaryScreen from "./screens/DiaryScreen";
import EntryScreen from "./screens/EntryScreen";
import NewEntryScreen from "./screens/NewEntryScreen";
import BabiesScreen from "./screens/BabiesScreen";
import NewBabyScreen from "./screens/NewBabyScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Tab = createBottomTabNavigator();
const BabiesStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

function BabiesStackScreen() {
  return (
    <BabiesStack.Navigator initialRouteName="BabiesHome">
      <BabiesStack.Group>
        <BabiesStack.Screen name="BabiesHome" component={BabiesScreen} />
        <BabiesStack.Screen name="Diary" component={DiaryScreen} />
        <BabiesStack.Screen name="Entry" component={EntryScreen} />
      </BabiesStack.Group>
      <BabiesStack.Group screenOptions={{ presentation: "modal" }}>
        <BabiesStack.Screen name="NewBaby" component={NewBabyScreen} />
        <BabiesStack.Screen name="NewEntry" component={NewEntryScreen} />
      </BabiesStack.Group>
    </BabiesStack.Navigator>
  );
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="SettingsHome" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}

function Routing() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="DiariesTab"
          component={BabiesStackScreen}
          options={{ tabBarLabel: "Diaries" }}
        />
        <Tab.Screen
          name="SettingsTab"
          component={SettingsStackScreen}
          options={{ tabBarLabel: "Settings" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routing;
