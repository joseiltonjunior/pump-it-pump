import { Header } from '@components/Header';
import { TabNavigation } from '@components/TabNavigation';
import { PropsWithChildren } from 'react';
import { View } from 'react-native';

interface ContainerProps extends PropsWithChildren {
  title: string;
}

export function Container({ title, children }: ContainerProps) {
  return (
    <View className="flex-1 bg-[#111d27]">
      <Header title={title} />
      <View className="flex-1">{children}</View>
      <TabNavigation />
    </View>
  );
}
