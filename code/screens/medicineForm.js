import React, { useContext, useState } from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../styles/global.js";
import { Formik } from "formik";
import * as yup from "yup";
import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import FlatButton from "../shared/button.js";
import { DataContext } from "../context/context";

const reviewSchema = yup.object({
  title: yup
    .string()
    .required()
    .min(4)
    .max(28),
  body: yup
    .string()
    .required()
    .min(8)
    .max(55),
  time: yup.string().required(),
});

export default function ReviewForm({ addReview, itemKey }) {
  const { reviews, setReviews } = useContext(DataContext);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  let oldValues;
  reviews.forEach((item) => {
    if (item.key == itemKey) {
      oldValues = item;
    }
  });
  let formInitial;
  if (itemKey) {
    formInitial = {
      title: oldValues.title,
      body: oldValues.body,
      time: oldValues.time,
    };
  } else {
    formInitial = { title: "", body: "", time: "" };
  }
  const [dateValue, setDateValue] = itemKey
    ? useState(moment(oldValues.time).format("LT"))
    : useState("");
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
  };

  // console.log(oldValues);
  return (
    <View style={[globalStyles.container, { backgroundColor: "white" }]}>
      <Formik
        initialValues={formInitial}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
          addReview(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Medicine Name"
              onChangeText={props.handleChange("title")}
              onBlur={props.handleBlur("title")}
              value={props.values.title}
            />
            {/* only if the left value is a valid string, will the right value be displayed */}
            <Text style={globalStyles.errorText}>
              {props.touched.title && props.errors.title}
            </Text>
            <TextInput
              style={globalStyles.input}
              multiline
              minHeight={60}
              placeholder="Description"
              onChangeText={props.handleChange("body")}
              onBlur={props.handleBlur("body")}
              value={props.values.body}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.body && props.errors.body}
            </Text>
            <FlatButton
              icon={dateValue ? "" : "alarm"}
              bgColor="white"
              borderColor="#DDDDDD"
              borderWidth={1}
              textColor={dateValue ? "black" : "#A0A0A0"}
              fontWeight="normal"
              justifyContent="flex-start"
              text={dateValue ? dateValue : "Choose medication time"}
              onPress={showDatePicker}
            />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="time"
              onConfirm={(date) => {
                handleConfirm();
                props.setFieldValue("time", date);
                setDateValue(moment(date).format("LT"));
              }}
              onCancel={() => {
                hideDatePicker();
                props.setFieldTouched("time");
              }}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.time && props.errors.time}
            </Text>
            <FlatButton onPress={props.handleSubmit} text="submit" />
          </View>
        )}
      </Formik>
    </View>
  );
}
