import React from 'react';
import { View, Text } from 'react-native';

export default function DetailScreen({ route }) {
  const { name } = route.params; // nama kopi dari halaman Home
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24 }}>{name}</Text>
    </View>
  );
}