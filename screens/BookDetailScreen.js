import React, {useState} from 'react';
import {
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

const BookDetailScreen = ({route}) => {
  const [cart, setcart] = useState(false);

  const {title, author, image, price, description} = route.params;
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
            Buy now:<Text style={{color: 'orange'}}> ₹{price}</Text>
          </Text>
          <Text style={{fontSize: responsiveFontSize(1.5), color: 'white'}}>
            Inclusive of all taxes
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => setcart(!cart)}>
            <Text
              style={{
                color: 'black',
                fontWeight: '900',
                fontSize: responsiveFontSize(2),
              }}>{
                cart? "Added" : "Add to Cart:" 
              }
            </Text>
            <View>
              <Image
                style={styles.btnicon}
                source={
                  cart
                    ? require('../assests/icon/checked.png')
                    : require('../assests/icon/grocery-store.png')
                }
              />
              {/* <Text style={{color:"blue",fontWeight:"700",fontSize:15}}>Add to Cart</Text> */}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    backgroundColor: '#ababab',
    height: responsiveHeight(36),
    justifyContent: 'center',
  },
  image: {
    height: responsiveHeight(35),
    objectFit: "contain",
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
    color: 'white',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#383838',
    padding:5,
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
    elevation:1,
    borderWidth:1
  },
});
export default BookDetailScreen;
