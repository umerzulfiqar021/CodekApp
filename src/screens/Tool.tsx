import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonComponent from '../components/ButtonComponent'
import { useDispatch, useSelector } from 'react-redux'
import { ourStore, RootState } from '../redux/store/store'
import { incrementByAmount, resetValue } from '../redux/slice/counterSlice'
import Input from '../components/Input'

const Tool = () => {
    const valueByAmount = useSelector((state:RootState)=>state.counter.number)
    const dipatch = useDispatch();
    const  incremnet = (input)=> {
        dipatch(incrementByAmount(input))
    }
  return (
    <View style = {styles.container}> 
     
     {/* <ButtonComponent title='increment'  onPress={()=>dipatch(incrementByAmount(4))}/>  */}
     <ButtonComponent title='Reset'  onPress={()=>dipatch(resetValue())}/> 
        <Input placeholder={'enter value'} onSubmitEditing={(value)=>incremnet(value)}/>


     <Text>{valueByAmount}</Text>
    </View>
  )
}

export default Tool

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})