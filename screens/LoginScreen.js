import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import auth from '@react-native-firebase/auth';

const SignUpScreen = ({navigation}) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const handleChange = (text, value) => {
    setUser(prev => ({...prev, [value]: text}));
  };
  const handleLogin = async () => {
    await auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(response => {
        console.log(response.additionalUserInfo, 'User Logged in Successfully');
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <View style={{marginVertical: responsiveHeight(4)}}>
        <Text style={styles.txt}>LogIn</Text>
        <View style={{marginVertical: responsiveHeight(5)}}>
          <TextInput
            style={styles.txtinput}
            placeholder="Email"
            value={user.email}
            onChangeText={text => handleChange(text, 'email')}
          />
          <TextInput
            style={styles.txtinput}
            secureTextEntry={true}
            placeholder="Password"
            value={user.password}
            onChangeText={text => handleChange(text, 'password')}
          />
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => handleLogin()}>
          <Text
            style={{
              fontSize: responsiveFontSize(2),
              color: 'white',
              fontWeight: '500',
              textAlign: 'center',
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', marginTop: responsiveHeight(1)}}>
          <Text style={{fontSize: responsiveFontSize(2)}}>
            Create new account{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                textAlign: 'center',
                color: 'black',
                textDecorationLine: 'underline',
              }}>
              SignUp
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
