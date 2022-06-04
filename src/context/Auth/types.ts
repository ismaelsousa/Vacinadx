/* eslint-disable @typescript-eslint/no-unused-vars */
import {UserDTO} from '~/@types/dtos/user';
import {RequestCreateUserData} from '~/services/resource/user/types';

interface RequestSignData {
  email: string;
  password?: string;
}
export interface AuthContextProp {
  isSignedIn: boolean;
  loading: boolean;
  user?: UserDTO;
  signIn: (data: RequestSignData) => Promise<void>;
  signInApple: (userApple: string) => Promise<void>;
  signUp: (data: RequestCreateUserData) => Promise<void>;
  signOut: () => void;
  checkIfExistUser: (email: string) => Promise<boolean>;
  checkIfExistAppleUser: (userApple: string) => Promise<boolean>;
}

export const asyncUserKeys = {
  user: 'vacinadx:user',
};
