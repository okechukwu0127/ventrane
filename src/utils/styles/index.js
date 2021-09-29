import React, {Component} from 'react';

import {StyleSheet,Dimensions} from 'react-native';
 const {width} = Dimensions.get('window');
 const {height} = Dimensions.get('window');


const styles = StyleSheet.create({
  fStart: {justifyContent: 'flex-start'},
  fEnd: {justifyContent: 'flex-end'},
  fDirecRow: {flexDirection: 'row'},
    fDirecCol: { flexDirection: 'column' },
   
  HomeContainer: {
    borderWidth: 0,
    borderColor: 'red',
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 0,
    //height:height
  },

  NavBarAvatar: {
    width: 35,
    height: 35,
  },

  NavBarContainer: {
    // flex: 1,
    flexDirection: 'row',
    width: 100 + '%',
    borderWidth: 0,
      borderColor: 'red',
      backgroundColor: '#eee',
      paddingHorizontal:10
    
    //justifyContent:''
  },

  cardShadow: {
    backgroundColor: '#fff',

    height: 135,
    //paddingBottom: 5,
    //margin: 5,
    marginHorizontal: 3,
    // justifyContent:'flex-start',alignContent:'flex-start',alignItems:'flex-start',
    borderWidth: 0,
    borderColor: 'green',
    borderRadius: 15,
    shadowColor: '#000',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 2,
  },
});

export default styles;
