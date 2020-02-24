import React from 'react';
import { RemoveIcon } from './template';
import Renderer from 'react-test-renderer';

const mockHandleClick = jest.fn()

describe('RemoveIcon', () => {
  test('should match the snapshot', () => {
    const component = Renderer.create(<RemoveIcon
      handleClick={mockHandleClick}
    />);
    expect(component).toMatchSnapshot();
  });
});