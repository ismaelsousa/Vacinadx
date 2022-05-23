import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AddVaccine from '~/screen/SignedIn/AddVaccine';
import AddVaccineManually from '~/screen/SignedIn/AddVaccineManually';
import Home from '~/screen/SignedIn/Home';
import MyVaccine from '~/screen/SignedIn/MyVaccine';

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
      <Stack.Screen
        name="addVaccineManually"
        options={{header: () => null}}
        component={AddVaccineManually}
      />
      <Stack.Screen
        name="MyVaccine"
        options={{header: () => null}}
        component={MyVaccine}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
