import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Home from './Components/Home';
import CreateTask from './Components/CreateTask';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ title: 'My Tasks' }} component={Home} />
        <Stack.Screen name="CreateTask" options={{ title: 'Create new task' }} component={CreateTask} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "#2f2e2f",
    color: "#fff"
  },
});