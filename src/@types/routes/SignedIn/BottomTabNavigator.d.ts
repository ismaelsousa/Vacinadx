/* eslint-disable @typescript-eslint/no-unused-vars */
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

declare global {
  export type BottomTabParamList = {
    home: undefined;
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
