// CounterDisplay.test.js
import React from 'react';
import { render } from '@testing-library/react-native';
import CounterDisplay from '../CounterDisplay';
import { Provider } from 'react-redux';
import store from '../../store/store';

test('renders counter value correctly', () => {
  const { getByText } = render(
    <Provider store={store}>
      <CounterDisplay />
    </Provider>
  );

  const counterDisplay = getByText('Counter Value: 0');
  expect(counterDisplay).toBeTruthy();
});
