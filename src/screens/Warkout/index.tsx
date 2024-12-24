import { Container } from '@components/Container';
import { WarkoutItem } from '@components/WarkoutItem';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export function Warkout() {
  return (
    <Container title="Warkout">
      <View className="h-96 bg-black" />
      <View className="px-4">
        <WarkoutItem title="Mobilidade de ombro com bastão" series={2} repetitions="7 - 12" />
        <WarkoutItem title="Supino Vertical Fechado" series={4} repetitions="6 + 6" />
        <WarkoutItem title="Supino reto com halteres" series={4} repetitions="7 - 12" />
        <WarkoutItem
          title="Desenvolvimento alternado com halteres"
          series={4}
          repetitions="12/10/08/06"
        />
      </View>
    </Container>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
