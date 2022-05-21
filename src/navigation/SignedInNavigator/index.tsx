import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import VaccineDetail from '~/screen/SignedIn/VaccineDetail';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator<SignedInStackParamsList>();

const SignedInNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="BottomTabHome" component={BottomTabNavigator} />
      <Stack.Screen name="VaccineDetail" component={VaccineDetail} />
    </Stack.Navigator>
  );
};

export default SignedInNavigator;
