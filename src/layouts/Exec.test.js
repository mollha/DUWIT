import React from 'react';
import { render } from '@testing-library/react';
import Exec from './Exec';

test('renders learn react link', () => {
  const { getByText } = render(<Exec />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
