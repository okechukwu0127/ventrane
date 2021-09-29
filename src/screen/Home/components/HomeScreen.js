import React, {Component} from 'react';

import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import styles from '../../../utils/styles'
import NavBar from './childs/NavBar'
import CarouselCard from './childs/CarouselCard';
import Services from './childs/Services';
import Transactions from './childs/Transactions';


//Transactions





function HomeScreen() {
    return (
      <SafeAreaView>
        <View contentContainerStyle={[styles.HomeContainer]}>
          <NavBar />
                   
          <CarouselCard />
          <Services />
          <Transactions/>
          
        </View>
      </SafeAreaView>
    );
}

export default HomeScreen;
