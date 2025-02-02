import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Input from '../../components/Input'
const STORAGE_KEY = 'ASYNC_STORAGE_NAME_EXAMPLE'

const Profile = ({route}) => {
  const [name,setName] = useState('Umer')

  async function loadName(){
    try {
      const name = await AsyncStorage.getItem(STORAGE_KEY)
      if (name == null) return
      setName(name)
    } catch (e) {
      console.log('failed to load name');
      
    }
  }
  async function saveName(name){
    try {
      await AsyncStorage.setItem(STORAGE_KEY,name)
      setName(name)
    } catch (e) {
      console.log('failed to save name');
      
    }
  }
  useEffect(()=>{
    loadName()
  },[])
  return (
    <View style = {styles.main}>

      {/* <Text>{route.params.parama}</Text>  */}
      <Input onSubmitEditing={(value)=>{
        saveName(value)
      }}
      
      />

      <Text>Hello {name}</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
}
})