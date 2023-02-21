import React from 'react';
import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Main from './Pages/Main';
import Stats from './Pages/Stats';

const Routes = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarInactiveBackgroundColor: 'black',
          tabBarActiveBackgroundColor: 'black',
          tabBarStyle: {
            borderTopWidth: 0,
          },
        }}>
        <Tab.Screen
          name="Main"
          component={Main}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'home' : 'home-outline'}
                size={20}
                color="white"
              />
            ),
            tabBarLabel: 'Tracker',
          }}
        />
        <Tab.Screen
          name="Stats"
          component={Stats}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'stats-chart' : 'stats-chart-outline'}
                size={20}
                color="white"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
