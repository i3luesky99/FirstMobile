import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  BackHandler,
} from 'react-native';
import {COLORS, globalStyles, hitSlop} from '../../../../constants';
import BackArrow from '../../../../assets/image/svg/backArrow.svg';

import BottomButton from './BottomButton';
import Dialog from './Dialog';
import AddImage from './AddImage';

function CreatItem({navigation}) {
  const [open, setOpen] = useState(false);
  const [focus, setFocus] = useState('');
  const [name, setName] = useState('');
  const [normalPrice, setNormalPrice] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [warning, setWarning] = useState(false);
  const [image, setImage] = useState([]);

  const temp = {
    name: name,
    normalPrice: normalPrice,
    price: price,
    description: description,
    image: image,
  };

  const onOpenDialog = () => {
    setOpen(true);
  };

  useEffect(() => {
    const backAction = () => {
      setOpen(true);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
  }, []);

  const onFocus = type => {
    setFocus(type);
  };

  const onBlur = () => {
    setFocus(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.icon}
          onPress={onOpenDialog}
          hitSlop={hitSlop}>
          <BackArrow fill={COLORS.blackDark} />
        </TouchableOpacity>
        <Text style={styles.text}>Tạo sản phẩm</Text>
      </View>
      <AddImage image={image} setImage={setImage} />
      <View style={styles.contentItem}>
        <View style={styles.contentBox}>
          {warning && name === '' ? (
            <Text
              style={[
                styles.textInput,
                {
                  color: focus === 'name' ? COLORS.greenLighter : COLORS.red,
                },
              ]}>
              Tên sản phẩm <Text style={styles.star}>*</Text>
            </Text>
          ) : (
            <Text
              style={[
                styles.textInput,
                {
                  color:
                    focus === 'name' ? COLORS.greenLighter : COLORS.blackLight,
                },
              ]}>
              Tên sản phẩm <Text style={styles.star}>*</Text>
            </Text>
          )}

          <View
            style={[
              styles.inputBox,
              {
                borderColor:
                  focus === 'name' ? COLORS.greenLighter : COLORS.lowGrey,
              },
            ]}>
            <TextInput
              style={[styles.input]}
              onFocus={() => onFocus('name')}
              onBlur={onBlur}
              placeholder="Ví dụ: Mì Hảo Hảo"
              value={name}
              onChangeText={setName}
            />
          </View>
          {warning && name === '' && (
            <Text style={styles.warning}>Thông tin bắt buộc</Text>
          )}
        </View>
        <View style={styles.boxAdd}>
          <View style={styles.contentAdd}>
            {warning && normalPrice === '' ? (
              <Text
                style={[
                  styles.textInput,
                  {
                    color:
                      focus === 'normal_price'
                        ? COLORS.greenLighter
                        : COLORS.red,
                  },
                ]}>
                Giá bán <Text style={styles.star}>*</Text>
              </Text>
            ) : (
              <Text
                style={[
                  styles.textInput,
                  {
                    color:
                      focus === 'normal_price'
                        ? COLORS.greenLighter
                        : COLORS.blackLight,
                  },
                ]}>
                Giá bán <Text style={styles.star}>*</Text>
              </Text>
            )}
            <View
              style={[
                styles.inputBox,
                {
                  marginRight: 16,
                  borderColor:
                    focus === 'normal_price'
                      ? COLORS.greenLighter
                      : COLORS.lowGrey,
                },
              ]}>
              <TextInput
                onFocus={() => onFocus('normal_price')}
                onBlur={onBlur}
                style={styles.input}
                placeholder="0"
                value={normalPrice}
                onChangeText={setNormalPrice}
                keyboardType="numeric"
              />
            </View>
            {warning && normalPrice === '' && (
              <Text style={styles.warning}>Thông tin bắt buộc</Text>
            )}
          </View>
          <View style={styles.contentAdd}>
            <Text
              style={[
                styles.textInput,
                {
                  color:
                    focus === 'price' ? COLORS.greenLighter : COLORS.blackLight,
                },
              ]}>
              {' '}
              Giá vốn
            </Text>
            <View
              style={[
                styles.inputBox,
                {
                  borderColor:
                    focus === 'price' ? COLORS.greenLighter : COLORS.lowGrey,
                },
              ]}>
              <TextInput
                onFocus={() => onFocus('price')}
                onBlur={onBlur}
                style={styles.input}
                placeholder="0"
                keyboardType="numeric"
                onChangeText={setPrice}
              />
            </View>
          </View>
        </View>
        <View style={styles.description}>
          <Text
            style={[
              styles.textInput,
              {
                color:
                  focus === 'description'
                    ? COLORS.greenLighter
                    : COLORS.blackLight,
              },
            ]}>
            Mô tả
          </Text>
          <View
            style={[
              styles.inputBox,
              {
                borderColor:
                  focus === 'description'
                    ? COLORS.greenLighter
                    : COLORS.lowGrey,
              },
            ]}>
            <TextInput
              onFocus={() => onFocus('description')}
              onBlur={onBlur}
              style={styles.input}
              placeholder="Ví dụ: Mì Hảo Hảo chua cay"
              onChangeText={setDescription}
            />
          </View>
        </View>
      </View>
      <BottomButton
        warning={warning}
        setWarning={setWarning}
        name={name}
        normalPrice={normalPrice}
        temp={temp}
        navigation={navigation}
      />
      <Dialog open={open} setOpen={setOpen} navigation={navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position:'relative'
  },
  header: {
    ...globalStyles.rowCenter,
    height: 56,
    backgroundColor: COLORS.whiteLight,
  },
  icon: {
    // alignItems:'center'
    width: '30%',
    // backgroundColor: 'red',
    marginLeft: -17,
  },
  text: {
    // textAlign: 'center',
    width: '50%',
    // fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    color: COLORS.darkBlack,
  },
  contentItem: {
    // height: 168,
    paddingTop: 8,
    backgroundColor: COLORS.whiteLight,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center',
  },
  contentBox: {
    // marginTop: 16,
  },
  inputBox: {
    height: 42,
    borderBottomWidth: 1,
  },
  input: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 15,
    color: COLORS.blackDark,
  },
  textInput: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 22,
    color: COLORS.blackLight,
  },
  boxAdd: {
    width: '100%',
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  contentAdd: {
    width: '50%',
  },
  description: {
    marginTop: 16,
    marginBottom: 16,
  },
  star: {
    color: COLORS.red,
  },
  warning: {
    marginTop: 4,
    color: COLORS.red,
    marginBottom: -8,
  },
});

export default CreatItem;
