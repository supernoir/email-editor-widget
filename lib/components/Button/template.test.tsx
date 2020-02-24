import React from 'react';
import { Button } from './template';
import Renderer from 'react-test-renderer';

describe('Button', () => {
  const testClickHandler = jest.fn();
  test('should match the snapshot', () => {
    const component = Renderer.create(<Button label={'example'} onClick={testClickHandler} />);
    expect(component).toMatchSnapshot();
  });
});