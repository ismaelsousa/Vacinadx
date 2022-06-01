/* eslint-disable @typescript-eslint/no-unused-vars */
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {Platform, Pressable, StyleSheet, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useTheme} from 'styled-components';
import {useDebouncedCallback} from 'use-debounce';
import {PlaceDTO} from '~/@types/dtos/place';
import Icon from '~/components/Icon';
import Input from '~/components/Input';
import Separator from '~/components/Separator';
import icons from '~/constants/icons';
import useAuth from '~/hooks/useAuth';
import {getPlaces} from '~/services/resource/places';
import CardMap from './localComponents/CardMap';
import {Header, HeaderContent, HeaderContentRow, InputRow} from './styles';

// import {Container} from './styles'

const VaccineOnMaps: React.FC = () => {
  const {user} = useAuth();

  const {goBack} = useNavigation();
  const {colors, spacing} = useTheme();
  const [selectedMarker, setSelectedMarker] = useState<PlaceDTO | null>();

  const [places, setPlaces] = useState<Array<PlaceDTO>>([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.15,
    longitudeDelta: 0.0421,
  });

  const handleFetchPlaces = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getPlaces();
      setPlaces(response);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSearchPlaces = useCallback(
    async (search?: string) => {
      if (user) {
        try {
          setLoading(true);
          setSelectedMarker(null);
          const response = await getPlaces({search});
          setPlaces(response);
          if (response.length >= 1) {
            setRegion(old => ({
              ...old,
              latitude: Number(response[0].latitude),
              longitude: Number(response[0].longitude),
            }));
            setSelectedMarker(response[0]);
          }
        } catch (error) {
        } finally {
          setLoading(false);
        }
      }
    },
    [user],
  );

  const debouncedHandleSearchPlaces = useDebouncedCallback(
    handleSearchPlaces,
    500,
  );

  useEffect(() => {
    if (searchInput.length === 0) {
      setSelectedMarker(null);
      handleFetchPlaces();
    }
  }, [handleFetchPlaces, searchInput]);

  useEffect(() => {
    if (searchInput.length > 0) {
      debouncedHandleSearchPlaces(searchInput);
    }
  }, [debouncedHandleSearchPlaces, searchInput]);

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
                onChangeText={setSearchInput}
                value={searchInput}
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
        onRegionChangeComplete={setRegion}
        region={region}>
        {places.map(place => (
          <Marker
            onPress={() => {
              setSelectedMarker(selectedMarker?.id === place.id ? null : place);
            }}
            coordinate={{
              latitude: Number(place.latitude),
              longitude: Number(place.longitude),
            }}
            image={icons.marker}
          />
        ))}
      </MapView>
      {!!selectedMarker && (
        <CardMap
          key={selectedMarker.id}
          distance={`${selectedMarker.distance} km`}
          image={{uri: `${selectedMarker.picture}?${new Date().getTime()}`}}
          title={selectedMarker.address}
        />
      )}
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
