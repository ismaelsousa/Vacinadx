import React from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';

import {AuthProvider} from '~/context/Auth';

import useAuth from '../';
import api from '~/services/api';
import {userMock} from '~/constants/mocks/user.mock';

const apiMock = new MockAdapter(api);

test('should increment counter', async () => {
  apiMock
    .onGet(`/users?email=${userMock.email}&password=${userMock.password}`)
    .reply(200, [userMock]);

  const {result, waitFor} = renderHook(() => useAuth(), {
    wrapper: ({children}) => {
      return <AuthProvider>{children}</AuthProvider>;
    },
  });

  await waitFor(() => result.current?.loading === false);

  await act(async () => {
    await result.current.signIn({
      email: userMock.email,
      password: userMock.password,
    });
  });

  expect(result.current.user?.email).toBe(userMock.email);

  expect(true).toBeTruthy();
});
