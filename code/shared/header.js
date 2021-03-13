import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ title, navigation }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <Image
        source={require("../assets/logo-capsula.png")}
        style={styles.headerImage}
      />
      <MaterialIcons
        name="menu"
        color="#fff"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "cover",
    justifyContent: "center",
    backgroundColor: "#0272BA",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 16,
  },
  headerTitle: {
    flexDirection: "row",
  },
  headerImage: {
    width: 95,
    height: 31,
    marginHorizontal: 10,
  },
});
