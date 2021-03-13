import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import Header from "../shared/header";
import About from "../screens/about";

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="GameZone" navigation={navigation} />,
      };
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#fff",
    headerStyle: { backgroundColor: "#0272BA", height: 80 },
  },
});

export default AboutStack;
