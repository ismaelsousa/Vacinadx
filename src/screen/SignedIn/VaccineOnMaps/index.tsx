import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Platform, Pressable, StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {useTheme} from 'styled-components';
import Icon from '~/components/Icon';
import Input from '~/components/Input';
import Separator from '~/components/Separator';
import {Header, HeaderContent, HeaderContentRow, InputRow} from './styles';

const VaccineOnMaps: React.FC = () => {
  const {goBack} = useNavigation();
  const {colors, spacing} = useTheme();
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
        }}
      />
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
