import React from "react"
import {StyleSheet, Text,View,TouchableOpacity} from "react-native"
import { emptyBookToCart } from "../Redux/CartSlice"
import { useDispatch } from "react-redux"

const OrderSuccess=({navigation})=>{

    const dispatch=useDispatch()

    const handlebutton=()=>{
        dispatch(emptyBookToCart())
        navigation.navigate("Home")
    }
    return(
        <View style={styles.container}>
            <Text style={{fontSize:20,color:"black"}}>Order is been placed...</Text>
            <TouchableOpacity style={styles.button} onPress={handlebutton}>
                <Text>Go to Home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default OrderSuccess

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    button:{
        padding:10,
        borderWidth:1,
        marginVertical:30,
        borderRadius:10,
        backgroundColor:"orange"
    }
})