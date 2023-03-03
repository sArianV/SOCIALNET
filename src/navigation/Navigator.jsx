import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screens } from "./screens";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          screens.map((screen) => {
            return (
              <Stack.Screen
                key={screen.id}
                name={screen.name}
                component={screen.component}
                options={screen.options}
              />
            );
          })
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
