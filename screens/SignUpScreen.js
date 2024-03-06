import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import firestore from '@react-native-firebase/firestore';

const SignUpScreen = ({navigation}) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });
  const handleChange = (text, value) => {
    setUser(prev => ({...prev, [value]: text}));
  };
  const handleSubmit = async() => {
    if (user.password === user.confirmPassword) {
      await firestore().collection('Users').add({
          name: user.name,
          email: user.email,
          mobile: user.mobile,
          password: user.password,
        })
        .then(() => {
          console.log('User added!');
          navigation.navigate("Login")
          setUser({
            name:"",
            email:"",
            mobile:"",
            password:"",
            confirmPassword:""
          })
        });
    } else {
      Alert.alert("Password is Incorrect")
    }
  };
  return (
    <View style={styles.container}>
      <View style={{marginVertical: responsiveHeight(4)}}>
        <Text style={styles.txt}>SignUp</Text>
        <View style={{marginVertical: responsiveHeight(5)}}>
          <TextInput
            style={styles.txtinput}
            value={user.name}
            placeholder="Name"
            onChangeText={text => handleChange(text, 'name')}
          />
          <TextInput
            style={styles.txtinput}
            placeholder="Email"
            value={user.email}
            onChangeText={text => handleChange(text, 'email')}
          />
          <TextInput
            style={styles.txtinput}
            placeholder="Mobile No."
            value={user.mobile}
            onChangeText={text => handleChange(text, 'mobile')}
          />
          <TextInput
            style={styles.txtinput}
            placeholder="Password"
            value={user.password}
            secureTextEntry={true}
            onChangeText={text => handleChange(text, 'password')}
          />
          <TextInput
            style={styles.txtinput}
            placeholder="Confirm Password"
            value={user.confirmPassword}
            secureTextEntry={true}
            onChangeText={text => handleChange(text, 'confirmPassword')}
          />
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => handleSubmit()}>
          <Text
            style={{
              fontSize: responsiveFontSize(2),
              color: 'white',
              fontWeight: '500',
              textAlign: 'center',
            }}>
            SignUp
          </Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', marginTop: responsiveHeight(1)}}>
          <Text style={{fontSize: responsiveFontSize(2)}}>
            Already have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                textAlign: 'center',
                color: 'black',
                textDecorationLine: 'underline',
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  txt: {
    fontSize: responsiveFontSize(3),
    color: 'black',
    padding: 6,
  },
  txtinput: {
    backgroundColor: 'white',
    borderWidth: 0.75,
    borderRadius: 10,
    fontSize: responsiveFontSize(2),
    marginVertical: 8,
    padding: 10,
  },
  btn: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 13,
    elevation: 1,
    shadowColor: 'black',
  },
  txtContainer: {
    flexDirection: 'row',
  },
});

export default SignUpScreen;
