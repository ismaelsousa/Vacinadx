/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {createContext, useEffect, useState} from 'react';
import {UserDTO} from '~/@types/dtos/user';
import {asyncUserKeys, AuthContextProp} from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  checkIfExistUserResource,
  signInResource,
} from '~/services/resource/auth';
import {RequestSignInData} from '~/services/resource/auth/types';
import {Alert} from 'react-native';
import api from '~/services/api';
import {RequestCreateUserData} from '~/services/resource/user/types';
import {createUserResource} from '~/services/resource/user';

export const AuthContext = createContext<AuthContextProp>(
  {} as AuthContextProp,
);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<UserDTO>();
  const [loading, setLoading] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [rehydrateLoading, setRehydrateLoading] = useState(true);

  /**
   * Callbacks
   */

  const saveUserToStorageAndConfigToken = async (data: UserDTO) => {
    api.defaults.headers.Authorization = `Baerer ${data.token}`;
    await AsyncStorage.setItem(asyncUserKeys.user, JSON.stringify(data));
  };

  const signOut = async () => {
    setIsSignedIn(false);
    setUser(undefined);
    api.defaults.headers.Authorization = 'Baerer ';
    await AsyncStorage.clear();
  };

  const signIn = async (data: RequestSignInData) => {
    try {
      setLoading(true);
      const response = await signInResource(data);

      setUser(response[0]);
      await saveUserToStorageAndConfigToken(response[0]);
      setIsSignedIn(true);
    } catch (error) {
      Alert.alert('Não possível realizar o login', 'tente novamente!');
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (data: RequestCreateUserData) => {
    try {
      setLoading(true);
      const response = await createUserResource(data);
      console.log(response);
      setUser(response);
      await saveUserToStorageAndConfigToken(response);
      setIsSignedIn(true);
    } catch (error) {
      Alert.alert('Não possível realizar o cadastro', 'tente novamente!');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const checkIfExistUser = async (data: Partial<UserDTO>) => {
    try {
      setLoading(true);
      const response = await checkIfExistUserResource(data);

      if (response.length > 0) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    } finally {
      setLoading(false);
    }
  };

  const rehydrate = async () => {
    const rehydrateUser = await AsyncStorage.getItem(asyncUserKeys.user);

    if (rehydrateUser) {
      setUser(JSON.parse(rehydrateUser));
      setIsSignedIn(true);
    }
    setRehydrateLoading(false);
  };

  /**
   * Effects
   */
  useEffect(() => {
    rehydrate();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isSignedIn,
        checkIfExistUser,
        signIn,
        signUp,
        signOut,
      }}>
      {!rehydrateLoading && children}
    </AuthContext.Provider>
  );
};
