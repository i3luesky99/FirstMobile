import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import Tabs from '../screen/home/index';
// import DetailItem from '../screen/detail/index';
import Login from '../screen/debtbook/login';
import OTPScreen from '../screen/debtbook/login/components/OTPScreen';
const Stack = createStackNavigator();

function Appnavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={OTPScreen} />
        {/* <Stack.Screen name="Detail" component={DetailItem} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Appnavigator;
