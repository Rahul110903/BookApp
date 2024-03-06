import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Pressable,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const AskForLogin = ({toggle, setToggle,navigation}) => {

  const handleLogin=()=>{
    navigation.navigate("Login")
    setToggle(false)
  }
  const handleSignUp=()=>{
    navigation.navigate("SignUp")
    setToggle(false)
  }
  return (
    <Modal visible={toggle} transparent={true}>
      <Pressable style={{flex:1,backgroundColor:"rgba(0,0,0,0.7)"}} onPress={() => setToggle(false)}>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              padding: 20,
              justifyContent: 'space-between',
            }}>
            <Text style={styles.maintxt}>Are you a new customer?</Text>
            <TouchableOpacity onPress={() => setToggle(false)}>
              <Text style={{color: 'black'}}>X</Text>
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 15, left: 10, color: 'black'}}>
            Login/SignUp
          </Text>
          <TouchableOpacity style={styles.btn} onPress={()=>handleLogin()}>
            <View>
              <Text style={styles.txt}>LogIn</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={()=>handleSignUp()}>
            <View>
              <Text style={styles.txt}>SignUp</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(30),
    width: responsiveWidth(85),
    backgroundColor: 'white',
    alignSelf: 'center',
    top: responsiveHeight(30),
    borderRadius: 7,
    elevation: 1,
    shadowOpacity: 1,
  },
  btn: {
    backgroundColor: '#2366f7',
    padding: 15,
    margin: 5,
    borderRadius: 10,
  },
  txt: {
    textAlign: 'center',
    fontWeight: 'bold',
    color:"white"
  },
  maintxt: {
    color: 'black',
    fontSize: 20,
  },
});
export default AskForLogin;
