import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import Task from "./Task";

//tmp array of tasks to work with instead of DB
const tmp = [
  {
    id: 0,
    title: "Task1",
    text: "some text",
  },
  {
    id: 1,
    title: "Task2",
    text: "some more text",
  },
];

const Home = ({ route, navigation }) => {
  const [tasks, setTasks] = useState(tmp);
  const [lastId, setLastId] = useState(1); //currently begins with 1 bc of the tmp list, supposed to be initialized with DB latest id

  // useEffect is used to know if a new task was added based on the route.params change
  useEffect(() => {
    if (route.params) {
      let { title, text } = route.params;
      let newobject = {
        id: lastId + 1,
        title: title,
        text: text,
      };
      setLastId((prev) => prev + 1);
      setTasks((prev) => [...prev, newobject]);
    }
  }, [route.params]);

  // handle task deleting
  const deleteTask = (tid) => {
    setTasks((prev) => prev.filter((t) => t.id != tid));
  };

  // tasks map - used in flatlist
  const renderItem = ({ item: t }) => (
    <Task id={t.id} title={t.title} deleteTask={deleteTask} text={t.text} />
  );

  return (
    <View style={styles.wrapper}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20%",
        }}
      >
        {/* Tasks */}
        <SafeAreaView style={styles.listContainer}>
          <FlatList
            style={{ marginTop: 15, marginBottom: 15 }}
            keyExtractor={(t) => t.id}
            data={tasks}
            renderItem={renderItem}
          />
        </SafeAreaView>
      </View>
      {/* Create new task button */}
      <View style={styles.btnContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.btn}
          onPress={() => navigation.navigate("CreateTask")}
        >
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    width: "100%",
    overflow: "scroll",
  },

  container: {
    width: "100%",
    height: "15%",
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  titlesContainer: {
    width: "42%",
  },

  title: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  dummyTitlesContainer: {
    width: "10%",
  },

  titleTxt: {
    fontWeight: "500",
    color: "rgb(112, 112, 112)",
  },

  listContainer: {
    width: "90%",
    height: "85%",
    maxHeight: 450,
    alignItems: "center",
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: "#fff",
  },

  btnContainer: {
    position: "absolute",
    bottom: "10%",
    right: "5%",
  },

  btn: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#52C1E5",
  },

  btnText: {
    color: "black",
    fontSize: 15,
  },
});

export default Home;
