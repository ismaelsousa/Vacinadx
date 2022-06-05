import React from 'react';
import {render} from '@testing-library/react-native';
import Text from '..';
import {themeDark} from '~/constants/styles/themes/dark';
import 'jest-styled-components/native';

describe('Text Snapshot', () => {
  it('should render without props', async () => {
    const tree = render(<Text theme={themeDark}>Hello</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with primary color', async () => {
    const tree = render(
      <Text theme={themeDark} color="primary">
        Hello
      </Text>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with typography body1', async () => {
    const tree = render(
      <Text theme={themeDark} typography="body1">
        Hello
      </Text>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
