// CounterButton.js
import React from 'react';
import { Button } from 'react-native';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../store/reducers/CounterReducer';

const CounterButton = ({ type }) => {
  const dispatch = useDispatch();

  const handlePress = () => {
    if (type === 'increment') {
      dispatch(increment());
    } else if (type === 'decrement') {
      dispatch(decrement());
    }
  };

  const buttonText = type === 'increment' ? '+' : '-';

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#DDDDDD',
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default CounterButton;