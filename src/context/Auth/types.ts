/* eslint-disable @typescript-eslint/no-unused-vars */
import {UserDTO} from '~/@types/dtos/user';

interface RequestSignData {
  email: string;
  password: string;
}
export interface AuthContextProp {
  isSignedIn: boolean;
  loading: boolean;
  user?: UserDTO;
  signIn: (data: RequestSignData) => Promise<void>;
  signOut: () => void;
}
