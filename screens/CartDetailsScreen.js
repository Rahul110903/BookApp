import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
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

const CartDetailsScreen = ({navigation}) => {
  const CartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const getTotal=()=>{
    let total=0;
    CartItems.map((item)=>{
      total=total+item.qty * item.price
    });
    return total;
  }

  return (
    // ......Order Details......

    CartItems.length !== 0 ? (
      <View style={styles.CartContainer}>
        <FlatList
          data={CartItems}
          keyExtractor={item => item.id}
          renderItem={element => (
            <View style={styles.innerContainer}>
              <Image style={styles.image} source={element.item.image} />
              <View style={{marginVertical: 10, width: responsiveWidth(60)}}>
                <Text style={styles.titletxt}>{element.item.title}</Text>
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
          <View>
          <Image style={{height:30,width:30}} source={require("../assests/icon/down-arrow.png")}/>
          </View>
        </View>
      </View>
    ) : (
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text style={{fontSize:20,fontWeight:"600"}}>Add to Cart Now</Text>
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
