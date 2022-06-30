import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../components/Home';
import Love from '../components/Love';
import Shopping from '../components/Shopping';
import Customer from '../components/Customer';
import HomeIcon from '../../assets/images/homeIcon.svg';
import CartIcon from '../../assets/images/cartIcon.svg';
import LoveIcon from '../../assets/images/loveIcon.svg';
import CustomerIcon from '../../assets/images/customerIcon.svg';

import {View} from 'react-native';
import {COLORS} from '../../../constants/index';

const Tab = createBottomTabNavigator();

function Tabs({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {position: 'absolute'},
      }}>
      <Tab.Screen
        navigation={navigation}
        name="Home"
        component={Home}
        options={{
          tabBarIcon: props => {
            return (
              <View>
                <HomeIcon
                  fill={
                    props.focused ? COLORS.primaryBlack : COLORS.primaryWhite
                  }
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Love"
        component={Love}
        options={{
          tabBarIcon: props => {
            return (
              <View>
                <LoveIcon
                  fill={
                    props.focused ? COLORS.primaryBlack : COLORS.primaryWhite
                  }
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Shopping"
        component={Shopping}
        options={{
          tabBarIcon: props => {
            return (
              <View>
                <CartIcon
                  fill={
                    props.focused ? COLORS.primaryBlack : COLORS.primaryWhite
                  }
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Customer"
        component={Customer}
        options={{
          tabBarIcon: props => {
            return (
              <View>
                <CustomerIcon
                  fill={
                    props.focused ? COLORS.primaryBlack : COLORS.primaryWhite
                  }
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
