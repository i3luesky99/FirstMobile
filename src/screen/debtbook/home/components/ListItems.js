import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import BackArrow from '../../../../assets/image/svg/backArrow.svg';
import {COLORS, globalStyles} from '../../../../constants';
import Header from './Header';
function ListItems({navigation}) {
  const {items} = useSelector(state => state.items);
  const onCreateItem = () => {
    navigation.navigate('Create');
  };
  const renderOders = ({item, index}) => {
    return (
      <View style={[styles.item, {marginRight: index % 2 === 0 ? 8 : 0}]}>
        <Image style={styles.image} source={item.image} />
        <View style={styles.content}>
          <Text>{item.name}</Text>
          <Text style={styles.storage}>Kho: 10</Text>
          <Text style={styles.price}>{item.price} ₫</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.list}>
        <FlatList
          data={items}
          renderItem={renderOders}
          numColumns={2}
          // horizontal={true}
          // showsHorizontalScrollIndicator={false}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={onCreateItem}>
        <Text style={styles.textButton}>+ Tạo sản phẩm</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  item: {
    marginTop: 8,
    width: '50%',
    height: 270,
    backgroundColor: COLORS.whiteLight,
    borderRadius: 6,
  },
  title: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: COLORS.blackDark,
  },
  storage: {
    // marginTop: 10,
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: COLORS.greyLight,
  },
  price: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 22,
    color: COLORS.redLight,
    // position:'relative',
    // marginTop: 4,
  },
  image: {
    width: '96%',
    height: 167,
    borderRadius: 6,
  },
  content: {
    height: '40%',
    padding: 8,
    justifyContent: 'space-evenly',
    // ...globalStyles.flexCenter
  },
  button: {
    width: 203,
    height: 48,
    backgroundColor: COLORS.blueLight,
    borderWidth: 2,
    borderColor: COLORS.whiteLight,
    ...globalStyles.flexCenter,
    borderRadius: 24,
    shadowColor: 'rgba(60, 69, 79, 0.1)',
    position: 'absolute',
    bottom: 20,
    right: 10,
  },
  textButton: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.whiteLight,
  },
});

export default ListItems;
