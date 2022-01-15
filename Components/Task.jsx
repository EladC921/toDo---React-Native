import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.dlt}>
        <View style={styles.dltInner}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => props.deleteTask(props.id)}
          >
            <Text style={{ color: "red" }}> X </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.part}>
        <View style={styles.inner}>
          <Text style={styles.itemTitle}>{props.title}</Text>
        </View>
      </View>
      <View style={styles.part}>
        <View style={styles.inner}>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
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
