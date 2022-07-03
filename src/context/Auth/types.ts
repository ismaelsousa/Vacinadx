/* eslint-disable @typescript-eslint/no-unused-vars */
import {UserDTO} from '~/@types/dtos/user';
import {RequestCreateUserData} from '~/services/resource/user/types';

export interface AuthContextProp {
  isSignedIn: boolean;
  loading: boolean;
  user?: UserDTO;
  signIn: (data: Partial<UserDTO>) => Promise<void>;
  signUp: (data: RequestCreateUserData) => Promise<void>;
  signOut: () => void;
  checkIfExistUser: (params: Partial<UserDTO>) => Promise<boolean>;
}

export const asyncUserKeys = {
  user: 'vacinadx:user',
};
