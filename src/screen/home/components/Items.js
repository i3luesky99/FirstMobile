import {useNavigationContainerRef} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../../constants';

function Items({item, index, navigation}) {
  // const navigationRef = useNavigationContainerRef()

  return (
    <View
      style={[
        // {flex: 1},
        index === 0 && {marginTop: 23},
        index === 1 && {marginTop: 58},

        index % 2 === 0 && index !== 0 && {marginTop: 0, marginBottom: 0},
        index % 2 !== 0 && index !== 1 && {marginTop: 46},
      ]}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Detail', item);
        }}>
        <View style={styles.shoes}>
          <Image source={item.source} />
          <View style={styles.icon} fill={COLORS.greyLighter}>
            {item.icon}
          </View>
        </View>
      </TouchableOpacity>
      
      <Text style={styles.prices}>${item.price}</Text>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  shoes: {
    width: 142,
    height: 150,
    borderRadius: 25,
    backgroundColor: COLORS.whiteLighter,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 21,
  },
  prices: {
    marginTop: 19,
    color: COLORS.primaryBlack,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '900',
    fontFamily: 'FontsFree-Net-Gilroy-Bold',
  },
  name: {
    color: COLORS.greyDarker,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
    fontFamily: 'FontsFree-Net-Gilroy1',
  },
  icon: {
    position: 'absolute',
    bottom: 20,
    right: 15,
  },
});

export default Items;
