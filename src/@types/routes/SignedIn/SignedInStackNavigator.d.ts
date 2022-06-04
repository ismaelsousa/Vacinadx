/* eslint-disable @typescript-eslint/no-unused-vars */

import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {VaccineDTO} from '~/@types/dtos/vaccine';
declare global {
  export type SignedInStackParamList = {
    BottomTabHome?: NavigatorScreenParams<BottomTabParamList>;
    VaccineDetail: {vaccine: VaccineDTO};
    VaccineOnMaps: undefined;
  };

  /**
   * useNavigation types
   */
  export type SignedInStackNavigatorProp = NativeStackNavigationProp<
    SignedInStackParamList,
    'BottomTabHome'
  >;

  /**
   * useRoute types
   */
  export type VaccineSignedInStackRouteProp = RouteProp<
    SignedInStackParamList,
    'VaccineDetail'
  >;
}
