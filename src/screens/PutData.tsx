import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from '../components/Input'
import { useAddDataMutation } from '../redux/reduxQuery/query'

const PutData = () => {
    const [addData] = useAddDataMutation();
    const addingData = (value)=> {
        addData(value)
    }
  return (
    <View style = {styles.container}>
     <Input  placeholder={'Enter title'} onSubmitEditing={(value)=>addingData(value)}/>
    </View>
  )
}

export default PutData

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
})