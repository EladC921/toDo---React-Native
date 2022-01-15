import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <View style={styles.deleteWrapper}>
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
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(241, 250, 238, 0.7)",
    borderRadius: 25,
    margin: 5,
    alignContent: "stretch",
  },

  textWrapper: {
    flex: 1,
    alignItems: "flex-start",
    margin: 15,
  },

  title: {
    fontWeight: "500",
    margin: 2,
    color: "#3e577a",
    width: 300,
    maxWidth: "200%",
  },

  text: {
    color: "rgb(112, 112, 112)",
    width: 300,
    maxWidth: "200%",
    marginTop: 5,
  },

  deleteWrapper: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: "5%",
  },
});

export default Task;
