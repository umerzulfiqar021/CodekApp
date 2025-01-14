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
  return (
        
    <View style = {styles.main}>


    
      <ButtonComponent title='go to Profile' onPress={onclick}/>
    </View>
    
  )
}

export default Home

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})