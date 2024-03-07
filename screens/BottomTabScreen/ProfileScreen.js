import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';


const ProfileScreen = ({navigation}) => {

  const signOut = () => {
    auth()
      .signOut()
      .then(() => navigation.navigate("Login"));
  };

  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <View style={styles.searchContainer}>
          <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>
            Profile
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assests/icon/profile.png')}
          />
          <Text style={[styles.txt, {fontSize: 18}]}>Rahul</Text>
          <Text style={styles.txt}>rahulramola03@gmail.com</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.btnContainer}>
            <Text style={{fontSize: 15}}>Edit Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.btnContainer}>
            <Text style={{fontSize: 15}}>Orders</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.btnContainer}>
            <Text style={{fontSize: 15}}>Address</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.btnContainer}>
            <Text style={{fontSize: 15}}>Payment Methods</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>signOut()}>
          <View style={styles.btnContainer}>
            <Text style={{fontSize: 15, color: 'red'}}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    padding: 20,
    backgroundColor: '#40A2E3',
  },
  image: {
    height: 150,
    width: 150,
  },
  imageContainer: {
    height: 270,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: 'black',
    fontWeight: '600',
    fontSize: 15,
  },
  btnContainer: {
    padding: 30,
    borderBottomWidth: 0.2,
  },
});

export default ProfileScreen;
