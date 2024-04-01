import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useDispatch, useSelector} from 'react-redux';
import {
  addBookToCart,
  deleteBookToCart,
  removeBookToCart,
} from '../Redux/CartSlice';
import RazorpayCheckout from 'react-native-razorpay';
import {orderItem} from '../Redux/OrderSlice';

const CartDetailsScreen = ({navigation}) => {
  const CartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const getTotal = () => {
    let total = 0;
    CartItems.map(item => {
      total = total + item.qty * item.price;
    });
    return total;
  };

  const orderSuccess = success => {
    const day = new Date().getDate();
    const month = new Date().getMonth()+1;
    const year = new Date().getFullYear();
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    let ampm = ""
    if(hours>12){
      ampm= "PM"
    } else {
      ampm = "AM"
    }
    const data = {
      items: CartItems,
      amount: `₹${getTotal()}`,
      paymentId: success,
      DateAndTime: day + "/" + month + "/" + year + " " + hours + ":" + minutes + " " + ampm
    };
    dispatch(orderItem(data))
    navigation.navigate('Success')
  };

  return (
    // ......Order Details......

    CartItems.length !== 0 ? (
      <View style={styles.CartContainer}>
        <FlatList
          data={CartItems}
          keyExtractor={item => item.index}
          renderItem={element => (
            <View style={styles.innerContainer}>
              <Image style={styles.image} source={element.item.image} />
              <View style={{marginVertical: 10, width: responsiveWidth(60)}}>
                <Text numberOfLines={2} style={styles.titletxt}>{element.item.title}</Text>
                <Text style={styles.authortxt}>{element.item.author}</Text>
                <Text style={styles.pricetxt}>
                  Price : ₹<Text>{element.item.price}</Text>
                </Text>
                <Text>Inclusive Of All Taxes</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 15,
                  }}>
                  <TouchableOpacity
                    style={styles.btntxt}
                    onPress={() => {
                      if (element.item.qty > 1) {
                        dispatch(removeBookToCart(element.item));
                      } else {
                        dispatch(deleteBookToCart(element.item.id));
                      }
                    }}>
                    <Text style={{fontWeight: 'bold', color: 'black'}}>-</Text>
                  </TouchableOpacity>
                  <Text style={{fontWeight: '900'}}> {element.item.qty} </Text>
                  <TouchableOpacity
                    style={styles.btntxt}
                    onPress={() => dispatch(addBookToCart(element.item))}>
                    <Text style={{fontWeight: 'bold', color: 'black'}}>+</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => dispatch(deleteBookToCart(element.item.id))}
                    style={{
                      backgroundColor: '#FFF',
                      padding: 7,
                      borderRadius: 10,
                      borderWidth: 1.5,
                      borderColor: 'red',
                      alignSelf: 'flex-end',
                    }}>
                    <View>
                      <Text style={{color: 'red', fontWeight: '700'}}>
                        Remove
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 9,
            backgroundColor: '#06899c',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: responsiveFontSize(2.5),
              fontWeight: '800',
              color: 'white',
            }}>
            Total Price : <Text style={{color: 'orange'}}>₹{getTotal()}</Text>
          </Text>
          <TouchableOpacity
            onPress={() => {
              var options = {
                description: 'Credits towards consultation',
                image: 'https://i.imgur.com/3g7nmJC.png',
                currency: 'INR',
                key: 'rzp_test_Gc3DD46BCMDvq7', // Your api key
                amount: getTotal() * 100,
                name: 'Payment',
                prefill: {
                  email: 'void@razorpay.com',
                  contact: '9289734037',
                  name: 'Razorpay Software',
                },
                theme: {color: '#F37254'},
              };
              RazorpayCheckout.open(options)
                .then(data =>
                  // {orderSuccess(data.razorpay_payment_id)}
                  {
                    orderSuccess(data.razorpay_payment_id);
                  },
                )
                .catch(error => {
                  // handle failure
                  alert(`Error: ${error.code} | ${error.description}`);
                });
            }}
            style={styles.btntxt}>
            <Text style={{fontWeight: '800', color: 'skyblue'}}>
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    ) : (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: '600'}}>Add to Cart Now</Text>
      </View>
    )
  );
};

export default CartDetailsScreen;

const styles = StyleSheet.create({
  CartContainer: {
    flex: 1,
  },
  innerContainer: {
    backgroundColor: '#fff',
    height: responsiveHeight(23),
    margin: 10,
    elevation: 1,
    borderRadius: 10,
    resizeMode: 'contain',
    flexDirection: 'row',
    padding: 5,
  },
  image: {
    objectFit: 'contain',
    height: responsiveHeight(20),
    width: responsiveWidth(33),
    alignSelf: 'center',
  },
  titletxt: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    color: 'black',
  },
  pricetxt: {
    fontSize: responsiveFontSize(2.3),
    marginTop: 20,
    color: 'green',
    fontWeight: '500',
  },
  authortxt: {
    fontSize: responsiveFontSize(1.7),
  },
  btntxt: {
    borderColor: 'skyblue',
    padding: 8,
    borderRadius: 10,
    borderWidth: 1.5,
  },
});
