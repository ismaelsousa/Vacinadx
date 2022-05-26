import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Platform, Pressable, StyleSheet, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useTheme} from 'styled-components';
import Icon from '~/components/Icon';
import Input from '~/components/Input';
import Separator from '~/components/Separator';
import icons from '~/constants/icons';
import CardMap from './localComponents/CardMap';
import {Header, HeaderContent, HeaderContentRow, InputRow} from './styles';

const VaccineOnMaps: React.FC = () => {
  const {goBack} = useNavigation();
  const {colors, spacing} = useTheme();

  /**
   * States
   */
  const [selectedMarker, setSelectedMarker] = useState(false);

  return (
    <View style={styles.container}>
      <Header>
        <HeaderContent>
          <HeaderContentRow>
            <Pressable onPress={goBack}>
              <Icon
                icon="back"
                size={15}
                activeColor={colors.background.main}
              />
            </Pressable>
            <Separator width={spacing.lg} />
            <InputRow>
              <Input
                icon="search"
                color="primary"
                placeholder="Busque por bairro"
                iconPosition="left"
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
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          image={icons.marker}
          onPress={e => {
            console.log(e);
            setSelectedMarker(old => !old);
          }}
          coordinate={{
            latitude: 37.7885,
            longitude: -122.4324,
          }}
        />
        <Marker
          image={icons.marker}
          onPress={e => {
            console.log(e);
            setSelectedMarker(old => !old);
          }}
          coordinate={{
            latitude: 37.7885,
            longitude: -122.434,
          }}
        />
      </MapView>
      {!!selectedMarker && (
        <CardMap
          distance="1.5km"
          image={require('~/assets/images/banner/covid.png')}
          title="Unidade de saúde de familia Campos do Iguaçu"
        />
      )}
    </View>
  );
};

export default VaccineOnMaps;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
