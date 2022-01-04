import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Access from '~/screen/SignIn/Access';
import Login from '~/screen/SignIn/Login';
import OnBoarding from '~/screen/SignIn/OnBoarding';
import SignUp from '~/screen/SignIn/SignUp';
import SignUpStep2 from '~/screen/SignIn/SignUpStep2';

const Stack = createNativeStackNavigator<SignInStackParamList>();

const SignInNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name="onBoarding" component={OnBoarding} />
      <Stack.Screen name="access" component={Access} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signUp" component={SignUp} />
      <Stack.Screen name="signUpStep2" component={SignUpStep2} />
    </Stack.Navigator>
  );
};

export default SignInNavigator;
