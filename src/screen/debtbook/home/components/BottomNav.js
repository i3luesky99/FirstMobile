import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../../home/index';
import {Text, View} from 'react-native';
import Manage from '../../../../assets/image/svg/manage.svg';
import StoreIcon from '../../../../assets/image/svg/store.svg';
import InoutIcon from '../../../../assets/image/svg/inoutIcon.svg';
import CustomerIcon from '../../../../assets/image/svg/cus.svg';
import AddIcon from '../../../../assets/image/svg/addIcon.svg';
import {COLORS} from '../../../../constants';

const Store = () => {
  return (
    <View>
      <Text>Shop</Text>
    </View>
  );
};
const Inout = () => {
  return (
    <View>
      <Text>Thu chi</Text>
    </View>
  );
};
const Customer = () => {
  return (
    <View>
      <Text>Customer</Text>
    </View>
  );
};
const Add = () => {
  return (
    <View>
      <Text>Thêm</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

function BottomNav({navigation}) {
  const screen = [
    {
      id: 1,
      title: 'Quản lý',
      icon: <Manage fill={COLORS.greyIcon} />,
      iconfill: <Manage fill={COLORS.greenLighter} />,
      component: Home,
    },
    {
      id: 2,
      title: 'Bán Online',
      icon: <StoreIcon fill={COLORS.greyIcon} />,
      iconfill: <StoreIcon fill={COLORS.greenLighter} />,
      component: Store,
    },
    {
      id: 3,
      title: 'Thu chi',
      icon: <InoutIcon fill={COLORS.greyIcon} />,
      iconfill: <InoutIcon fill={COLORS.greenLighter} />,
      component: Inout,
    },
    {
      id: 4,
      title: 'Khách hàng',
      icon: <CustomerIcon fill={COLORS.greyIcon} />,
      iconfill: <CustomerIcon fill={COLORS.greenLighter} />,
      component: Customer,
    },
    {
      id: 5,
      title: 'Thêm',
      icon: <AddIcon fill={COLORS.greyIcon} />,
      iconfill: <AddIcon fill={COLORS.greenLighter} />,
      component: Add,
    },
  ];
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: {marginTop: 5},
        tabBarShowLabel: false,
        tabBarStyle: {position: 'absolute'},
      }}>
      {screen.map((item, index) => (
        <Tab.Screen
          tabBarLabelStyle={{color: 'red'}}
          key={index}
          navigation={navigation}
          name={item.title}
          component={item.component}
          options={{
            tabBarIcon: props => {
              return (
                <View>
                  {props.focused === true ? item.iconfill : item.icon}
                </View>
              );
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default BottomNav;
