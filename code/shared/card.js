import React from "react";
import { StyleSheet, View } from "react-native";
var randomColor = require("randomcolor");

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "99%",
    height: 190,
    borderRadius: 20,
    elevation: 10,
    backgroundColor: "#0272BA",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    // overflow:"hidden"
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 18,
  },
});
