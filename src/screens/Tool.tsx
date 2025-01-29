import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonComponent from '../components/ButtonComponent'
import { useDispatch, useSelector } from 'react-redux'
import { ourStore, RootState } from '../redux/store/store'
import { Changename, decrementNumber, increment, incrementByAmount, resetValue } from '../redux/slice/counterSlice'
import Input from '../components/Input'

const Tool = () => {
    const valueByAmount = useSelector((state:RootState)=>state.counter.number)
    const {name,age,rollNo} = useSelector((state: RootState)=> state.counter)
    const dipatch = useDispatch();
    const  incremnet = (input)=> {
        dipatch(incrementByAmount(input))
    }
   
  return (
    <View style = {styles.container}> 
     
     {/* <ButtonComponent title='increment'  onPress={()=>dipatch(incrementByAmount(4))}/>  */}
     <View style = {styles.button}>
        <ButtonComponent title='Reset Value'  onPress={()=>dipatch(resetValue())}/> 
     <ButtonComponent title='Decrement' onPress={()=>dipatch(decrementNumber())}/>
     <ButtonComponent title='Increment' onPress={()=>dipatch(increment())}/>

         </View>
     
{/* input style     */}
<View style = {styles.input}> 
<Input placeholder={'enter value'} onSubmitEditing={(value)=>incremnet(value)}/>
<Text style = {{marginTop: 10,fontSize: 15,fontStyle: 'italic',borderWidth: 0.5, padding:5,borderRadius: 5,width: 30,height:30}}>{valueByAmount}</Text>
</View>



       {/* name component */}
        <Input placeholder={'enter Name'} style={{}} onSubmitEditing={(value)=> dipatch(Changename(value))}/>
        <Text style = {styles.text}>My name is {name} </Text>
        <Text style = {styles.text2}> My age is  {age} </Text>
        <Text style = {styles.text2}>My Rollno is {rollNo} </Text>




    
    </View>
  )
}

export default Tool

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: 18,
        marginTop: 20,
        fontWeight: 'bold',

    },
    text2:{
        fontWeight: 'bold',
        fontSize: 18,
    },
    button:{
        padding: 6,
        flexDirection: 'row',
        gap: 20
    },
    input:{
    flexDirection: 'row',
    gap: 20,
    padding: 20

    }
})