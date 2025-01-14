import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = ({route}) => {
  return (
    <View style = {styles.main}>

      <Text>{route.params.parama}</Text> 
      
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