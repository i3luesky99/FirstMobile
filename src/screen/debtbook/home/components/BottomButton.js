import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, globalStyles} from '../../../../constants';
import {useSelector, useDispatch} from 'react-redux';

function BottomButton({temp, setWarning, name, normalPrice, navigation}) {
  const dispatch = useDispatch();

  const onUpdate = () => {
    if (name === '' || normalPrice === '') {
      setWarning(true);
    } else {
      dispatch({type: 'UPDATE', data: {...temp}});
      navigation.goBack();
    }
  };

  const item = useSelector(state => state.item);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Tạo thêm</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onUpdate}
        style={[styles.button, {backgroundColor: COLORS.greenLighter}]}>
        <Text style={[styles.textButton, {color: COLORS.whiteLight}]}>
          Hoàn tất
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 72,
    backgroundColor: COLORS.whiteLight,
    position: 'absolute',
    bottom: 0,
    ...globalStyles.rowSpaceevenly,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1.25,
    shadowRadius: 3.84,
  },
  button: {
    ...globalStyles.flexCenter,
    backgroundColor: COLORS.whiteLight,
    borderWidth: 1,
    borderColor: COLORS.greenLighter,
    height: 48,
    width: '45%',
    borderRadius: 6,
  },
  textButton: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.greenLighter,
  },
});

export default BottomButton;
