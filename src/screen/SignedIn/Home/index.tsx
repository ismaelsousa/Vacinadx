import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Button from '~/components/Button';
import useAuth from '~/hooks/useAuth';

// import {Container} from './styles'

const Home: React.FC = () => {
  const {signOut} = useAuth();

  return (
    <SafeAreaView>
      <Button onPress={signOut}>Sign Out</Button>
    </SafeAreaView>
  );
};

export default Home;
