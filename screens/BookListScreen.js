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
import Books from '../components/Books';
import {useSelector} from 'react-redux';

const BookListScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [filterBooks, setFilterBooks] = useState();

  const BooksData = useSelector(state => state.Books);
  const CartItems = useSelector(state => state.cart);

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
            maxLength={20}
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
          <TouchableOpacity onPress={() => navigation.navigate('CartDetails')}>
            <Image
              style={styles.searchicon}
              source={require('../assests/icon/shopping-cart.png')}
            />
            {CartItems.length !== 0 ? (
              <View style={styles.dot}>
                <Text style={{color: 'white', fontSize: 20}}>
                  {CartItems.length}
                </Text>
              </View>
            ) : null}
          </TouchableOpacity>
        </View>
      </View>

      {/* List of all Books Field */}
      {filterBooks !== 0 ? (
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
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: '600'}}>
            No Book Found...
          </Text>
        </View>
      )}
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
    width: responsiveWidth(84),
  },
  booktext: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    color: 'brown',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  dot: {
    backgroundColor: 'black',
    borderRadius: 30,
    position: 'absolute',
    left: 21,
    bottom: 10,
    height: 30,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default BookListScreen;
