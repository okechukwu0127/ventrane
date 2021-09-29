import React, {Component} from 'react';

import {Text, View, SafeAreaView, Image, FlatList} from 'react-native';
import styles from '../../../../utils/styles';
import config from '../../../../config';

function Transactions() {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53ab',
      title: 'Dribble',
      img: config.themeDefault.IMAGES.Destination,
      amount: '$194',
      subtitle: 'Payment Recieved',
      color: '#FB8C00',
    },
    {
      id: '3ac68afc-c605-48d3-d91aa97f63',
      title: 'Google Wallet',
      img: config.themeDefault.IMAGES.Shuttle,
      amount: '$272',
      subtitle: 'Payment Recieved',
      color: '#10b215',
    },
    {
      id: '58694a0f-3d-bd96-145571e29d72',
      title: 'Uplabs',
      img: config.themeDefault.IMAGES.Woman,
      amount: '$915',
      subtitle: 'Payment Recieved',
      color: '#bb10f9',
    },

    {
      id: '580f-3da1-471f-bd96-145571e29d72',
      title: 'SwipeCard',
      img: config.themeDefault.IMAGES.Ball3,
      amount: '$478',
      subtitle: 'Payment Recieved',
      color: '#17c6d9',
    },

    {
      id: '5869d96-145571e29d72',
      title: 'MasterCard',
      img: config.themeDefault.IMAGES.Ball2,
      amount: '$552',
      subtitle: 'Payment Recieved',
      color: '#2ea211',
    },

    {
      id: '58694a0f-3de29d72',
      title: 'PayPal',
      img: config.themeDefault.IMAGES.Ball1,
      amount: '$390',
      subtitle: 'Payment Recieved',
      color: 'purple',
    },
  ];

  const Item = ({title, img, amount, color, id, subtitle}) => (
    <View
      style={[
        styles.cardShadow,
        {
          height: 70,
          marginHorizontal: 16,
          marginVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
      ]}>
      <View style={{flexDirection: 'row'}}>
        <Image source={img} style={{width: 40, height: 40}} />
        <View style={{marginLeft: 10}}>
          <Text style={{fontSize: 15, fontWeight: '600', color: 'grey'}}>
            {title}
          </Text>
          <Text style={{color: '#ccc',fontSize:12}}>{subtitle}</Text>
        </View>
      </View>
      <View style={{marginRight: 10}}>
        <Text style={{fontSize: 14, color: color, fontWeight: '700'}}>
          {amount}
        </Text>
      </View>

      {/* <Text>{title}</Text> */}
    </View>
  );

  const renderItem = ({item}) => (
    <Item
      title={item.title}
      img={item.img}
      amount={item.amount}
      color={item.color}
          subtitle={item.subtitle}
          id={item.id}
    />
  );

  return (
    <SafeAreaView
      style={{ marginTop: 40, height: 300, width: 100 + '%'}}>
      <Text style={{fontWeight: '600', fontSize: 17,marginLeft:18,}}>Recent Transaction</Text>

      <FlatList
        style={{marginTop: 20}}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

export default Transactions;
