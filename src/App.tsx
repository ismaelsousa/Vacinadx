import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from './components/Header';

// import {Container} from './styles'

const App: React.FC = () => {
  return (
    <SafeAreaView style={style.App}>
      <Header />
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: 'black',
  },
});
