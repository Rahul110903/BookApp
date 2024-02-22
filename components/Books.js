import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Books = ({book, navigation}) => {
  return (
      <TouchableOpacity style={styles.bookContainer}
        onPress={() =>
          navigation.navigate('BookDetail', {
            id:book.id,
            title: book.title,
            author: book.author,
            image: book.imageLink,
            price: book.price,
            description: book.description,
            qty:book.qty
          })
        }>
        <View>
          <Image style={styles.image} source={book.imageLink} />
        </View>
        <View style={styles.contentContainer}>
          <Text
            style={{
              fontSize: responsiveFontSize(2.5),
              fontWeight: '700',
              color: '#141414',
            }}>
            {book.title}
          </Text>
          <Text style={{fontSize: responsiveFontSize(1.7)}}>{book.author}</Text>
          <Text
            style={{
              fontSize: responsiveFontSize(3),
              fontWeight:"500",
              color: 'green',
            }}>
            ₹{book.price}
          </Text>
          <Text style={{fontWeight: '500'}}>
            Pages : {book.pages}
          </Text>
        </View>
      </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  bookContainer: {
    margin: 5,
    flexDirection: 'row',
    paddingBottom: 10,
    flex: 1,
    backgroundColor:"white",
    padding:20,
    borderRadius:5,
    elevation:1
  },
  image: {
    height: responsiveHeight(27),
    width: responsiveWidth(40),
    borderRadius: 7,
  },
  contentContainer: {
    marginHorizontal: 10,
    width: responsiveWidth(40),
  },
});
export default Books;
