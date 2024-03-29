import React, {useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useDispatch, useSelector} from 'react-redux';
import {addBookToCart} from '../Redux/CartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AskForLogin from '../common/AskForLogin';

const BookDetailScreen = ({route,navigation}) => {

  const [toggle,setToggle] = useState(false)
  const dispatch = useDispatch();
  const {title, author, image, price, description, qty,user} = route.params;

  console.log(user,"user")

  // const checkUserStatus = () => {
  //   if (user) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  const handleCart = () => {
    if (user) {
      dispatch(addBookToCart(route.params));
      Alert.alert('Hurrayy!!', 'Book has been added to Cart Successfully');
    } else {
      setToggle(true)
    }
  };

  return (
    // Book Details......
    <>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={image} />
        </View>
        <View style={styles.desContainer}>
          <Text style={styles.titletxt}>{title}</Text>
          <Text style={styles.authortxt}>{author}</Text>
          <Text style={styles.destxt}>{description}</Text>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.pricetxt}>
            Buy now:<Text style={{color: '#00450a'}}> ₹{price}</Text>
          </Text>
          <Text style={{fontSize: responsiveFontSize(1.5), color: 'black'}}>
            Inclusive of all taxes
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => handleCart()}>
            <Text
              style={{
                color: 'black',
                fontSize: responsiveFontSize(2),
              }}>
              {qty !== 0 ? 'Go to Cart' : 'Add to Cart:'}
            </Text>
            <View>
              <Image
                style={styles.btnicon}
                source={
                  qty !== 0
                    ? require('../assests/icon/checked.png')
                    : require('../assests/icon/grocery-store.png')
                }
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <AskForLogin toggle={toggle} setToggle={setToggle} navigation={navigation}/>
    </>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    backgroundColor: 'skyblue',
    height: responsiveHeight(36),
    justifyContent: 'center',
  },
  image: {
    height: responsiveHeight(35),
    objectFit: 'contain',
  },
  titletxt: {
    fontSize: responsiveFontSize(3),
    color: 'black',
    fontWeight: 'bold',
  },
  desContainer: {
    padding: 9,
    marginHorizontal: 10,
  },
  authortxt: {
    fontSize: responsiveFontSize(2),
  },
  destxt: {
    fontSize: responsiveFontSize(2.3),
    color: '#575757',
    marginVertical: 25,
  },
  pricetxt: {
    fontSize: responsiveFontSize(2.6),
    fontWeight: '700',
    color: 'black',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#40A2E3',
    padding: 10,
  },
  btnicon: {
    objectFit: 'contain',
    height: responsiveHeight(3),
    width: responsiveWidth(8),
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 3,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#faaa64',
  },
});
export default BookDetailScreen;
