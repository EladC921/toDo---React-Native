import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(241, 250, 238, 0.7)",
        borderRadius: 25,
        margin: 5,
        alignContent: "stretch",
      }}
    >
      <View style={{ flex: 1, alignItems: "flex-start", margin: 15 }}>
        <Text
          style={{
            fontWeight: "500",
            margin: 2,
            color: "#3e577a",
            width: 300,
            maxWidth: "200%",
          }}
        >
          {props.title}
        </Text>
        <Text
          style={{
            color: "rgb(112, 112, 112)",
            width: 300,
            maxWidth: "200%",
            marginTop: 5,
          }}
        >
          {props.text}
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-end", paddingRight: "5%" }}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => props.deleteTask(props.id)}
        >
          <Text style={{ color: "red" }}> X </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: "100%",
    height: 60,
    padding: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    borderColor: "black",
    borderBottomWidth: 1,
  },

  part: {
    backgroundColor: "#FFF",
    width: "45%",
  },

  inner: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    flexShrink: 1,
  },

  dlt: {
    width: "10%",
  },

  dltInner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  itemTitle: {
    fontWeight: "500",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },

  itemText: {
    color: "rgb(112, 112, 112)",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
});

export default Task;
