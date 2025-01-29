import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import {
  useDeleteDataMutation,
  useGetNamesQuery,
} from "../redux/reduxQuery/query";
import List from "../containers/List";
import { useDispatch } from "react-redux";

const Data = () => {
  const { isError, isLoading, data, error } = useGetNamesQuery(`name`);
// const {id} = data;
  const [deleteData, { data: response, error: apiError }] =
    useDeleteDataMutation();
  
  
  

  // const deleteData1 = ()=> {
  //     dispatch(deleteData(data.id))
  // }
  //     useEffect(() => {
  //   console.log(response,apiError)
  //     }, [response,apiError])

  if (isLoading) {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator animating={true} />
      </View>
    );
  }
  if (isError) {
    return (
      <View style={styles.indicator}>
        <Text style={styles.text}>Sorry no Data to show!!</Text>
      </View>
    );
  }
     return <List items={data} onPressItem={(id) => deleteData(id)} />;
};

export default Data;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  indicator: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#021",
    fontWeight: "bold",
    fontSize: 15,
  },
});
