/* eslint-disable @typescript-eslint/no-unused-vars */
import api from '~/services/api';
import {RequestCreateUserData, ResponseCreateUserData} from './types';

export const createUserResource = async (
  createUser: RequestCreateUserData,
): Promise<ResponseCreateUserData> => {
  const {data} = await api.post<ResponseCreateUserData>('/users', createUser);
  return data;
};
