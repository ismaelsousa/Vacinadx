/* eslint-disable @typescript-eslint/no-unused-vars */
import {PlaceDTO} from '~/@types/dtos/place';
import api from '~/services/api';
import {GetPlacesRequest} from './types';

export const getPlaces = async (
  params?: Partial<GetPlacesRequest>,
): Promise<Array<PlaceDTO>> => {
  const {data} = await api.get('/vaccinationPlace', {params});
  return data;
};
