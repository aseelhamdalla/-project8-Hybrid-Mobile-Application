import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import Header from "../shared/header";
import history from "../screens/history";

const screens = {
  history: {
    screen: history,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="GameZone" navigation={navigation} />,
      };
    },
  },
};

const historyStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#fff",
    headerStyle: { backgroundColor: "#0272BA", height: 80 },
  },
});

export default historyStack;
