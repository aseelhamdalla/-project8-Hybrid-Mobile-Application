import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles, images } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import MedicineForm from "./medicineForm";
import { DataContext } from "../context/context";
import moment from "moment";

export default function ReviewDetails({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const { reviews, setReviews } = useContext(DataContext);
  const deleteHandler = (key) => {
    Alert.alert("Are you sure?", "This item will be permanintly deleted", [
      {
        text: "Cancel",
        onPress: () => console.log(reviews),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          const newData = reviews.filter((item) => {
            return item.key != key;
          });
          setReviews([...newData]);
          navigation.goBack();
        },
      },
    ]);
  };
  const editHandler = (item) => {
    const newData = reviews.filter((item) => {
      return item.key != navigation.getParam("key");
    });
    item.key = navigation.getParam("key");
    setReviews([item, ...newData]);
    setModalOpen(false);
    navigation.goBack();
  };
  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setModalOpen(false)}
            />
            <MedicineForm
              addReview={editHandler}
              itemKey={navigation.getParam("key")}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Image style={styles.image} source={require("../assets/medicine2.png")} />
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={globalStyles.timeText}>
            {moment(navigation.getParam("time")).format("LT")}
          </Text>
          <Text style={globalStyles.titleText}>
            {navigation.getParam("title")}
          </Text>
          <View style={styles.rating}>
            <Text style={globalStyles.descText}>
              {navigation.getParam("body")}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <View style={styles.removeIcon}>
            <MaterialIcons
              name="edit"
              color="#fff"
              size={30}
              style={styles.iconContainer}
              onPress={() => setModalOpen(true)}
            />
          </View>
          <View style={styles.addIcon}>
            <MaterialIcons
              name="delete"
              color="#fff"
              size={30}
              style={styles.iconContainer}
              onPress={() => deleteHandler(navigation.getParam("key"))}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    fontWeight: "900",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  addIcon: {
    alignSelf: "center",
    width: 60,
    height: 50,
    color: "#fff",
    backgroundColor: "#DE5C48",
    borderRadius: 50,
    marginTop: 20,
    marginHorizontal: 10,
  },
  removeIcon: {
    alignSelf: "center",
    width: 60,
    height: 50,
    color: "#fff",
    backgroundColor: "#EAA928",
    borderRadius: 50,
    marginTop: 20,
    marginHorizontal: 10,
  },
  image: {
    alignSelf: "center",
  },
  card: {
    width: "99%",
    borderRadius: 20,
    elevation: 10,
    backgroundColor: "#0272BA",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    paddingBottom: 35,
    // overflow:"hidden"
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  modalContainer: {
    flex: 1,
    padding: 20,
  },
  modalToggle: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    fontWeight: "900",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
