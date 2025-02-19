import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from '@react-navigation/stack'
//For components which aren't screens (direct descendants of a navigator), we can access the navigation and route objects using hooks.
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Tabs/Home";
import Profile from "./src/screens/Tabs/Profile";
import Setting from "./src/screens/Tabs/Setting"
import ReducerScreen from "./src/screens/Tabs/ReducerScreen"
import Todo from "./src/screens/Tabs/Todo";
import Animate from "./src/screens/Animate";
import Pan from "./src/screens/Pan";
import Tool from "./src/screens/Tool";
import { Provider } from "react-redux";
import { ourStore } from "./src/redux/store/store";
import Data from "./src/screens/Data";
import PutData from "./src/screens/PutData";
import Formic from "./src/screens/Formic";
import Signup from "./src/screens/Signup";
export default function App() {
  // Stack= createStackNavigator()
  const Root = createStackNavigator();
  return (
    <Provider store={ourStore}>
    <NavigationContainer>
      <Root.Navigator  >
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
      <Root.Screen
      name= {"Setting"}
      component={Setting}
      options={{headerShown: false}}
      />
      <Root.Screen
      name= {'ReducerScreen'}
      component={ReducerScreen}
      options={{headerShown: false}}
      />
      <Root.Screen name= 'Todo' component={Todo} options={{headerShown:false}}/>
      <Root.Screen name= 'Animate' component={Animate} options={{headerShown:false}}/>
      <Root.Screen name= 'Pan' component={Pan} options={{headerShown:false}}/>
      <Root.Screen name= 'Tool' component={Tool} options={{headerShown:false}}/>
      <Root.Screen name= 'Data' component={Data} options={{headerShown:false}}/>
      <Root.Screen name= 'PutData' component={PutData} options={{headerShown:false}}/>
      <Root.Screen name= 'Formic' component={Formic} options={{headerShown:false}}/>
      <Root.Screen name= 'Signup' component={Signup} options={{headerShown:false}}/>


      </Root.Navigator>
    </NavigationContainer>
    </Provider>
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
