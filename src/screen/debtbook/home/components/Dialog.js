import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Dialog from 'react-native-dialog';
import {COLORS, globalStyles} from '../../../../constants';

function DialogBack({open, setOpen, navigation}) {
  const onCloseDialog = () => {
    setOpen(false);
  };

  const onBack = () => {
    setOpen(false);
    navigation.navigate('Home');
  };

  return (
    <View>
      <Dialog.Container
        contentStyle={styles.container}
        visible={open}
        onBackdropPress={onCloseDialog}>
        <View style={styles.content}>
          <Text style={styles.title}>Thoát không lưu?</Text>
          <Text style={styles.text}>Bạn có chắc rằng muốn thực hiện?</Text>
          <View style={styles.bottom}>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  borderWidth: 1,
                  borderColor: COLORS.blackLight,
                },
              ]}
              onPress={onCloseDialog}>
              <Text style={styles.buttonText}>Từ chối</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, {backgroundColor: COLORS.greenLighter}]}
              onPress={onBack}>
              <Text style={[styles.buttonText, {color: COLORS.whiteLight}]}>
                Đồng ý
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Dialog.Container>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    backgroundColor: COLORS.whiteLight,
    width: 334,
    height: 174,
  },
  content: {
    // ...globalStyles.flexCenter
    alignItems: 'center',
    marginTop: -15,
  },
  title: {
    // fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.darkBlack,
  },
  text: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 22,
    color: COLORS.blackDark,
    marginTop: 8,
  },
  bottom: {
    marginTop: 24,
    width: '100%',
    ...globalStyles.rowSpaceevenly,
  },
  button: {
    ...globalStyles.flexCenter,
    height: 48,
    width: '40%',
    borderRadius: 6,
  },
  buttonText: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.blackLight,
  },
});

export default DialogBack;
