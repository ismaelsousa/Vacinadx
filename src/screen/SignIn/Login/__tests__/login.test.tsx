/**
 * @format
 */

import 'react-native';
import React from 'react';
import Login from '../';

// Note: test renderer must be required after react-native.
import {ThemeProvider} from 'styled-components/native';
import {themeDark} from '../../../../constants/styles/themes/dark';
import {fireEvent, render, waitFor} from '@testing-library/react-native';

jest.mock('@react-native-google-signin/google-signin', () => ({
  GoogleSignin: {},
}));

jest.mock('@invertase/react-native-apple-authentication', () => ({
  default: {},
  appleAuthAndroid: {},
}));

jest.mock('../../../../hooks/useSignInNavigation', () => () => ({}));

it('renders correctly', async () => {
  const {debug, findByTestId, getByText, findAllByTestId} = render(
    <ThemeProvider theme={themeDark}>
      <Login />
    </ThemeProvider>,
  );
  const button = await findByTestId('button-login');
  fireEvent(button, 'onPress');

  await waitFor(() => findAllByTestId('error-input'));

  expect(getByText('Campo obrigatório')).toBeTruthy();
  expect(getByText('Pelos menos 6 caracteres')).toBeTruthy();
  debug();
});
