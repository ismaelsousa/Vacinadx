import React from 'react';
import {render} from '@testing-library/react-native';
import Text from '../';
import {themeLight} from '~/constants/styles/themes/light';
import 'jest-styled-components';

describe('Text Snapshot', () => {
  it('should render without props', () => {
    const tree = render(
      <Text theme={themeLight}>Hello world test</Text>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render with primary color', () => {
    const tree = render(
      <Text theme={themeLight} color="primary">
        Hello world test
      </Text>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render with typography caption', () => {
    const tree = render(
      <Text theme={themeLight} typography="caption">
        Hello world test
      </Text>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
