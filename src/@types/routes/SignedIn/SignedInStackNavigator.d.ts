/* eslint-disable @typescript-eslint/no-unused-vars */
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {VaccineDTO} from '~/@types/dtos/vaccine';

declare global {
  export type SignedInStackParamsList = {
    BottomTabHome: undefined;
    VaccineDetail: {vaccine: VaccineDTO};
    VaccineOnMaps: undefined;
  };

  /**
   * useNavigation Types
   */
  export type SignedInStackNavigatorProp = NativeStackNavigationProp<
    SignedInStackParamsList,
    'BottomTabHome'
  >;

  /**
   * useRoute Types
   */
  export type VaccineSignedInStackRouteProp = RouteProp<
    SignedInStackParamsList,
    'VaccineDetail'
  >;
}
