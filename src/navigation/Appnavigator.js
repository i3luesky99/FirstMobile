import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from '../screen/home/index';
import DetailItem from '../screen/detail/index';
const Stack = createStackNavigator();

function Appnavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tabs"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Detail" component={DetailItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Appnavigator;
