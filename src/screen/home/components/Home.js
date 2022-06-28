import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import NofiticationIcon from '../../../assets/images/nofiticationIcon.svg';
import SearchIcon from '../../../assets/images/searchIcon.svg';
import {COLORS} from '../../../constants';
import ListItem from './ListItem';

function Home({navigation}) {
  return (
    <View style={{padding: 35, flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}>
        <Text style={styles.title}>Sneakers</Text>
        <NofiticationIcon />
      </View>
      <View style={styles.searchSection}>
        <SearchIcon style={styles.searchIcon} />
        <TextInput style={styles.input} placeholder="Search" />
      </View>
     {/* <ContentList/> */}
      <ListItem navigation={navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: COLORS.primaryBlack,
    fontSize: 18,
    fontFamily: 'FontsFree-Net-Gilroy-Bold',
    fontWeight: '900',
    lineHeight: 21,
  },
  searchSection: {
    // flex:1,
    backgroundColor: COLORS.primaryGrey,
    height: 49,
    flexDirection: 'row',
    borderRadius: 15,
    marginTop: 27,
    padding: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    fontSize: 18,
    backgroundColor: COLORS.primaryGrey,
    color: COLORS.primaryBlack,
    fontWeight: '600',
    marginLeft: 5,
    height: 49,
  },
  brands: {
    color: COLORS.primaryBlack,
    fontSize: 20,
    // fontFamily: 'FontsFree-Net-gilory',
    fontWeight: '700',
    lineHeight: 23,
  },
  allBrands: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  localBrand: {
    backgroundColor: COLORS.primaryGrey,
    width: 55,
    height: 57,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 17,
  },
 
});
export default Home;
