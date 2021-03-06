import React from 'react';
import { TextArea } from './template';
import Renderer from 'react-test-renderer';

const testListItems = [
  "example@mail.ru",
  "jane.doe@gmail.com",
  "johnny.appleseed@somelongdoma.in"
]

const mockRemoveItemFromList = jest.fn()
const mockAddToItemsList = jest.fn()

describe('TextArea', () => {
  test('should match the snapshot', () => {
    const component = Renderer.create(<TextArea
      itemList={testListItems}
      removeItemFromList={mockRemoveItemFromList}
      addToItemsList={mockAddToItemsList}
    />);
    expect(component).toMatchSnapshot();
  });
});