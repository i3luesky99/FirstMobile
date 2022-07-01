import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import Tabs from '../screen/home/index';
// import DetailItem from '../screen/detail/index';
import Login from '../screen/debtbook/login';
import OTPScreen from '../screen/debtbook/login/components/OTPScreen';
import Home from '../screen/debtbook/home';
import BottomNav from '../screen/debtbook/home/components/BottomNav';
import CreatItem from '../screen/debtbook/home/components/CreatItem';
import ListItems from '../screen/debtbook/home/components/ListItems';
const Stack = createStackNavigator();

function Appnavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
        <Stack.Screen name="Home" component={BottomNav} />
        <Stack.Screen name="Create" component={CreatItem} />
        <Stack.Screen name="ListItems" component={ListItems} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Appnavigator;
