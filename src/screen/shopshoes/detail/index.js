import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import SettingIcon from '../../assets/images/settingIcon.svg';
import ArrowIcon from '../../assets/images/backArrow.svg';
import {COLORS, globalStyles} from '../../../constants/index';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Carousel, {Pagination} from 'react-native-snap-carousel-v4';
import {Dimensions} from 'react-native';
import Vector from '../../assets/images/vectorIcon.svg';
import {
  Menu,
  MenuOption,
  MenuTrigger,
  MenuOptions,
} from 'react-native-popup-menu';
// import { Rect } from 'react-native-svg';

function DetailItem({navigation, route}) {
  const params = route.params;
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [size, setSize] = useState('');
  const [chooseColor, setChooseColor] = useState();

  const images = [
    {
      source: params.source,
    },
    {
      source: require('../../assets/images/img.png'),
    },
    {
      source: require('../../assets/images/image.png'),
    },
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  const iconCircle = ['#29605D', '#5B8EA3', '#746A36', '#2E2E2E'];
  const Size = ['Size S', 'Size M', 'Size L', 'Size XL', 'Size XXL'];
  const renderItem = ({item, index}) => {
    return (
      <View style={[styles.image, globalStyles.flexCenter]}>
        <Image source={item.source} />
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={[styles.header, globalStyles.rowSpacebeetween]}>
        <TouchableOpacity
          // hitSlop={Rect}
          onPress={() => navigation.goBack()}>
          <ArrowIcon />
        </TouchableOpacity>
        <SettingIcon />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignItems: 'center'}}>
          <View style={[styles.images, globalStyles.flexCenter]}>
            <Carousel
              layout="default"
              sliderWidth={350}
              itemWidth={350}
              data={images}
              onSnapToItem={index => setActiveSlide(index)}
              renderItem={renderItem}
            />
            <Pagination
              dotsLength={images.length}
              activeDotIndex={activeSlide}
              animatedDuration={600}
              dotStyle={styles.dot}
              inactiveDotStyle={styles.inactiveDot}
              inactiveDotOpacity={0.9}
              inactiveDotScale={0.6}
            />
          </View>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.title}>{params.name}</Text>
          <Text style={styles.price}>${params.price}</Text>
          <Text style={styles.text}>
            A pillar of sneaker culture, the Nike Air Max 90 remains one of the
            most significant designs since the brand’s founding. And while its
            OG colorways are some of the most significant. A pillar of sneaker
            culture, the Nike Air Max 90 remains one of the most significant
            designs since the brand’s founding. And while its OG colorways are
            some of the most significant. A pillar of sneaker culture, the Nike
            Air Max 90 remains one of the most significant designs since the
            brand’s founding. And while its OG colorways are some of the most
            significant.
          </Text>
        </View>
      </ScrollView>
      <View style={styles.bottomNav}>
        <View style={globalStyles.rowCenter}>
          <View style={styles.colorChoose}>
            {iconCircle.map((value, index) => (
              <TouchableOpacity onPress={() => setChooseColor(index)}>
                <View
                  key={index}
                  style={[
                    {
                      backgroundColor: value,
                      borderWidth: chooseColor === index ? 2 : 0,
                    },
                    styles.circle,
                  ]}></View>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.button}>
            <Menu>
              <MenuTrigger style={[styles.button, globalStyles.rowCenter]}>
                <Text style={styles.textButton}>{size || `Choose size`}</Text>
                <Vector />
              </MenuTrigger>
              <MenuOptions style={styles.menu}>
                <ScrollView
                  contentContainerStyle={{
                    alignItems: 'center',
                    maxHeight: 200,
                  }}
                  showsVerticalScrollIndicator={false}>
                  {Size.map((value, index) => (
                    <MenuOption onSelect={() => setSize(value)} key={index}>
                      <Text
                        style={[
                          styles.textButton,
                          size === value && {color: COLORS.primaryBlack},
                        ]}>
                        {value}
                      </Text>
                    </MenuOption>
                  ))}
                </ScrollView>
              </MenuOptions>
            </Menu>
          </View>
        </View>
        {/* <ScrollView > */}
        <TouchableOpacity style={[styles.buttonAdd, globalStyles.flexCenter]}>
          <Text style={styles.textButtonAdd}>Add to bag</Text>
        </TouchableOpacity>
        {/* </ScrollView> */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    padding: 18,
  },
  bottom: {
    marginTop: 14,
    paddingLeft: 36,
    paddingRight: 36,
  },
  title: {
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 25,
    color: COLORS.primaryBlack,
    fontWeight: '700',
    // lineHeight:20,
  },
  price: {
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 18,
    color: COLORS.greyDarker,
    fontWeight: '700',
  },
  text: {
    marginTop: 18,
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 15,
    color: COLORS.greyLighter,
    fontWeight: '700',
  },
  textButton: {
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 15,
    color: COLORS.greyLighter,
    fontWeight: '700',
    marginRight: 6,
    maxWidth: 200,
    // flex: 1,
  },
  bottomNav: {
    marginTop: 13,
    marginBottom: 13,
    alignItems: 'center',
  },
  colorChoose: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: COLORS.primaryWhite,
    width: 134,
    height: 38,
    borderRadius: 12,
  },
  buttonAdd: {
    width: 304,
    marginTop: 18,
    height: 53,
    backgroundColor: COLORS.primaryBlack,
    borderRadius: 15,
  },
  textButtonAdd: {
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '700',
    marginRight: 6,
  },
  menu: {
    maxHeight: 100,
    // backgroundColor: COLORS.whiteLighter,
  },
  circle: {
    width: 23,
    height: 23,
    marginRight: 20,
    borderRadius: 20,
    borderColor: 'red',
  },
  images: {
    borderRadius: 15,
    backgroundColor: COLORS.primaryGrey,
    width: 370,
    height: 370,
  },
  image: {
    height: 350,
    width: 350,
  },
  dot: {
    width: 35,
    height: 6,
    borderRadius: 5,
    marginRight: -15,
    backgroundColor: COLORS.trueWhite,
  },
  inactiveDot: {
    height: 6,
    width: 25,
    borderRadius: 5,
    backgroundColor: COLORS.greyBase,
  },
});

export default DetailItem;
