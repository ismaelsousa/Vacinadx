import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AddVaccine from '~/screen/SignedIn/AddVaccine';
import AddVaccineManually from '~/screen/SignedIn/AddVaccineManually';
import Home from '~/screen/SignedIn/Home';
import MyVaccine from '~/screen/SignedIn/MyVaccine';
import Qrcode from '~/screen/SignedIn/Qrcode';

const Stack = createNativeStackNavigator();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="homeStack"
        component={Home}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="addVaccine"
        component={AddVaccine}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="qrCode"
        component={Qrcode}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="addVaccineManually"
        component={AddVaccineManually}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="myVaccine"
        component={MyVaccine}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
