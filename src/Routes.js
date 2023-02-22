import React, {useState, useEffect} from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {isLogged} from './services/Auth';

import Loading from './Pages/Loading';
import Main from './Pages/Main';
import Stats from './Pages/Stats';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

const TabScreens = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
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
  );
};

const AppScreens = ({logged}) => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={logged ? 'Home' : 'SignIn'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={TabScreens} />
    </Stack.Navigator>
  );
};

const Routes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const initialVerification = async () => {
      if (await isLogged()) {
        setLogged(true);
      }
      setIsLoading(false);
    };
    initialVerification();
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <AppScreens logged={logged} />
    </NavigationContainer>
  );
};

export default Routes;
