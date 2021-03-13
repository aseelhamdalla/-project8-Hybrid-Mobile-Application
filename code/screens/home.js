import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import { DataContext } from "../context/context";
import Card from "../shared/card";
import MedicineForm from "./medicineForm";
import moment from "moment";

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const { reviews, setReviews, history, setHistory } = useContext(DataContext);

  const addReview = (review) => {
    review.key = Math.random().toString();
    review.time = review.time;
    console.log(review.time);
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };

  const completedHandler = (key) => {
    Alert.alert(
      "Have you taken this medication?",
      "Once marked as completed will be moved to history",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            //delete from reviews
            const newData = reviews.filter((item) => {
              return item.key != key;
            });
            setReviews([...newData]);
            //Add to history
            let completedItem = {};
            reviews.forEach((item) => {
              if (item.key == key) {
                completedItem = item;
              }
            });
            setHistory([...history, completedItem]);
            // console.log("completedItem");
            // console.log(completedItem);
          },
        },
      ]
    );
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
            <MedicineForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <View style={styles.addIcon}>
        <MaterialIcons
          name="add"
          color="#fff"
          size={30}
          style={styles.modalToggle}
          onPress={() => setModalOpen(true)}
        />
      </View>

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("MedicineDetails", item)}
          >
            <Card>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={globalStyles.timeText}>
                  {moment(item.time).format("LT")}
                </Text>
                <TouchableOpacity onPress={() => completedHandler(item.key)}>
                  <View style={styles.completedIconContainer}>
                    <MaterialIcons
                      name="check"
                      size={30}
                      style={styles.completedIcon}
                    />
                  </View>
                </TouchableOpacity>
              </View>

              <Text style={globalStyles.titleText}>{item.title}</Text>
              <Text style={globalStyles.descText}>{item.body}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  completedIcon: {
    color: "white",
    marginLeft: 2,
  },
  completedIconContainer: {
    height: 35,
    width: 35,
    borderRadius: 35 / 2,
    backgroundColor: "#8EC83E",
    justifyContent: "center",
    marginTop: -7,
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
  addIcon: {
    alignSelf: "center",
    width: 60,
    height: 50,
    color: "#fff",
    backgroundColor: "#0272BA",
    borderRadius: 50,
  },
});
