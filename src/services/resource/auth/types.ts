/* eslint-disable @typescript-eslint/no-unused-vars */
import {UserDTO} from '~/@types/dtos/user';

export interface RequestSignInData {
  email: string;
  password: string;
}

export interface ResponseSignInData {
  user: UserDTO;
}
