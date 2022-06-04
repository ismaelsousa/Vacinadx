/* eslint-disable @typescript-eslint/no-unused-vars */
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams} from '@react-navigation/native';
import {HomeStackParamList} from './HomeStackNavigator';

declare global {
  export type BottomTabParamList = {
    home?: NavigatorScreenParams<HomeStackParamList>;
    profile: undefined;
  };

  /**
   * useNavigation types
   */
  export type StartBottomTabNavigatorProp = BottomTabNavigationProp<
    BottomTabParamList,
    'home'
  >;
}
