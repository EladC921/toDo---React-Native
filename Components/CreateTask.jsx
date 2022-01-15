import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const CreateTask = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleClick = () => {
    if (text === "" || title === "") {
      alert("Forgot something?");
      return;
    }

    navigation.navigate("Home", {
      title: title,
      text: text,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.formLabel}> Enter the tasks details below:</Text>

      <View>
        <TextInput
          style={styles.input}
          placeholder="Title"
          onChangeText={(t) => setTitle(t)}
        />
        <TextInput
          style={styles.input}
          placeholder="Task"
          onChangeText={(t) => setText(t)}
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.btn}
          onPress={handleClick}
        >
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginBottom: "20%",
  },

  formLabel: {
    fontSize: 20,
    color: "#2f2e2f",
  },

  input: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: "#DCDCDC",
  },

  btnContainer: {
    marginTop: "12%",
  },

  btn: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#DCDCDC",
  },

  btnText: {
    color: "black",
    fontSize: 15,
  },
});

export default CreateTask;
