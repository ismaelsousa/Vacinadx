/* eslint-disable @typescript-eslint/no-unused-vars */

import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
declare global {
  export type SignInStackParamList = {
    access: undefined;
    login: undefined;
    onBoarding: undefined;
    signUp: undefined;
    signUpStep2: {
      email: string;
      firstName: string;
      lastName: string;
    };
  };

  /**
   * useNavigation types
   */
  export type SignInStackNavigatorProp = NativeStackNavigationProp<
    SignInStackParamList,
    'access'
  >;

  /**
   * useRoute types
   */
  export type SignUpStep2SignInStackRouteProp = RouteProp<
    SignInStackParamList,
    'signUpStep2'
  >;
}
