import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { memo,} from 'react';
import ButtonComponent from '../../components/ButtonComponent';

import { useNavigation,useRoute } from '@react-navigation/native'; // instead of prop we can use hooks
function forMemo({title}){

  return <Text>{title}</Text>
}
const Memo = memo(forMemo)
const Home = ({navigation,route}) => {
    const onclick = ()=> {
        navigation.push('Profile',{parama: 'Hello'}) //giving data
    }
    const onclick2 = ()=> {
      navigation.push('Setting')
    }
    const onclick3 = ()=> {
      navigation.push('ReducerScreen')
    }
    const onclick4 = ()=> {
      navigation.push('Todo')
    }
    const onclick5 = ()=> {
      navigation.push('Animate')
    }

  return (
        
    <View style = {styles.main}>


    <ButtonComponent title='GO to Settings' onPress={onclick2}/>
      <ButtonComponent title='go to Profile' onPress={onclick}/>
      <ButtonComponent  title='Reducer' onPress={onclick3}/>
      <ButtonComponent  title='To-do' onPress={onclick4}/>
      <ButtonComponent  title='Animate' onPress={onclick5}/>

    </View>
    
  )
}

export default Home

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#039'
        
    }
})