import React from 'react';
import {Button, View} from 'react-native';

// import {Container} from './styles'

const Feed: React.FC = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('stories');
  };
  return (
    <View style={{flex: 1, backgroundColor: '#ddd'}}>
      <Button title="Go to Stories" onPress={handlePress} />
    </View>
  );
};

export default Feed;
