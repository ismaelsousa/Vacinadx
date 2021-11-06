import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from '~/components/Icon';
import Home from '~/screen/SignedIn/Home';
import Profile from '~/screen/SignedIn/Profile';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="home"
        component={Home}
        options={{
          header: () => null,
          tabBarIcon: () => <Icon icon="fantasma" />,
        }}
      />
      <BottomTab.Screen
        name="profile"
        component={Profile}
        options={{
          header: () => null,
          tabBarIcon: () => <Icon icon="morte" />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
