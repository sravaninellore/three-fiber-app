import React from 'react';
import { StyleSheet, View } from 'react-native';
import ThreeFiberScene from './ThreeFiberScene';

export default function App() {
  return (
    <View style={styles.container}>
      <ThreeFiberScene />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
