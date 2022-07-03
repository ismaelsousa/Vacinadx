/**
 * @format
 */

import 'react-native';
import React from 'react';
import Separator from '../';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Separator snap', () => {
  it('should render without props', () => {
    const {toJSON} = renderer.create(<Separator />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render with height props', () => {
    const {toJSON} = renderer.create(<Separator height={15} />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render with width props', () => {
    const {toJSON} = renderer.create(<Separator width={15} />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render with width and height props', () => {
    const {toJSON} = renderer.create(<Separator width={15} height={15} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
