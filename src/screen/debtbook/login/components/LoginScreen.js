import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Logo from '../../../../assets/image/svg/logo.svg';
import {COLORS, globalStyles} from '../../../../constants';
import formatPhoneNumber from '../../../../utilities/formatPhoneNumber';
import i18n from '../../../../assets/string/i18n';

function LoginScreen() {
  const [phone, setPhone] = useState('');
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const {t} = i18n;
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.img, {width: windowWidth}]}>
        <Image
          style={{width: windowWidth}}
          source={require('../../../../assets/image/png/Frame.png')}
        />
      </View>

      <View
        style={[styles.content, {width: windowWidth, height: windowHeight}]}>
        <Text style={styles.title}>{t(`hello`)}</Text>

        <TextInput
          keyboardType="numeric"
          style={styles.input}
          maxLength={12}
          placeholder={t(`addphoneNumber`)}
          onChangeText={setPhone}
          value={formatPhoneNumber(phone)}
        />
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: phone ? COLORS.green : COLORS.grey,
              shadowColor: phone ? 'green' : 'grey',
            },
          ]}>
          <Text style={styles.text}>{t(`continue`)}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.skipText}>{t(`skip`)}</Text>
        </TouchableOpacity>
        <View style={[styles.bottom, {bottom: windowHeight - 490}]}>
          <Logo />
          <Text>{t(`safe`)}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    zIndex: 1,
  },
  content: {
    alignItems: 'center',
    backgroundColor: COLORS.trueWhite,
    zIndex: 2,
    position: 'absolute',
    marginTop: 210,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  title: {
    // fontFamily: 'SF Pro Text',
    marginTop: 23,
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
    color: COLORS.primaryDark,
  },
  input: {
    marginTop: 23,
    textAlign: 'center',
    height: 56,
    width: 319,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    borderRadius: 8,
    color: COLORS.primaryDark,
    fontWeight: '500',
    fontStyle: 'normal',

    // fontFamily: 'SF Pro Text',
  },
  button: {
    ...globalStyles.flexCenter,
    marginTop: 24,
    width: 319,
    height: 48,
    borderRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 20,
    color: COLORS.white,
  },
  skipText: {
    marginTop: 24,
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    color: COLORS.green,
  },
  bottom: {
    position: 'absolute',
    ...globalStyles.flexCenter,
  },
  //   logo: {},
});
export default LoginScreen;
