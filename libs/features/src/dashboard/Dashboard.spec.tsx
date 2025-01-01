import React from 'react';
import { render } from '@testing-library/react-native';
import Dashboard from './Dashboard';

describe('Dashboard', () => {
  it('should render successfully', () => {
    const { root } = render(< Dashboard />);
    expect(root).toBeTruthy();
  });
});
