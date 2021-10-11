import {useIsFocused} from '@react-navigation/core';
import React from 'react';
import {View} from 'react-native';

// import {Container} from './styles'

const Post: React.FC = () => {
  const isFocused = useIsFocused();

  console.log(isFocused);
  return <View style={{flex: 1, backgroundColor: 'red'}} />;
};

export default Post;
