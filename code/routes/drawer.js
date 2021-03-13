import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

// stacks
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";
import historyStack from "./historyStack";
// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    About: {
      screen: AboutStack,
    },
    History: {
      screen: historyStack,
    },
  },
  {
    drawerBackgroundColor: "#8EC83E",
    contentOptions: {
      inactiveTintColor: "#fff",
      inactiveBackgroundColor: "transparent",
      activeBackgroundColor: "rgba(100,132,42,0.6)",
      labelStyle: {
        fontSize: 20,
        color: "white",
      },
    },
  }
);
export default createAppContainer(RootDrawerNavigator);
