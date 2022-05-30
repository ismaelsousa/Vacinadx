/* eslint-disable @typescript-eslint/no-unused-vars */
import {VaccineDTO} from '~/@types/dtos/vaccine';
import api from '~/services/api';

export const getVaccines = async (
  params: Partial<VaccineDTO>,
): Promise<Array<VaccineDTO>> => {
  const {data} = await api.get('/vaccines', {params});
  return data;
};
