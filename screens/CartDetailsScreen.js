import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const CartDetailsScreen = ({navigation}) => {
  return (
    // ......Order Details......
      <View style={styles.CartContainer}>
        <FlatList
          data={[1, 1, 1, 1]}
          renderItem={(item, index) => (
            <View style={styles.innerContainer}>
              <Image
                style={styles.image}
                source={require('../assests/bookimage/RichDadPoorDad.jpg')}
              />
              <View style={{marginVertical: 10}}>
                <Text style={styles.titletxt}>Rich Dad Poor Dad</Text>
                <Text style={styles.authortxt}>Robert T. Kiyosaki</Text>
                <Text style={styles.pricetxt}>Price : ₹1000</Text>
                <Text>Inclusive Of All Taxes</Text>
              </View>
              <TouchableOpacity>
                  <View style={{backgroundColor:"#FFF",padding:7,borderRadius:10,top:120,borderWidth:1.5,borderColor:"red"}}>
                    <Text style={{color:"red",fontWeight:"700"}}>Remove</Text>
                  </View>
              </TouchableOpacity>
            </View>
          )}
        />
        <View style={{flexDirection:"row",justifyContent:"space-between",padding:9,backgroundColor: '#383838',alignItems:"center"}}>
          <Text style={{fontSize:responsiveFontSize(2.5),fontWeight:"800",color:"white"}}>Total Price : <Text style={{color:"orange"}}>₹4000</Text></Text>
          <TouchableOpacity onPress={()=>navigation.navigate("PlaceOrderDetails")} style={styles.btntxt}><Text style={{fontWeight:"800",color:"skyblue"}}>Place Order</Text></TouchableOpacity>
        </View>
      </View>
  );
};

export default CartDetailsScreen;

const styles = StyleSheet.create({
  CartContainer: {
    flex: 1,
  },
  innerContainer: {
    backgroundColor: '#fff',
    height: responsiveHeight(21),
    margin: 10,
    elevation: 1,
    borderRadius: 10,
    resizeMode: 'contain',
    flexDirection: 'row',
    padding:5
  },
  image: {
    objectFit: 'contain',
    height: responsiveHeight(20),
    width: responsiveWidth(33),
  },
  titletxt: {
    fontSize:responsiveFontSize(2.5),
    fontWeight: 'bold',
    color: 'black',
  },
  pricetxt: {
    fontSize:responsiveFontSize(2.3),
    marginTop: 20,
    color: 'green',
    fontWeight: '500',
  },
  authortxt: {
    fontSize: responsiveFontSize(1.7),
  },
  btntxt:{
    borderColor:"skyblue",
    padding:10,
    borderRadius:10,
    borderWidth:1
  }
});
