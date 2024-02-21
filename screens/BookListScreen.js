import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {BooksData} from '../config/data';
import Books from '../components/Books';

const BookListScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [filterBooks, setFilterBooks] = useState();

  const handleSearch = text => {
    setSearch(text);
  };

  useEffect(() => {
    const filterData = BooksData.filter(book => {
      const searchLower = search.toLowerCase();
      const titleLower = book.title.toLowerCase();
      return titleLower.includes(searchLower);
    });

    setFilterBooks(filterData);
  }, [search, BooksData]);

  return (
    <View style={{flex: 1}}>
      {/* SearchField */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <TextInput
            keyboardType="default"
            value={search}
            placeholder="Search"
            onChangeText={text => handleSearch(text)}
          />
          <Image
            style={styles.searchicon}
            source={require('../assests/icon/search.png')}
          />
        </View>
        <View>
          <TouchableOpacity onPress={()=>navigation.navigate("CartDetails")}>
            <Image
              style={styles.searchicon}
              source={require('../assests/icon/shopping-cart.png')}
            />
            <View style={styles.dot}></View>
          </TouchableOpacity>
        </View>
      </View>

      {/* List of all Books Field */}
      <View>
        <Text style={styles.booktext}>All Books Available Shop Now !!</Text>
        <View style={{marginTop: 5}}>
          <FlatList
            contentContainerStyle={{paddingBottom: 150}}
            data={search ? filterBooks : BooksData}
            keyExtractor={text => text.id}
            renderItem={text => (
              <Books book={text.item} navigation={navigation} />
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    padding: 13,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchicon: {
    height: responsiveHeight(3),
    width: responsiveWidth(6),
    objectFit: 'contain',
    marginHorizontal: 5,
  },
  searchBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    height: responsiveHeight(5),
    borderRadius: 15,
    borderWidth: 1,
    flex: 1,
  },
  booktext: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    color: 'brown',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  dot: {
    height: 11,
    width: 11,
    backgroundColor: 'red',
    borderRadius: 50,
    position: 'absolute',
    left: 23,
  },
});
export default BookListScreen;
