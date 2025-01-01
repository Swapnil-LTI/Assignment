import React from 'react';
import { render } from '@testing-library/react-native';
import Landing from './Landing';

describe('Landing', () => {
  it('should render successfully', () => {
    const { root } = render(< Landing />);
    expect(root).toBeTruthy();
  });
});
