import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from '~/components/Icon';
import HomeStackNavigator from '../HomeStackNavigator';
import ProfileStackNavigator from '../ProfileStackNavigator';

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="home"
        component={HomeStackNavigator}
        options={{
          header: () => null,
          tabBarIcon: () => <Icon icon="fantasma" />,
        }}
      />
      <BottomTab.Screen
        name="profile"
        component={ProfileStackNavigator}
        options={{
          header: () => null,
          tabBarIcon: () => <Icon icon="morte" />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;
