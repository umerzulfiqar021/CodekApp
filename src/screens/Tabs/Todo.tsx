import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useReducer } from 'react'
import Input from '../../components/Input'
import List from '../../containers/List'
const types = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
  }
  //id
  const randomId = () => Math.random().toString()
  //createitems function
  const createItem = (title) => ({ id: randomId(), title })
  //actions
  const actionCreators = {
    add: (title) => ({ type: types.ADD, payload: createItem(title) }),
    remove: (id) => ({ type: types.REMOVE, payload: id }),
  }
  //reducer function
const reducer = (state, action)=>{
    switch (action.type) {
        case types.ADD:
          return { ...state, items: [...state.items, action.payload] }
        case types.REMOVE:
          return {
            ...state,
            items: state.items.filter((item) => item.id !== action.payload),
          }
      }
    }
const Todo = () => {
    //usereducer
    const [state,dispatch] = useReducer(reducer,{ items: [
        createItem('Click to remove'),
        createItem('Learn React Native'),
        createItem('Write Code'),
        createItem('Ship App'),
      ],})
  return (
    <View style = {styles.header}>
    <Text style = {styles.title}>To-Do</Text>
    <Input
        placeholder={'Type a todo, then hit enter!'}
        onSubmitEditing={(title) => dispatch(actionCreators.add(title))}
        style={{width: '100%', padding: 15}}
      />
      <List
        items={state.items}
        onPressItem={(id) => dispatch(actionCreators.remove(id))}
      />
    </View>
   
  )
}

export default Todo

const styles = StyleSheet.create({
    header: {
        // backgroundColor: 'rgb(59, 108, 212)',
        padding: 15,
      },
      title: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        marginTop:18
      },
})