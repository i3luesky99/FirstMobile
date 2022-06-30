import React from 'react';
import {View} from 'react-native';
import LoginScreen from './components/LoginScreen';

function Login({navigation}) {
  return (
    <View>
      <LoginScreen navigation={navigation} />
    </View>
  );
}

export default Login;
