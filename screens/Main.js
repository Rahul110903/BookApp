import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import BookListScreen from './BookListScreen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import CartScreen from './BottomTabScreen/CartScreen';
import NotificationScreen from './BottomTabScreen/NotificationScreen';
import ProfileScreen from './BottomTabScreen/ProfileScreen';

const Main = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Bottom"
        component={Bottom}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

const Bottom = () => {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#faaf37"
      shifting={true}
      barStyle={{height: 62}}
      activeIndicatorStyle={{backgroundColor: '#faaf37'}}
      keyboardHidesNavigationBar={true}>
      <Tab.Screen
        name="Home"
        component={BookListScreen}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={[styles.imageIcon, {height: 23, width: 23}]}
                source={require('../assests/icon/home.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={styles.imageIcon}
                source={require('../assests/icon/shopping-cart.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={[styles.imageIcon, {height: 23, width: 23}]}
                source={require('../assests/icon/notification.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={[styles.imageIcon, {height: 23, width: 23}]}
                source={require('../assests/icon/user.png')}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  imageIcon: {
    height: 25,
    width: 25,
  },
});

export default Main;
