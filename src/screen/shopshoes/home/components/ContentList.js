import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../../constants';
import NikeIcon from '../../../assets/images/nikeIcon.svg';
import AdidasIcon from '../../../assets/images/adidasIcon.svg';
import PumaIcon from '../../../assets/images/pumaIcon.svg';
import JordanIcon from '../../../assets/images/jordanIcon.svg';

function ContentList() {
  return (
    <View>
      <View style={{marginTop: 27}}>
        <Text style={styles.brands}>Top Brands</Text>
        <View style={styles.allBrands}>
          <View style={styles.localBrand}>
            <NikeIcon fill={COLORS.primaryBlack} />
          </View>
          <View style={styles.localBrand}>
            <AdidasIcon fill={COLORS.primaryBlack} />
          </View>
          <View style={styles.localBrand}>
            <PumaIcon />
          </View>
          <View style={styles.localBrand}>
            <JordanIcon />
          </View>
        </View>
      </View>
      <View style={styles.list}>
        <Text style={styles.name}>Popular</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
  list: {
    marginTop: 39,
  },
  name: {
    fontSize: 20,
    lineHeight: 23,
    fontFamily: 'FontsFree-Net-Gilroy1',
    fontWeight: '700',
    color: COLORS.primaryBlack,
  },
});

export default ContentList;
