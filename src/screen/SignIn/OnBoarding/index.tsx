import React, {useContext} from 'react';
import {View} from 'react-native';
import {AuthContext} from '~/context/Auth';

// import {Container} from './styles'

const OnBoarding: React.FC = () => {
  const ctx = useContext(AuthContext);
  console.log(ctx);
  return <View />;
};

export default OnBoarding;
