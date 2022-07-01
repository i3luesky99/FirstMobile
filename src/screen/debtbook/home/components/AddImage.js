import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import {COLORS, globalStyles} from '../../../../constants';
import Delete from '../../../../assets/image/svg/delete.svg';
import ImageFill from '../../../../assets/image/svg/addImg.svg';
import Camera from '../../../../assets/image/svg/camera.svg';

import * as ImagePicker from 'react-native-image-picker';
export default function AddImage({image, setImage}) {
  const options = {
    title: 'Pick an image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const openPicker = () => {
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {uri: response.assets[0].uri};
        const arrImage = [...image, source];
        setImage(arrImage);
      }
    });
  };
  const openCamera = () => {
    ImagePicker.launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {uri: response.assets[0].uri};
        const arrImage = [...image, source];
        setImage(arrImage);
      }
    });
  };
  const renderItem = ({item, index}) => {
    const handleDelete = () => {
      const a1 = image.slice(0, index);
      const a2 = image.slice(index + 1, image.length);
      const new_arr = a1.concat(a2);
      setImage(new_arr);
    };
    return (
      <View style={styles.superBoxImage}>
        <Image source={item} style={styles.img} />
        <View style={styles.boxImage}>
          <Text style={styles.textIndexImage}>{index + 1}</Text>
          <TouchableOpacity onPress={handleDelete}>
            <Delete />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.boxAddImage}>
      <View style={styles.boxButtonAcctionImage}>
        <View>
          <TouchableOpacity
            style={[styles.addImage, {width: image.length === 0 ? 120 : 44}]}
            onPress={openPicker}>
            <ImageFill />
            {image.length === 0 && (
              <Text style={styles.textAddImage}>Thêm ảnh</Text>
            )}
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.shootImage, {width: image.length === 0 ? 115 : 44}]}
            onPress={openCamera}>
            <Camera />
            {image.length === 0 && (
              <Text style={styles.textAddImage}>Chụp ảnh</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>

      {image.length !== 0 && (
        <FlatList
          data={image}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  boxAddImage: {
    marginLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addImage: {
    ...globalStyles.rowCenter,
    height: 38,
    backgroundColor: COLORS.whiteLight,
    marginTop: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.blueLight,
  },
  shootImage: {
    ...globalStyles.rowCenter,
    height: 38,
    backgroundColor: COLORS.whiteLight,
    marginTop: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.blueLight,
    marginBottom: 8,
  },
  textAddImage: {
    fontStyle: 'normal',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    color: COLORS.blueLight,
    marginLeft: 6,
  },

  textIndexImage: {
    width: 20,
    height: 20,
    borderRadius: 50,
    borderColor: COLORS.greenLighter,
    borderWidth: 1,
    backgroundColor: COLORS.whiteLight,
    textAlign: 'center',
    color: COLORS.greenLighter,
  },
  boxButtonAcctionImage: {
    marginRight: 14,
  },
  boxImage: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 82,
    marginTop: 6,
    paddingLeft: 6,
    paddingRight: 6,
  },
  superBoxImage: {
    marginRight: 8,
  },
  img: {
    width: 82,
    height: 82,
    borderRadius: 6,
  },
});
