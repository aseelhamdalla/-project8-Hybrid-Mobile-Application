import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import Header from "../shared/header";
import Home from "../screens/home";
import MedicineDetails from "../screens/medicineDetails";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="GameZone" navigation={navigation} />,
      };
    },
  },
  MedicineDetails: {
    screen: MedicineDetails,
    navigationOptions: {
      title: "Medicine Details",
    },
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#fff",
    headerStyle: { backgroundColor: "#0272BA", height: 80 },
  },
});

export default HomeStack;
