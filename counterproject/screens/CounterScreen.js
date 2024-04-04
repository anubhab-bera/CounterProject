// CounterScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import CounterButton from '../components/CounterButton';
import CounterDisplay from '../components/CounterDisplay';

const CounterScreen = () => {
  return (
    <View style={styles.container}>
      <CounterDisplay />
      <View style={styles.buttonContainer}>
        <CounterButton type="increment" />
        <CounterButton type="decrement" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
});

export default CounterScreen;