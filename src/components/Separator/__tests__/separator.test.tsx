import React from 'react';
import {render} from '@testing-library/react-native';
import Separator from '..';

describe('Separator render', () => {
  it('should find separator by testID', () => {
    const {getByTestId} = render(<Separator />);
    const separator = getByTestId('separator');
    expect(separator).toBeTruthy();
  });

  it('should render without props', () => {
    const {container} = render(<Separator />);

    expect(container.props).toEqual({});
  });

  it('should render with height props', () => {
    const {container} = render(<Separator height={15} />);

    expect(container.props.height).toBe(15);
  });

  it('should render with width props', () => {
    const {container} = render(<Separator width={15} />);

    expect(container.props.width).toBe(15);
  });

  it('should render with width and height props', () => {
    const {container} = render(<Separator width={15} height={15} />);

    expect(container.props.height).toBe(15);
    expect(container.props.width).toBe(15);
  });
});
