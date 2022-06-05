import React from 'react';
import renderer from 'react-test-renderer';
import Separator from '..';

describe('Separator Snapshot', () => {
  it('should render without props', () => {
    const tree = renderer.create(<Separator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with height prop', () => {
    const tree = renderer.create(<Separator height={15} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with width prop', () => {
    const tree = renderer.create(<Separator width={15} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with width and height props', () => {
    const tree = renderer.create(<Separator width={15} height={15} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
