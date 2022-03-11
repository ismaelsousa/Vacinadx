import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AddVaccine from '~/screen/SignedIn/AddVaccine';
import Home from '~/screen/SignedIn/Home';

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
    </Stack.Navigator>
  );
};

export default HomeStack;
