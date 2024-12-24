import { Container } from '@components/Container';
import React from 'react';
import { StyleSheet } from 'react-native';

export function Home() {
  return <Container title="Home" />;
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
