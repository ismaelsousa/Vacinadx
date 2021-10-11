import {useRoute} from '@react-navigation/core';
import React from 'react';
import {View} from 'react-native';

// import {Container} from './styles'

const Stories: React.FC = () => {
  const {params} = useRoute();
  console.log(params);
  return <View style={{flex: 1, backgroundColor: 'yellow'}} />;
};

export default Stories;
