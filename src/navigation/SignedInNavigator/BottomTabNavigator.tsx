import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from '~/components/Icon';
import Home from '~/screen/SignedIn/Home';
import Profile from '~/screen/SignedIn/Profile';
import {useTheme} from 'styled-components';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  const {colors} = useTheme();
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary.main,
        tabBarInactiveTintColor: colors.surface100.main,
      }}>
      <BottomTab.Screen
        name="home"
        component={Home}
        options={{
          header: () => null,
          tabBarIcon: ({color}) => <Icon icon="home" activeColor={color} />,
        }}
      />
      <BottomTab.Screen
        name="profile"
        component={Profile}
        options={{
          header: () => null,
          tabBarIcon: ({color}) => <Icon icon="profile" activeColor={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
