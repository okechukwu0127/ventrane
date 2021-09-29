import React, {Component} from 'react';

import {Text, View, SafeAreaView, Image, Dimensions} from 'react-native';
import styles from '../../../../utils/styles';
import config from '../../../../config';
import Carousel from 'react-native-snap-carousel';

function CarouselCard() {
  const {width} = Dimensions.get('window');

  const SLIDER_WIDTH = Dimensions.get('window').width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
  const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

  const CardData = [
    {
      title: 'Item 1',
      text: 'Text 1',
      bg: '#FB8C00',
    },
    {
      title: 'Item 2',
      text: 'Text 2',
      bg: '#3b5df1',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
      bg: '#10b215',
    },
    {
      title: 'Item 4',
      text: 'Text 4',
      bg: '#bb10f9',
    },
    {
      title: 'Item 5',
      text: 'Text 5',
      bg: '#17c6d9',
    },
  ];

  const _renderItem = ({item, index}) => {
    return (
      <View
        style={[
          styles.cardShadow,
          {backgroundColor: item.bg, height: 170, alignItems: 'flex-start',borderColor:'green',borderWidth:0},
        ]}>
        <View style={{height: 140,}}>
          <View
            style={[
              styles.fDirecRow,
              {
                justifyContent: 'space-between',

                paddingHorizontal: 10,
                width: 100 + '%',
              },
            ]}>
            <View style={[styles.fStart]}>
              <Text style={{fontSize: 14, color: 'white', fontWeight: '600'}}>
                Current Balance 
              </Text>
            </View>

            <Image
              source={config.themeDefault.IMAGES.MasterCard}
              style={[styles.fEnd, {width: 20, height: 20}]}
            />
          </View>

          <View
            style={[
              styles.fDirecRow,
              {
                justifyContent: 'flex-start',
                paddingHorizontal: 10,
                width: 100 + '%',
                paddingVertical: 6,
              },
            ]}>
            <View
              style={{backgroundColor: 'orange', padding: 6, borderRadius: 6}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 10,
                  padding: 4,
                  fontWeight: '600',
                }}>
                USD
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  paddingLeft: 10,
                  paddingTop: 6,
                  fontWeight: '700',
                  color: 'white',
                }}>
                234.6
              </Text>
            </View>
          </View>

          <View
            style={[
              styles.fDirecRow,
              {
                justifyContent: 'flex-start',
                //paddingHorizontal: 10,
                width: 100 + '%',
                paddingVertical: 6,
              },
            ]}>
            <Text
              style={{
                fontSize: 14,
                paddingLeft: 10,
                paddingTop: 6,
                fontWeight: '700',
                color: 'white',
              }}>
              ****
            </Text>

            <Text
              style={{
                fontSize: 14,
                paddingLeft: 10,
                paddingTop: 6,
                fontWeight: '700',
                color: 'white',
              }}>
              ****
            </Text>

            <Text
              style={{
                fontSize: 14,
                paddingLeft: 10,
                paddingTop: 6,
                fontWeight: '700',
                color: 'white',
              }}>
              ****
            </Text>

            <Text
              style={{
                fontSize: 18,
                paddingLeft: 10,
                paddingTop: 6,
                fontWeight: '700',
                color: 'white',
              }}>
              12345
            </Text>
          </View>

          <View
            style={[
              styles.fDirecRow,
              {
                justifyContent: 'space-between',

                paddingHorizontal: 10,
                marginTop:15,
                width: 100 + '%',
              },
            ]}>
            <View style={[styles.fStart]}>
              <Text style={{fontSize: 14, color: 'white', fontWeight: '600'}}>
                One Achmad
              </Text>
            </View>

            <View style={[styles.fEnd]}>
              <Text style={{fontSize: 9, color: 'white'}}>Exp Date</Text>
              <Text style={{fontSize: 14, fontWeight:'500', color: 'white'}}>10/28</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{paddingVertical: 20,width:120+'%',marginLeft:-10,marginTop:20,borderColor:'green',borderWidth:0,height:225}}>
      <Carousel
        ref={ref => (this.carousel = ref)}
        data={CardData}
        loop
        activeAnimationType={'spring'}
        layout={'default'}
        autoplay
        renderItem={_renderItem}
        //sliderWidth={width - (20 /10) * width}
        //itemWidth={width - width * 0.2}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
      />
      
    </View>
  );
}

export default CarouselCard;
