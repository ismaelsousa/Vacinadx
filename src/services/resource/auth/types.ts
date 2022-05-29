/* eslint-disable @typescript-eslint/no-unused-vars */
import {UserDTO} from '~/@types/dtos/user';

export interface RequestSignInData {
  email: string;
  password?: string;
}

export type ResponseSignInData = Array<UserDTO>;
