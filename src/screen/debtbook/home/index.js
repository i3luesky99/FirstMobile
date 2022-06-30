import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {COLORS, globalStyles} from '../../../constants';
import QRCode from '../../../assets/image/svg/QRIcon.svg';
import MessIcon from '../../../assets/image/svg/messIcon.svg';
import BellIcon from '../../../assets/image/svg/bellIcon.svg';
import Vector from '../../../assets/image/svg/vector.svg';
import Overview from './components/Overview';
import Content from './components/Content';
import FloatingButton from './components/FloatingButton';

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.topLeft}>
          <View style={styles.img}>
            <Image source={require('../../../assets/image/png/Avatar.png')} />
          </View>
          <View style={styles.topName}>
            <Text style={styles.name}>Bếp nhà - Thực phẩm</Text>
            <View style={styles.infoMarket}>
              <Text style={styles.info}>Thông tin cửa hàng</Text>
              <Vector fill={COLORS.lowGrey} />
            </View>
          </View>
        </View>
        <View style={styles.topRight}>
          <QRCode />
          <MessIcon />
          <BellIcon />
        </View>
      </View>
      <Overview />
      <Content />
      <FloatingButton />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: COLORS.lowestGrey,
  },
  header: {
    paddingLeft: 10,
    height: 75,
    backgroundColor: COLORS.green,
    ...globalStyles.rowSpacebeetween,
  },
  topLeft: {
    flexDirection: 'row',
  },
  topRight: {
    width: '30%',
    ...globalStyles.rowSpaceevenly,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 10,
  },
  name: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 22,
    color: COLORS.whiteLight,
  },
  info: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: COLORS.lowGrey,
    marginRight: 6,
  },
  infoMarket: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topName: {},
});

export default Home;
