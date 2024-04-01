import React from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useSelector} from 'react-redux';

const OrderScreen = () => {
  const orderItems = useSelector(state => state.order);
  console.log(orderItems, 'orders');

  return (
    <View style={styles.container}>
      <FlatList
        // keyExtractor={item => item.index}
        data={orderItems.data}
        renderItem={({item}) => {
          return (
            <View style={styles.innerContainer}>
              <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                <Text style={{fontSize: 18, fontWeight: '800'}}>
                  Total Order Placed = {item.items.length}
                </Text>
                <Text style={{fontSize:13,fontWeight:"500"}}>{item.DateAndTime}</Text>
              </View>
              <FlatList
                // keyExtractor={item => item.index}
                data={item.items}
                renderItem={({item}) => {
                  return (
                    <View style={styles.secondContainer}>
                      <Image source={item.image} style={styles.image} />
                      <View
                        style={{
                          marginVertical: 10,
                          width: responsiveWidth(60),
                        }}>
                        <Text style={styles.titleTxt} numberOfLines={2}>
                          {item.title}
                        </Text>
                        <Text style={styles.authortxt}>{item.author}</Text>
                        <Text style={styles.pricetxt}>
                          Price : ₹<Text>{item.price}</Text>
                        </Text>
                        <Text>Inclusive Of All Taxes</Text>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: 'skyblue',
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  image: {
    objectFit: 'contain',
    height: responsiveHeight(20),
    width: responsiveWidth(33),
    alignSelf: 'center',
  },
  secondContainer: {
    backgroundColor: '#fff',
    height: responsiveHeight(23),
    margin: 10,
    elevation: 1,
    borderRadius: 10,
    resizeMode: 'contain',
    flexDirection: 'row',
    padding: 5,
  },
  titleTxt: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    color: 'black',
    width: responsiveWidth(45),
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
});

export default OrderScreen;
