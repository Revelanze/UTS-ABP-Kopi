import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kopi Nusantara</Text>
      <Text style={styles.item}>Espresso</Text>
      <Text style={styles.item}>Cappuccino</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', color: colors.primary, marginBottom: 12 },
  item: { fontSize: 16, color: colors.text, marginBottom: 8 },
});