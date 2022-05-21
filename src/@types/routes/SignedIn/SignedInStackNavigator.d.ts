/* eslint-disable @typescript-eslint/no-unused-vars */
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

declare global {
  export type SignedInStackParamsList = {
    BottomTabHome: undefined;
    //FIXME: Create real interface to vaccine
    VaccineDetail: {vaccine: any};
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
