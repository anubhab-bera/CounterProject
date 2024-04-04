// CounterDisplay.js
import React from 'react';
import { Text , View,StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';

const CounterDisplay = () => {
  const counter = useSelector((state) => state.counter.value);

   return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter Value: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
  },
  counterText: {
    fontSize: 30,
    fontWeight: 'bold',
    color:'blue',
  },
});

export default CounterDisplay;