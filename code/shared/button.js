import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
// import defaultProps from "defaultProps";

export default function FlatButton({
  text,
  onPress,
  bgColor,
  textColor,
  fontWeight,
  justifyContent,
  borderColor,
  borderWidth,
  icon,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.button,
          {
            backgroundColor: bgColor,
            borderColor: borderColor,
            borderWidth: borderWidth,
          },
        ]}
      >
        <View style={{ flexDirection: "row", justifyContent: justifyContent }}>
          <Text
            style={[
              { color: textColor, fontWeight: fontWeight },
              styles.buttonText,
            ]}
          >
            {text}
          </Text>
          {icon ? (
            <MaterialIcons
              name={icon}
              size={24}
              style={[{ color: textColor }, styles.icon]}
            />
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
}
FlatButton.defaultProps = {
  bgColor: "#0272BA",
  textColor: "white",
  justifyContent: "center",
  fontWeight: "bold",
};
const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
  },
  buttonText: {
    textTransform: "uppercase",
    fontSize: 16,
    // textAlign: "right",
  },
  icon: {
    fontWeight: "bold",
    paddingLeft: 10,
  },
});
