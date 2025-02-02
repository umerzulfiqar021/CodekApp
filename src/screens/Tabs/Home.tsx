import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { memo } from "react";
import ButtonComponent from "../../components/ButtonComponent";

import { useNavigation, useRoute } from "@react-navigation/native"; // instead of prop we can use hooks
import Reducer from "./ReducerScreen";
import Profile from "./Profile";
function forMemo({ title }) {
  return <Text>{title}</Text>;
}
const Memo = memo(forMemo);
const Home = ({ navigation, route }) => {
  const onClick = (name) => {
    navigation.push(name);
  };

  return (
    <View style={styles.main}>
      <ButtonComponent
        title="GO to Settings"
        onPress={() => onClick("Setting")}
      />
      <ButtonComponent title="go to Profile" onPress={() => onClick('Profile')} />
      <ButtonComponent
        title="Reducer"
        onPress={() => onClick("ReducerScreen")}
      />
      <ButtonComponent
        title="Animate Screen"
        onPress={() => onClick("Animate")}
      />
      <ButtonComponent title="Go to Todo" onPress={() => onClick("Todo")} />
      <ButtonComponent title="Pan Screen" onPress={() => onClick("Pan")} />
      <ButtonComponent title="Redux Tool Kit" onPress={() => onClick("Tool")} />
      <ButtonComponent title="View Data" onPress={() => onClick("Data")} />
      <ButtonComponent title="Post & Put" onPress={() => onClick("PutData")} />
      <ButtonComponent title="Go to Formic && Login" onPress={() => onClick("Formic")} />
      <ButtonComponent title="Go to Signup Screen" onPress={() => onClick("Signup")} />


    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    // backgroundColor: "#039",
    backgroundColor: "#e6e6e6",
  },
});
