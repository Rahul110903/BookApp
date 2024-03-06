/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import BookListScreen from './screens/BookListScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BookDetailScreen from './screens/BookDetailScreen';
import Books from './components/Books';
import CartDetailsScreen from './screens/CartDetailsScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import { useDispatch } from 'react-redux';
import { BooksData } from './config/data';
import { addBooks } from './Redux/BookSlice';
import Main from './screens/Main';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';

const App=()=>{

  const Dispatch=useDispatch();
  const Stack = createNativeStackNavigator();

  useEffect(()=>{
    BooksData.map((item)=>{
      Dispatch(addBooks(item))
    })
  })

  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle:{backgroundColor:"#40A2E3"}
      }}>
        <Stack.Screen name="Main" component={Main} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="BookDetail" component={BookDetailScreen} options={{
          headerTitle:"Book Details",
        }}/>
        <Stack.Screen name="CartDetails" component={CartDetailsScreen} options={{
          headerTitle:"Order Details",
        }}/>
        <Stack.Screen name="PlaceOrderDetails" component={PlaceOrderScreen} options={{
          headerTitle:"Order Summary"
        }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{
          headerTitle:"Log In",
          headerShown:false
        }}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{
          headerTitle:"Sign Up",
          headerShown:false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default App;
