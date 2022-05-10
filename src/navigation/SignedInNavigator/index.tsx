import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import VaccineDetail from '~/screen/SignedIn/VaccineDetail';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const SignedInNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="BottomTabHome" component={BottomTabNavigator} />
      <Stack.Screen
        name="VaccineDetail"
        options={{header: () => null}}
        component={VaccineDetail}
      />
    </Stack.Navigator>
  );
};

export default SignedInNavigator;
