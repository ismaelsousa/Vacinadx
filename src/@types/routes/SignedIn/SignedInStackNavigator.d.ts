/* eslint-disable @typescript-eslint/no-unused-vars */

import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
declare global {
  export type SignedInStackParamList = {
    BottomTabHome: undefined;
    VaccineDetail: {vaccine: any};
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
