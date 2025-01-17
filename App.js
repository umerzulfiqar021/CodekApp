import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from '@react-navigation/stack'
//For components which aren't screens (direct descendants of a navigator), we can access the navigation and route objects using hooks.
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Tabs/Home";
import Profile from "./src/screens/Tabs/Profile";

export default function App() {
  // Stack= createStackNavigator()
  const Root = createStackNavigator();
  return (
    <NavigationContainer>
      <Root.Navigator >
        <Root.Screen
          name={"Home"}
          component={Home}
          options={{ headerShown: false }}
        />
      <Root.Screen
      name= {"Profile"}
      component={Profile}
      options={{headerShown: false}}
      />
      
      </Root.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
