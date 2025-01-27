import { StyleSheet, Text, View } from 'react-native'
import React, { useReducer } from 'react'
import Input from '../../components/Input'
import { RootState } from '../../redux/store/store'
import { useSelector } from 'react-redux'

const reducer = (state, action)=>{
switch(action.type){
  case 1:
    return{...state, first: action.value}
    case 2:
      return{...state,last: action.value}
}
}

const Reducer = () => {
  const [state,dispatch] = useReducer(reducer,{first: '', last: ''})
  const valueByAmount = useSelector((state:RootState)=>state.counter.number)

  return (
    <View style = {styles.container}>
      
      <Text>Hello! my first name is {state?.first}</Text>
      <Text>my last name is {state?.last}</Text>
      <View>
          <Input placeholder={'Enter first name'} onSubmitEditing={(data)=> {
            dispatch({type:1,value: data})
          }}/>
          <Input placeholder={'Enter last name'} onSubmitEditing={(data)=>{
            dispatch({type:2,value:data})
          }} />
        <Text>{valueByAmount}</Text>  
      </View>
    </View>

  )
}

export default Reducer

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})