import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import {
  useAddDataMutation,
  useUpdateDataMutation,
} from "../redux/reduxQuery/query";
import ButtonComponent from "../components/ButtonComponent";

const PutData = () => {
  const [addData] = useAddDataMutation();
  const [updateData] = useUpdateDataMutation();
  const addingData = (value) => {
    addData(value);
  };
  const [target, setTarget] = useState(0);
  return (
    <View style={styles.container}>
      <Input
        placeholder={"Enter title"}
        onSubmitEditing={(value) => addingData(value)}
      />
      <Input
        placeholder={"Update Value"}
        onSubmitEditing={(name) => updateData({ target, name })}
      />
      <View style={styles.second}>
        <ButtonComponent
          title="-"
          onPress={() => setTarget((pre) => pre - 1)}
        />
        <Text style={styles.text}>{target}</Text>
        <ButtonComponent
          title="+"
          onPress={() => setTarget((pre) => pre + 1)}
        />
      </View>
    </View>
  );
};

export default PutData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  second: {
    flexDirection: "row",
    padding: 20,
    gap: 15,
  },
  text: {
    fontSize: 25,
  },
});
