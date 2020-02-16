import React from 'react';
import { Title } from './template';
import Renderer from 'react-test-renderer';

describe('Title', () => {
  test('should match the snapshot', () => {
    const component = Renderer.create(<Title shareableItem={'ExampleItem'} />);
    expect(component).toMatchSnapshot();
  });
});