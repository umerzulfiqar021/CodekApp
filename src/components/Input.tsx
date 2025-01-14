import { StyleSheet, Text, View,TextInput } from 'react-native'
import React, { useState } from 'react'

const Input = ({Ref}) => {
    const[input,setInput] = useState('')
  return (
    <View>
        <TextInput
        value= {input}
        style = {styles.Input}
        onChangeText={(value)=> setInput(value)}
        placeholder='Enter value'
        ref={Ref}
        />
      
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
Input: {
    borderWidth: 1,
    padding: 12,
    marginTop: 5,
    width: 99,
    borderRadius: 3,
}
})