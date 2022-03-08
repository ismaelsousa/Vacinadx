import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AddVaccine from '~/screen/SignedIn/AddVaccine';
import Home from '~/screen/SignedIn/Home';

import QRCode from '~/screen/SignedIn/QRCode';

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
      <Stack.Screen
        name="qrCode"
        options={{header: () => null}}
        component={QRCode}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
