import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../services/store';
import { increment, decrement, reset } from '../services/slices/counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Count: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button title="Reset" onPress={() => dispatch(reset())} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Counter;
