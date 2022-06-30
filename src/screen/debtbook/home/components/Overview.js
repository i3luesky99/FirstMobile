import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {COLORS, globalStyles} from '../../../../constants';
import Colunm from '../../../../assets/image/svg/columnIcon.svg';
import Vector from '../../../../assets/image/svg/vector.svg';
import Order from '../../../../assets/image/svg/orderIcon.svg';
import Profit from '../../../../assets/image/svg/profit.svg';

function Overview() {
  const orders = [
    {
      id: 0,
      title: 'Doanh thu',
      icon: <Order />,
      num: 6,
    },
    {
      id: 1,
      title: 'Đơn hàng',
      icon: <Profit />,
      num: 10,
    },
    {
      id: 2,
      title: 'Lợi nhuận',
      icon: <Profit />,
      num: 56,
    },
  ];

  const renderOders = ({item, index}) => {
    return (
      <View style={[styles.order, {marginLeft: index === 0 ? 10 : 0}]}>
        <View style={styles.topOrder}>
          <View style={styles.icon}>{item.icon}</View>
          <Text>{item.title}</Text>
        </View>
        <Text style={styles.num}>{item.num}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerLeft}>Tổng quan hôm nay</Text>
        <View style={styles.headerRight}>
          <Colunm />
          <Text style={styles.text}>Báo cáo lãi lỗ</Text>
          <Vector fill={COLORS.blueLight} />
        </View>
      </View>
      <View style={styles.content}>
        <FlatList
          data={orders}
          renderItem={renderOders}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    backgroundColor: COLORS.whiteLight,
    height: 120,
  },
  header: {
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeft: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 22,
    color: COLORS.blackLight,
  },
  text: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 22,
    color: COLORS.blueLight,
  },
  headerRight: {
    width: '40%',
    ...globalStyles.rowSpaceevenly,
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    marginTop: 12,
  },
  order: {
    width: 155,
    height: 64,
    backgroundColor: COLORS.lowestGrey,
    borderRadius: 6,
    marginRight: 8,
  },
  icon: {
    marginLeft: 10,
    marginRight: 8,
  },
  topOrder: {
    marginTop: 8,
    alignItems: 'center',
    flexDirection: 'row',
  },
  num: {
    marginTop: 4,
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 22,
    marginLeft: 32,
    color: COLORS.blackDark,
  },
});

export default Overview;
