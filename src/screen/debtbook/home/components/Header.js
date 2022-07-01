import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BackArrow from '../../../../assets/image/svg/backArrow.svg';
import {COLORS, globalStyles, hitSlop} from '../../../../constants';
import Search from '../../../../assets/image/svg/search.svg';
import QRCode from '../../../../assets/image/svg/qrCode.svg';
import Sort from '../../../../assets/image/svg/sortIcon.svg';
import Setting from '../../../../assets/image/svg/setting.svg';

function Header({navigation}) {
  const icon = [<Search />, <QRCode />, <Sort />, <Setting />];
  const goBack = () => {
    navigation.navigate('Home');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <TouchableOpacity onPress={goBack} hitSlop={hitSlop}>
            <BackArrow fill={COLORS.blackDark} />
          </TouchableOpacity>
          <Text style={styles.text}>Sản phẩm</Text>
        </View>
        <View style={styles.rightHeader}>
          {icon.map((value, index) => (
            <View key={index}>{value}</View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.whiteLight,
  },
  header: {
    // ...globalStyles.rowSpacebeetween,
    width: '100%',
    height: 56,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    color: COLORS.darkBlack,
  },
  leftHeader: {
    width: '30%',
    ...globalStyles.rowSpaceevenly,
    alignItems: 'center',
  },
  rightHeader: {
    width: '45%',
    ...globalStyles.rowSpaceevenly,
  },
});

export default Header;
