import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Home from './Components/Home';
import CreateTask from './Components/CreateTask';
import {
  NavigationContainer, DefaultTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#a8dadc',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{
          title: 'My Tasks', headerStyle: {
            backgroundColor: '#457b9d',
          },
          headerTintColor: "white"
        }} component={Home} />
        <Stack.Screen name="CreateTask" options={{
          title: 'Create new task', headerStyle: {
            backgroundColor: '#457b9d',
          },
          headerTintColor: "white"
        }} component={CreateTask} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  appContainer: {
  },
});