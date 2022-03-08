import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AddVaccine from '~/screen/SignedIn/AddVaccine';
import Home from '~/screen/SignedIn/Home';
import QR from '~/screen/SignedIn/QR';

const Stack = createNativeStackNavigator();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="homeStack"
        options={{header: () => null}}
        component={Home}
      />
      <Stack.Screen
        name="addVaccine"
        options={{header: () => null}}
        component={AddVaccine}
      />
      <Stack.Screen name="qr" options={{header: () => null}} component={QR} />
    </Stack.Navigator>
  );
};

export default HomeStack;
