// import React, { useState } from "react";
// import { AppLoading } from "expo";
// import { View, Text, StyleSheet } from "react-native";
// import * as Font from "expo-font";
// import Home from "./screens/Home";
// import About from "./screens/About";

// const getFonts = () =>
//   Font.loadAsync({
//     "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
//     "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
//   });

// export default function App() {
//   const [fontsLoaded, setFontsLoaded] = useState(false);

//   if (fontsLoaded) {
//     return <Home />;
//   } else {
//     return (
//       <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
//     );
//   }
// }

//one way from documentation
// import * as React from "react";
// import { View, Text, StyleSheet } from "react-native";
// import { useFonts } from "expo-font";

// export default function App() {
//   const [loaded] = useFonts({
//     "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
//     "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
//   });

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={{ fontFamily: "nunito-regular", fontSize: 30 }}>Adam</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

//
//Second way using app loading ---> had to install app loading dependancy
import React, { useState, useContext } from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { View, Text, StyleSheet } from "react-native";
import Navigator from "./routes/drawer";
import { DataProvider } from "./context/context";

export default function App() {
  const [fontsLoaded] = useFonts({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

  if (fontsLoaded) {
    return (
      <DataProvider>
        <Navigator />
      </DataProvider>
    );
  } else {
    return <AppLoading />;
  }
}
