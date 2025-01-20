import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
const data = [
  {id:1, name: 'Umer'},
  {id:2, name: 'Haider'},
  {id:3, name: 'sami'},
  {id:4, name:'codek'}
]
  
const Setting = () => {
  return (
<FlatList
style = {styles.container}
data={data}
renderItem={({item})=> <Text style = {styles.row}>{item.name}</Text>}
keyExtractor={(item)=> item.id}
/>

    
  )
}

export default Setting

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
})