import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
  },
  timeText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#fff",
  },
  descText: {
    fontSize: 20,
    color: "#fff",
    marginVertical: 6,
    // paddingBottom: 6,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5EDE8",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 6,
    textAlign: "center",
  },
});

export const images = {
  ratings: {
    "1": require("../assets/rating-1.png"),
    "2": require("../assets/rating-2.png"),
    "3": require("../assets/rating-3.png"),
    "4": require("../assets/rating-4.png"),
    "5": require("../assets/rating-5.png"),
  },
};
