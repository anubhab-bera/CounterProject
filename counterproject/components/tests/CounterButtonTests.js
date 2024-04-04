// CounterButton.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CounterButton from '../CounterButton';
import { Provider } from 'react-redux';
import store from '../../store/store';

test('increment button increments the counter when pressed', () => {
  const { getByText } = render(
    <Provider store={store}>
      <CounterButton type="increment" />
    </Provider>
  );

  const incrementButton = getByText('+');
  fireEvent.press(incrementButton);

  const counterDisplay = getByText('Counter Value: 1');
  expect(counterDisplay).toBeTruthy();
});

test('decrement button decrements the counter when pressed', () => {
  const { getByText } = render(
    <Provider store={store}>
      <CounterButton type="decrement" />
    </Provider>
  );

  const decrementButton = getByText('-');
  fireEvent.press(decrementButton);

  const counterDisplay = getByText('Counter Value: -1');
  expect(counterDisplay).toBeTruthy();
});
