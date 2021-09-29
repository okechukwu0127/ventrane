import React, {Component} from 'react';

import {Text, View, SafeAreaView, Image} from 'react-native';
import styles from '../../../../utils/styles';
import config from '../../../../config';

function Services() {
  const Card = props => {
    return (
      <View style={{flexDirection: 'column',marginHorizontal:14}}>
        <View
          style={{
            marginTop: 15,
            backgroundColor: props.bg,
            borderRadius: 10,
            padding: 10,
            //paddingVertical: 5,
          }}>
          <Image
            source={props.img}
            style={[styles.fStart, {tintColor: 'white', width: 40, height: 40}]}
          />
        </View>

        <Text
          style={{
            fontSize: 13,
            color: 'black',
            paddingTop: 7,
            alignSelf: 'center',
          }}>
          {props.title}
        </Text>
      </View>
    );
  };
  return (
    <View style={{marginHorizontal: 10, marginTop:0}}>
      <Text style={{fontWeight: '600',marginLeft:10}}>Services</Text>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Card
          title={'Wallet'}
          img={config.themeDefault.IMAGES.Invoice}
          bg={'#da448a'}
        />

        <Card
          title={'Transfer'}
          img={config.themeDefault.IMAGES.Approve}
          bg={'#189eec'}
        />

        <Card
          title={'Pay'}
          img={config.themeDefault.IMAGES.Prototype}
          bg={'#f8bd25'}
        />

        <Card
          title={'Topup'}
          img={config.themeDefault.IMAGES.Payment_1}
          bg={'#2ea211'}
        />
      </View>
    </View>
  );
}

export default Services;
