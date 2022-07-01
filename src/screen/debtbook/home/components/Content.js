import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, globalStyles} from '../../../../constants';
import CreateOrder from '../../../../assets/image/svg/createOrder.svg';
import Order from '../../../../assets/image/svg/order.svg';
import Report from '../../../../assets/image/svg/report.svg';
import Product from '../../../../assets/image/svg/product.svg';
import Voucher from '../../../../assets/image/svg/voucher.svg';
import Gift from '../../../../assets/image/svg/gift.svg';
import Customer from '../../../../assets/image/svg/customer.svg';
import Difference from '../../../../assets/image/svg/difference.svg';

function Content({navigation}) {
  const vector = [
    {
      id: 1,
      icon: <CreateOrder />,
      title: 'Tạo đơn',
    },
    {
      id: 2,
      icon: <Order />,
      title: 'Đơn hàng',
    },
    {
      id: 3,
      icon: <Report />,
      title: 'Báo cáo',
    },
    {
      id: 4,
      icon: <Product />,
      title: 'Sản phẩm',
    },
    {
      id: 5,
      icon: <Voucher />,
      title: 'Khuyến mãi',
    },
    {
      id: 6,
      icon: <Gift />,
      title: 'Quà tặng',
    },
    {
      id: 7,
      icon: <Customer />,
      title: 'Khách hàng',
    },
    {
      id: 8,
      icon: <Difference />,
      title: 'Khác',
    },
  ];
  const onOpenList = index => {
    if(index === 3){
      navigation.navigate('ListItems')
    }
  };
  return (
    <View style={styles.container}>
      {vector.map((value, index) => (
        <TouchableOpacity key={value.id} onPress={() => onOpenList(index)}>
          <View style={styles.vector}>
            {value.icon}
            <Text>{value.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // paddingTop: 8,
    marginTop: 4,
    paddingLeft: 16,
    paddingRight: 16,
    ...globalStyles.rowSpacebeetween,
    flexWrap: 'wrap',
  },
  vector: {
    ...globalStyles.flexCenter,
    marginTop: 8,
    width: 80,
    height: 80,
    backgroundColor: COLORS.whiteLight,
    borderRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Content;
