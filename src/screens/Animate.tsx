import { StyleSheet, Text, View,Animated, useAnimatedValue, SafeAreaView,Image } from 'react-native'
import React from 'react'
import ButtonComponent from '../components/ButtonComponent'

const Animate = () => {
const fade = useAnimatedValue(0)

const fadeIn = ()=> {
Animated.timing(fade,{
    toValue:1,
    duration:5000,
    useNativeDriver:true,

}).start();
}
const fadeOut = ()=> {
Animated.timing(fade,{
    toValue: 0,
    duration: 3000,
    useNativeDriver: true,

}).start()
};
  
    return (
        
          <SafeAreaView style={styles.container}>
            <Animated.View
              style={[
                styles.fadingContainer,
                {
                  // Bind opacity to animated value
                  opacity: fade,
                },
              ]}>
                
              <Text style={styles.fadingText}>Fading View!</Text>
              <Animated.Text
              style = {{
                fontSize: 42,
                transform:[{
                  translateY: fade.interpolate({
                    inputRange:[0,1],
                    outputRange:[0,400]
                  })
                }]
              }}
              >
                i will move in through y-axis
              </Animated.Text>
            </Animated.View>
            <Animated.Image
            style = {[styles.image,
                {opacity:fade}
            ]}
            source={require('../assets/images/images.jpeg')}
            />
            <View style={styles.buttonRow}>
                <ButtonComponent title='Fade In' onPress={fadeIn}/>
                <ButtonComponent title='Fade Out' onPress={fadeOut}/>
                </View>
      </SafeAreaView>
    

  )
}

export default Animate

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      fadingContainer: {
        padding: 20,
        backgroundColor: 'powderblue',
      },
      fadingText: {
        fontSize: 28,
      },
      buttonRow: {
        flexBasis: 100,
        justifyContent: 'space-evenly',
        marginVertical: 16,
      },
      image:{
        width: 150,
        height:150,
        marginTop: 15,
      }
})