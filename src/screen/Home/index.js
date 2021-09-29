import * as React from 'react';
import {Text, View, SafeAreaView, ScrollView,} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';




function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}


function ProfileScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => null,
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 16,
          },
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => null,

          tabBarLabelStyle: {
            fontSize: 16,
          },
        }}
        component={SettingsScreen}
      />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => null,

          tabBarLabelStyle: {
            fontSize: 16,
          },
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

export default function Home() {
  return (
   
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      
  );
}
