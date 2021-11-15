/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {createContext, useEffect, useState} from 'react';
import {UserDTO} from '~/@types/dtos/user';
import {asyncUserKeys, AuthContextProp} from './types';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const signIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8080/api/auth', {
        email,
        password,
      });
      setUser(response.data.user);
      setIsSignedIn(true);
      // api.default.headers.Authorization = `Baerer ${response.data.token}`
      AsyncStorage.setItem(
        asyncUserKeys.user,
        JSON.stringify(response.data.user),
      );
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setIsSignedIn(false);
    setUser(undefined);
    await AsyncStorage.clear();
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
    <AuthContext.Provider value={{user, loading, isSignedIn, signIn, signOut}}>
      {!rehydrateLoading && children}
    </AuthContext.Provider>
  );
};
