import React from "react"
import {StyleSheet, Text,View} from "react-native"
import { useSelector } from "react-redux"

const OrderScreen=()=>{
    const orderItems = useSelector(state=>state.order)
    console.log(orderItems,"orders")

    return(
        <View style={styles.container}>
            <Text>OrderScreen Coming Soon....</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default OrderScreen