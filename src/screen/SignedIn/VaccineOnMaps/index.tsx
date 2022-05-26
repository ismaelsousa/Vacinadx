import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useTheme} from 'styled-components';
import Icon from '~/components/Icon';
import Input from '~/components/Input';
import Separator from '~/components/Separator';
import {Header, HeaderContent, HeaderContentRow, InputRow} from './styles';

// import {Container} from './styles'

const VaccineOnMaps: React.FC = () => {
  const {colors, spacing} = useTheme();
  return (
    <View style={styles.container}>
      <Header>
        <HeaderContent>
          <HeaderContentRow>
            <Icon icon="back" size={15} activeColor={colors.background.main} />
            <Separator width={spacing.lg} />
            <InputRow>
              <Input
                icon="search"
                iconColor="primary"
                iconPosition="left"
                placeholder="Busque por bairro"
              />
            </InputRow>
          </HeaderContentRow>
          <Separator height={spacing.lg} />
        </HeaderContent>
      </Header>
      <MapView
        provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : undefined} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          onPress={e => console.log(e)}
          coordinate={{
            latitude: 37.7885,
            longitude: -122.4324,
          }}
        />
      </MapView>
    </View>
  );
};

export default VaccineOnMaps;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
