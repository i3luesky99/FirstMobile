import OTPInput from 'react-native-otp';
import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Logo from '../../../../assets/image/svg/logo.svg';
import {COLORS, globalStyles} from '../../../../constants';
import formatPhoneNumber from '../../../../utilities/formatPhoneNumber';
import {t} from '../../../../utilities/globalFuntion';

function OTPScreen({navigation}) {
  var clockCall = null;
  const [phone, setPhone] = useState('');
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [countdown, setCountdown] = useState(30);
  const [otp, setOtp] = useState('');
  const auth = '1234';

  const handleChangeOTP = otp => {
    setOtp(otp);
  };

  useEffect(() => {
    clockCall = setInterval(() => {
      decrementClock();
    }, 1000);
    return () => {
      clearInterval(clockCall);
    };
  });

  const decrementClock = () => {
    if (countdown === 0) {
      // setEnableResend(true);
      setCountdown(0);
      clearInterval(clockCall);
    } else {
      setCountdown(countdown - 1);
    }
  };

  const onResendOTP = () => {
    setCountdown(30);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };
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
        <Text style={styles.title}>{t(`authCode`)}</Text>
        <Text style={styles.text}>{t(`sendOTPcode`)}</Text>
        <View style={styles.boxPhone}>
          <Text style={styles.phone}>0913123123 </Text>
          <Text style={styles.text}>{t(`customerPhone`)}</Text>
        </View>
        <OTPInput
          value={otp}
          autoFocus={true}
          onChange={handleChangeOTP}
          otpLength={4}
          tintColor={COLORS.green}
          // offTintColor="green"
          keyboardType="numeric"
          cellStyle={styles.otpInput}
        />
        <Text style={styles.error}>{t(`wrongOTP`)} </Text>
        <View style={[styles.sendOTP, {width: windowWidth}]}>
          <View style={styles.send}>
            {countdown === 0 ? (
              <TouchableOpacity style={styles.reCount} onPress={onResendOTP}>
                <Text>Gữi lại mã xác thực </Text>
              </TouchableOpacity>
            ) : (
              <>
                <Text style={styles.resendOTP}>Gữi lại mã sau </Text>
                <Text style={styles.second}>{countdown}s</Text>
              </>
            )}
          </View>
          <TouchableOpacity onPress={handleGoBack}>
            <Text style={styles.readdPhone}>Nhập lại số điện thoại</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.bottom, {bottom: windowHeight - 490}]}>
          <Logo />
          <Text>An toàn & bảo mật 100%</Text>
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
  boxPhone: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    marginTop: 5,
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17,
    color: COLORS.black,
  },
  phone: {
    marginTop: 4,
    fontWeight: '500',
    color: COLORS.primaryDark,
  },

  otpInput: {
    marginRight: 20,
    width: 50,
    height: 48,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    borderRadius: 4,
    textAlign: 'center',
  },
  bottom: {
    position: 'absolute',
    ...globalStyles.flexCenter,
  },
  send: {
    flexDirection: 'row',
  },
  second: {
    color: COLORS.blue,
  },
  sendOTP: {
    paddingLeft: '10%',
    paddingRight: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  resendOTP: {
    marginTop: 3,
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17,
    color: COLORS.lightGrey,
  },
  reCount: {
    marginTop: 1,
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17,
    color: COLORS.lightGrey,
  },
  readdPhone: {
    marginTop: 3,
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17,
    color: COLORS.blue,
  },
  error: {
    marginTop: 8,
    color: COLORS.primaryRed,
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 14,
  },
});
export default OTPScreen;
