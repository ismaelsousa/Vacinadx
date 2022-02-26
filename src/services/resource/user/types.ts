/* eslint-disable @typescript-eslint/no-unused-vars */
import {UserDTO} from '~/@types/dtos/user';

export interface RequestCreateUserData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface ResponseCreateUserData {
  user: UserDTO;
}
