/* eslint-disable @typescript-eslint/no-unused-vars */
import {UserDTO} from '~/@types/dtos/user';
import api from '~/services/api';
import {RequestSignInData, ResponseSignInData} from './types';

export const signInResource = async (
  params: RequestSignInData,
): Promise<ResponseSignInData> => {
  const {data} = await api.get<ResponseSignInData>('/users', {params});

  if (data.length === 0) {
    throw 'Usuário não encontrado';
  }

  return data;
};

export const checkIfExistUserResource = async (
  params: Partial<UserDTO>,
): Promise<ResponseSignInData> => {
  const {data} = await api.get<ResponseSignInData>('/users', {
    params,
  });

  return data;
};
