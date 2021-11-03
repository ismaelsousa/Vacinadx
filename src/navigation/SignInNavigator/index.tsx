import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Access from '~/screen/SignIn/Access';
import Login from '~/screen/SignIn/Login';
import OnBoarding from '~/screen/SignIn/OnBoarding';
import SignUp from '~/screen/SignIn/SignUp';

const Stack = createNativeStackNavigator();

const SignInNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="onboarding" component={OnBoarding} />
      <Stack.Screen name="access" component={Access} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default SignInNavigator;
