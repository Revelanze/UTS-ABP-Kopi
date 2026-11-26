import React from 'react';
import { StatusBar } from 'expo-status-bar';
import colors from './constants/colors';
import HomeScreen from './screen/homescreen';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <HomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
