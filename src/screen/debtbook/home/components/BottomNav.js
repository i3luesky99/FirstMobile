import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../../home/index';
import {Text, View} from 'react-native';
import Manage from '../../../../assets/image/svg/manage.svg';
import Store from '../../../../assets/image/svg/store.svg';
import Inout from '../../../../assets/image/svg/inoutIcon.svg';
import Customer from '../../../../assets/image/svg/cus.svg';
import Add from '../../../../assets/image/svg/addIcon.svg';
import {COLORS} from '../../../../constants';

const Demo = () => {
  return (
    <View>
      <Text>Demo</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

function BottomNav({navigation}) {
  const screen = [
    {
      id: 1,
      title: 'Quản lý',
      icon: <Manage />,
      component: Home,
    },
    {
      id: 2,
      title: 'Bán Online',
      icon: <Store />,
      component: Demo,
    },
    {
      id: 3,
      title: 'Thu chi',
      icon: <Inout />,
      component: Demo,
    },
    {
      id: 4,
      title: 'Khách hàng',
      icon: <Customer />,
      component: Demo,
    },
    {
      id: 5,
      title: 'Thêm',
      icon: <Add />,
      component: Demo,
    },
  ];
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarIconStyle: {marginTop: 5},
        tabBarLabelStyle: {color: COLORS.blackGrey, marginBottom: 5},
        tabBarStyle: {position: 'absolute'},
      }}>
      {screen.map((item, index) => (
        <Tab.Screen
          key={index}
          navigation={navigation}
          name={item.title}
          component={item.component}
          options={{
            tabBarIcon: props => {
              console.log(props.focused);
              return <View>{item.icon}</View>;
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default BottomNav;
