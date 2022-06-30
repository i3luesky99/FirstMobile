import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

function Love() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  console.log(counter);
  const onIncrease = () => {
    dispatch({type: 'INCREASE'});
  };

  const onDecrease = () => {
    dispatch({type: 'DECREASE'});
  };
  return (
    <View style={{flex: 1, padding: 30}}>
      {counter.hair && (
        <TouchableOpacity
          onPress={onIncrease}
          style={{
            width: 100,
            height: 50,
            backgroundColor: 'red',
            marginBottom: 30,
          }}>
          <Text>Bấm em đi anh</Text>
        </TouchableOpacity>
      )}
      {counter.type && (
        <TouchableOpacity
          onPress={onDecrease}
          style={{width: 100, height: 50, backgroundColor: 'red'}}>
          <Text>Bấm anh đi bé</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default Love;
