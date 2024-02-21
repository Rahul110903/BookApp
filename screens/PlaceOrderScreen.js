import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PlaceOrderScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight:"bold",fontSize:20}}>Coming Soon...</Text>
    </View>
  )
}

export default PlaceOrderScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})