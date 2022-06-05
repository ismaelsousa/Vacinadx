import React from 'react';
import {render} from '@testing-library/react-native';
import Separator from '..';

describe('Separator Render', () => {
  it('should render without props', () => {
    const {container} = render(<Separator />);

    expect(container.props).toMatchObject({});
  });

  it('should render has testID', () => {
    const {getByTestId} = render(<Separator />);

    expect(getByTestId('Separator')).toBeTruthy();
  });

  it('should render has height prop', () => {
    const {container} = render(<Separator height={15} />);

    expect(container.props.height).toBe(15);
  });

  it('should render has width prop', () => {
    const {container} = render(<Separator width={15} />);

    expect(container.props.width).toBe(15);
  });

  it('should render has width and height props', () => {
    const {container} = render(<Separator width={15} height={15} />);

    expect(container.props.height).toBe(15);
    expect(container.props.width).toBe(15);
  });
});
