import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import Store from '../../../../assets/image/svg/orderIcon.svg';

function FloatingButton({navigation}) {
  const actions = [
    {
      text: 'Tạo sản phẩm',
      icon: <Store />,
      name: 'bt_accessibility',
      position: 1,
      color: 'white',
    },
  ];
  const onCreate = () => {
    navigation.navigate('Create');
  };
  return (
    <View style={styles.container}>
      <FloatingAction actions={actions} onPressItem={onCreate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginTop: 300},
});

export default FloatingButton;
