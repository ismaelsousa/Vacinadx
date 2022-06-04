/* eslint-disable @typescript-eslint/no-unused-vars */
import api from '~/services/api';
import {RequestSignInData, ResponseSignInData} from './types';

export const signInResource = async ({
  email,
  password,
}: RequestSignInData): Promise<ResponseSignInData> => {
  const {data} = await api.get<ResponseSignInData>(
    `/users?email=${email}&password=${password}`,
  );

  if (data.length === 0) {
    throw 'Usuário ou senha inválidos';
  }
  return data;
};

export const signInAppleResource = async (
  userApple: string,
): Promise<ResponseSignInData> => {
  const {data} = await api.get<ResponseSignInData>(
    `/users?userApple=${userApple}`,
  );

  if (data.length === 0) {
    throw 'Usuário ou senha inválidos';
  }
  return data;
};

export const checkIfExistUserResource = async ({
  email,
  password,
}: RequestSignInData): Promise<ResponseSignInData> => {
  const {data} = await api.get<ResponseSignInData>(
    `/users?email=${email}&password=${password}`,
  );
  return data;
};
export const checkIfExistAppleUserResource = async (
  userApple: string,
): Promise<ResponseSignInData> => {
  const {data} = await api.get<ResponseSignInData>(
    `/users?userApple=${userApple}`,
  );
  return data;
};
