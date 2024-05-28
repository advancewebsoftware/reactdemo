import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import moment from 'moment';
import CustomHeadline from '../CustomHeadline';
import {NewsType} from '../../../types';

describe('CustomHeadline', () => {
  const mockItem = {
    title: 'Test News Title',
    url: 'http://example.com/test-news',
    published_date: '2024-05-28T12:00:00Z',
    publisher: {
      name: 'Test Publisher',
    },
  };

  it('renders correctly', () => {
    const {getByText} = render(
      <CustomHeadline
        item={mockItem as NewsType}
        index={0}
        onPress={() => {}}
        isLastIndex={0}
      />,
    );

    expect(getByText(mockItem.title)).toBeDefined();

    expect(getByText(mockItem.url)).toBeDefined();

    expect(getByText(mockItem.publisher.name)).toBeDefined();

    const formattedDate = moment(mockItem.published_date).format('DD/MM/YYYY');
    expect(getByText(formattedDate)).toBeDefined();
  });

  it('calls onPress function when URL is pressed', () => {
    const mockOnPress = jest.fn();
    const {getByText} = render(
      <CustomHeadline
        item={mockItem as NewsType}
        index={0}
        onPress={mockOnPress}
        isLastIndex={0}
      />,
    );

    fireEvent.press(getByText(mockItem.url));

    expect(mockOnPress).toHaveBeenCalledWith(mockItem.url);
  });
});
