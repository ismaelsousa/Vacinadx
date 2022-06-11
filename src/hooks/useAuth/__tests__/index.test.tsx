import React from 'react';

import {renderHook, act} from '@testing-library/react-hooks';

import MockAdapter from 'axios-mock-adapter';

import useAuth from '../';
import api from '~/services/api';
import {useMock} from '~/constants/mocks/user.mock';
import {AuthProvider} from '~/context/Auth';

/**
 * Mock the api service
 */
const apiMock = new MockAdapter(api);

test('should be able to sign in', async () => {
  apiMock.onGet('/users').reply(200, [useMock]);

  const {result, waitFor} = renderHook(() => useAuth(), {
    wrapper: ({children}) => <AuthProvider>{children}</AuthProvider>,
  });

  await waitFor(() => result.current?.loading === false);

  await act(async () => {
    await result.current.signIn({
      email: useMock.email,
      password: useMock.password,
    });
  });

  expect(result.current.user).toEqual(useMock);
  expect(result.current.user?.email).toBe(useMock.email);
});

test('should be able to sign out', async () => {
  const {result, waitFor} = renderHook(() => useAuth(), {
    wrapper: ({children}) => <AuthProvider>{children}</AuthProvider>,
  });

  await waitFor(() => result.current?.loading === false);

  act(() => {
    result.current.signOut();
  });

  expect(result.current.user).toBe(undefined);
});

//TODO: test all cases on useAuth hook
