import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';

function FloatingButton() {
  const actions = [
    {
      text: 'Accessibility',
      //   icon: require('./images/ic_accessibility_white.png'),
      name: 'bt_accessibility',
      position: 2,
    },
    {
      text: 'Language',
      //   icon: require('./images/ic_language_white.png'),
      name: 'bt_language',
      position: 1,
    },
    {
      text: 'Location',
      //   icon: require('./images/ic_room_white.png'),
      name: 'bt_room',
      position: 3,
    },
    {
      text: 'Video',
      //   icon: require('./images/ic_videocam_white.png'),
      name: 'bt_videocam',
      position: 4,
    },
  ];

  const type = [1,2,3,4]
  // console.log(actions);
  const open = () =>{
    console.log("123123")
  }
  return (
    <View style={styles.container}>
      {/* <Text style={styles.example}>Floating Action example</Text> */}
      <FloatingAction
        actions={actions}
        onPressItem={open}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginTop:199},
  example: {},
});

export default FloatingButton;
