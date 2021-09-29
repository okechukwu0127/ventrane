import React, {Component} from 'react';

import {Text, View, SafeAreaView, Image} from 'react-native';
import styles from '../../../../utils/styles';
import config from '../../../../config';

function NavBar() {
  return (
    <View
      style={[
        styles.NavBarContainer,
        {
          justifyContent: 'space-between',
          height: 50,
          borderWidth: 0,
          borderColor: 'red',
        },
      ]}>
      <View style={[styles.fStart, styles.fDirecRow]}>
        <Image
          source={config.themeDefault.IMAGES.Avatar}
          style={[styles.NavBarAvatar, styles.fStart, {marginTop: 5}]}
        />
        <View style={[styles.fEnd, {paddingLeft: 10, marginTop: 0}]}>
          <Text>Hello</Text>
          <Text style={{fontWeight: '700', fontSize: 15}}>One Account</Text>
        </View>
      </View>

      <View style={[styles.fEnd]}>
        <View style={{padding: 10, backgroundColor: '#fff', borderRadius: 10}}>
          <Image
            source={config.themeDefault.IMAGES.Search}
            style={[{width: 20, height: 20}]}
          />
        </View>
      </View>
    </View>
  );
}

export default NavBar;
