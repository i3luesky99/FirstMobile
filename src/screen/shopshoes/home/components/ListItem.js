import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {COLORS} from '../../../constants';
import Items from './Items';
import NikeIcon from '../../../assets/images/nikeIcon.svg';
import AdidasIcon from '../../../assets/images/adidasIcon.svg';
import Adidas1Icon from '../../../assets/images/adidas1Icon.svg';
import PumaIcon from '../../../assets/images/pumaIcon.svg';
import ContentList from './ContentList';

const arrProduct = [
  {
    id: '0',
    name: 'Nike Air Max 90',
    price: '234.12',
    source: require('../../../assets/images/image.png'),
    icon: <NikeIcon fill={COLORS.greyLighter} />,
  },
  {
    id: '1',
    name: 'Nike Air Max 11',
    price: '234.1555',
    source: require('../../../assets/images/image1.png'),
    icon: <Adidas1Icon />,
  },
  {
    id: '2',
    name: 'Nike Air Max 332',
    price: '2124.12',
    source: require('../../../assets/images/image2.png'),
    icon: <Adidas1Icon />,
  },
  {
    id: '3',
    name: 'Nike Air Max 39',
    price: '1234.12',
    source: require('../../../assets/images/image2.png'),
    icon: <Adidas1Icon />,
  },
  {
    id: '4',
    name: 'Nike Air Max 41',
    price: '234.13122',
    source: require('../../../assets/images/image1.png'),
    icon: <Adidas1Icon />,
  },
  {
    id: '5',
    name: 'Nike Air Max 39',
    price: '1234.12',
    source: require('../../../assets/images/image2.png'),
    icon: <NikeIcon fill={COLORS.greyLighter} />,
  },
];

function ListItem({navigation}) {
  const renderItem = ({item, index}) => {
    return <Items item={item} index={index} navigation={navigation} />;
  };

  return (
    <View style={styles.listItem}>
      <FlatList
        ListHeaderComponent={<ContentList />}
        data={arrProduct}
        renderItem={renderItem}
        horizontal={false}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom:15
  },
});
export default ListItem;
