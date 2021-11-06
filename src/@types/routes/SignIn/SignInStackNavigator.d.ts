/* eslint-disable @typescript-eslint/no-unused-vars */

// import {RouteProp} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
declare global {
  export type SignInStackParamList = {
    access: undefined;
    login: undefined;
    onBoarding: undefined;
    signUp: undefined;
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
  // export type StoriesSignInStackRouteProp = RouteProp<
  //   SignInStackParamList,
  //   'access'
  // >;
}
