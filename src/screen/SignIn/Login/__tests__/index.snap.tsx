/**
 * @format
 */

import 'react-native';
import React from 'react';
import Login from '../';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {ThemeProvider} from 'styled-components/native';
import {themeDark} from '../../../../constants/styles/themes/dark';

jest.mock('@react-native-google-signin/google-signin', () => ({
  GoogleSignin: {},
}));

jest.mock('@invertase/react-native-apple-authentication', () => ({
  default: {},
  appleAuthAndroid: {},
}));

jest.mock('../../../../hooks/useSignInNavigation', () => () => ({}));

it('renders correctly', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={themeDark}>
        <Login />
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
