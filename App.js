import React from 'react';
import Routes from './src/routes'
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <Routes/>
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
