import React, { useContext } from "react";
import { View, Text, FlatList } from "react-native";
import { globalStyles } from "../styles/global";
import moment from "moment";
import { DataContext } from "../context/context";
import Card from "../shared/card";

export default function History() {
  const { history } = useContext(DataContext);

  return history.length > 0 ? (
    <View style={globalStyles.container}>
      <FlatList
        data={history}
        renderItem={({ item }) => (
          <Card>
            <Text style={globalStyles.timeText}>
              {moment(item.time).format("LT")}
            </Text>
            <Text style={globalStyles.titleText}>{item.title}</Text>
            <Text style={globalStyles.descText}>{item.body}</Text>
          </Card>
        )}
      />
    </View>
  ) : (
    <View style={globalStyles.container}>
      <Text style={{ color: "black", fontSize: 30, alignSelf: "center" }}>
        History is empty
      </Text>
    </View>
  );
}
