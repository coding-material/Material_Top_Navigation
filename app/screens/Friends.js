import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';

export default function Friends() {
  return (
    <View style={styles.container}>
      <AppText title='Friends' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
