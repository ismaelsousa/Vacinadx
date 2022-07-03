import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {Alert, Platform, Pressable, StyleSheet, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useTheme} from 'styled-components/native';
import {useDebouncedCallback} from 'use-debounce';
import {PlaceDTO} from '~/@types/dtos/place';
import Icon from '~/components/Icon';
import Input from '~/components/Input';
import Separator from '~/components/Separator';
import icons from '~/constants/icons';
import {getPlaces} from '~/services/resource/places';
import CardMap from './localComponents/CardMap';
import {Header, HeaderContent, HeaderContentRow, InputRow} from './styles';

const VaccineOnMaps: React.FC = () => {
  const {goBack} = useNavigation();
  const {colors, spacing} = useTheme();

  /**
   * States
   */
  const [selectedMarker, setSelectedMarker] = useState<PlaceDTO | null>();

  const [places, setPlaces] = useState<Array<PlaceDTO>>([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  /**
   * CallBacks
   */
  const handleFetchPlaces = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getPlaces();
      setPlaces(response);
    } catch (error) {
      Alert.alert('Ops!', 'Não foi possível carregar os locais de vacinação');
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSearchPlaces = useCallback(async (search?: string) => {
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
      Alert.alert('Ops!', 'Não foi possível carregar os locais de vacinação');
    } finally {
      setLoading(false);
    }
  }, []);

  const debounceHandleSearchPlaces = useDebouncedCallback(
    handleSearchPlaces,
    500,
  );

  useEffect(() => {
    if (searchInput.length === 0) {
      handleFetchPlaces();
    }
  }, [handleFetchPlaces, searchInput]);
  useEffect(() => {
    if (searchInput.length > 0) {
      debounceHandleSearchPlaces(searchInput);
    }
  }, [debounceHandleSearchPlaces, searchInput]);

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
                value={searchInput}
                onChangeText={setSearchInput}
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
        onRegionChangeComplete={setRegion}
        region={region}>
        {places.map(place => (
          <Marker
            key={place.id}
            image={icons.marker}
            onPress={() => {
              setSelectedMarker(selectedMarker?.id === place.id ? null : place);
            }}
            coordinate={{
              latitude: Number(place.latitude),
              longitude: Number(place.longitude),
            }}
          />
        ))}
      </MapView>
      {!!selectedMarker && (
        <CardMap
          distance={`${selectedMarker.distance} km`}
          image={{uri: `${selectedMarker.picture}?${new Date().getTime()}`}}
          title={selectedMarker.name}
        />
      )}
    </View>
  );
};

export default VaccineOnMaps;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
