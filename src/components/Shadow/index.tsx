/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Pressable} from 'react-native';

import styles from './styles';
import {ShadowProps} from './types';

const Shadow = ({children, onPress}: ShadowProps) => {
  return (
    <Pressable onPress={onPress} style={styles.shadow}>
      {children}
    </Pressable>
  );
};

export default Shadow;
