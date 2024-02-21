/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
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

const App=()=>{

  const Stack = createNativeStackNavigator();
  return(
    // <BookListScreen/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BookList" component={BookListScreen} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="BookDetail" component={BookDetailScreen} options={{
          headerTitle:"Book Details"
        }}/>
        <Stack.Screen name="CartDetails" component={CartDetailsScreen} options={{
          headerTitle:"Order Details",
        }}/>
        <Stack.Screen name="PlaceOrderDetails" component={PlaceOrderScreen} options={{
          headerTitle:"Order Summary"
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
