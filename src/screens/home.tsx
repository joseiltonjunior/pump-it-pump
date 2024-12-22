import React from 'react';
import { StyleSheet, View } from 'react-native';

export function Home() {
  return (
    <View className="flex-1 bg-[#111d27]">
      {/* <ScreenContent path="screens/overview.tsx" title="Home" /> */}
      {/* <Button
        onPress={() =>
          navigation.navigate('Details', {
            name: 'Dan',
          })
        }
        title="Show Details"
      /> */}
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
