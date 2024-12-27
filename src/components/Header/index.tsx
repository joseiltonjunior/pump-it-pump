import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import colors from 'tailwindcss/colors';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <View className="mt-10 flex-row items-center justify-between border-b border-gray-600 px-8 py-6">
      <Text className="font-nunito-bold text-xl color-white">{title}</Text>
      <TouchableOpacity activeOpacity={0.6}>
        <Ionicons name="menu" size={22} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
}
