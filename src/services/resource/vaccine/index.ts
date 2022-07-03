/* eslint-disable @typescript-eslint/no-unused-vars */
import {VaccineDTO} from '~/@types/dtos/vaccine';
import api from '~/services/api';
import {GetVaccineRequest} from './types';

export const getVaccines = async (
  params: Partial<GetVaccineRequest>,
): Promise<Array<VaccineDTO>> => {
  const {data} = await api.get('/vaccines', {params});
  return data;
};

export const createVaccine = async (
  body?: Partial<VaccineDTO>,
): Promise<Array<VaccineDTO>> => {
  const {data} = await api.post('/vaccines', body);
  return data;
};
