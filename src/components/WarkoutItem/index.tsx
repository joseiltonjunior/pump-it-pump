import { Text, View } from 'react-native';

interface WarkoutItemProps {
  title: string;
  repetitions: string;
  series: number;
}

export function WarkoutItem({ repetitions, series, title }: WarkoutItemProps) {
  return (
    <View className="border-b border-gray-700 py-4">
      <Text className="font-nunito-bold uppercase color-white">{title}</Text>
      <View className="flex-row items-center gap-8">
        <Text className="font-nunito-medium text-sm color-white">{series}</Text>
        <Text className="font-nunito-regular text-sm color-white">{repetitions}</Text>
      </View>
    </View>
  );
}
